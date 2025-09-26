import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function slugToName(slug: string) {
  return slug
    .replace(/\.ics$/i, "")
    .split("-")
    .map((w) => (w.length <= 2 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function formatDateToICal(dateStr: string) {
  // dateStr is YYYY-MM-DD, keep as local all-day value
  return dateStr.replace(/-/g, "");
}

function buildICS(apartmentName: string, reservations: any[]) {
  const lines: string[] = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push("PRODID:-//Cuenca del Sella//iCal Feed//ES");
  lines.push("CALSCALE:GREGORIAN");
  lines.push("METHOD:PUBLISH");
  lines.push(`X-WR-CALNAME:${apartmentName} - Reservas`);
  lines.push(`X-WR-CALDESC:Calendario de reservas para ${apartmentName}`);

  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  for (const r of reservations) {
    const uid = `${r.id || crypto.randomUUID()}@cuencadelsella.com`;
    const dtStart = formatDateToICal(r.check_in_date);
    const dtEnd = formatDateToICal(r.check_out_date); // exclusive for all-day

    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${uid}`);
    lines.push(`DTSTAMP:${now}`);
    lines.push(`DTSTART;VALUE=DATE:${dtStart}`);
    lines.push(`DTEND;VALUE=DATE:${dtEnd}`);
    lines.push(`SUMMARY:OCUPADO - ${r.guest_name ? String(r.guest_name).replace(/\r?\n/g, " ") : "Reserva"}`);
    const parts: string[] = [
      `Apartamento: ${apartmentName}`,
      r.apartment_location ? `Ubicación: ${r.apartment_location}` : undefined,
      r.booking_source ? `Origen: ${r.booking_source}` : undefined,
    ].filter(Boolean) as string[];
    const desc = parts.join("\\n");
    lines.push(`DESCRIPTION:${desc}`);
    lines.push("TRANSP:OPAQUE");
    lines.push("STATUS:CONFIRMED");
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");

  // RFC 5545 requires CRLF line endings
  return lines.join("\r\n");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const slug = pathSegments[pathSegments.length - 1];

    if (!slug) {
      return new Response("Missing apartment slug", { status: 400, headers: corsHeaders });
    }

    const apartmentName = slugToName(slug);

    if (req.method === "HEAD") {
      // Respond OK so Booking.com can validate quickly
      return new Response(null, {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "text/calendar; charset=utf-8",
        },
      });
    }

    if (req.method !== "GET") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    // Fetch confirmed reservations for the apartment (case-insensitive contains)
    const resp = await fetch(
      `${SUPABASE_URL}/rest/v1/reservations?apartment_name=ilike.%25${encodeURIComponent(
        apartmentName,
      )}%25&status=eq.confirmed&order=check_in_date.asc`,
      {
        headers: {
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
      },
    );

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Supabase fetch error:", resp.status, text);
      return new Response("Upstream error", { status: 502, headers: corsHeaders });
    }

    const reservations = await resp.json();
    const ics = buildICS(apartmentName, reservations);

    return new Response(ics, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": `inline; filename="${slug.replace(/\.ics$/i, "")}.ics"`,
        "Cache-Control": "no-cache, must-revalidate",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error in ical-feed:", error);
    return new Response(
      JSON.stringify({ error: "Internal error", details: error instanceof Error ? error.message : String(error) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
