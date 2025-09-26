import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Mountain, Info, Navigation, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";
import croquisCuevas from "@/assets/crokis/img_1514.jpg";

export default function CuevasDelMar() {
  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>Escalada en Cuevas del Mar - Acantilados de Llanes | Guía Completa</title>
        <meta 
          name="description" 
          content="Guía completa de escalada en Cuevas del Mar, Llanes. Acantilados de caliza marina con 20-30 vías de IV+ a 7b+. Coordenadas GPS, acceso y recomendaciones." 
        />
        <meta 
          name="keywords" 
          content="Cuevas del Mar escalada, acantilados Llanes, escalada marina Asturias, climbing Cuevas del Mar, vías escalada Llanes" 
        />
        <meta property="og:title" content="Escalada en Cuevas del Mar - Acantilados de Llanes" />
        <meta property="og:description" content="Descubre la escalada en acantilados marinos de Cuevas del Mar con vistas espectaculares y vías deportivas cortas." />
        <link rel="canonical" href="https://cuencadelsella.com/cuevas-del-mar" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-nature-mint to-white">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link 
              to="/escalada-deportiva" 
              className="inline-flex items-center gap-2 text-nature-forest hover:text-nature-green transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Volver a Escalada Deportiva</span>
            </Link>
          </div>

          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-forest mb-4">
              CUEVAS DEL MAR
            </h1>
            <h2 className="text-2xl md:text-3xl text-nature-green mb-4">
              Acantilados de Llanes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Escalada en acantilados de caliza marina junto a la playa de Cuevas del Mar. 
              Zona de gran valor paisajístico situada entre Nueva de Llanes y Villanueva.
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Location & GPS */}
            <Card className="shadow-nature border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature-forest">
                  <MapPin className="w-5 h-5" />
                  Ubicación & Coordenadas GPS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Ubicación</h4>
                    <p className="text-gray-700">
                      Concejo de Llanes, cerca de la playa Cuevas del Mar (Asturias). 
                      Se encuentra entre Nueva de Llanes y Villanueva, justo en los acantilados próximos a la playa.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Coordenadas GPS</h4>
                    <p className="text-gray-700 font-mono text-sm">
                      <strong>Latitud:</strong> 43.4447° N<br />
                      <strong>Longitud:</strong> −4.9690° W
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.google.com/maps?q=43.4447,-4.9690"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button 
                        variant="secondary"
                        className="bg-nature-green hover:bg-nature-forest text-white border-none"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Ver en Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Routes & Grades */}
            <Card className="shadow-nature border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature-forest">
                  <Mountain className="w-5 h-5" />
                  Vías & Grados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Número de Vías</h4>
                    <p className="text-gray-700">
                      Entre <strong>20 y 30 vías</strong> equipadas
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Rango de Grados</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        IV+ / V (mínimo)
                      </Badge>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        7b+ (máximo)
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Características</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-nature-mint text-nature-forest">Caliza Marina</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Vías Cortas 10-20m</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Desplomes y Fisuras</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Orientation & Conditions */}
            <Card className="shadow-nature border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature-forest">
                  <Clock className="w-5 h-5" />
                  Orientación & Condiciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Orientación</h4>
                    <p className="text-gray-700">
                      <strong>Variada según el muro</strong> - Los sectores junto a la playa reciben sol y sombra en diferentes momentos del día
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Mejor Época</h4>
                    <p className="text-gray-700">
                      <strong>Primavera y otoño</strong>. En verano hace calor y la afluencia de bañistas puede ser un inconveniente.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Condiciones Marinas</h4>
                    <p className="text-gray-700 text-sm">
                      El ambiente marino aporta humedad y puede afectar el agarre, especialmente en días con marejada. 
                      Roca a veces húmeda o con salitre por la cercanía del mar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access */}
            <Card className="shadow-nature border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature-forest">
                  <Navigation className="w-5 h-5" />
                  Acceso & Aproximación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Acceso en Coche</h4>
                    <p className="text-gray-700 text-sm">
                      Desde <strong>Nueva de Llanes</strong>, seguir indicaciones hacia la <strong>playa de Cuevas del Mar</strong>. 
                      Se puede aparcar en las inmediaciones de la playa.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Aproximación a Pie</h4>
                    <p className="text-gray-700 text-sm">
                      Aproximación muy corta: <strong>2-5 minutos a pie</strong> hasta las paredes de escalada desde el aparcamiento.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Ventaja:</strong> Acceso muy rápido y cómodo, ideal para sesiones cortas o cuando hay poco tiempo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Croquis Section */}
          <Card className="shadow-nature border-0 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <Mountain className="w-5 h-5" />
                Croquis de Cuevas del Mar
              </CardTitle>
              <CardDescription>
                Esquemas de las vías en los acantilados marinos de Llanes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-nature-forest mb-4 text-center">
                    Sectores de Acantilado Marino
                  </h4>
                  <div className="relative bg-white rounded-lg p-4 shadow-lg">
                    <img 
                      src={croquisCuevas}
                      alt="Croquis Cuevas del Mar - Acantilados de Llanes"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                      <p className="text-sm text-gray-700 text-center">
                        <strong>Croquis detallado:</strong> Vías numeradas en acantilado marino. 
                        20-30 rutas de IV+ a 7b+ en caliza de gran calidad junto al mar
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-1">Sector Izquierdo</h5>
                    <p>Vías cortas y técnicas en muro vertical.</p>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-1">Sector Central</h5>
                    <p>Mayor variedad de grados y estilos.</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-1">Sector Derecho</h5>
                    <p>Líneas más largas con desplomes.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Restrictions & Recommendations */}
          <Card className="shadow-nature border-0 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <AlertTriangle className="w-5 h-5" />
                Restricciones & Recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-forest mb-3">Regulaciones</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Zona de gran valor paisajístico y natural</li>
                    <li>• Posibles regulaciones por anidamiento de aves (consultar carteles locales o FEDME)</li>
                    <li>• Evitar horas de máxima afluencia turística en verano</li>
                    <li>• Respetar a bañistas y turistas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-forest mb-3">Recomendaciones</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Comprobar estado de la roca antes de escalar (humedad, salitre)</li>
                    <li>• Mejor época: primavera y otoño</li>
                    <li>• Evitar días con marejada fuerte</li>
                    <li>• Llevar toalla para limpiar agarres si hay salitre</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sources & Additional Info */}
          <Card className="shadow-nature border-0 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <Info className="w-5 h-5" />
                Fuentes & Referencias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>ClimbingAway:</strong> Información técnica sobre vías, grados y características del sector
                </p>
                <p>
                  <strong>Guías locales:</strong> Detalles sobre acceso, condiciones y recomendaciones específicas de la zona
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <section className="text-center py-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-nature max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-nature-forest mb-4">
                ¿Planeas Escalar en Cuevas del Mar?
              </h3>
              <p className="text-gray-700 mb-6">
                Contacta con nosotros para más información sobre condiciones actuales, 
                alojamiento cercano o recomendaciones para tu visita a Llanes.
              </p>
              <Link to="/contacto">
                <Button 
                  variant="secondary"
                  className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 shadow-nature transition-all duration-300 hover:shadow-lg"
                >
                  CONTACTAR
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}