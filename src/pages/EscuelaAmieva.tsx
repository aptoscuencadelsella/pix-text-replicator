import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Mountain, Info, Navigation, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";
import croquisGeneral from "@/assets/crokis/croquis_general.jpg";

export default function EscuelaAmieva() {
  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>Escuela de Escalada de Amieva - Serrón & Tres Agujas | Guía Completa</title>
        <meta 
          name="description" 
          content="Guía completa de la Escuela de Escalada de Amieva (Serrón & Tres Agujas) en Sames, Asturias. 17 vías de IV+ a 7b, coordenadas GPS, acceso y recomendaciones." 
        />
        <meta 
          name="keywords" 
          content="Escuela Amieva escalada, Serrón escalada, Tres Agujas Sames, escalada Asturias, vías escalada Amieva, climbing Picos Europa" 
        />
        <meta property="og:title" content="Escuela de Escalada de Amieva - Serrón & Tres Agujas" />
        <meta property="og:description" content="Guía completa con ubicación, acceso, vías y recomendaciones para la Escuela de Escalada de Amieva en Asturias." />
        <link rel="canonical" href="https://cuencadelsella.com/escuela-amieva" />
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
              ESCUELA DE AMIEVA
            </h1>
            <h2 className="text-2xl md:text-3xl text-nature-green mb-4">
              Serrón & Tres Agujas (Sames)
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ficha completa de la escuela de escalada deportiva ubicada en el concejo de Amieva, 
              cercano al núcleo de Sames, también conocida como "El Serrón de la Valliniella".
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
                      Concejo de Amieva (Asturias), cercano al núcleo de Sames. 
                      También conocida como "El Serrón de la Valliniella (Sames)" o "Escuela de escalada de Amieva".
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Coordenadas GPS</h4>
                    <p className="text-gray-700 font-mono text-sm">
                      <strong>Latitud:</strong> 43.235765° N<br />
                      <strong>Longitud:</strong> −5.049285° W
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.google.com/maps?q=43.235765,-5.049285"
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
                    <h4 className="font-semibold text-nature-forest mb-2">Sectores</h4>
                    <p className="text-gray-700">
                      Dos sectores principales: <strong>El Serrón</strong> y <strong>Tres Agujas</strong>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Número de Vías</h4>
                    <p className="text-gray-700">
                      <strong>17 vías</strong> equipadas (según Ayuntamiento de Amieva)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Rango de Grados</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        IV+ (mínimo)
                      </Badge>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        7b (máximo)
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Otras fuentes mencionan rangos de 5c-8a y 5b-7b según sector
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Características</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-nature-mint text-nature-forest">Roca Caliza</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Altura ~20m</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Vertical a Desplomado</Badge>
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
                      <strong>Sur y Oeste</strong> - Recibe sol por la tarde en primavera/otoño
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Altitud</h4>
                    <p className="text-gray-700">Aproximadamente <strong>800 metros</strong></p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Mejor Época</h4>
                    <p className="text-gray-700">
                      Casi todo el año. En verano puede calentarse bastante debido a la orientación sur-oeste.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Recomendación</h4>
                    <p className="text-gray-700 text-sm">
                      Evitar horas centrales en verano si no buscas calor elevado. 
                      Ideal en primavera y otoño para aprovechar el sol de la tarde.
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
                    <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside">
                      <li>Desde Cangas de Onís, tomar la <strong>N-625</strong> hacia Precendi</li>
                      <li>Tomar el desvío hacia <strong>Sames</strong></li>
                      <li>En Sames, camino a mano derecha hasta <strong>plazoleta de aparcamiento</strong></li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Aproximación a Pie</h4>
                    <p className="text-gray-700 text-sm">
                      Desde el aparcamiento, subir por <strong>sendero</strong> hasta las agujas/muros de escalada.
                      Tiempo: <strong>15 minutos de subida</strong> (unos cientos de metros).
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Nota:</strong> La aproximación implica una subida de unos 15 minutos por sendero desde el aparcamiento.
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
                Croquis de la Escuela
              </CardTitle>
              <CardDescription>
                Diagramas detallados de las vías de escalada con grados y nombres
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-nature-mint/20 to-nature-green/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-nature-forest mb-4 text-center">
                    Sectores El Serrón & Tres Agujas
                  </h4>
                  <div className="relative bg-white rounded-lg p-4 shadow-lg">
                    <img 
                      src={croquisGeneral}
                      alt="Croquis Escuela de Escalada de Amieva - Sectores Serrón y Tres Agujas"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="mt-4 p-3 bg-nature-mint/10 rounded-lg">
                      <p className="text-sm text-gray-700 text-center">
                        <strong>Croquis oficial:</strong> Rutas numeradas con grados y nombres. 
                        Serrón (izquierda) y Tres Agujas (derecha) - 17 vías de IV+ a 7b
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-2">El Serrón</h5>
                    <p>Sector principal con vías clásicas de escalada técnica en placa y muro vertical.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-2">Tres Agujas</h5>
                    <p>Sector complementario con líneas variadas y mayor diversidad de movimientos.</p>
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
                  <h4 className="font-semibold text-nature-forest mb-3">Normas de Acceso</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Respetar accesos y no obstaculizar caminos vecinales</li>
                    <li>• Evitar escalar en condiciones húmedas</li>
                    <li>• Mantener limpia la zona y llevarse los residuos</li>
                    <li>• Respetar la fauna y flora local</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-forest mb-3">Recomendaciones</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Consultar croquis local para rutas específicas</li>
                    <li>• Mejor época: primavera, otoño e invierno</li>
                    <li>• En verano, evitar horas centrales del día</li>
                    <li>• Llevar suficiente agua, especialmente en verano</li>
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
                  <strong>Ayuntamiento de Amieva:</strong> Información oficial sobre sectores, número de vías y grados
                </p>
                <p>
                  <strong>ClimbingAway.fr:</strong> Coordenadas GPS, altitud y detalles técnicos adicionales
                </p>
                <p>
                  <strong>Guías locales:</strong> También aparece como "Escuela de escalada de Amieva" en diversas guías del concejo
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <section className="text-center py-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-nature max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-nature-forest mb-4">
                ¿Necesitas Más Información?
              </h3>
              <p className="text-gray-700 mb-6">
                Contacta con nosotros para obtener más detalles sobre rutas específicas, 
                condiciones actuales o recomendaciones personalizadas.
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