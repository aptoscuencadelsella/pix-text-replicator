import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Mountain, Eye, AlertTriangle, TreePine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";
import croquisTrincherona from "@/assets/crokis/img_1514.jpg";

export default function TrincheronaNFitu() {
  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>Trincherona y Fitu - Escalada Sierra del Sueve | Apartamentos Rurales</title>
        <meta 
          name="description" 
          content="Escalada deportiva en Trincherona y Fitu, Sierra del Sueve. 25-35 vías del V al 7c con vistas espectaculares a Picos de Europa y la costa asturiana." 
        />
        <meta 
          name="keywords" 
          content="Trincherona escalada, Fitu escalada deportiva, Sierra del Sueve, mirador Fitu, escalada Parres Asturias" 
        />
        <meta property="og:title" content="Trincherona y Fitu - Escalada en Sierra del Sueve" />
        <meta property="og:description" content="Descubre la escalada en Trincherona y Fitu con vistas espectaculares en la Sierra del Sueve, Asturias." />
        <link rel="canonical" href="https://cuencadelsella.com/trincherona-fitu" />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-4">TRINCHERONA Y FITU</h1>
                <p className="text-xl md:text-2xl opacity-90">Sierra del Sueve - Vistas espectaculares</p>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <Card className="mb-8 shadow-nature border-0 bg-gradient-to-r from-nature-mint/20 to-nature-green/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-nature-forest" />
                <h2 className="text-xl font-bold text-nature-forest">Zona Privilegiada</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Situada en la Sierra del Sueve cerca del famoso mirador del Fitu, esta zona ofrece 
                una experiencia única combinando escalada técnica con vistas espectaculares a los 
                Picos de Europa y la costa asturiana.
              </p>
            </CardContent>
          </Card>

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
                  <p className="text-gray-700">Parres, Sierra del Sueve - Cerca del mirador del Fitu</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Coordenadas:</strong> 43.4520° N, -5.2400° W
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Altitud:</strong> ~600 metros
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Características</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vías:</span>
                      <span className="font-medium">25-35 vías</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grados:</span>
                      <span className="font-medium">V a 7c</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Altura:</span>
                      <span className="font-medium">15-30 metros</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Roca:</span>
                      <span className="font-medium">Caliza compacta</span>
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
                  <p className="text-gray-700">10-15 minutos desde el aparcamiento por sendero hasta los sectores</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Desde Arriondas por AS-260 hacia mirador del Fitu
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Orientación</h3>
                  <p className="text-gray-700">Oeste y Suroeste - Sol a partir del mediodía</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-2">Mejor época</h3>
                  <p className="text-gray-700">Primavera, verano y otoño. Escalada fresca por la altitud. En invierno puede estar frío y húmedo.</p>
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
                    <li>• Escalada en placa técnica</li>
                    <li>• Muros verticales de caliza compacta</li>
                    <li>• Vías de longitud moderada (15-30m)</li>
                    <li>• Grados desde principiantes hasta expertos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-nature-forest mb-3">Ventajas Únicas</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-nature-mint text-nature-forest">Vistas espectaculares</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Sierra del Sueve</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Escalada fresca</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Caliza de calidad</Badge>
                    <Badge className="bg-nature-mint text-nature-forest">Cerca del Fitu</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Croquis Section */}
          <Card className="shadow-nature border-0 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <Mountain className="w-5 h-5" />
                Croquis de Trincherona N'Fitu
              </CardTitle>
              <CardDescription>
                Diagramas de escalada en la Sierra del Sueve con vistas panorámicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-nature-forest mb-4 text-center">
                    Sector Trincherona N'Fitu - Sierra del Sueve
                  </h4>
                  <div className="relative bg-white rounded-lg p-4 shadow-lg">
                    <img 
                      src={croquisTrincherona}
                      alt="Croquis Trincherona N'Fitu - Sierra del Sueve"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-gray-700 text-center">
                        <strong>Zona Privilegiada:</strong> Escalada en caliza con vistas únicas 
                        a los Picos de Europa y la costa cantábrica.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-1">Vistas a Picos</h5>
                    <p>Panorámica única de los Picos de Europa desde la Sierra del Sueve.</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-1">Vista Costera</h5>
                    <p>Amplias vistas de la costa cantábrica y el mar.</p>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-nature-forest mb-1">Escalada Natural</h5>
                    <p>Roca caliza en entorno natural preservado.</p>
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
                <TreePine className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p><strong>Entorno protegido:</strong> La Sierra del Sueve es un espacio natural protegido. Imprescindible respetar flora y fauna local.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p><strong>Aparcamiento responsable:</strong> Evitar dejar coches mal aparcados en la carretera del Fitu, muy transitada en verano por turistas.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p><strong>Restricciones temporales:</strong> Posibles prohibiciones puntuales por nidificación. Consultar carteles en el acceso o FEDME antes de escalar.</p>
              </div>
            </CardContent>
          </Card>

          {/* Scenic Value */}
          <Card className="mb-12 shadow-nature border-0 bg-gradient-to-br from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-forest">
                <Eye className="w-5 h-5" />
                Valor Paisajístico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                La ubicación privilegiada en la Sierra del Sueve, cerca del mirador del Fitu, 
                convierte esta zona en una de las más espectaculares de Asturias para combinar 
                escalada deportiva con turismo paisajístico.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">Vistas hacia el Sur</h4>
                  <p className="text-sm text-gray-600">Panorámica completa de los Picos de Europa y cordillera Cantábrica</p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">Vistas hacia el Norte</h4>
                  <p className="text-sm text-gray-600">Costa asturiana, mar Cantábrico y acantilados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-nature max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-nature-forest mb-4">
                Combina Escalada y Paisaje
              </h3>
              <p className="text-gray-700 mb-6">
                Descubre una de las zonas más espectaculares de Asturias. Contacta con nosotros 
                para información sobre condiciones, accesos y alojamiento cercano.
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