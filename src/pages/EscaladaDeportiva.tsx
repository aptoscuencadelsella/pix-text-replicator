import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";
import ClimbingZonesMap from "@/components/ClimbingZonesMap";

const climbingZones = [
  {
    id: 1,
    name: "Escuela de Amieva / Serrón & Tres Agujas (Sames)",
    location: "Amieva, Asturias",
    description: "Zona de escalada ideal para principiantes y escaladores intermedios, con vías bien equipadas y de alta calidad. Situada en un entorno natural privilegiado con vistas espectaculares.",
    routes: "25+ vías",
    grades: "4+ a 7a+",
    orientation: "Sur/Suroeste",
    approach: "5-10 minutos",
    rockType: "Caliza",
    coordinates: { lat: 43.2891, lng: -4.9463 },
    features: [
      "Ideal para iniciación",
      "Vías bien equipadas",
      "Acceso fácil",
      "Ambiente familiar",
      "Vistas panorámicas"
    ],
    detailPage: "/escuela-amieva"
  },
  {
    id: 2,
    name: "Cuevas del Mar",
    location: "Llanes, Asturias",
    description: "Escalada en acantilados de caliza marina junto a la playa. Zona de gran valor paisajístico con vías deportivas cortas en un entorno espectacular entre Nueva de Llanes y Villanueva.",
    routes: "20-30 vías",
    grades: "IV+ a 7b+",
    orientation: "Variada",
    approach: "2-5 minutos",
    rockType: "Caliza marina",
    coordinates: { lat: 43.4197, lng: -4.7558 },
    features: [
      "Acantilados marinos",
      "Vías cortas (10-20m)",
      "Entorno paisajístico",
      "Desplomes y fisuras",
      "Zona turística"
    ],
    detailPage: "/cuevas-del-mar"
  },
  {
    id: 3,
    name: "Carbes",
    location: "Cangas de Onís, Asturias",
    description: "Una de las escuelas de escalada más conocidas de la zona con varios subsectores. Ofrece desde vías clásicas accesibles hasta líneas técnicas de alto nivel en caliza compacta.",
    routes: "70-90 vías",
    grades: "IV+ a 8a",
    orientation: "Sur/Sureste",
    approach: "10-15 minutos",
    rockType: "Caliza compacta",
    coordinates: { lat: 43.3506, lng: -5.1631 },
    features: [
      "Múltiples subsectores",
      "Placas técnicas",
      "Muros verticales",
      "Escuela clásica",
      "Alto nivel técnico"
    ],
    detailPage: "/carbes-sector"
  },
  {
    id: 4,
    name: "Cuetu Mayu",
    location: "Cangas de Onís, Asturias",
    description: "Escuela muy frecuentada por su cercanía a Cangas de Onís. Situada cerca del pueblo de Nieda, ofrece escalada técnica en muros de caliza gris y naranja con placas y desplomes.",
    routes: "40-50 vías",
    grades: "IV+ a 8a",
    orientation: "Sur/Sureste",
    approach: "5-10 minutos",
    rockType: "Caliza gris y naranja",
    coordinates: { lat: 43.3648, lng: -5.1310 },
    features: [
      "Muy accesible desde Cangas",
      "Escalada técnica en placa",
      "Pasos de fuerza en desplomes", 
      "Sol buena parte del día",
      "Vías de 10-25m"
    ],
    detailPage: "/cuetu-mayu"
  },
  {
    id: 5,
    name: "Trincherona y Fitu",
    location: "Parres, Sierra del Sueve",
    description: "Escalada en la Sierra del Sueve cerca del mirador del Fitu. Situado a media altura con vistas espectaculares a Picos de Europa y la costa. Escalada técnica en caliza compacta.",
    routes: "25-35 vías",
    grades: "V a 7c",
    orientation: "Oeste/Suroeste",
    approach: "10-15 minutos",
    rockType: "Caliza compacta",
    coordinates: { lat: 43.4520, lng: -5.2400 },
    features: [
      "Vistas espectaculares",
      "Sierra del Sueve",
      "Escalada en placa técnica",
      "Muros verticales",
      "Altitud intermedia (600m)"
    ],
    detailPage: "/trincherona-fitu"
  }
];

export default function EscaladaDeportiva() {
  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>Escalada Deportiva en Asturias - Zonas de Escalada | Apartamentos Rurales</title>
        <meta 
          name="description" 
          content="Descubre las mejores zonas de escalada deportiva en Asturias. Escuela de Amieva, Serrón y Tres Agujas en Sames. Guía completa con rutas, grados y accesos." 
        />
        <meta 
          name="keywords" 
          content="escalada deportiva Asturias, zona escalada Amieva, Serrón escalada, Tres Agujas Sames, rutas escalada Picos Europa" 
        />
        <meta property="og:title" content="Escalada Deportiva en Asturias - Zonas de Escalada" />
        <meta property="og:description" content="Descubre las mejores zonas de escalada deportiva en Asturias con guías completas de rutas, grados y accesos." />
        <link rel="canonical" href="https://cuencadelsella.com/escalada-deportiva" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-nature-mint to-white">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link 
              to="/actividades-cuenca" 
              className="inline-flex items-center gap-2 text-nature-forest hover:text-nature-green transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Volver a Actividades</span>
            </Link>
          </div>

          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-forest mb-4">
              ESCALADA DEPORTIVA
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Descubre las mejores zonas de escalada deportiva en los Picos de Europa. 
              Rutas equipadas para todos los niveles en entornos naturales espectaculares.
            </p>
          </header>

          {/* Interactive Map */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-nature-forest mb-8 text-center">
              Zonas de Escalada
            </h2>
            <ClimbingZonesMap zones={climbingZones} />
          </section>

          {/* More Zones Coming Soon */}
          <section className="text-center py-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-nature max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-nature-forest mb-4">
                Más Zonas Próximamente
              </h3>
              <p className="text-gray-700 mb-6">
                Estamos preparando información detallada sobre más zonas de escalada deportiva 
                en la región. ¡Mantente atento para descubrir nuevas aventuras verticales!
              </p>
              <Link to="/contacto">
                <Button 
                  variant="secondary"
                  className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 shadow-nature transition-all duration-300 hover:shadow-lg"
                >
                  CONTACTA PARA MÁS INFO
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}