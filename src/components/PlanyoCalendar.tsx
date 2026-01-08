import React, { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlanyoCalendarProps {
  apartmentName: string;
  calendarId: string;
  jsonpUrl: string;
}

const PlanyoCalendar: React.FC<PlanyoCalendarProps> = ({ 
  apartmentName, 
  calendarId,
  jsonpUrl 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add CSS links
    const cssLinks = [
      'https://www.planyo.com/libs/fullcalendar-scheduler/lib/fullcalendar.min.css',
      'https://www.planyo.com/libs/fullcalendar-scheduler/scheduler.min.css',
      'https://www.planyo.com/planyonet/planyo.net.css'
    ];

    cssLinks.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // Initialize Planyo configuration for this specific calendar
    if (!(document as any).cp_instances) {
      (document as any).cp_instances = [];
    }

    // Check if this calendar instance already exists
    const existingIndex = (document as any).cp_instances.findIndex(
      (instance: any) => instance.element_id === calendarId
    );
    
    const calendarConfig = {
      'all_views': 'custMonth',
      'def_view': 'custMonth',
      'time_unit': 1440,
      'resources': [{ "id": "Resource_1", "title": "Resource 1", "granulation": "1440", "click_url": null }],
      'resource_id': "Resource_1",
      'jsonp_url': { url: jsonpUrl, cache: false },
      'timezone': 'site',
      'tz_offset': 0,
      'min_hour': '8:00:00',
      'max_hour': '20:00:00',
      'open_frame': "_top",
      'element_id': calendarId,
      'fetching_id': `cp_fetch_${calendarId}`,
      'lng': 'es'
    };

    if (existingIndex >= 0) {
      (document as any).cp_instances[existingIndex] = calendarConfig;
    } else {
      (document as any).cp_instances.push(calendarConfig);
    }

    (document as any).cp_time_format = 'HH:mm';
    (document as any).cp_title_format = 'dddd, MMMM Do, YYYY';
    (document as any).cp_title_format_short = 'ddd, MMM Do';
    (document as any).cp_s_day = "day";
    (document as any).cp_s_days = "days";
    (document as any).cp_s_vert_day = "vertical day";
    (document as any).cp_s_month = "month";
    (document as any).cp_s_week = "week";
    (document as any).cp_s_weeks = "weeks";
    (document as any).cp_s_agenda = "agenda";

    // Load scripts in order
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initCalendar = async () => {
      try {
        await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js');
        await loadScript('https://www.planyo.com/libs/planyonet-fc.js');
        await loadScript('https://www.planyo.com/libs/fullcalendar/locale/es.js');
        
        // Remove existing embed script to force re-initialization
        const existingEmbed = document.querySelector('script[src="https://www.planyo.com/embed-schedule.js"]');
        if (existingEmbed) {
          existingEmbed.remove();
        }
        
        // Add embed script fresh
        const embedScript = document.createElement('script');
        embedScript.src = 'https://www.planyo.com/embed-schedule.js';
        document.head.appendChild(embedScript);
      } catch (error) {
        console.error('Error loading Planyo scripts:', error);
      }
    };

    initCalendar();

    return () => {
      // Clean up this calendar instance on unmount
      if ((document as any).cp_instances) {
        const idx = (document as any).cp_instances.findIndex(
          (instance: any) => instance.element_id === calendarId
        );
        if (idx >= 0) {
          (document as any).cp_instances.splice(idx, 1);
        }
      }
    };
  }, [calendarId, jsonpUrl]);

  return (
    <div className="w-full">
      <Card className="w-full bg-card shadow-card-nature">
        <CardHeader>
          <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
            Disponibilidad - {apartmentName}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Planyo Calendar Container */}
          <div ref={containerRef}>
            <div id={calendarId} className="cp_calendar cp_units_30"></div>
            <a 
              title="Calendar powered by Planyo" 
              href="http://www.planyo.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cp_pb text-xs text-muted-foreground"
            >
              calendar
            </a>
            <div 
              id={`cp_fetch_${calendarId}`} 
              className="cp_fetching" 
              style={{ position: 'absolute', left: '200px', top: '10px', display: 'none', zIndex: 999 }}
            >
              <img src="https://www.planyo.com/images/hourglass.gif" alt="Loading..." />
            </div>
          </div>

          {/* Contact Info Section */}
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

export default PlanyoCalendar;
