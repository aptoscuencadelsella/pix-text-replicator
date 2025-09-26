-- Create reservations table to store bookings from different sources
CREATE TABLE public.reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  apartment_name TEXT NOT NULL,
  apartment_location TEXT NOT NULL,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  guest_name TEXT,
  guest_email TEXT,
  booking_source TEXT NOT NULL DEFAULT 'web', -- 'booking_com', 'airbnb', 'web', etc.
  external_booking_id TEXT, -- ID from external platform
  status TEXT NOT NULL DEFAULT 'confirmed', -- 'confirmed', 'cancelled', 'pending'
  total_nights INTEGER NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Create policy - for now allowing all operations, you can restrict later if needed
CREATE POLICY "Allow all operations on reservations" 
ON public.reservations 
FOR ALL 
USING (true);

-- Create index for better performance on date queries
CREATE INDEX idx_reservations_dates ON public.reservations (check_in_date, check_out_date);
CREATE INDEX idx_reservations_apartment ON public.reservations (apartment_name, apartment_location);
CREATE INDEX idx_reservations_source ON public.reservations (booking_source);

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_reservations_updated_at
BEFORE UPDATE ON public.reservations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to check for overlapping reservations
CREATE OR REPLACE FUNCTION public.check_reservation_overlap()
RETURNS TRIGGER AS $$
BEGIN
  -- Check for overlapping reservations in the same apartment
  IF EXISTS (
    SELECT 1 FROM public.reservations
    WHERE apartment_name = NEW.apartment_name 
      AND apartment_location = NEW.apartment_location
      AND status = 'confirmed'
      AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
      AND (
        (NEW.check_in_date >= check_in_date AND NEW.check_in_date < check_out_date) OR
        (NEW.check_out_date > check_in_date AND NEW.check_out_date <= check_out_date) OR
        (NEW.check_in_date <= check_in_date AND NEW.check_out_date >= check_out_date)
      )
  ) THEN
    RAISE EXCEPTION 'Ya existe una reserva confirmada para estas fechas en este apartamento';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger to prevent overlapping reservations
CREATE TRIGGER prevent_reservation_overlap
BEFORE INSERT OR UPDATE ON public.reservations
FOR EACH ROW
EXECUTE FUNCTION public.check_reservation_overlap();