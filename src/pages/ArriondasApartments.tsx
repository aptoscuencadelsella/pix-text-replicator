import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import BookingCalendar from "../components/BookingCalendar";
import BookingReviews from "../components/BookingReviews";
import arriondasBedroom1 from "@/assets/arriondas-bedroom1.jpg";
import arriondasBedroom2 from "@/assets/arriondas-bedroom2.jpg";
import arriondasBedroom3 from "@/assets/arriondas-bedroom3.jpg";
import arriondasLivingRoom from "@/assets/arriondas-living-room.jpg";
import arriondasKitchen from "@/assets/arriondas-kitchen.jpg";

const ArriondasApartments = () => {
  const images = [
    arriondasBedroom1, 
    arriondasBedroom2,
    arriondasBedroom3,
    arriondasLivingRoom,
    arriondasKitchen
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
            APARTAMENTOS EN ARRIONDAS - ALOJAMIENTO RÍO SELLA
          </h1>

          {/* Apartment Layout - Similar to Activities */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Carousel */}
              <div className="relative h-96 md:h-full">
                <ImageCarousel images={images} alt="Apartamentos en Arriondas - alojamiento río Sella para descenso del Sella y turismo activo" />
              </div>
              
              {/* Apartment Description */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-nature-forest mb-4">
                  Apartamento Río Sella I - Alojamiento en Arriondas
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Apartamento turístico en Arriondas</strong> para 4 personas, junto al <strong>río Sella</strong>. <strong>Alojamiento</strong> perfecto para el <strong>descenso del Sella desde Arriondas</strong>, <strong>turismo activo en la cuenca del Sella</strong> y disfrutar de la <strong>naturaleza asturiana</strong>.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Características:</h3>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Capacidad: 4 personas, 2 camas (2 habitaciones)
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      WiFi, cocina completamente equipada
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      TV, calefacción y lavadora
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Balcón con vistas panorámicas
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Salón luminoso, baño limpio y moderno
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Colchones cómodos y ropa de cama de calidad
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Kit de bienvenida con café y azúcar
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Check-in: 18:00h / Check-out: 12:00h
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      No se admiten mascotas - Prohibido fumar
                    </li>
                  </ul>
                </div>
                
                <Link to="/booking?apartment=arriondas">
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

          {/* Booking Calendar */}
          <div className="max-w-4xl mx-auto mb-12">
            <BookingCalendar 
              apartmentName="Apartamento Rio Sella I"
              apartmentLocation="Arriondas"
            />
          </div>

          {/* Booking Reviews */}
          <BookingReviews 
            rating={9.1}
            totalReviews={43}
            reviews={[
              {
                name: "Mercedes",
                country: "España",
                comment: "Limpieza, ubicación y sobretodo los dueños que son muy agradables y amables"
              },
              {
                name: "Merino",
                country: "España",
                comment: "Alojamiento muy céntrico en Arriondas. Limpieza excelente y muy bien equipado."
              },
              {
                name: "Nuria",
                country: "España",
                comment: "La ubicación sin duda, para hacer el Descenso del Sella, es fantástica, puedes ir andando a muchas de las empresas que lo organizan. El bloque es muy tranquilo y el apartamento para 4 personas es ideal."
              },
              {
                name: "Dolores",
                country: "España",
                comment: "Las vistas a los picos de europa. El trato genial, y sobre todo la información que nos facilitó para hacer visita turística"
              },
              {
                name: "Yasu",
                country: "España",
                comment: "Todo maravilloso, la dueña super amable y hemos estado como en casa, las vistas a picos de Europa son maravillosas"
              },
              {
                name: "Fernandez",
                country: "España",
                comment: "El apartamento es pequeño pero muy bien aprovechado. Apto para que 4 personas estén cómodamente. Limpio y con todo lo necesario tanto en cocina como en baño. En el centro de Arriondas pero zona muy tranquila."
              }
            ]}
            categories={[
              { name: "Personal", score: 9.6 },
              { name: "Instalaciones", score: 9.1 },
              { name: "Limpieza", score: 9.2 },
              { name: "Confort", score: 8.8 },
              { name: "Calidad-precio", score: 8.9 },
              { name: "Ubicación", score: 9.5 }
            ]}
            bookingUrl="https://www.booking.com/hotel/es/apartamento-rio-sella.es.html"
          />

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto text-center mt-12">
            <h3 className="text-2xl font-bold mb-6 text-nature-forest">
              Turismo en Arriondas - Descenso del Sella y Actividades
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestros <strong>apartamentos en Arriondas</strong> están situados a orillas del cristalino <strong>río Sella</strong>. Este <strong>pueblo de Arriondas en Asturias</strong> es el punto de salida oficial del legendario <strong>descenso del Sella</strong>, una aventura que atrae cada año a miles de visitantes. Ideal para <strong>vacaciones en Arriondas</strong> y <strong>actividades en Arriondas cuenca del sella</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tu <strong>alojamiento en Arriondas</strong> es perfecto para practicar <strong>piragüismo en el Sella</strong>, <strong>kayak río Sella</strong>, <strong>rafting río Sella</strong> y otras <strong>actividades turismo activo</strong>. También podrás hacer <strong>senderismo cuenca del sella</strong>, visitar los <strong>Lagos de Covadonga</strong> y disfrutar de una <strong>escapada fin de semana en Arriondas</strong> llena de naturaleza.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde tu <strong>alojamiento Arriondas naturaleza Sella</strong> podrás explorar pueblos cercanos como Llanes o Ribadesella, degustar sidra asturiana y disfrutar de <strong>deportes acuáticos río Sella</strong>. Nuestros <strong>apartamentos vacacionales cuenca del sella</strong> son ideales para <strong>turismo familiar en Arriondas</strong> y vivir la auténtica experiencia del <strong>valle del Sella, Asturias</strong>.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ArriondasApartments;