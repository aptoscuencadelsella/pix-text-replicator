import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up expired rate limit entries periodically
const cleanupRateLimits = () => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
};

// Check and update rate limit for an IP
const checkRateLimit = (ip: string): { allowed: boolean; retryAfter?: number } => {
  cleanupRateLimits();
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono?: string;
  asunto?: string;
  mensaje: string;
}

// HTML escape function to prevent XSS/injection attacks
const escapeHtml = (str: string): string => {
  if (!str) return '';
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return str.replace(/[&<>"']/g, (char) => htmlEscapeMap[char] || char);
};

// Server-side validation schema
const validateInput = (data: ContactEmailRequest): { valid: boolean; error?: string } => {
  if (!data.nombre || data.nombre.trim().length < 2 || data.nombre.length > 100) {
    return { valid: false, error: 'Nombre inválido' };
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 255) {
    return { valid: false, error: 'Email inválido' };
  }
  if (data.telefono && data.telefono.length > 20) {
    return { valid: false, error: 'Teléfono inválido' };
  }
  if (data.asunto && data.asunto.length > 200) {
    return { valid: false, error: 'Asunto demasiado largo' };
  }
  if (!data.mensaje || data.mensaje.trim().length < 10 || data.mensaje.length > 2000) {
    return { valid: false, error: 'Mensaje inválido' };
  }
  return { valid: true };
};

const handler = async (req: Request): Promise<Response> => {
  console.log("send-contact-email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Extract client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
    || req.headers.get("x-real-ip") 
    || "unknown";
  
  // Check rate limit
  const rateLimitResult = checkRateLimit(clientIP);
  if (!rateLimitResult.allowed) {
    console.log(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ 
        error: "Demasiadas solicitudes. Por favor, espere un momento antes de intentarlo de nuevo." 
      }),
      {
        status: 429,
        headers: { 
          "Content-Type": "application/json", 
          "Retry-After": String(rateLimitResult.retryAfter || 60),
          ...corsHeaders 
        },
      }
    );
  }

  try {
    const rawData = await req.json();
    const { nombre, email, telefono, asunto, mensaje }: ContactEmailRequest = rawData;
    
    // Server-side validation
    const validation = validateInput({ nombre, email, telefono, asunto, mensaje });
    if (!validation.valid) {
      console.log("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    console.log("Processing contact form submission", { 
      timestamp: new Date().toISOString(),
      ip: clientIP 
    });

    // Sanitize all user inputs before embedding in HTML
    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono || '');
    const safeAsunto = escapeHtml(asunto || '');
    const safeMensaje = escapeHtml(mensaje);

    // Send notification email to the business
    const notificationEmail = await resend.emails.send({
      from: "Cuenca del Sella <onboarding@resend.dev>",
      to: ["info@cuencadelsella.com"],
      subject: safeAsunto || `Nueva consulta de ${safeNombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2d5a3d; border-bottom: 2px solid #2d5a3d; padding-bottom: 10px;">
            Nueva consulta desde la web
          </h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${safeNombre}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${safeTelefono || 'No proporcionado'}</p>
            <p style="margin: 10px 0;"><strong>Asunto:</strong> ${safeAsunto || 'Sin asunto'}</p>
          </div>
          
          <div style="background-color: #fff; border-left: 4px solid #2d5a3d; padding: 15px; margin: 20px 0;">
            <h3 style="color: #2d5a3d; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMensaje}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de cuencadelsella.com
          </p>
        </div>
      `,
    });

    console.log("Notification email sent successfully");

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Cuenca del Sella <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu mensaje - Cuenca del Sella",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2d5a3d; text-align: center;">
            ¡Gracias por contactarnos, ${safeNombre}!
          </h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Hemos recibido tu mensaje y te responderemos lo antes posible.
          </p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5a3d; margin-top: 0;">Resumen de tu consulta:</h3>
            <p style="margin: 5px 0;"><strong>Asunto:</strong> ${safeAsunto || 'Consulta general'}</p>
            <p style="white-space: pre-wrap; color: #555;">${safeMensaje}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Mientras tanto, te invitamos a explorar nuestros apartamentos y actividades en 
            <a href="https://cuencadelsella.com" style="color: #2d5a3d;">cuencadelsella.com</a>
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #2d5a3d; font-weight: bold;">Cuenca del Sella</p>
            <p style="color: #666; font-size: 14px;">
              Cangas de Onís y Arriondas, Asturias<br>
              Tel: <a href="tel:+34649505800" style="color: #2d5a3d;">649 505 800</a><br>
              Email: <a href="mailto:info@cuencadelsella.com" style="color: #2d5a3d;">info@cuencadelsella.com</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
