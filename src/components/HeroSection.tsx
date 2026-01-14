import { Button } from "@/components/ui/button";
import heroMountains from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroMountains})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-nature-green drop-shadow-2xl tracking-wide leading-tight" 
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
          APARTAMENTOS CUENCA DEL SELLA - CANGAS DE ONÍS Y ARRIONDAS
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium mb-6 md:mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed px-2">
          Alojamiento turístico en el corazón de Asturias. Descenso del Sella, Lagos de Covadonga y turismo activo en los Picos de Europa. Tu escapada perfecta al río Sella.
        </p>
        <Button 
          variant="secondary"
          size="lg"
          className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
          onClick={() => {
            const apartmentsSection = document.getElementById('apartments-section');
            apartmentsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          RESERVA TU APARTAMENTO
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;