import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroMountains from "@/assets/hero-mountains.jpg";

const ContactSection = () => {
  return (
    <section 
      className="py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroMountains})` }}
    >
      <div className="absolute inset-0 bg-nature-forest/70"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          RESERVA TU APARTAMENTO EN LA CUENCA DEL SELLA
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Encuentra tu <strong>alojamiento perfecto en Cangas de Onís y Arriondas</strong>. <strong>Apartamentos turísticos</strong> ideales para el <strong>descenso del Sella</strong>, visitar los <strong>Lagos de Covadonga</strong> y disfrutar del <strong>turismo activo</strong> en los <strong>Picos de Europa</strong>. Alquiler vacacional en el corazón del <strong>valle del Sella</strong>, Asturias.
        </p>
        <Link to="/contacto">
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-white/90 text-nature-forest border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            RESERVAR AHORA
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;