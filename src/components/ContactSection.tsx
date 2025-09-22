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
          ¿NECESITAS MÁS INFORMACIÓN?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          ¿Tienes alguna pregunta sobre nuestros apartamentos o las actividades disponibles? Estamos aquí para ayudarte a planificar tu estancia perfecta en la Cuenca del Sella. Contáctanos para información sobre reservas, precios y recomendaciones personalizadas.
        </p>
        <Link to="/contacto">
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-white/90 text-nature-forest border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            CONTACTAR
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;