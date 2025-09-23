import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Euro, Car, MapPin, AlertTriangle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import lagosImage from "@/assets/lagos-covadonga.jpg";
import basilicaNew from "@/assets/basilica-covadonga-lateral-new.jpg";

const Covadonga = () => {
  const images = [basilicaNew, lagosImage];

  const scheduleData = [
    { place: "Santuario (Basílica + Santa Cueva)", time: "8:00 - 20:00 todos los días" },
    { place: "Museo del Santuario", time: "Semana Santa - Oct 13: 10:30-14:00 y 16:00-19:00 | Resto: 10:30-14:00 y 16:00-18:30" },
    { place: "Tienda del Santuario", time: "10:30 - 18:30 todos los días" },
    { place: "Misas en la Basílica", time: "L-V: 9:00, 12:00, 13:30, 18:00 | S-D: 9:00, 11:00, 12:00, 13:30, 18:00" },
  ];

  const priceData = [
    { concept: "Santuario / Basílica / Santa Cueva", price: "Gratis" },
    { concept: "Museo - Adultos", price: "~3€ (visita guiada ~5€)" },
    { concept: "Museo - Reducida", price: "~1€ (visita guiada ~3€)" },
    { concept: "Museo - Menores 13 años", price: "Gratis" },
    { concept: "Autobús Lagos (ida-vuelta)", price: "~9€ adultos, ~3,50€ niños" },
  ];

  const itinerary = [
    { time: "08:00-09:00", activity: "Llegada al Santuario, aparcamiento, café ligero" },
    { time: "09:00-10:30", activity: "Visita a la Basílica y explanada" },
    { time: "10:30-11:15", activity: "Santa Cueva, Virgen, tumba Don Pelayo, fuente" },
    { time: "11:15-12:00", activity: "Museo del Santuario y tienda" },
    { time: "12:00-13:30", activity: "Almuerzo (comida asturiana local)" },
    { time: "13:30-15:00", activity: "Subida a Lagos de Covadonga" },
    { time: "15:00-17:30", activity: "Paseo por los lagos y miradores" },
    { time: "17:30-18:30", activity: "Regreso al santuario" },
    { time: "18:30-19:30", activity: "Cena ligera, admirar atardecer" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          
          {/* Back Button */}
          <Link to="/activities" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Actividades
          </Link>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-foreground">
              COVADONGA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Santuario de Covadonga y Lagos - El corazón espiritual y natural de Asturias
            </p>
          </div>

          {/* Image Carousel */}
          <div className="mb-12">
            <ImageCarousel images={images} alt="Santuario de Covadonga y Lagos" />
          </div>

          {/* General Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Información General y Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Covadonga es un lugar simbólico en Asturias: mezcla de naturaleza, historia y devoción religiosa. 
                Está dentro del concejo de Cangas de Onís, en los Picos de Europa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El Santuario comprende la Santa Cueva (donde está la Virgen "La Santina" y la tumba de Don Pelayo), 
                la Basílica de Santa María la Real, la colegiata de San Fernando, fuente de los 7 caños y jardines. 
                Los Lagos de Covadonga están muy cerca y se suelen incorporar a la visita.
              </p>
            </CardContent>
          </Card>

          {/* What to See */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Qué Ver en Covadonga</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Santa Cueva</h4>
                  <p className="text-muted-foreground text-sm">
                    La imagen de la Virgen de Covadonga ("La Santina"), la tumba de Don Pelayo, 
                    la gruta, la cascada de agua ("Chorrón") y la fuente de los Siete Caños.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Basílica de Santa María la Real</h4>
                  <p className="text-muted-foreground text-sm">
                    Edificio neorrománico de finales del siglo XIX. Majestuosa, con fachada de piedra clara, 
                    agujas y vistas espectaculares desde la explanada.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lagos de Covadonga</h4>
                  <p className="text-muted-foreground text-sm">
                    Lagos Enol y Ercina, miradores, rutas de senderismo, naturaleza de alta montaña, 
                    fauna y flora únicos de los Picos de Europa.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Schedules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scheduleData.map((item, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-medium text-sm text-foreground">{item.place}</h4>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  Precios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {priceData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.concept}</span>
                      <span className="font-medium text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transportation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Cómo Llegar y Transporte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">En Coche</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Se puede llegar al Santuario con vehículo propio. Hay zonas de aparcamiento cerca del Real Sitio.
                  </p>
                  <p className="text-xs text-amber-600">⚠️ En temporada alta el parking se llena pronto</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Autobús a los Lagos</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Servicio de lanzaderas cuando el acceso en coche está restringido.
                  </p>
                  <p className="text-xs text-muted-foreground">Funcionan de ~9:00 a ~19:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Desde Cangas de Onís</h4>
                  <p className="text-muted-foreground text-sm">
                    Transporte público o coche. Distancia: ~12 km.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tours Guiados</h4>
                  <p className="text-muted-foreground text-sm">
                    Disponibles desde Oviedo y otras ciudades. Ideal para excursiones de un día.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Itinerary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Itinerario Sugerido (Día Completo)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium min-w-fit">
                      {item.time}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.activity}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Useful Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Consejos Útiles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Llevar ropa de abrigo incluso en verano</li>
                  <li>• Calzado cómodo para suelos irregulares</li>
                  <li>• Evitar las horas punta (media mañana)</li>
                  <li>• Comprobar el estado del tiempo</li>
                  <li>• Reservar transporte a lagos anticipadamente</li>
                  <li>• Respetar horarios de culto</li>
                  <li>• Llevar comida/agua para los lagos</li>
                </ul>
              </CardContent>
            </Card>

            {/* Restrictions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Qué Evitar / Restricciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Acceso a Lagos puede estar prohibido para vehículos privados en temporada alta</li>
                  <li>• Restricciones de acceso durante misas o actos religiosos</li>
                  <li>• Aparcamiento muy limitado en períodos de gran afluencia</li>
                  <li>• El mal tiempo puede cerrar rutas y afectar la visibilidad</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              PLANIFICA TU VISITA A COVADONGA
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Covadonga;