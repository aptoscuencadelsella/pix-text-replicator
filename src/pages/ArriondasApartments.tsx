import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import arriondasImage from "@/assets/arriondas.jpg";
import arriondasInterior1 from "@/assets/arriondas-interior-1.jpg";
import arriondasInterior2 from "@/assets/arriondas-interior-2.jpg";

const ArriondasApartments = () => {
  const images = [arriondasImage, arriondasInterior1, arriondasInterior2];

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
            APARTAMENTOS ARRIONDAS
          </h1>

          {/* Image Carousel */}
          <div className="mb-12">
            <ImageCarousel images={images} alt="Apartamentos Arriondas" />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sumérgete en la auténtica experiencia asturiana en nuestros apartamentos de Arriondas, situada a orillas del cristalino <strong>río Sella</strong>. Este encantador pueblo es mundialmente reconocido como el punto de partida del legendario <strong>Descenso del Sella</strong>, una tradición que atrae cada año a miles de aventureros en busca de naturaleza y emoción.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestros apartamentos ofrecen el equilibrio perfecto entre comodidad moderna y autenticidad local. Con vistas privilegiadas al río y las montañas circundantes, cada estancia está diseñada para proporcionarte la máxima relajación después de un día lleno de aventuras en la naturaleza asturiana.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Desde Arriondas podrás embarcarte en el famoso descenso en piragua, explorar rutas de senderismo por los valles cercanos, descubrir pueblos con encanto como Llanes o Ribadesella, o simplemente disfrutar de la tranquilidad del río mientras saboreas la excelente sidra y gastronomía local.
            </p>
            
            <Button 
              variant="secondary"
              size="lg"
              className="bg-nature-blue hover:bg-nature-green text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              RESERVAR AHORA
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ArriondasApartments;