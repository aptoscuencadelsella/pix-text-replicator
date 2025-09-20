import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ApartmentCard from "../components/ApartmentCard";
import ActivitiesSection from "../components/ActivitiesSection";
import ContactSection from "../components/ContactSection";
import cangasImage from "@/assets/cangas-de-onis.jpg";
import arriondasImage from "@/assets/arriondas.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      {/* Apartments Sections */}
      <div className="container mx-auto px-4">
        <ApartmentCard
          image={cangasImage}
          title="APARTAMENTOS CANGAS DE ONIS"
          description="Puerta de entrada a los Picos de Europa, Cangas de Onís es uno de los destinos más emblemáticos de Asturias. Desde su puente Romano a su cercanía a los Lagos de Covadonga"
        />
        
        <ApartmentCard
          image={arriondasImage}
          title="APARTAMENTOS ARRIONDAS"
          description="Situada a orillas del río Sella, Arriondas es el punto de partida ideal para quienes buscan naturaleza, aventura y autenticidad asturiana. Conocida internacionalmente por ser la sede del famoso Descenso del Sella."
          reverse
        />
      </div>
      
      <ActivitiesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
