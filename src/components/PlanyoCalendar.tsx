import React, { useMemo } from "react";
import { Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlanyoCalendarProps {
  apartmentName: string;
  /** The full jsonp_url from Planyo embed code (the part after "url:" in the config) */
  jsonpUrl: string;
}

const PlanyoCalendar: React.FC<PlanyoCalendarProps> = ({ 
  apartmentName, 
  jsonpUrl 
}) => {
  // Build the full HTML that Planyo expects, with optimized script loading
  const iframeSrcDoc = useMemo(() => {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Preload critical resources -->
  <link rel="preload" href="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" as="script">
  <link rel="preload" href="https://www.planyo.com/libs/planyonet-fc.js" as="script">
  <link rel="preload" href="https://www.planyo.com/embed-schedule.js" as="script">
  <!-- CSS -->
  <link href="https://www.planyo.com/libs/fullcalendar-scheduler/lib/fullcalendar.min.css" rel="stylesheet" />
  <link href="https://www.planyo.com/libs/fullcalendar-scheduler/scheduler.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://www.planyo.com/planyonet/planyo.net.css" type="text/css" />
  <style>
    html, body {
      margin: 0;
      padding: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: transparent;
      overflow: hidden;
    }
    .cp_calendar {
      width: 100%;
    }
    .cp_pb {
      display: none;
    }
    /* FullCalendar mobile text adjustments */
    .fc .fc-toolbar-title {
      font-size: 1rem !important;
    }
    .fc .fc-button {
      font-size: 0.75rem !important;
      padding: 0.25em 0.5em !important;
    }
    @media (max-width: 480px) {
      .fc .fc-toolbar-title {
        font-size: 0.85rem !important;
      }
      .fc .fc-button {
        font-size: 0.65rem !important;
        padding: 0.2em 0.4em !important;
      }
      .fc .fc-toolbar {
        flex-wrap: wrap;
        gap: 4px;
      }
    }
    /* Available days in green */
    .fc .fc-daygrid-day {
      background-color: #dcfce7 !important; /* light green */
    }
    .fc .fc-daygrid-day:hover {
      background-color: #bbf7d0 !important; /* slightly darker green on hover */
    }
    /* Keep booked/unavailable days in red (Planyo uses these classes) */
    .fc .fc-daygrid-day.fc-day-past,
    .fc .fc-daygrid-day.cp_unavailable,
    .fc .fc-daygrid-day.cp_booked,
    .fc .fc-daygrid-day.cp_reserved {
      background-color: #fecaca !important; /* light red */
    }
    /* Today marker */
    .fc .fc-daygrid-day.fc-day-today {
      background-color: #a7f3d0 !important; /* brighter green for today */
      border: 2px solid #22c55e !important;
    }
  </style>
</head>
<body>
  <div id="cpcal_planyonet" class="cp_calendar cp_units_30"></div>
  <a title="Calendar powered by Planyo" href="http://www.planyo.net" target="_blank" class="cp_pb">calendar</a>
  <div id="cp_fetch_cpcal_planyonet" class="cp_fetching" style="position:absolute;left:200px;top:10px;display:none;z-index:999;">
    <img src="https://www.planyo.com/images/hourglass.gif" />
  </div>

  <script>
    // Config first (sync)
    if(!document.cp_instances) document.cp_instances = [];
    document.cp_instances.push({
      'all_views': 'custMonth',
      'def_view': 'custMonth',
      'time_unit': 1440,
      'resources': [{"id":"Resource_1","title":"Resource 1","granulation":"1440","click_url":null}],
      'resource_id': "Resource_1",
      'jsonp_url': {url: "${jsonpUrl}", cache: false},
      'timezone': 'site',
      'tz_offset': 0,
      'min_hour': '8:00:00',
      'max_hour': '20:00:00',
      'open_frame': "_top",
      'element_id': 'cpcal_planyonet',
      'fetching_id': 'cp_fetch_cpcal_planyonet',
      'lng': 'es'
    });
    document.cp_time_format = 'HH:mm';
    document.cp_title_format = 'dddd, MMMM Do, YYYY';
    document.cp_title_format_short = 'ddd, MMM Do';
    document.cp_s_day = "day";
    document.cp_s_days = "days";
    document.cp_s_vert_day = "vertical day";
    document.cp_s_month = "month";
    document.cp_s_week = "week";
    document.cp_s_weeks = "weeks";
    document.cp_s_agenda = "agenda";

    // Parallel script loading with Promise.all for speed
    function loadScript(src) {
      return new Promise(function(resolve, reject) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }

    // Load jQuery first (required), then others in parallel
    loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js')
      .then(function() {
        return Promise.all([
          loadScript('https://www.planyo.com/libs/planyonet-fc.js'),
          loadScript('https://www.planyo.com/libs/fullcalendar/locale/es.js')
        ]);
      })
      .then(function() {
        return loadScript('https://www.planyo.com/embed-schedule.js');
      });
  </script>
</body>
</html>
    `.trim();
  }, [jsonpUrl]);

  return (
    <div className="w-full">
      <Card className="w-full bg-card shadow-card-nature">
        <CardHeader>
          <CardTitle className="text-2xl text-nature-forest flex items-center gap-2">
            Disponibilidad - {apartmentName}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Planyo Calendar in iframe - isolated from React */}
          <iframe
            srcDoc={iframeSrcDoc}
            title={`Calendario de disponibilidad - ${apartmentName}`}
            className="w-full border-0 rounded-lg"
            style={{ minHeight: '500px', height: '520px' }}
            sandbox="allow-scripts allow-same-origin"
          />

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
