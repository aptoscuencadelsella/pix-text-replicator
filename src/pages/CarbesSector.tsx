import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Mountain, Info, Navigation, AlertTriangle, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";
import croquisGeneral from "@/assets/crokis/croquis_general.jpg";
import croquisPedroses from "@/assets/crokis/img_1514.jpg";

export default function CarbesSector() {
  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>Escalada en Carbes - Escuela Clásica Cangas de Onís | Guía Completa</title>
        <meta 
          name="description" 
          content="Guía completa de escalada en Carbes, Cangas de Onís. 70-90 vías de IV+ a 8a en múltiples subsectores. Coordenadas GPS, acceso y subsectores Les Pedroses." 
        />
        <meta 
          name="keywords" 
          content="Carbes escalada, escalada Cangas de Onís, Les Pedroses escalada, climbing Carbes, escuela escalada Asturias" 
        />
        <meta property="og:title" content="Escalada en Carbes - Escuela Clásica de los Picos de Europa" />
        <meta property="og:description" content="Descubre la escalada en Carbes con múltiples subsectores y vías técnicas de todos los niveles cerca de Cangas de Onís." />
        <link rel="canonical" href="https://cuencadelsella.com/carbes-sector" />
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
              CARBES
            </h1>
            <h2 className="text-2xl md:text-3xl text-nature-green mb-4">
              Escuela Clásica de Cangas de Onís
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Una de las escuelas de escalada más conocidas de la zona, situada en las inmediaciones 
              del pueblo de Carbes con varios subsectores que ofrecen escalada técnica en caliza compacta.
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
                      Concejo de Cangas de Onís (Asturias), en las inmediaciones del pueblo de Carbes. 
                      Una de las escuelas de escalada más conocidas de la zona.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Coordenadas GPS</h4>
                    <p className="text-gray-700 font-mono text-sm">
                      <strong>Latitud:</strong> 43.3506° N<br />
                      <strong>Longitud:</strong> −5.1631° W
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.google.com/maps?q=43.3506,-5.1631"
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
                      Entre <strong>70 y 90 vías</strong> en total sumando todos los subsectores
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Rango de Grados</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        IV+ / V (mínimo)
                      </Badge>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        8a (máximo)
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Estilo de Escalada</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-nature-mint text-nature-forest">Placas Técnicas</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Muros Verticales</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Ligeros Desplomes</Badge>
                      <Badge className="bg-nature-mint text-nature-forest">Caliza Compacta</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Subsectors */}
          <Card className="shadow-nature border-0 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <Target className="w-5 h-5" />
                Subsectores Principales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-nature-forest mb-3">Carbes - Sector Principal</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm">
                      Las vías clásicas de la escuela con grados accesibles para la mayoría de escaladores.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-nature-green text-nature-green">
                        Grados: V - 7a
                      </Badge>
                      <Badge variant="outline" className="border-nature-green text-nature-green">
                        Vías Clásicas
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Ideal para escaladores de nivel intermedio que buscan vías de calidad en un entorno clásico.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-nature-forest mb-3">Les Pedroses I y II</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm">
                      Sectores más recientes con vías de mayor nivel técnico y exigencia, incluyendo líneas hasta 8a.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-red-500 text-red-600">
                        Grados: Hasta 8a
                      </Badge>
                      <Badge variant="outline" className="border-red-500 text-red-600">
                        Alta Exigencia
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Para escaladores avanzados en busca de escalada técnica y desafiante.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
                      <strong>Sur y Sureste</strong> - Excelente soleado durante gran parte del día
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Mejor Época</h4>
                    <p className="text-gray-700">
                      <strong>Otoño, invierno y primavera</strong>. En verano puede resultar caluroso en horas centrales.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Condiciones</h4>
                    <p className="text-gray-700 text-sm">
                      Escalada recomendada fuera del verano para evitar el calor excesivo. 
                      La orientación sur proporciona buenas condiciones en meses fríos.
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
                      <li>Desde <strong>Cangas de Onís</strong>, tomar la carretera hacia <strong>Cabrales</strong></li>
                      <li>Desviarse hacia <strong>Carbes</strong></li>
                      <li>Aparcamiento en las <strong>inmediaciones del pueblo</strong></li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Aproximación a Pie</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>10-15 minutos</strong> por sendero hasta los sectores desde el aparcamiento del pueblo.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-orange-800 text-sm">
                      <strong>Importante:</strong> Respetar siempre a los vecinos del pueblo al aparcar y mantener bajo nivel de ruido.
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
                Croquis de Carbes
              </CardTitle>
              <CardDescription>
                Diagramas de todos los subsectores: Carbes Principal y Les Pedroses I y II
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Sector Principal */}
                <div className="bg-gradient-to-r from-green-50/50 to-nature-mint/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-nature-forest mb-4 text-center">
                    Carbes - Sector Principal
                  </h4>
                  <div className="relative bg-white rounded-lg p-4 shadow-lg">
                    <img 
                      src={croquisGeneral}
                      alt="Croquis Carbes Sector Principal"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-700 text-center">
                        <strong>Sector Principal:</strong> Vías clásicas de la escuela con grados V-7a. 
                        Escalada técnica en placas y muros verticales de caliza compacta.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Les Pedroses */}
                <div className="bg-gradient-to-r from-red-50/50 to-orange-50/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-nature-forest mb-4 text-center">
                    Les Pedroses I y II
                  </h4>
                  <div className="relative bg-white rounded-lg p-4 shadow-lg">
                    <img 
                      src={croquisPedroses}
                      alt="Croquis Les Pedroses I y II - Carbes"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-gray-700 text-center">
                        <strong>Les Pedroses:</strong> Sectores técnicos con vías hasta 8a. 
                        Escalada exigente en desplomes y placas técnicas para escaladores avanzados.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-2">Características Técnicas</h5>
                    <ul className="space-y-1 text-xs">
                      <li>• Escalada en placas técnicas y adherencia</li>
                      <li>• Muros verticales con regletas pequeñas</li>
                      <li>• Desplomes moderados en Les Pedroses</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-2">Progresión Recomendada</h5>
                    <ul className="space-y-1 text-xs">
                      <li>• Comenzar por el sector principal</li>
                      <li>• Progresar gradualmente a Les Pedroses</li>
                      <li>• Adaptar el estilo según experiencia</li>
                    </ul>
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
                  <h4 className="font-semibold text-nature-forest mb-3">Normas Ambientales</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Zona de alto valor natural - respetar sendas marcadas</li>
                    <li>• No dejar basura - llevarse todos los residuos</li>
                    <li>• Posibles prohibiciones temporales por nidificación</li>
                    <li>• Consultar carteles locales o FEDME antes de escalar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-forest mb-3">Normas Sociales</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Evitar ruido excesivo cerca del pueblo</li>
                    <li>• Respetar propiedades privadas y caminos</li>
                    <li>• Aparcar sin obstaculizar accesos vecinales</li>
                    <li>• Mantener buenas relaciones con la comunidad local</li>
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
                Información Adicional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">¿Por qué es Especial Carbes?</h4>
                  <p className="text-gray-700 text-sm">
                    Carbes se ha consolidado como una de las escuelas de referencia en los Picos de Europa 
                    debido a la variedad de sus subsectores, la calidad de la roca caliza y la progresión 
                    de dificultades que ofrece, desde vías accesibles hasta proyectos de máximo nivel.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">Recomendaciones Técnicas</h4>
                  <p className="text-gray-700 text-sm">
                    La escalada en placas técnicas requiere una buena técnica de pies y confianza en 
                    adherencia. Los desplomes moderados demandan fuerza de dedos y resistencia. 
                    Es recomendable progresar gradualmente por los diferentes subsectores.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <section className="text-center py-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-nature max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-nature-forest mb-4">
                ¿Listo para Carbes?
              </h3>
              <p className="text-gray-700 mb-6">
                Contacta con nosotros para más información sobre las condiciones actuales de los sectores, 
                alojamiento cercano en Cangas de Onís o consejos para tu sesión de escalada.
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