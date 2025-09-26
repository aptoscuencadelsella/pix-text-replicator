import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/');
    const apartmentSlug = pathSegments[pathSegments.length - 1];
    
    // Convert slug back to apartment name
    const apartmentName = apartmentSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    console.log('Generating iCal for apartment:', apartmentName);

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    // Fetch reservations for this apartment
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations?apartment_name=ilike.%25${encodeURIComponent(apartmentName)}%25&status=eq.confirmed&order=check_in_date.asc`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Error fetching reservations:', await response.text());
      return new Response('Error fetching reservations', { status: 500 });
    }

    const reservations = await response.json();
    console.log('Found reservations:', reservations.length);

    // Generate iCal content
    const formatICalDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toISOString().replace(/[-:]/g, '').split('T')[0];
    };

    const formatDateTime = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };

    let iCalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Cuenca del Sella//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:${apartmentName} - Reservas
X-WR-CALDESC:Calendario de reservas para ${apartmentName}
X-WR-TIMEZONE:Europe/Madrid
BEGIN:VTIMEZONE
TZID:Europe/Madrid
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:20070325T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:20071028T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
`;

    // Add each reservation as an event
    reservations.forEach((reservation: any, index: number) => {
      const checkIn = new Date(reservation.check_in_date);
      const checkOut = new Date(reservation.check_out_date);
      
      iCalContent += `BEGIN:VEVENT
UID:${reservation.id}@cuencadelsella.com
DTSTAMP:${formatDateTime(new Date())}
DTSTART;VALUE=DATE:${formatICalDate(reservation.check_in_date)}
DTEND;VALUE=DATE:${formatICalDate(reservation.check_out_date)}
SUMMARY:OCUPADO - ${reservation.guest_name || 'Reserva'}
DESCRIPTION:Reserva en ${apartmentName}${reservation.guest_name ? `\\nHuésped: ${reservation.guest_name}` : ''}${reservation.booking_source ? `\\nOrigen: ${reservation.booking_source}` : ''}\\n\\nContacto: info@cuencadelsella.com
LOCATION:${reservation.apartment_location || 'Asturias'}, España
STATUS:CONFIRMED
TRANSP:OPAQUE
CATEGORIES:RESERVA
CLASS:PRIVATE
END:VEVENT
`;
    });

    iCalContent += `END:VCALENDAR`;

    // Return iCal file
    return new Response(iCalContent, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="${apartmentSlug}-reservas.ics"`,
        'Cache-Control': 'no-cache, must-revalidate',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('Error in ical-feed function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : String(error) 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});