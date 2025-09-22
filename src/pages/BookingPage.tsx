import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";

// Import Cangas images
import cangasLivingRoom from "@/assets/cangas-living-room.jpg";
import cangasKitchenDining from "@/assets/cangas-kitchen-dining.jpg";
import cangasBedroomDouble from "@/assets/cangas-bedroom-double.jpg";
import cangasBedroomSingle from "@/assets/cangas-bedroom-single.jpg";
import cangasKitchenView1 from "@/assets/cangas-kitchen-view1.jpg";
import cangasLivingRoom2 from "@/assets/cangas-living-room2.jpg";
import cangasBathroom from "@/assets/cangas-bathroom.jpg";
import cangasBedroomSingle2 from "@/assets/cangas-bedroom-single2.jpg";

// Import Arriondas images
import arriondasBedroom1 from "@/assets/arriondas-bedroom1.jpg";
import arriondasBedroom2 from "@/assets/arriondas-bedroom2.jpg";
import arriondasBedroom3 from "@/assets/arriondas-bedroom3.jpg";
import arriondasLivingRoom from "@/assets/arriondas-living-room.jpg";
import arriondasKitchen from "@/assets/arriondas-kitchen.jpg";

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const apartment = searchParams.get("apartment");

  // Define apartment data
  const apartmentData = {
    cangas: {
      name: "Apartamento Rio Sella II",
      location: "Cangas de Onís",
      images: [
        cangasLivingRoom,
        cangasKitchenDining,
        cangasBedroomDouble,
        cangasBedroomSingle,
        cangasKitchenView1,
        cangasLivingRoom2,
        cangasBathroom,
        cangasBedroomSingle2,
      ],
      characteristics: [
        "Capacidad: 3 personas, 3 camas (2 habitaciones + sofá cama)",
        "Cocina completamente equipada",
        "TV, calefacción y lavadora",
        "Colchones cómodos y ropa de cama de calidad",
        "Kit de bienvenida con café y azúcar",
        "Check-in: 18:00h / Check-out: 12:00h",
        "No se admiten mascotas - Prohibido fumar"
      ]
    },
    arriondas: {
      name: "Apartamento Rio Sella I",
      location: "Arriondas",
      images: [
        arriondasBedroom1, 
        arriondasBedroom2,
        arriondasBedroom3,
        arriondasLivingRoom,
        arriondasKitchen
      ],
      characteristics: [
        "Totalmente equipado y amueblado",
        "A orillas del río Sella",
        "Punto de partida del Descenso del Sella",
        "Vistas al río y montañas",
        "[Aquí pondrás las características que me dirás]"
      ]
    }
  };

  const currentApartment = apartmentData[apartment as keyof typeof apartmentData];

  if (!currentApartment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Apartamento no encontrado</h1>
          <Link to="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

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
            RESERVAR {currentApartment.name.toUpperCase()}
          </h1>

          {/* Large Image Carousel */}
          <div className="max-w-7xl mx-auto mb-12">
            <ImageCarousel 
              images={currentApartment.images} 
              alt={`${currentApartment.name} - ${currentApartment.location}`} 
            />
          </div>

          {/* Apartment Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-card-nature">
              <h2 className="text-3xl font-bold text-nature-forest mb-4">
                {currentApartment.name}
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                {currentApartment.location}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Características del apartamento:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {currentApartment.characteristics.map((characteristic, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-nature-green mr-3 mt-1">✓</span>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  [Aquí irá el formulario de reserva y el sistema de pago que implementaremos después]
                </p>
                <Button 
                  variant="secondary"
                  className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-lg"
                >
                  CONTINUAR CON LA RESERVA
                </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default BookingPage;