import { Button } from "@/components/ui/button";
import heroMountains from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroMountains})` }}
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-nature-green drop-shadow-2xl tracking-wide">
          CUENCA DEL SELLA
        </h1>
        <p className="text-xl lg:text-2xl text-white font-medium mb-8 drop-shadow-lg max-w-2xl mx-auto">
          Apartamentos turísticos en el corazón de los Picos de Europa
        </p>
        <Button 
          variant="secondary"
          size="lg"
          className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          DESCUBRE MÁS
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;