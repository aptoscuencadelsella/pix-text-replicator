import { Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Euro, Camera, Info, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import puenteRomano from "@/assets/puente-romano-cangas.jpg";
import cangasNocturna from "@/assets/cangas-nocturna.png";

const Cangas = () => {
  const lugares = [
    {
      nombre: "Puente Romano",
      descripcion: "Emblema de Cangas, medieval aunque llamado 'romano'. Con la Cruz de la Victoria colgando.",
      horario: "24h",
      precio: "Gratis",
      destacado: true
    },
    {
      nombre: "Oficina de Turismo (Casa Riera)",
      descripcion: "Muy cerca del puente, para recoger mapas y folletos.",
      horario: "Verano (julio-sept): 9:00-20:00. Invierno: lun-sáb 10:00-14:00 y 16:00-19:00; dom 10:00-14:00",
      precio: "Gratis"
    },
    {
      nombre: "Plaza del Mercado",
      descripcion: "Mercado dominical con quesos, sidra y productos locales. Buen ambiente todo el año.",
      horario: "Abierto todo el día (mercado domingos)",
      precio: "Gratis"
    },
    {
      nombre: "Iglesia de la Asunción",
      descripcion: "Conjunto religioso principal de la villa.",
      horario: "Consultar interiores",
      precio: "Gratis o donativo"
    },
    {
      nombre: "Ermita de la Santa Cruz",
      descripcion: "Templo prerrománico con gran carga histórica.",
      horario: "Consultar interiores",
      precio: "Gratis o donativo"
    },
    {
      nombre: "Parque de la Casa Riera",
      descripcion: "Zona verde tranquila para pasear o descansar.",
      horario: "Abierto todo el día",
      precio: "Gratis"
    },
    {
      nombre: "Cueva del Buxu",
      descripcion: "Arte rupestre paleolítico, visitas guiadas limitadas.",
      horario: "Mi-do, visitas 10:30, 11:30, 12:30, 15:15, 16:15",
      precio: "Tarifa reducida, visita guiada"
    },
    {
      nombre: "Museo de Covadonga",
      descripcion: "Para los interesados en la historia de la Reconquista y la Virgen de Covadonga.",
      horario: "10:30-14:00 y 16:00-19:30",
      precio: "~2,50 € (adulto), ~1 € (niños)"
    }
  ];

  const itinerario = [
    { hora: "08:30-09:00", actividad: "Aparcar en el parking de la Estación de Autobuses. Desayuno cerca del centro." },
    { hora: "09:00-09:15", actividad: "Paseo desde el parking hasta el Puente Romano." },
    { hora: "09:15-10:00", actividad: "Fotos y visita al Puente Romano y alrededores." },
    { hora: "10:00-11:00", actividad: "Oficina de Turismo (Casa Riera) + Iglesia de la Asunción." },
    { hora: "11:00-12:00", actividad: "Ermita de la Santa Cruz y paseo por el Parque de la Casa Riera." },
    { hora: "12:00-13:30", actividad: "Mercado dominical (si coincide) o compras locales." },
    { hora: "13:30-15:00", actividad: "Almuerzo típico asturiano en el centro de Cangas." },
    { hora: "15:00-16:30", actividad: "Excursión a la Cueva del Buxu (con visita guiada)." },
    { hora: "16:30-17:30", actividad: "Museo de Covadonga o paseo tranquilo por el pueblo." },
    { hora: "17:30-19:00", actividad: "Merienda / sidra en terraza y fotos finales en el Puente Romano." }
  ];

  const consejos = [
    "Llega temprano en temporada alta, el parking se llena rápido.",
    "Lleva calzado cómodo: el pueblo es fácil de recorrer a pie.",
    "En domingo, aprovecha el mercado, pero ten en cuenta que hay más afluencia.",
    "Mete un chubasquero ligero: en Asturias el tiempo cambia rápido."
  ];

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
            CANGAS DE ONÍS
          </h1>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-card-nature mb-12">
            <img
              src={puenteRomano}
              alt="Puente Romano de Cangas de Onís"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Capital Histórica de Asturias
                </h2>
                <p className="text-lg lg:text-xl">
                  Descubre la primera capital del Reino de Asturias
                </p>
              </div>
            </div>
          </div>

          {/* Información General */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="shadow-card-nature">
              <CardHeader>
                <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
                  <Info className="w-6 h-6" />
                  Información General
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Cangas de Onís fue la primera capital del Reino de Asturias y cuna de la Reconquista. 
                  Esta histórica villa conserva un patrimonio arquitectónico excepcional y es puerta 
                  de entrada a los Picos de Europa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Su emblemático Puente Romano (aunque medieval) con la Cruz de la Victoria es uno 
                  de los monumentos más fotografiados de Asturias.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Qué Ver */}
          <div className="max-w-7xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-nature-forest">
              Qué Ver en Cangas de Onís
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {lugares.map((lugar, index) => (
                <Card key={index} className={`shadow-card-nature ${lugar.destacado ? 'border-nature-green' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-nature-forest flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {lugar.nombre}
                      {lugar.destacado && <Badge variant="secondary" className="bg-nature-green text-white">Imprescindible</Badge>}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {lugar.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {lugar.horario}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Euro className="w-4 h-4" />
                        {lugar.precio}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Itinerario Sugerido */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-nature-forest">
              Itinerario Sugerido (Día Completo)
            </h3>
            
            <Card className="shadow-card-nature">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {itinerario.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 min-w-[120px] text-sm font-semibold text-nature-forest">
                        <Calendar className="w-4 h-4" />
                        {item.hora}
                      </div>
                      <div className="flex-1 text-sm text-muted-foreground">
                        {item.actividad}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Consejos Útiles */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-nature-forest">
              Consejos Útiles
            </h3>
            
            <Card className="shadow-card-nature">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {consejos.map((consejo, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-nature-green rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {consejo}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto text-center p-8 bg-nature-green/10 rounded-lg border border-nature-green/20">
            <h3 className="text-2xl font-bold mb-4 text-nature-forest">
              ¿Necesitas Alojamiento en Cangas de Onís?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Descubre nuestros cómodos apartamentos en el corazón de Cangas de Onís, 
              perfectos para explorar todo lo que esta histórica villa tiene que ofrecer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cangas-apartments">
                <Button
                  size="lg"
                  className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  VER APARTAMENTOS
                </Button>
              </Link>
              <Link to="/contacto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-nature-green text-nature-green hover:bg-nature-green hover:text-white font-semibold px-8 py-3 text-lg transition-all duration-300"
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

export default Cangas;