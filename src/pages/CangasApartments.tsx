import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import BookingCalendar from "../components/BookingCalendar";
import BookingReviews from "../components/BookingReviews";
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
          <Link
            to="/"
            className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
            APARTAMENTOS EN CANGAS DE ONÍS - ALOJAMIENTO CUENCA DEL SELLA
          </h1>

          {/* Apartment Layout - Similar to Activities */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Carousel */}
              <div className="relative h-96 md:h-full">
                <ImageCarousel images={images} alt="Apartamentos en Cangas de Onís - alojamiento turístico cuenca del sella cerca Lagos Covadonga" />
              </div>

              {/* Apartment Description */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-nature-forest mb-4">Apartamento Río Sella II - Alojamiento en Cangas de Onís</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Apartamento turístico en Cangas de Onís</strong>, ideal para 3 personas. <strong>Alojamiento</strong> completamente equipado en el corazón de la <strong>cuenca del Sella</strong>, perfecto para explorar los <strong>Picos de Europa</strong>, los <strong>Lagos de Covadonga</strong> y disfrutar del <strong>turismo activo</strong> en Asturias.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Características:</h3>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Capacidad: 3 personas, 3 camas (2 habitaciones + sofá cama)
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      Cocina completamente equipada
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-2">•</span>
                      TV, calefacción y lavadora
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

          {/* Booking Calendar */}
          <div data-tockify-component="calendar" data-tockify-calendar="cangas"></div>
          <script
            data-cfasync="false"
            data-tockify-script="embed"
            src="https://public.tockify.com/browser/embed.js"
          ></script>

          {/* Booking Reviews */}
          <BookingReviews 
            rating={9.0}
            totalReviews={15}
            reviews={[
              {
                name: "Maria",
                country: "España",
                comment: "Todo en su conjunto. El trato excepcional. Nos informaron de todo lo que preguntamos e incluso nos enviaron información de donde comer. Repetiremos."
              },
              {
                name: "Esther",
                country: "España",
                comment: "La ubicación, la limpieza de la casa impecable, la dueña muy amable."
              },
              {
                name: "Miguel",
                country: "España",
                comment: "Ubicación excelente en pleno centro de la ciudad. Acogedor y limpio, con todos los servicios necesarios. Muy buena atención y trato por parte del dueño."
              },
              {
                name: "Laura",
                country: "España",
                comment: "Perfecto para visitar Covadonga y los Picos de Europa. El apartamento está en pleno centro, muy cómodo y bien equipado."
              },
              {
                name: "Carlos",
                country: "España",
                comment: "Muy buen apartamento, limpio y acogedor. La ubicación es ideal para conocer Cangas y hacer excursiones por la zona."
              },
              {
                name: "Ana",
                country: "España",
                comment: "Apartamento céntrico y tranquilo. Los propietarios muy atentos y amables. Volveremos sin duda."
              }
            ]}
            categories={[
              { name: "Personal", score: 9.7 },
              { name: "Instalaciones", score: 8.7 },
              { name: "Limpieza", score: 9.5 },
              { name: "Confort", score: 8.5 },
              { name: "Calidad-precio", score: 9.0 },
              { name: "Ubicación", score: 10 }
            ]}
            bookingUrl="https://www.booking.com/hotel/es/apartamento-rio-sella-2.es.html"
          />

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto text-center mt-12">
            <h3 className="text-2xl font-bold mb-6 text-nature-forest">Qué Ver en Cangas de Onís - Turismo y Actividades</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestros <strong>apartamentos en Cangas de Onís</strong> son la puerta de entrada perfecta a los majestuosos <strong>Picos de Europa</strong>. Este <strong>pueblo de Cangas de Onís en Asturias</strong> es famoso por su histórico <strong>Puente Romano</strong> y su cercanía a los espectaculares <strong>Lagos de Covadonga</strong>. Ideal para <strong>vacaciones en Cangas de Onís</strong> y <strong>turismo en la cuenca del Sella</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Desde tu <strong>alojamiento en Cangas de Onís</strong> podrás realizar el <strong>descenso del Sella</strong>, explorar rutas de <strong>senderismo en los Picos de Europa</strong>, visitar el <strong>Santuario de Covadonga</strong>, practicar <strong>turismo activo</strong> y disfrutar de la naturaleza asturiana. Perfecto para una <strong>escapada fin de semana en Cangas de Onís</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Disfruta de <strong>actividades en Cangas de Onís</strong> como barranquismo, rutas a caballo, espeleología en las Cuevas de Buxu y la auténtica gastronomía asturiana. Nuestros <strong>apartamentos turísticos cuenca del sella</strong> son tu base perfecta para <strong>turismo familiar en Cangas de Onís</strong> y explorar el <strong>valle del Sella, Asturias</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CangasApartments;
