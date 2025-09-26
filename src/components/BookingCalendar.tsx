import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface BookingCalendarProps {
  apartmentName: string;
  apartmentLocation: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  apartmentName,
  apartmentLocation,
}) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  const generateICalEvent = () => {
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Error",
        description: "Por favor selecciona las fechas de entrada y salida",
        variant: "destructive",
      });
      return;
    }

    if (checkOutDate <= checkInDate) {
      toast({
        title: "Error", 
        description: "La fecha de salida debe ser posterior a la fecha de entrada",
        variant: "destructive",
      });
      return;
    }

    // Formatear fechas para iCal (formato YYYYMMDD)
    const formatICalDate = (date: Date) => {
      return format(date, "yyyyMMdd");
    };

    // Generar contenido iCal
    const iCalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Picos de Europa Apartments//ES
BEGIN:VEVENT
UID:${Date.now()}@picosdeeuropaapartments.com
DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss'Z'")}
DTSTART;VALUE=DATE:${formatICalDate(checkInDate)}
DTEND;VALUE=DATE:${formatICalDate(addDays(checkOutDate, 1))}
SUMMARY:Reserva ${apartmentName}
DESCRIPTION:Reserva en ${apartmentName}, ${apartmentLocation}\\nCheck-in: 18:00h\\nCheck-out: 12:00h\\n\\nContacto: info@picosdeeuropaapartments.com
LOCATION:${apartmentLocation}, Asturias, España
STATUS:CONFIRMED
TRANSP:OPAQUE
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Recordatorio: Reserva ${apartmentName} mañana
TRIGGER:-P1D
END:VALARM
END:VEVENT
END:VCALENDAR`;

    // Crear y descargar archivo .ics
    const blob = new Blob([iCalContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `reserva-${apartmentLocation.toLowerCase().replace(/\s+/g, "-")}-${formatICalDate(checkInDate)}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: "¡Éxito!",
      description: "Archivo de calendario descargado. Importalo a tu calendario favorito.",
    });
  };

  const resetDates = () => {
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <Card className="w-full bg-card shadow-card-nature">
      <CardHeader>
        <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          Seleccionar Fechas de Reserva
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Fecha de Entrada
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkInDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? (
                    format(checkInDate, "PPP", { locale: es })
                  ) : (
                    <span>Seleccionar fecha</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Fecha de Salida
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOutDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? (
                    format(checkOutDate, "PPP", { locale: es })
                  ) : (
                    <span>Seleccionar fecha</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  disabled={(date) => 
                    date < new Date() || (checkInDate && date <= checkInDate)
                  }
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Resumen de la reserva */}
        {checkInDate && checkOutDate && (
          <div className="bg-nature-light/10 rounded-lg p-4 border border-nature-green/20">
            <h4 className="font-semibold text-nature-forest mb-2">
              Resumen de tu reserva
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <strong>Entrada:</strong> {format(checkInDate, "PPP", { locale: es })} - 18:00h
              </p>
              <p>
                <strong>Salida:</strong> {format(checkOutDate, "PPP", { locale: es })} - 12:00h
              </p>
              <p>
                <strong>Noches:</strong> {calculateNights()} {calculateNights() === 1 ? "noche" : "noches"}
              </p>
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={generateICalEvent}
            disabled={!checkInDate || !checkOutDate}
            className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-6 py-2 shadow-nature transition-all duration-300 hover:shadow-lg flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar Calendario (.ics)
          </Button>
          
          <Button
            variant="outline"
            onClick={resetDates}
            disabled={!checkInDate && !checkOutDate}
            className="px-6 py-2"
          >
            Limpiar Fechas
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center bg-muted/50 rounded p-3">
          <p className="mb-1">
            <strong>¿Qué es un archivo .ics?</strong>
          </p>
          <p>
            Es un formato estándar de calendario que puedes importar a Google Calendar, 
            Outlook, Apple Calendar o cualquier otra aplicación de calendario para 
            recordar tu reserva.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCalendar;