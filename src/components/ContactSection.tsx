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
          RESERVA TU APARTAMENTO TURÍSTICO EN ASTURIAS
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          ¿Buscas <strong>alojamiento rural en los Picos de Europa</strong>? Tenemos los mejores <strong>apartamentos turísticos en Cangas de Onís y Arriondas</strong>. Información sobre reservas, precios especiales y recomendaciones para tus <strong>vacaciones en Asturias</strong>. Turismo rural de calidad en la <strong>Cuenca del Sella</strong>.
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