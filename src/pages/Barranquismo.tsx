import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Star, Phone, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import barranquismoImage from "@/assets/barranquismo-asturias.jpg";

const Barranquismo = () => {
  const empresas = [
    {
      name: "Los Cauces Multiaventura",
      location: "Arriondas (Oriente de Asturias)",
      website: "barrancosasturias.es",
      description: "Descenso de barrancos y cañones con varios niveles (familiar, medio, avanzado, muy alto), con todo el equipo incluido (neopreno, casco, arnés, botines etc.). Instalaciones, vestuarios, duchas.",
      specialty: "Todos los niveles"
    },
    {
      name: "Aipol Barrancos (Barranquismo Asturias)",
      location: "Calle Juan Carlos I, Arriondas",
      website: "Barranquismo en Asturias",
      description: "Ofrecen varios barrancos: Trescares (Rubó), Vallegón, Víboli, Carangas.",
      specialty: "Variedad de barrancos"
    },
    {
      name: "Sella10",
      location: "Arriondas / zona río Sella",
      website: "Sella10",
      description: "Diferentes niveles de dificultad: familiar, medio, avanzado, muy alto. Varios barrancos disponibles: Rubo, Vallegón, Carangas, Viboli, etc.",
      specialty: "Todos los niveles"
    },
    {
      name: "Everent",
      location: "Arriondas",
      website: "EVERENT",
      description: "Barranquismo en barranco Vallegón, tipo medio; barranco Carangas integral de nivel alto; también opción familiar en Rubo.",
      specialty: "Especialistas en Carangas"
    },
    {
      name: "Jaire Aventura",
      location: "Arriondas",
      website: "Aventúrate",
      description: "Descenso de cañones/barrancos, equipamiento completo, guías titulados, buen ambiente.",
      specialty: "Ambiente familiar"
    }
  ];

  const barrancos = [
    {
      name: "Barranco Rubo",
      level: "Bajo / Familiar",
      description: "Saltos suaves, toboganes, poca necesidad de rápel técnico, sirva bien para principiantes o niños a partir ~6‐8 años. Se requiere saber nadar.",
      duration: "2-2,5 horas",
      price: "~ 50 €",
      difficulty: "Familiar"
    },
    {
      name: "Barranco Vallegón / Carangas",
      level: "Medio",
      description: "Rápeles más importantes, desniveles mayores, toboganes y saltos moderados, algo más técnico que los familiar. Buen nivel físico requerido.",
      duration: "3-4 horas",
      price: "50-60 €",
      difficulty: "Medio"
    },
    {
      name: "Viboli",
      level: "Medio-Alto / Avanzado",
      description: "Muchas secciones más técnicas, más rápeles largos, mayor exigencia técnica y física. Presencia de pasos estrechos, caudales que condicionan.",
      duration: "4-5 horas",
      price: "60-70 €",
      difficulty: "Avanzado"
    },
    {
      name: "Carangas integral",
      level: "Alto / Muy alto",
      description: "Rápeles numerosos (hasta ~30 según la empresa), desnivel grande, algunas secciones exigentes, saltos/toboganes más grandes, ambiente más técnico. No recomendable sin experiencia previa.",
      duration: "4-5 horas",
      price: "70 € o más",
      difficulty: "Muy Alto"
    },
    {
      name: "Barranco Vau Azones (Arenas de Cabrales)",
      level: "Muy alto (nivel IV)",
      description: "Requiere experiencia, buen estado físico. Secciones exigentes, rápel más verticales y continuos.",
      duration: "4-5 horas",
      price: "Precio elevado",
      difficulty: "Extremo"
    }
  ];

  const requisitos = [
    "Saber nadar es imprescindible en la mayoría de los barrancos",
    "Edad mínima varía según empresa y barranco; los familiares tienen menores desde ~6-8 años, los más técnicos desde ~16 o más",
    "Buen estado físico: no hace falta ser atleta, pero subir, bajar, caminar por terreno irregular, saltar, nadar, soportar frío… todo ello requiere resistencia",
    "Equipamiento: empresas suelen incluir traje de neopreno, casco, arnés, botines, mosquetones, cuerdas, etc.",
    "Temporada: mejor durante primavera/verano, cuando los cauces tienen caudal adecuado pero no desbordado",
    "Reserva anticipada: algunas empresas requieren reservar con antelación, especialmente para niveles avanzado o grupos grandes",
    "Condiciones del río: el caudal puede afectar mucho la dificultad. Siempre pregunta por alertas, nivel del agua, previsión meteorológica"
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Familiar": return "bg-green-100 text-green-800";
      case "Medio": return "bg-yellow-100 text-yellow-800";
      case "Avanzado": return "bg-orange-100 text-orange-800";
      case "Muy Alto": return "bg-red-100 text-red-800";
      case "Extremo": return "bg-purple-100 text-purple-800";
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
            BARRANQUISMO EN ARRIONDAS
          </h1>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-card-nature mb-12">
            <img
              src={barranquismoImage}
              alt="Barranquismo en Asturias"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Aventura en los Barrancos Asturianos
                </h2>
                <p className="text-lg lg:text-xl">
                  Descenso de cañones con rápeles, saltos y toboganes naturales
                </p>
              </div>
            </div>
          </div>

          {/* Empresas Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Empresas de Barranquismo cerca de Arriondas
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

          {/* Barrancos Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Barrancos Disponibles
            </h2>
            <div className="space-y-6">
              {barrancos.map((barranco, index) => (
                <Card key={index} className="shadow-card-nature">
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <CardTitle className="text-xl text-nature-forest">
                        {barranco.name}
                      </CardTitle>
                      <Badge className={getDifficultyColor(barranco.difficulty)}>
                        {barranco.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      <strong>{barranco.level}</strong>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {barranco.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-nature-green" />
                        <span><strong>Duración:</strong> {barranco.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Star className="w-4 h-4 mr-2 text-nature-green" />
                        <span><strong>Precio:</strong> {barranco.price}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-nature-green" />
                        <span><strong>Nivel:</strong> {barranco.level}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Requisitos Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Qué debes tener en cuenta / Requisitos
            </h2>
            <Card className="shadow-card-nature">
              <CardHeader>
                <CardTitle className="flex items-center text-nature-forest">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                  Requisitos y Consideraciones Importantes
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

          {/* Comparativa de Dificultad */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-nature-forest">
              Comparativa de Dificultad
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg shadow-card-nature overflow-hidden">
                <thead>
                  <tr className="bg-nature-green text-white">
                    <th className="p-4 text-left font-semibold">Nivel</th>
                    <th className="p-4 text-left font-semibold">Qué esperar</th>
                    <th className="p-4 text-left font-semibold">Barranco recomendado</th>
                    <th className="p-4 text-left font-semibold">Para quién es</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">Familiar</Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Poco rápel, saltos suaves/toboganes fáciles, recorridos cortos, buen control emocional
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Rubo familiar, Vallegón inferior-Carangas para iniciación
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Familias con niños, personas nuevas al barranquismo
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">
                      <Badge className="bg-yellow-100 text-yellow-800">Medio</Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Rápeles moderados, saltos + toboganes, algo de vertical, recorrido más largo
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Vallegón medio, Carangas medio, Viboli nivel medio
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Personas con algo de práctica, buena forma física
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <Badge className="bg-red-100 text-red-800">Alto</Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Múltiples rápeles importantes, desnivel considerable, pasos técnicos
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Carangas integral, Viboli integral, Vau Azones
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      Experiencia previa, controlan técnica, resistencia física
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="text-center p-8 bg-nature-green/10 rounded-lg border border-nature-green/20">
            <h3 className="text-2xl font-bold mb-4 text-nature-forest">
              ¿Listo para la aventura?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contacta directamente con las empresas especializadas para reservar tu experiencia de barranquismo. 
              Recuerda verificar las condiciones meteorológicas y el nivel del agua antes de tu actividad.
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

export default Barranquismo;