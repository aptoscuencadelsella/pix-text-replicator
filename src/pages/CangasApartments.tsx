import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import cangasImage from "@/assets/cangas-de-onis.jpg";
import cangasBedroomSingle from "@/assets/cangas-bedroom-single.jpg";
import cangasKitchenDining from "@/assets/cangas-kitchen-dining.jpg";
import cangasKitchenView1 from "@/assets/cangas-kitchen-view1.jpg";
import cangasBedroomSingle2 from "@/assets/cangas-bedroom-single2.jpg";
import cangasLivingRoom from "@/assets/cangas-living-room.jpg";
import cangasBedroomDouble from "@/assets/cangas-bedroom-double.jpg";
import cangasLivingRoom2 from "@/assets/cangas-living-room2.jpg";
import cangasBathroom from "@/assets/cangas-bathroom.jpg";

const CangasApartments = () => {
  const images = [
    cangasLivingRoom,
    cangasKitchenDining,
    cangasBedroomDouble,
    cangasBedroomSingle,
    cangasKitchenView1,
    cangasLivingRoom2,
    cangasBathroom,
    cangasBedroomSingle2,
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
            APARTAMENTOS CANGAS DE ONÍS
          </h1>

          {/* Apartment Layout - Similar to Activities */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Carousel */}
              <div className="relative h-96 md:h-full">
                <ImageCarousel images={images} alt="Apartamentos Cangas de Onís" />
              </div>
              
              {/* Apartment Description */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-nature-forest mb-4">
                  Apartamento Rio Sella II
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
                      Ubicación céntrica en Cangas de Onís
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Cerca del puente Romano y Lagos de Covadonga
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Vistas a las montañas
                    </li>
                  </ul>
                </div>
                
                <Link to="/booking?apartment=cangas">
                  <Button 
                    variant="secondary"
                    className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-6 py-2 shadow-nature transition-all duration-300 hover:shadow-lg"
                  >
                    RESERVAR AHORA
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-nature-forest">
              Descubre Cangas de Onís
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Descubre nuestros encantadores apartamentos en el corazón de Cangas de Onís, la puerta de entrada a los majestuosos <strong>Picos de Europa</strong>. Ubicados estratégicamente cerca del emblemático <strong>puente Romano</strong> y a pocos minutos de los famosos <strong>Lagos de Covadonga</strong>, nuestros apartamentos ofrecen la base perfecta para explorar uno de los destinos más espectaculares de Asturias.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cada apartamento está cuidadosamente equipado con todas las comodidades modernas mientras mantiene el encanto tradicional asturiano. Disfruta de vistas impresionantes a las montañas, espacios amplios y luminosos, y la tranquilidad que solo puede ofrecer este entorno natural único.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde aquí podrás acceder fácilmente a rutas de senderismo, visitar el Santuario de Covadonga, explorar cuevas prehistóricas como las Cuevas de Buxu, o simplemente relajarte y disfrutar de la auténtica gastronomía asturiana en los restaurantes locales.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CangasApartments;