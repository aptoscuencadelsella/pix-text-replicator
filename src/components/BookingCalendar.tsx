import React, { useState, useEffect } from "react";
import { format, addDays, parseISO, isWithinInterval, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);

  // Fetch existing reservations
  const fetchReservations = async () => {
    setRefreshing(true);
    try {
      const { data, error } = await supabase
        .from('reservations')
        .select('id, check_in_date, check_out_date, booking_source, status')
        .eq('apartment_name', apartmentName)
        .eq('apartment_location', apartmentLocation)
        .eq('status', 'confirmed');

      if (error) {
        console.error('Error fetching reservations:', error);
      } else {
        setReservations(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchReservations();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchReservations, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
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


  // Generate calendar days
  const generateCalendarDays = () => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  };


  const calendarDays = generateCalendarDays();
  const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <div className="w-full">
      <Card className="w-full bg-card shadow-card-nature">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
              <CalendarIcon className="w-6 h-6" />
              Disponibilidad - {apartmentName}
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchReservations}
              disabled={refreshing}
            >
              <RefreshCw className={cn("w-4 h-4", refreshing && "animate-spin")} />
            </Button>
          </div>
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
              const isPast = day < new Date();
              const isToday = isSameDay(day, new Date());

              return (
                <div
                  key={index}
                  className={cn(
                    "p-2 text-sm border rounded-md min-h-[40px] flex items-center justify-center",
                    {
                      // Mes actual
                      "text-foreground": isCurrentMonth,
                      "text-muted-foreground/30": !isCurrentMonth,
                      
                      // Estados
                      "bg-red-100 text-red-800 font-medium": isBlocked && isCurrentMonth,
                      "bg-green-50 text-green-700": !isBlocked && !isPast && isCurrentMonth,
                      "bg-gray-50 text-gray-400": isPast && isCurrentMonth,
                      "ring-2 ring-blue-500": isToday,
                    }
                  )}
                >
                  {format(day, "d")}
                </div>
              );
            })}
          </div>

          {/* Leyenda */}
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-50 border border-green-200 rounded"></div>
              <span>Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
              <span>Ocupado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
              <span>Hoy</span>
            </div>
          </div>

          {/* Estado de reservas */}
          {loading ? (
            <div className="text-sm text-muted-foreground text-center py-4">
              Cargando disponibilidad...
            </div>
          ) : (
            <div className="text-sm text-muted-foreground bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <p className="font-medium mb-2">
                {reservations.length} reserva(s) confirmada(s)
              </p>
              {reservations.some(r => r.booking_source === 'booking_com') && (
                <p className="text-xs">
                  Incluye {reservations.filter(r => r.booking_source === 'booking_com').length} reserva(s) sincronizada(s) desde Booking.com
                </p>
              )}
              <p className="text-xs mt-2 opacity-70">
                Se actualiza automáticamente cada 5 minutos
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingCalendar;