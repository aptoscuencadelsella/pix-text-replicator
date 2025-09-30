-- Configure iCal URL for Apartamento Rio Sella II (Cangas de Onís)
INSERT INTO apartment_ical_urls (apartment_name, apartment_location, ical_url)
VALUES ('Apartamento Rio Sella II', 'Cangas de Onís', 'https://ical.booking.com/v1/export?t=e138c151-c37d-46ec-92af-72c655ebf9c7')
ON CONFLICT (apartment_name, apartment_location) 
DO UPDATE SET ical_url = EXCLUDED.ical_url, updated_at = now();