import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";

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
    features: [
      "Ideal para iniciación",
      "Vías bien equipadas",
      "Acceso fácil",
      "Ambiente familiar",
      "Vistas panorámicas"
    ],
    image: "/src/assets/escalada-amieva.jpg"
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

          {/* Climbing Zones */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-nature-forest mb-8 text-center">
              Zonas de Escalada
            </h2>
            
            <div className="grid gap-8 md:gap-12">
              {climbingZones.map((zone) => (
                <Card key={zone.id} className="overflow-hidden shadow-nature border-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-nature-green/20 to-nature-forest/30 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold mb-2">Imagen próximamente</h3>
                          <p className="text-sm opacity-90">{zone.name}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-nature-forest mb-2">
                          {zone.name}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600 flex items-center gap-2">
                          📍 {zone.location}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {zone.description}
                        </p>
                        
                        {/* Zone Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="space-y-3">
                            <div>
                              <span className="font-semibold text-nature-forest">Rutas:</span>
                              <p className="text-gray-700">{zone.routes}</p>
                        </div>
                        
                        <div className="mt-6">
                          <Link to="/escuela-amieva">
                            <Button 
                              variant="secondary"
                              className="bg-nature-forest hover:bg-nature-green text-white border-none font-semibold px-6 py-2 shadow-nature transition-all duration-300 hover:shadow-lg w-full"
                            >
                              VER FICHA COMPLETA
                            </Button>
                          </Link>
                        </div>
                            <div>
                              <span className="font-semibold text-nature-forest">Grados:</span>
                              <p className="text-gray-700">{zone.grades}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-nature-forest">Orientación:</span>
                              <p className="text-gray-700">{zone.orientation}</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <span className="font-semibold text-nature-forest">Aproximación:</span>
                              <p className="text-gray-700">{zone.approach}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-nature-forest">Roca:</span>
                              <p className="text-gray-700">{zone.rockType}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="mb-6">
                          <span className="font-semibold text-nature-forest mb-3 block">Características:</span>
                          <div className="flex flex-wrap gap-2">
                            {zone.features.map((feature, index) => (
                              <Badge 
                                key={index} 
                                variant="secondary" 
                                className="bg-nature-mint text-nature-forest hover:bg-nature-green hover:text-white transition-colors"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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