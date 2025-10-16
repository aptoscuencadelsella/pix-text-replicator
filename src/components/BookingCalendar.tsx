import React, { useEffect } from "react";
import { Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookingCalendarProps {
  apartmentName: string;
  apartmentLocation: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ apartmentName, apartmentLocation }) => {
  useEffect(() => {
    // ✅ Dynamically load Tockify embed script when component mounts
    const script = document.createElement("script");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-tockify-script", "embed");
    script.src = "https://public.tockify.com/browser/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up when unmounting
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <Card className="w-full bg-card shadow-card-nature">
        <CardHeader>
          <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
            Disponibilidad - {apartmentName}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* ✅ Tockify Embed Calendar */}
          <div data-tockify-component="calendar" data-tockify-calendar="arriondas"></div>{" "}
          <script
            data-cfasync="false"
            data-tockify-script="embed"
            src="https://public.tockify.com/browser/embed.js"
          ></script>
          {/* 📞 Contact Info Section (kept from original code) */}
          <div className="mt-6 p-6 bg-nature-green/10 rounded-lg border border-nature-green/20">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-nature-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-nature-forest mb-2">¿Quieres reservar? ¡Llámanos!</h4>
                <p className="text-muted-foreground mb-3 text-sm">
                  Para confirmar tu reserva o consultar disponibilidad adicional, contáctanos directamente:
                </p>
                <a
                  href="tel:+34649505800"
                  className="inline-flex items-center gap-2 text-xl font-bold text-nature-green hover:text-nature-forest transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +34 649 505 800
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingCalendar;
