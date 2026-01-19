import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Parse iCal date format (YYYYMMDD or with time)
const parseICalDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  
  // Remove VALUE=DATE: prefix if present
  const cleanDate = dateStr.replace(/VALUE=DATE:/i, '').replace(/TZID=[^:]+:/i, '');
  
  // Format: YYYYMMDD
  if (cleanDate.length === 8) {
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1;
    const day = parseInt(cleanDate.substring(6, 8));
    return new Date(year, month, day);
  }
  
  // Format: YYYYMMDDTHHMMSS or YYYYMMDDTHHMMSSZ
  if (cleanDate.length >= 15) {
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1;
    const day = parseInt(cleanDate.substring(6, 8));
    const hour = parseInt(cleanDate.substring(9, 11));
    const minute = parseInt(cleanDate.substring(11, 13));
    const second = parseInt(cleanDate.substring(13, 15));
    
    if (cleanDate.endsWith('Z')) {
      return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
    return new Date(year, month, day, hour, minute, second);
  }
  
  return null;
};

// Parse iCal content and extract events
const parseICalEvents = (icalContent: string): Array<{
  uid: string;
  summary: string;
  dtstart: Date | null;
  dtend: Date | null;
  description?: string;
}> => {
  const events: Array<{
    uid: string;
    summary: string;
    dtstart: Date | null;
    dtend: Date | null;
    description?: string;
  }> = [];
  
  // Split into individual events
  const eventBlocks = icalContent.split('BEGIN:VEVENT');
  
  for (let i = 1; i < eventBlocks.length; i++) {
    const block = eventBlocks[i].split('END:VEVENT')[0];
    
    const getProperty = (prop: string): string => {
      const regex = new RegExp(`${prop}[^:]*:(.*)`, 'im');
      const match = block.match(regex);
      return match ? match[1].trim() : '';
    };
    
    const uid = getProperty('UID');
    const summary = getProperty('SUMMARY') || 'Reserva externa';
    const dtstartStr = getProperty('DTSTART');
    const dtendStr = getProperty('DTEND');
    const description = getProperty('DESCRIPTION');
    
    if (uid && dtstartStr) {
      events.push({
        uid,
        summary,
        dtstart: parseICalDate(dtstartStr),
        dtend: parseICalDate(dtendStr),
        description,
      });
    }
  }
  
  return events;
};

// Calculate nights between two dates
const calculateNights = (checkIn: Date, checkOut: Date): number => {
  const diffTime = checkOut.getTime() - checkIn.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Determine booking source from iCal URL
const getBookingSource = (url: string, summary: string): string => {
  const lowerUrl = url.toLowerCase();
  const lowerSummary = summary.toLowerCase();
  
  if (lowerUrl.includes('booking.com') || lowerSummary.includes('booking')) {
    return 'booking.com';
  }
  if (lowerUrl.includes('airbnb') || lowerSummary.includes('airbnb')) {
    return 'airbnb';
  }
  if (lowerUrl.includes('vrbo') || lowerSummary.includes('vrbo')) {
    return 'vrbo';
  }
  return 'ical-sync';
};

const handler = async (req: Request): Promise<Response> => {
  console.log("sync-ical-calendars function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // Fetch all iCal URLs from the database
    const { data: icalUrls, error: fetchError } = await supabase
      .from('apartment_ical_urls')
      .select('*');

    if (fetchError) {
      console.error("Error fetching iCal URLs:", fetchError);
      throw fetchError;
    }

    if (!icalUrls || icalUrls.length === 0) {
      console.log("No iCal URLs configured");
      return new Response(
        JSON.stringify({ success: true, message: "No iCal URLs to sync", synced: 0 }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Found ${icalUrls.length} iCal URLs to sync`);
    
    let totalSynced = 0;
    const errors: string[] = [];

    for (const icalConfig of icalUrls) {
      try {
        console.log(`Syncing calendar for ${icalConfig.apartment_name} (${icalConfig.apartment_location})`);
        
        // Fetch the iCal feed
        const response = await fetch(icalConfig.ical_url, {
          headers: {
            'User-Agent': 'CuencaDelSella-ICalSync/1.0',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const icalContent = await response.text();
        const events = parseICalEvents(icalContent);
        
        console.log(`Parsed ${events.length} events from iCal feed`);
        
        // Process each event
        for (const event of events) {
          if (!event.dtstart || !event.dtend) {
            console.log(`Skipping event ${event.uid} - missing dates`);
            continue;
          }
          
          // Check if this external booking already exists
          const { data: existing } = await supabase
            .from('reservations')
            .select('id')
            .eq('external_booking_id', event.uid)
            .eq('apartment_name', icalConfig.apartment_name)
            .eq('apartment_location', icalConfig.apartment_location)
            .maybeSingle();
          
          const checkInDate = event.dtstart.toISOString().split('T')[0];
          const checkOutDate = event.dtend.toISOString().split('T')[0];
          const totalNights = calculateNights(event.dtstart, event.dtend);
          const bookingSource = getBookingSource(icalConfig.ical_url, event.summary);
          
          if (existing) {
            // Update existing reservation
            const { error: updateError } = await supabase
              .from('reservations')
              .update({
                check_in_date: checkInDate,
                check_out_date: checkOutDate,
                total_nights: totalNights,
                notes: event.description || event.summary,
                updated_at: new Date().toISOString(),
              })
              .eq('id', existing.id);
            
            if (updateError) {
              console.error(`Error updating reservation ${existing.id}:`, updateError);
            } else {
              console.log(`Updated reservation ${existing.id}`);
            }
          } else {
            // Create new reservation
            const { error: insertError } = await supabase
              .from('reservations')
              .insert({
                external_booking_id: event.uid,
                apartment_name: icalConfig.apartment_name,
                apartment_location: icalConfig.apartment_location,
                check_in_date: checkInDate,
                check_out_date: checkOutDate,
                total_nights: totalNights,
                booking_source: bookingSource,
                status: 'confirmed',
                notes: event.description || event.summary,
              });
            
            if (insertError) {
              // Don't fail on overlap errors, just log them
              if (insertError.message?.includes('Ya existe una reserva')) {
                console.log(`Skipping overlapping reservation for ${event.uid}`);
              } else {
                console.error(`Error inserting reservation:`, insertError);
              }
            } else {
              console.log(`Created new reservation for ${event.uid}`);
              totalSynced++;
            }
          }
        }
        
        // Update the last sync time
        await supabase
          .from('apartment_ical_urls')
          .update({ updated_at: new Date().toISOString() })
          .eq('id', icalConfig.id);
          
      } catch (err: any) {
        const errorMsg = `Error syncing ${icalConfig.apartment_name}: ${err.message}`;
        console.error(errorMsg);
        errors.push(errorMsg);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Sync completed`, 
        synced: totalSynced,
        errors: errors.length > 0 ? errors : undefined
      }),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );
    
  } catch (error: any) {
    console.error("Error in sync-ical-calendars function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );
  }
};

serve(handler);
