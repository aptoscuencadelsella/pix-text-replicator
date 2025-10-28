import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Header from "../components/Header";
import naranjoRealistic from "@/assets/naranjo-bulnes-realistic.jpg";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre debe tener menos de 100 caracteres'),
  email: z.string()
    .trim()
    .email('Email inválido')
    .max(255, 'El email debe tener menos de 255 caracteres'),
  telefono: z.string()
    .trim()
    .max(20, 'El teléfono debe tener menos de 20 caracteres')
    .optional()
    .or(z.literal('')),
  asunto: z.string()
    .trim()
    .max(200, 'El asunto debe tener menos de 200 caracteres')
    .optional()
    .or(z.literal('')),
  mensaje: z.string()
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje debe tener menos de 2000 caracteres')
});

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }
    
    // If validation passes, proceed with mailto
    const subject = encodeURIComponent(formData.asunto || 'Consulta desde la web');
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.telefono}\n\n` +
      `Mensaje:\n${formData.mensaje}`
    );
    
    window.location.href = `mailto:info@cuencadelsella.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
            CONTACTO
          </h1>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-card-nature mb-12">
            <img
              src={naranjoRealistic}
              alt="Contacto Cuenca del Sella"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  ¡Contáctanos!
                </h2>
                <p className="text-lg lg:text-xl">
                  Estamos aquí para ayudarte a planificar tu estancia perfecta
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Información de Contacto</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center p-4 bg-card rounded-lg shadow-card-nature">
                    <Phone className="w-8 h-8 mr-4 text-nature-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">Teléfono</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+34649505800" className="hover:text-primary transition-colors text-lg">
                          649 505 800
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center p-4 bg-card rounded-lg shadow-card-nature">
                    <Mail className="w-8 h-8 mr-4 text-nature-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@cuencadelsella.com" className="hover:text-primary transition-colors">
                          info@cuencadelsella.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center p-4 bg-card rounded-lg shadow-card-nature">
                    <MapPin className="w-8 h-8 mr-4 text-nature-green" />
                    <div>
                      <h3 className="font-semibold text-foreground">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Cangas de Onís y Arriondas
                      </p>
                      <p className="text-muted-foreground">
                        Asturias, España
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 p-6 bg-nature-green/10 rounded-lg border border-nature-green/20">
                  <h3 className="text-lg font-semibold mb-3 text-nature-forest">¿Necesitas ayuda?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estamos aquí para ayudarte a planificar tu estancia perfecta en los Picos de Europa. 
                    Contáctanos para información sobre disponibilidad, precios, actividades locales y 
                    recomendaciones para disfrutar al máximo de tu visita.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Envíanos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-card rounded-lg shadow-card-nature">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-foreground">Nombre *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.nombre ? 'border-red-500' : ''}`}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-foreground">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.telefono ? 'border-red-500' : ''}`}
                        placeholder="Tu teléfono"
                      />
                      {errors.telefono && (
                        <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="asunto" className="text-foreground">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.asunto ? 'border-red-500' : ''}`}
                      placeholder="¿En qué podemos ayudarte?"
                    />
                    {errors.asunto && (
                      <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="mensaje" className="text-foreground">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className={`mt-1 min-h-32 ${errors.mensaje ? 'border-red-500' : ''}`}
                      placeholder="Cuéntanos sobre tu consulta, fechas de interés, número de personas, etc."
                    />
                    {errors.mensaje && (
                      <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-nature-green hover:bg-nature-forest text-white border-none font-semibold py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    ENVIAR MENSAJE
                  </Button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Contacto;