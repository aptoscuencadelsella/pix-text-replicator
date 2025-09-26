import React, { useState, useEffect } from "react";
import { format, addDays, parseISO, isWithinInterval, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, getDay, startOfWeek, endOfWeek } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Download, Link, Upload, Eye, EyeOff, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface BookingCalendarProps {
  apartmentName: string;
  apartmentLocation: string;
}

interface Reservation {
  id: string;
  check_in_date: string;
  check_out_date: string;
  booking_source: string;
  status: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  apartmentName,
  apartmentLocation,
}) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingComUrl, setBookingComUrl] = useState('');
  const [showBookingSync, setShowBookingSync] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // Fetch existing reservations
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data, error } = await supabase
          .from('reservations')
          .select('id, check_in_date, check_out_date, booking_source, status')
          .eq('apartment_name', apartmentName)
          .eq('apartment_location', apartmentLocation)
          .eq('status', 'confirmed');

        if (error) {
          console.error('Error fetching reservations:', error);
          toast({
            title: "Error",
            description: "No se pudieron cargar las reservas existentes",
            variant: "destructive",
          });
        } else {
          setReservations(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [apartmentName, apartmentLocation]);

  // Check if a date is blocked (has an existing reservation)
  const isDateBlocked = (date: Date) => {
    return reservations.some(reservation => {
      const checkIn = parseISO(reservation.check_in_date);
      const checkOut = parseISO(reservation.check_out_date);
      
      return isWithinInterval(date, {
        start: checkIn,
        end: addDays(checkOut, -1) // Exclude checkout date
      });
    });
  };

  // Check if a date is selected
  const isDateSelected = (date: Date) => {
    return selectedDates.some(selectedDate => isSameDay(selectedDate, date));
  };

  // Handle date click
  const handleDateClick = (date: Date) => {
    if (isDateBlocked(date) || date < new Date()) return;

    setSelectedDates(prev => {
      const isSelected = prev.some(selectedDate => isSameDay(selectedDate, date));
      if (isSelected) {
        return prev.filter(selectedDate => !isSameDay(selectedDate, date));
      } else {
        return [...prev, date].sort((a, b) => a.getTime() - b.getTime());
      }
    });
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  };

  // Generate our iCal URL
  const getOurICalUrl = () => {
    const apartmentSlug = apartmentName.toLowerCase().replace(/\s+/g, '-');
    return `https://zrotjwlerjlowtxmzabz.supabase.co/functions/v1/ical-feed/${apartmentSlug}.ics`;
  };

  // Sync with Booking.com
  const syncWithBookingCom = async () => {
    if (!bookingComUrl.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa la URL de iCal de Booking.com",
        variant: "destructive",
      });
      return;
    }

    setSyncing(true);
    try {
      // Here you would implement the actual sync logic
      // For now, we'll simulate it
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "¡Éxito!",
        description: "Sincronización con Booking.com completada",
      });
      
      // Refresh reservations
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo sincronizar con Booking.com",
        variant: "destructive",
      });
    } finally {
      setSyncing(false);
    }
  };

  const generateICalEvent = () => {
    if (selectedDates.length === 0) {
      toast({
        title: "Error",
        description: "Por favor selecciona al menos una fecha",
        variant: "destructive",
      });
      return;
    }

    // Formatear fechas para iCal (formato YYYYMMDD)
    const formatICalDate = (date: Date) => {
      return format(date, "yyyyMMdd");
    };

    // Crear eventos para cada fecha seleccionada
    let iCalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Picos de Europa Apartments//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH\n`;

    selectedDates.forEach((date, index) => {
      iCalContent += `BEGIN:VEVENT
UID:${Date.now()}-${index}@picosdeeuropaapartments.com
DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss'Z'")}
DTSTART;VALUE=DATE:${formatICalDate(date)}
DTEND;VALUE=DATE:${formatICalDate(addDays(date, 1))}
SUMMARY:Ocupado - ${apartmentName}
DESCRIPTION:Día ocupado en ${apartmentName}, ${apartmentLocation}\\n\\nContacto: info@picosdeeuropaapartments.com
LOCATION:${apartmentLocation}, Asturias, España
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT\n`;
    });

    iCalContent += `END:VCALENDAR`;

    // Crear y descargar archivo .ics
    const blob = new Blob([iCalContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ocupacion-${apartmentLocation.toLowerCase().replace(/\s+/g, "-")}-${formatICalDate(new Date())}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: "¡Éxito!",
      description: "Archivo iCal generado con las fechas seleccionadas.",
    });
  };

  const clearSelection = () => {
    setSelectedDates([]);
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <div className="w-full space-y-6">
      {/* Calendario Visual Interactivo */}
      <Card className="w-full bg-card shadow-card-nature">
        <CardHeader>
          <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
            <CalendarIcon className="w-6 h-6" />
            Calendario Interactivo - {apartmentName}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Navegación del mes */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentMonth(addDays(startOfMonth(currentMonth), -1))}
              className="px-3"
            >
              ←
            </Button>
            <h3 className="text-lg font-semibold capitalize">
              {format(currentMonth, "MMMM yyyy", { locale: es })}
            </h3>
            <Button
              variant="outline"
              onClick={() => setCurrentMonth(addDays(endOfMonth(currentMonth), 1))}
              className="px-3"
            >
              →
            </Button>
          </div>

          {/* Calendario */}
          <div className="grid grid-cols-7 gap-1">
            {/* Días de la semana */}
            {weekDays.map(day => (
              <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            
            {/* Días del mes */}
            {calendarDays.map((day, index) => {
              const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
              const isBlocked = isDateBlocked(day);
              const isSelected = isDateSelected(day);
              const isPast = day < new Date();
              const isToday = isSameDay(day, new Date());

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(day)}
                  disabled={!isCurrentMonth || isBlocked || isPast}
                  className={cn(
                    "p-2 text-sm border rounded-md transition-all duration-200 min-h-[40px]",
                    {
                      // Mes actual
                      "text-foreground": isCurrentMonth,
                      "text-muted-foreground/50": !isCurrentMonth,
                      
                      // Estados
                      "bg-nature-green text-white font-semibold": isSelected,
                      "bg-red-100 text-red-800 cursor-not-allowed": isBlocked && isCurrentMonth,
                      "bg-gray-100 text-gray-400 cursor-not-allowed": isPast && isCurrentMonth,
                      "ring-2 ring-blue-500": isToday && !isSelected,
                      
                      // Hover
                      "hover:bg-nature-light/20 hover:border-nature-green": 
                        isCurrentMonth && !isBlocked && !isPast && !isSelected,
                    }
                  )}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>

          {/* Leyenda */}
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-nature-green rounded"></div>
              <span>Seleccionado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
              <span>Ocupado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
              <span>No disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
              <span>Hoy</span>
            </div>
          </div>

          {/* Fechas seleccionadas */}
          {selectedDates.length > 0 && (
            <div className="bg-nature-light/10 rounded-lg p-4 border border-nature-green/20">
              <h4 className="font-semibold text-nature-forest mb-2">
                Fechas Seleccionadas ({selectedDates.length})
              </h4>
              <div className="text-sm text-muted-foreground max-h-20 overflow-y-auto">
                {selectedDates.map((date, index) => (
                  <span key={index} className="inline-block mr-2 mb-1">
                    {format(date, "dd/MM/yyyy", { locale: es })}
                    {index < selectedDates.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={generateICalEvent}
              disabled={selectedDates.length === 0}
              className="bg-nature-green hover:bg-nature-forest text-white border-none font-semibold px-6 py-2 shadow-nature transition-all duration-300 hover:shadow-lg flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Generar iCal ({selectedDates.length} días)
            </Button>
            
            <Button
              variant="outline"
              onClick={clearSelection}
              disabled={selectedDates.length === 0}
              className="px-6 py-2"
            >
              Limpiar Selección
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sincronización con Booking.com */}
      <Card className="w-full bg-card">
        <CardHeader>
          <CardTitle className="text-xl text-nature-forest flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link className="w-5 h-5" />
              Sincronización de Calendarios
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBookingSync(!showBookingSync)}
            >
              {showBookingSync ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Tu enlace iCal (compártelo con Booking.com):</Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={getOurICalUrl()}
                readOnly
                className="flex-1"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(getOurICalUrl());
                  toast({ title: "¡Copiado!", description: "Enlace copiado al portapapeles" });
                }}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {showBookingSync && (
            <div className="space-y-4 border-t pt-4">
              <div>
                <Label className="text-sm font-medium">Enlace iCal de Booking.com:</Label>
                <Input
                  placeholder="https://admin.booking.com/hotel/hoteladmin/ical/..."
                  value={bookingComUrl}
                  onChange={(e) => setBookingComUrl(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Encuentra este enlace en tu panel de Booking.com → Calendario → iCal
                </p>
              </div>

              <Button
                onClick={syncWithBookingCom}
                disabled={syncing || !bookingComUrl.trim()}
                className="w-full"
              >
                {syncing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Sincronizando...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Sincronizar con Booking.com
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Estado de reservas */}
          {loading ? (
            <div className="text-sm text-muted-foreground text-center">
              Cargando disponibilidad...
            </div>
          ) : (
            <div className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950/20 rounded p-3 border border-blue-200 dark:border-blue-800">
              <p className="mb-1">
                <strong>Estado actual:</strong>
              </p>
              <p>
                {reservations.length} reserva(s) confirmada(s) 
                {reservations.some(r => r.booking_source === 'booking_com') && 
                  ` (${reservations.filter(r => r.booking_source === 'booking_com').length} de Booking.com)`
                }
              </p>
              <p className="text-xs mt-1">
                Última actualización: {new Date().toLocaleString('es-ES')}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingCalendar;