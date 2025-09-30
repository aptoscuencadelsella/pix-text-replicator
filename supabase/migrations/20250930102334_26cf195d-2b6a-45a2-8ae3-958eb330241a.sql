-- Configure iCal URL for Apartamento Rio Sella I (Arriondas)
INSERT INTO apartment_ical_urls (apartment_name, apartment_location, ical_url)
VALUES ('Apartamento Rio Sella I', 'Arriondas', 'https://ical.booking.com/v1/export?t=b5307509-d988-4c62-9465-4f55ad010203')
ON CONFLICT (apartment_name, apartment_location) 
DO UPDATE SET ical_url = EXCLUDED.ical_url, updated_at = now();