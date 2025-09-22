import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import actividadesImage from "@/assets/actividades-cuenca.jpg";
import canoeingImage from "@/assets/activity-canoeing.jpg";
import hikingImage from "@/assets/activity-hiking.jpg";
import puenteRomanoRealistic from "@/assets/puente-romano-realistic.jpg";
import lagosCovadongaImage from "@/assets/lagos-covadonga.jpg";
import paseoCaballoImage from "@/assets/paseo-caballo.jpg";
import basilicaCovadongaImage from "@/assets/basilica-covadonga.jpg";

const ActividadesCuenca = () => {
  const activities = [
    {
      title: "Descenso del Sella en Canoa",
      description: "La actividad más famosa de la región. Desciende el río Sella desde Arriondas hasta Llovio, disfrutando del paisaje espectacular y la tranquilidad del agua.",
      image: canoeingImage,
      duration: "3-4 horas",
      location: "Arriondas - Llovio",
      difficulty: "Fácil",
      highlights: [
        "15 km de recorrido por aguas tranquilas",
        "Paisajes únicos de los Picos de Europa",
        "Actividad para toda la familia",
        "Época ideal: Marzo a Octubre"
      ]
    },
    {
      title: "Paseos a Caballo - El Dorado",
      description: "Explora los senderos de Arriondas a caballo con la empresa El Dorado. Una experiencia única para conectar con la naturaleza asturiana.",
      image: paseoCaballoImage,
      duration: "1-3 horas",
      location: "Arriondas",
      difficulty: "Fácil-Medio",
      highlights: [
        "Rutas adaptadas a todos los niveles",
        "Caballos dóciles y bien entrenados",
        "Guías expertos locales",
        "Vistas panorámicas de la cuenca"
      ]
    },
    {
      title: "Visita a Covadonga",
      description: "Descubre el santuario más importante de Asturias, cuna de la Reconquista y lugar de peregrinación con una historia milenaria.",
      image: basilicaCovadongaImage,
      duration: "2-3 horas",
      location: "Covadonga",
      difficulty: "Fácil",
      highlights: [
        "Basílica de Santa María la Real",
        "Santa Cueva con la Virgen de Covadonga",
        "Museo de Covadonga",
        "Historia de Don Pelayo y la Reconquista"
      ]
    },
    {
      title: "Lagos de Covadonga",
      description: "Visita los famosos lagos glaciares: Enol y Ercina. Un paisaje de alta montaña que te dejará sin aliento, ideal para senderismo y fotografía.",
      image: lagosCovadongaImage,
      duration: "Día completo",
      location: "Parque Nacional Picos de Europa",
      difficulty: "Medio",
      highlights: [
        "Lagos glaciares Enol y Ercina",
        "Centro de Visitantes Pedro Pidal",
        "Rutas de senderismo señalizadas",
        "Fauna y flora de alta montaña"
      ]
    },
    {
      title: "Cangas de Onís - Puntos de Interés",
      description: "Recorre la histórica capital del Reino de Asturias con sus monumentos y rincones más emblemáticos.",
      image: puenteRomanoRealistic,
      duration: "2-4 horas",
      location: "Cangas de Onís",
      difficulty: "Fácil",
      highlights: [
        "Puente Romano sobre el río Sella",
        "Capilla de Santa Cruz (s. VIII)",
        "Casa Consistorial y Plaza del Ayuntamiento",
        "Iglesia de Santa María de Cangas",
        "Mercado tradicional (domingos)",
        "Gastronomía local en sidrerías"
      ]
    }
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
            ACTIVIDADES DE LA CUENCA
          </h1>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-card-nature mb-12">
            <img
              src={actividadesImage}
              alt="Actividades Cuenca del Sella"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Descubre la Cuenca del Sella
                </h2>
                <p className="text-lg lg:text-xl">
                  Aventuras únicas en el corazón de los Picos de Europa
                </p>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 mb-12">
              {activities.map((activity, index) => (
                <Card key={index} className="overflow-hidden shadow-card-nature">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-nature-forest mb-2">
                          {activity.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {activity.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {activity.duration}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {activity.location}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Star className="w-4 h-4 mr-1" />
                            {activity.difficulty}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">Puntos destacados:</h4>
                          <ul className="space-y-1">
                            {activity.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-nature-green mr-2">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button
                          variant="secondary"
                          className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-6 py-2 shadow-nature transition-all duration-300 hover:shadow-lg"
                        >
                          MÁS INFORMACIÓN
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center p-8 bg-nature-green/10 rounded-lg border border-nature-green/20">
              <h3 className="text-2xl font-bold mb-4 text-nature-forest">
                ¿Necesitas más información?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contáctanos para obtener información detallada sobre horarios, precios, reservas 
                y recomendaciones personalizadas para aprovechar al máximo tu estancia.
              </p>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  CONTACTAR
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ActividadesCuenca;