import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ApartmentGrid from "../components/ApartmentGrid";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ApartmentGrid />
      <ContactSection />
    </div>
  );
};

export default Index;
