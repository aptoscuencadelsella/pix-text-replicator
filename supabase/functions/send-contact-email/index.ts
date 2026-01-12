import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono?: string;
  asunto?: string;
  mensaje: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-contact-email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email, telefono, asunto, mensaje }: ContactEmailRequest = await req.json();
    
    console.log("Processing contact form:", { nombre, email, asunto });

    // Send notification email to the business
    const notificationEmail = await resend.emails.send({
      from: "Cuenca del Sella <onboarding@resend.dev>",
      to: ["info@cuencadelsella.com"],
      subject: asunto || `Nueva consulta de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2d5a3d; border-bottom: 2px solid #2d5a3d; padding-bottom: 10px;">
            Nueva consulta desde la web
          </h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
            <p style="margin: 10px 0;"><strong>Asunto:</strong> ${asunto || 'Sin asunto'}</p>
          </div>
          
          <div style="background-color: #fff; border-left: 4px solid #2d5a3d; padding: 15px; margin: 20px 0;">
            <h3 style="color: #2d5a3d; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${mensaje}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de cuencadelsella.com
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Cuenca del Sella <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu mensaje - Cuenca del Sella",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2d5a3d; text-align: center;">
            ¡Gracias por contactarnos, ${nombre}!
          </h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Hemos recibido tu mensaje y te responderemos lo antes posible.
          </p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5a3d; margin-top: 0;">Resumen de tu consulta:</h3>
            <p style="margin: 5px 0;"><strong>Asunto:</strong> ${asunto || 'Consulta general'}</p>
            <p style="white-space: pre-wrap; color: #555;">${mensaje}</p>
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

    console.log("Confirmation email sent:", confirmationEmail);

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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
