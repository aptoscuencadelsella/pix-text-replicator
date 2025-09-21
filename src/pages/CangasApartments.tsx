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
    cangasImage,
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

          {/* Image Carousel */}
          <div className="mb-12">
            <ImageCarousel images={images} alt="Apartamentos Cangas de Onís" />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Descubre nuestros encantadores apartamentos en el corazón de Cangas de Onís, la puerta de entrada a los majestuosos <strong>Picos de Europa</strong>. Ubicados estratégicamente cerca del emblemático <strong>puente Romano</strong> y a pocos minutos de los famosos <strong>Lagos de Covadonga</strong>, nuestros apartamentos ofrecen la base perfecta para explorar uno de los destinos más espectaculares de Asturias.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cada apartamento está cuidadosamente equipado con todas las comodidades modernas mientras mantiene el encanto tradicional asturiano. Disfruta de vistas impresionantes a las montañas, espacios amplios y luminosos, y la tranquilidad que solo puede ofrecer este entorno natural único.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Desde aquí podrás acceder fácilmente a rutas de senderismo, visitar el Santuario de Covadonga, explorar cuevas prehistóricas como las Cuevas de Buxu, o simplemente relajarte y disfrutar de la auténtica gastronomía asturiana en los restaurantes locales.
            </p>
            
            <Button 
              variant="secondary"
              size="lg"
              className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              RESERVAR AHORA
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CangasApartments;