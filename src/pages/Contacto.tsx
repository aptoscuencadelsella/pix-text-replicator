import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import contactBg from "@/assets/contact-bg.jpg";

const Contacto = () => {
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
              src={contactBg}
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              
              {/* Phone */}
              <div className="text-center p-6 bg-card rounded-lg shadow-card-nature">
                <Phone className="w-12 h-12 mx-auto mb-4 text-nature-green" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Teléfono</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+34985123456" className="hover:text-primary transition-colors">
                    +34 985 123 456
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:+34647123456" className="hover:text-primary transition-colors">
                    +34 647 123 456
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="text-center p-6 bg-card rounded-lg shadow-card-nature">
                <Mail className="w-12 h-12 mx-auto mb-4 text-nature-green" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@cuencadelsella.com" className="hover:text-primary transition-colors">
                    info@cuencadelsella.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="mailto:reservas@cuencadelsella.com" className="hover:text-primary transition-colors">
                    reservas@cuencadelsella.com
                  </a>
                </p>
              </div>

              {/* Location */}
              <div className="text-center p-6 bg-card rounded-lg shadow-card-nature">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-nature-green" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Ubicación</h3>
                <p className="text-muted-foreground">
                  Cangas de Onís
                </p>
                <p className="text-muted-foreground">
                  Arriondas
                </p>
                <p className="text-muted-foreground">
                  Asturias, España
                </p>
              </div>

            </div>

            {/* Description */}
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ¿Tienes alguna pregunta sobre nuestros apartamentos o necesitas ayuda para planificar tu visita a los Picos de Europa? No dudes en ponerte en contacto con nosotros. Nuestro equipo estará encantado de ayudarte a encontrar el alojamiento perfecto para tu estancia en Asturias.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                También podemos proporcionarte información sobre actividades locales, rutas de senderismo, el famoso Descenso del Sella, y recomendaciones gastronómicas para que disfrutes al máximo de tu experiencia en la Cuenca del Sella.
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => window.location.href = 'mailto:info@cuencadelsella.com'}
              >
                ENVIAR EMAIL
              </Button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Contacto;