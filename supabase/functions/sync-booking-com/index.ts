import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingComReservation {
  booker_id: string;
  checkin: string;
  checkout: string;
  guest_name: string;
  guest_email: string;
  property_id: string;
  apartment_name: string;
  apartment_location: string;
  status: 'confirmed' | 'cancelled';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    console.log('Starting Booking.com sync process...');

    if (req.method === 'POST') {
      // Handle webhook from Booking.com
      const bookingData: BookingComReservation = await req.json();
      
      console.log('Received booking data:', bookingData);

      // Calculate nights
      const checkIn = new Date(bookingData.checkin);
      const checkOut = new Date(bookingData.checkout);
      const totalNights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

      // Prepare reservation data
      const reservationData = {
        apartment_name: bookingData.apartment_name,
        apartment_location: bookingData.apartment_location,
        check_in_date: bookingData.checkin,
        check_out_date: bookingData.checkout,
        guest_name: bookingData.guest_name,
        guest_email: bookingData.guest_email,
        booking_source: 'booking_com',
        external_booking_id: bookingData.booker_id,
        status: bookingData.status,
        total_nights: totalNights,
        notes: 'Sincronizado desde Booking.com'
      };

      // Make direct API call to Supabase
      const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(reservationData)
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Error saving reservation:', error);
        return new Response(
          JSON.stringify({ error: 'Error saving reservation', details: error }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const savedData = await response.json();
      console.log('Reservation saved successfully:', savedData);

      return new Response(
        JSON.stringify({ success: true, data: savedData }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (req.method === 'GET') {
      // Manual sync - fetch existing reservations from booking.com
      console.log('Manual sync requested - fetching existing Booking.com reservations');
      
      const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations?booking_source=eq.booking_com&order=created_at.desc`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Error fetching reservations:', error);
        return new Response(
          JSON.stringify({ error: 'Error fetching reservations', details: error }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const reservations = await response.json();

      return new Response(
        JSON.stringify({ reservations }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in sync-booking-com function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : String(error) 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});