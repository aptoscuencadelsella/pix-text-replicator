import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ICalEvent {
  uid: string;
  summary: string;
  dtstart: string;
  dtend: string;
}

// Parse iCal format
function parseICalendar(icalText: string): ICalEvent[] {
  const events: ICalEvent[] = [];
  const lines = icalText.split(/\r?\n/);
  
  let currentEvent: Partial<ICalEvent> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (line === 'END:VEVENT' && currentEvent) {
      if (currentEvent.dtstart && currentEvent.dtend) {
        events.push(currentEvent as ICalEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith('UID:')) {
        currentEvent.uid = line.substring(4);
      } else if (line.startsWith('SUMMARY:')) {
        currentEvent.summary = line.substring(8);
      } else if (line.startsWith('DTSTART')) {
        const dateValue = line.split(':')[1];
        currentEvent.dtstart = formatICalDate(dateValue);
      } else if (line.startsWith('DTEND')) {
        const dateValue = line.split(':')[1];
        currentEvent.dtend = formatICalDate(dateValue);
      }
    }
  }
  
  return events;
}

// Convert iCal date format to ISO date (YYYY-MM-DD)
function formatICalDate(icalDate: string): string {
  // Handle both DATE (YYYYMMDD) and DATETIME (YYYYMMDDTHHMMSS) formats
  const dateOnly = icalDate.split('T')[0];
  const year = dateOnly.substring(0, 4);
  const month = dateOnly.substring(4, 6);
  const day = dateOnly.substring(6, 8);
  return `${year}-${month}-${day}`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    console.log('Starting iCal sync process...');

    // Fetch all apartment iCal URLs
    const { data: apartments, error: fetchError } = await supabase
      .from('apartment_ical_urls')
      .select('*');

    if (fetchError) {
      console.error('Error fetching apartment URLs:', fetchError);
      return new Response(
        JSON.stringify({ error: 'Error fetching apartment URLs', details: fetchError }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!apartments || apartments.length === 0) {
      console.log('No apartments configured for sync');
      return new Response(
        JSON.stringify({ message: 'No apartments configured for sync' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const syncResults = [];

    // Sync each apartment
    for (const apartment of apartments) {
      console.log(`Syncing ${apartment.apartment_name}...`);
      
      try {
        // Fetch iCal feed
        const icalResponse = await fetch(apartment.ical_url);
        
        if (!icalResponse.ok) {
          console.error(`Failed to fetch iCal for ${apartment.apartment_name}`);
          syncResults.push({
            apartment: apartment.apartment_name,
            success: false,
            error: 'Failed to fetch iCal'
          });
          continue;
        }

        const icalText = await icalResponse.text();
        const events = parseICalendar(icalText);

        console.log(`Found ${events.length} events for ${apartment.apartment_name}`);

        // Process each event
        for (const event of events) {
          const checkInDate = event.dtstart;
          const checkOutDate = event.dtend;
          
          // Calculate total nights
          const checkIn = new Date(checkInDate);
          const checkOut = new Date(checkOutDate);
          const totalNights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

          // Check if reservation already exists
          const { data: existing } = await supabase
            .from('reservations')
            .select('id')
            .eq('external_booking_id', event.uid)
            .eq('apartment_name', apartment.apartment_name)
            .single();

          if (existing) {
            console.log(`Reservation ${event.uid} already exists, skipping...`);
            continue;
          }

          // Insert new reservation
          const { error: insertError } = await supabase
            .from('reservations')
            .insert({
              apartment_name: apartment.apartment_name,
              apartment_location: apartment.apartment_location,
              check_in_date: checkInDate,
              check_out_date: checkOutDate,
              guest_name: event.summary || 'Reserva Booking.com',
              booking_source: 'booking_com',
              external_booking_id: event.uid,
              status: 'confirmed',
              total_nights: totalNights,
              notes: 'Sincronizado automáticamente desde Booking.com'
            });

          if (insertError) {
            console.error(`Error inserting reservation:`, insertError);
          } else {
            console.log(`Successfully inserted reservation ${event.uid}`);
          }
        }

        syncResults.push({
          apartment: apartment.apartment_name,
          success: true,
          eventsProcessed: events.length
        });

      } catch (error) {
        console.error(`Error syncing ${apartment.apartment_name}:`, error);
        syncResults.push({
          apartment: apartment.apartment_name,
          success: false,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }

    console.log('Sync complete:', syncResults);

    return new Response(
      JSON.stringify({ 
        message: 'Sync completed', 
        results: syncResults 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in sync-ical-calendars function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : String(error) 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
