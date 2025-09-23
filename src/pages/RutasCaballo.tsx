import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Star, Phone, Globe, AlertTriangle, CheckCircle, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import paseoCaballoImage from "@/assets/paseo-caballo.jpg";

const RutasCaballo = () => {
  const empresas = [
    {
      name: "El Dorado – Rutas a Caballo",
      location: "Soto de Cangas, cerca de Cangas de Onís",
      website: "rutasacaballoeldorado.com",
      description: "Paseos de 1 hora, 2 horas, rutas de largo recorrido, subida a los Lagos de Covadonga etc.",
      specialty: "Rutas a Lagos de Covadonga"
    },
    {
      name: "Los Cauces / Descenso del Sella",
      location: "Arriondas / Cangas de Onís zona cercana",
      website: "Mejor Rural España",
      description: "Paseos tranquilos de 1-2 horas, también rutas de día completo.",
      specialty: "Rutas familiares"
    },
    {
      name: "FróntVerde / Fronteraverde Aventura",
      location: "Arriondas",
      website: "fronteraverde.com",
      description: "Paseos de 1 hora en bosque / montaña, todo nivel, para hacer en familia",
      specialty: "Rutas familiares en bosque"
    },
    {
      name: "Cangas Aventura",
      location: "Oriente de Asturias, cercano a Arriondas / Cangas de Onís",
      website: "Cangas Aventura",
      description: "Rutas de 1 o 2 horas, instalaciones con merendero, equipamiento básico incluido, vistas naturales preciosas.",
      specialty: "Instalaciones completas"
    },
    {
      name: "Despedidas La Gran Juerga",
      location: "Sevares, cerca de Arriondas / Cangas de Onís",
      website: "Despedidas La Gran Juerga",
      description: "Rutas de 1 hora, opción con comida, monitor, casco, seguro, para todo tipo de público.",
      specialty: "Opción con comida incluida"
    },
    {
      name: "Equusfera",
      location: "Asturias (base no confirmada exactamente)",
      website: "Turismo Asturias",
      description: "Rutas ecuestres de corta y larga distancia, adaptadas a distintos niveles, durante todo el año.",
      specialty: "Todo el año disponible"
    }
  ];

  const rutasEjemplos = [
    {
      name: "Ruta con Los Cauces (Arriondas)",
      duration: "1 - 2 horas",
      price: "18-30 €",
      details: "1 h: ~ 18 €, 2 h: ~ 30 €",
      requirements: "Sin experiencia previa necesaria; edad mínima ~8 años y estatura mínima 1,20-1,30 m",
      difficulty: "Principiante"
    },
    {
      name: "Ruta de El Dorado",
      duration: "2 horas",
      price: "35-40 €",
      details: "Incluye bebida/refresco",
      requirements: "Niños desde ~8 años y altura mínima ~1,20 m",
      difficulty: "Principiante"
    },
    {
      name: "Ruta La Gran Juerga",
      duration: "1 hora",
      price: "22-42 €",
      details: "22 € básica, 42 € con comida",
      requirements: "Todo público; equipo básico incluido; adecuado para principiantes",
      difficulty: "Principiante"
    },
    {
      name: "Ruta Fronteraverde",
      duration: "1 hora",
      price: "20-25 €",
      details: "25 € adultos, 20 € niños hasta 12 años",
      requirements: "Edad mínima 9 años; altura mínima 1,30 m; casco obligatorio",
      difficulty: "Principiante"
    },
    {
      name: "Ruta Cangas Aventura",
      duration: "1 o 2 horas",
      price: "25-40 €",
      details: "1 hora: 25 €, 2 horas: 40 €",
      requirements: "Sin experiencia aceptada; caballos mansos; equipo básico incluido",
      difficulty: "Principiante"
    },
    {
      name: "Camino a Caballo Coviella",
      duration: "1 hora",
      price: "15-18 €",
      details: "18 € adultos, 15 € niños hasta 12 años",
      requirements: "Estatura mínima 1,30 m; niños ≤12 años acompañados; casco obligatorio",
      difficulty: "Principiante"
    }
  ];

  const requisitos = [
    "Edad mínima suele estar entre 8-10 años, a veces menor si el niño es experimentado o va con guía/monitor",
    "Altura mínima entre 1,20 y 1,30 metros dependiendo de la empresa",
    "No se requiere experiencia previa para la mayoría de rutas de 1-2 horas; los caballos son dóciles y los grupos suelen ir con guía",
    "Equipamiento: casco obligatorio; se recomienda usar pantalón largo, calzado cerrado y cómodo. En días de lluvia, ropa adecuada",
    "Reserva previa: especialmente en temporadas de verano o fines de semana. Algunas empresas están cerradas entre noviembre y marzo o tienen días de descanso fuera de temporada alta"
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Principiante": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-yellow-100 text-yellow-800";
      case "Avanzado": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          
          {/* Back Button */}
          <Link to="/actividades-cuenca" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a actividades
          </Link>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
            RUTAS A CABALLO EN LA CUENCA DEL SELLA
          </h1>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-card-nature mb-12">
            <img
              src={paseoCaballoImage}
              alt="Rutas a caballo en Asturias"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Explora la Naturaleza Asturiana a Caballo
                </h2>
                <p className="text-lg lg:text-xl">
                  Rutas ecuestres para toda la familia en el Oriente de Asturias
                </p>
              </div>
            </div>
          </div>

          {/* Empresas Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Empresas Principales que Ofrecen Rutas a Caballo
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {empresas.map((empresa, index) => (
                <Card key={index} className="shadow-card-nature">
                  <CardHeader>
                    <CardTitle className="text-xl text-nature-forest flex items-start justify-between">
                      <span>{empresa.name}</span>
                      <Globe className="w-5 h-5 text-nature-green flex-shrink-0 ml-2" />
                    </CardTitle>
                    <CardDescription className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      {empresa.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {empresa.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-nature-green/10 text-nature-green">
                        {empresa.specialty}
                      </Badge>
                      <span className="text-xs text-nature-green font-medium">
                        {empresa.website}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Rutas Ejemplos Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Ejemplos Concretos de Rutas: Duración, Precios y Requisitos
            </h2>
            <div className="space-y-6">
              {rutasEjemplos.map((ruta, index) => (
                <Card key={index} className="shadow-card-nature">
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <CardTitle className="text-xl text-nature-forest">
                        {ruta.name}
                      </CardTitle>
                      <Badge className={getDifficultyColor(ruta.difficulty)}>
                        {ruta.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>Detalles:</strong> {ruta.details}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-nature-green" />
                        <span><strong>Duración:</strong> {ruta.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Euro className="w-4 h-4 mr-2 text-nature-green" />
                        <span><strong>Precio:</strong> {ruta.price}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-nature-green" />
                        <span><strong>Nivel:</strong> {ruta.difficulty}</span>
                      </div>
                    </div>
                    <div className="bg-nature-green/5 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Requisitos:</strong> {ruta.requirements}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Requisitos Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Requisitos Habituales y Consejos
            </h2>
            <Card className="shadow-card-nature">
              <CardHeader>
                <CardTitle className="flex items-center text-nature-forest">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                  Información Importante Antes de Reservar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitos.map((requisito, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <CheckCircle className="w-5 h-5 mr-3 text-nature-green flex-shrink-0 mt-0.5" />
                      <span>{requisito}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Recomendaciones Extra */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-nature-green/10 to-nature-forest/10 p-8 rounded-lg border border-nature-green/20">
              <h3 className="text-2xl font-bold mb-4 text-nature-forest text-center">
                Consejos para Disfrutar al Máximo
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">Qué Llevar:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pantalón largo y cómodo</li>
                    <li>• Calzado cerrado y con suela</li>
                    <li>• Protector solar y gorra</li>
                    <li>• Ropa de abrigo (según época)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">Mejor Época:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Primavera y verano: mayor disponibilidad</li>
                    <li>• Otoño: paisajes espectaculares</li>
                    <li>• Invierno: consultar disponibilidad</li>
                    <li>• Evitar días de lluvia intensa</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="text-center p-8 bg-nature-green/10 rounded-lg border border-nature-green/20">
            <h3 className="text-2xl font-bold mb-4 text-nature-forest">
              ¿Listo para tu Aventura Ecuestre?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contacta directamente con las empresas especializadas para reservar tu ruta a caballo. 
              Recuerda verificar disponibilidad y condiciones meteorológicas antes de tu actividad.
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
      </main>
    </div>
  );
};

export default RutasCaballo;