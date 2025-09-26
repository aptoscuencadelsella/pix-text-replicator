import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Mountain, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";


export default function CuetuMayu() {
  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>Cuetu Mayu - Escalada Deportiva Cangas de Onís | Apartamentos Rurales</title>
        <meta 
          name="description" 
          content="Escalada deportiva en Cuetu Mayu, Cangas de Onís. 40-50 vías del IV+ al 8a en caliza gris y naranja. Escalada técnica cerca de Cangas de Onís." 
        />
        <meta 
          name="keywords" 
          content="Cuetu Mayu escalada, escalada Cangas de Onís, Nieda escalada deportiva, vías escalada Asturias, caliza gris naranja" 
        />
        <meta property="og:title" content="Cuetu Mayu - Escalada Deportiva en Cangas de Onís" />
        <meta property="og:description" content="Descubre Cuetu Mayu, escuela de escalada muy accesible desde Cangas de Onís con vías técnicas en caliza." />
        <link rel="canonical" href="https://cuencadelsella.com/cuetu-mayu" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-nature-mint to-white">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              to="/escalada-deportiva" 
              className="inline-flex items-center gap-2 text-nature-forest hover:text-nature-green transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Volver a Escalada Deportiva</span>
            </Link>
            
            <Button 
              asChild
              variant="outline" 
              className="border-nature-forest text-nature-forest hover:bg-nature-forest hover:text-white"
            >
              <Link to="/escalada-deportiva">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Atrás
              </Link>
            </Button>
          </div>

          {/* Hero Section */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-nature">
            <div className="h-64 md:h-80 bg-gradient-to-br from-nature-green/20 to-nature-forest/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">CUETU MAYU</h1>
                <p className="text-xl md:text-2xl opacity-90">Escalada técnica cerca de Cangas</p>
              </div>
            </div>
          </div>

          {/* Main Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Basic Information */}
            <Card className="shadow-nature border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature-forest">
                  <MapPin className="w-5 h-5" />
                  Información General
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Ubicación</h3>
                  <p className="text-gray-700">Cangas de Onís, cerca del pueblo de Nieda (3 km de Cangas)</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Coordenadas:</strong> 43.3648° N, -5.1310° W
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Características</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vías:</span>
                      <span className="font-medium">40-50 vías</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grados:</span>
                      <span className="font-medium">IV+ a 8a</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Altura:</span>
                      <span className="font-medium">10-25 metros</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Roca:</span>
                      <span className="font-medium">Caliza gris y naranja</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access and Conditions */}
            <Card className="shadow-nature border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-nature-forest">
                  <Clock className="w-5 h-5" />
                  Acceso y Condiciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Aproximación</h3>
                  <p className="text-gray-700">5-10 minutos desde el aparcamiento cerca de Nieda</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Orientación</h3>
                  <p className="text-gray-700">Sur y Sureste - Sol buena parte del día</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Mejor época</h3>
                  <p className="text-gray-700">Otoño, invierno y primavera. En verano muy caluroso en horas centrales.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card className="mb-12 shadow-nature border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <Mountain className="w-5 h-5" />
                Características de la Escalada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-nature-forest mb-3">Estilo de Escalada</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Escalada técnica en placa</li>
                    <li>• Pasos de fuerza en desplomes</li>
                    <li>• Muros de caliza gris y naranja</li>
                    <li>• Vías de altura moderada (10-25m)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-3">Ventajas</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-nature-mint text-nature-forest">Muy accesible</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Cerca de Cangas</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Buen soleado</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Escalada técnica</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Important Notes */}
          <Card className="mb-12 shadow-nature border-0 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <AlertTriangle className="w-5 h-5" />
                Recomendaciones Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p><strong>Zona muy concurrida:</strong> Los fines de semana puede haber mucha afluencia por su cercanía a Cangas de Onís.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p><strong>Respeto a vecinos:</strong> Aparcar respetando zonas de paso y evitar molestias a los habitantes de Nieda.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p><strong>Restricciones temporales:</strong> Posibles prohibiciones por nidificación. Consultar carteles locales antes de escalar.</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-nature max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-nature-forest mb-4">
                ¿Necesitas Más Información?
              </h3>
              <p className="text-gray-700 mb-6">
                Contacta con nosotros para obtener más detalles sobre Cuetu Mayu, 
                condiciones actuales de escalada o recomendaciones de alojamiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto">
                  <Button 
                    variant="secondary"
                    className="bg-nature-forest hover:bg-nature-green text-white border-none font-semibold px-8 py-3 shadow-nature transition-all duration-300 hover:shadow-lg"
                  >
                    CONTACTAR AHORA
                  </Button>
                </Link>
                <Button 
                  asChild
                  variant="outline"
                  className="border-nature-forest text-nature-forest hover:bg-nature-forest hover:text-white font-semibold px-8 py-3"
                >
                  <Link to="/escalada-deportiva">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver a Escalada
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}