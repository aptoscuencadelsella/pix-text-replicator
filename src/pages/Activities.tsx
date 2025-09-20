import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import activitiesImage from "@/assets/actividades-cuenca.jpg";
import canoeing from "@/assets/activity-canoeing.jpg";
import hiking from "@/assets/activity-hiking.jpg";

const Activities = () => {
  const images = [activitiesImage, canoeing, hiking];

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
            ACTIVIDADES DE LA CUENCA
          </h1>

          {/* Image Carousel */}
          <div className="mb-12">
            <ImageCarousel images={images} alt="Actividades de la Cuenca del Sella" />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La Cuenca del Sella es un paraíso para los amantes de la naturaleza y la aventura. Aquí encontrarás una amplia gama de actividades que te permitirán conectar con el entorno natural más espectacular de Asturias, desde emocionantes deportes acuáticos hasta tranquillas rutas culturales.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Aventura Acuática</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El famoso <strong>Descenso del Sella</strong> en piragua es sin duda la estrella de la región. Este emocionante recorrido fluvial te llevará por paisajes de ensueño mientras navegas por las aguas cristalinas del río más internacional de Asturias.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Senderismo y Montaña</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Explora los <strong>Picos de Europa</strong> a través de rutas de senderismo que te llevarán a los <strong>Lagos de Covadonga</strong>, el <strong>Santuario de Covadonga</strong>, y miradores con vistas panorámicas impresionantes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Espeleología</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Descubre el mundo subterráneo asturiano <strong>explorando cuevas</strong> como las famosas Cuevas de Buxu, donde podrás admirar arte rupestre paleolítico en un entorno natural único.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Aventura Extrema</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para los más aventureros, la zona ofrece <strong>barranquismo</strong>, escalada, y rutas en <strong>bicicleta de montaña</strong> que pondrán a prueba tu espíritu aventurero.
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Además de la aventura, podrás <strong>montar a caballo</strong> por valles bucólicos, visitar pueblos con encanto, descubrir la rica <strong>gastronomía local</strong> con productos como la famosa sidra asturiana, quesos artesanales y platos tradicionales que deleitarán tu paladar.
            </p>
            
            <Button 
              variant="secondary"
              size="lg"
              className="bg-nature-forest hover:bg-nature-green text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              PLANIFICA TU AVENTURA
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Activities;