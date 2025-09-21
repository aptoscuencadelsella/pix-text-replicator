import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import arriondasBedroom1 from "@/assets/arriondas-bedroom1.jpg";
import arriondasBedroom2 from "@/assets/arriondas-bedroom2.jpg";

const ArriondasApartments = () => {
  const images = [
    arriondasBedroom1, 
    arriondasBedroom2
  ];

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

          {/* Apartment Layout - Similar to Activities */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Carousel */}
              <div className="relative h-96 md:h-full">
                <ImageCarousel images={images} alt="Apartamentos Arriondas" />
              </div>
              
              {/* Apartment Description */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-nature-forest mb-4">
                  Apartamento Rio Sella I
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  [Aquí pondrás la descripción breve del apartamento que me dirás]
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Características:</h3>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Totalmente equipado y amueblado
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      A orillas del río Sella
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Punto de partida del Descenso del Sella
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Vistas al río y montañas
                    </li>
                  </ul>
                </div>
                
                <Button 
                  variant="secondary"
                  className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-6 py-2 shadow-nature transition-all duration-300 hover:shadow-lg"
                >
                  RESERVAR AHORA
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-nature-forest">
              Descubre Arriondas
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sumérgete en la auténtica experiencia asturiana en nuestros apartamentos de Arriondas, situada a orillas del cristalino <strong>río Sella</strong>. Este encantador pueblo es mundialmente reconocido como el punto de partida del legendario <strong>Descenso del Sella</strong>, una tradición que atrae cada año a miles de aventureros en busca de naturaleza y emoción.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestros apartamentos ofrecen el equilibrio perfecto entre comodidad moderna y autenticidad local. Con vistas privilegiadas al río y las montañas circundantes, cada estancia está diseñada para proporcionarte la máxima relajación después de un día lleno de aventuras en la naturaleza asturiana.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde Arriondas podrás embarcarte en el famoso descenso en piragua, explorar rutas de senderismo por los valles cercanos, descubrir pueblos con encanto como Llanes o Ribadesella, o simplemente disfrutar de la tranquilidad del río mientras saboreas la excelente sidra y gastronomía local.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ArriondasApartments;