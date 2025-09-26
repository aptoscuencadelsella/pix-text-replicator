-- Insertar datos de ejemplo para probar el sistema iCal
INSERT INTO public.reservations (
  apartment_name, 
  apartment_location, 
  check_in_date, 
  check_out_date, 
  guest_name, 
  guest_email, 
  booking_source, 
  status, 
  total_nights,
  notes
) VALUES 
(
  'Apartamento Rio Sella II',
  'Cangas de Onís', 
  '2025-01-15',
  '2025-01-20',
  'Juan Pérez',
  'juan@email.com',
  'booking_com',
  'confirmed',
  5,
  'Reserva de prueba sincronizada desde Booking.com'
),
(
  'Apartamento Rio Sella II',
  'Cangas de Onís', 
  '2025-02-10',
  '2025-02-14',
  'María García',
  'maria@email.com',
  'web',
  'confirmed',
  4,
  'Reserva directa desde la web'
),
(
  'Casa Rural Arriondas',
  'Arriondas', 
  '2025-01-25',
  '2025-01-28',
  'Carlos López',
  'carlos@email.com',
  'booking_com',
  'confirmed',
  3,
  'Reserva desde Booking.com'
) ON CONFLICT DO NOTHING;