-- Create a separate table for sensitive guest contact information
-- Only admins can access this table (not managers)
CREATE TABLE public.reservation_guest_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reservation_id uuid NOT NULL REFERENCES public.reservations(id) ON DELETE CASCADE,
  guest_name text,
  guest_email text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(reservation_id)
);

-- Enable RLS
ALTER TABLE public.reservation_guest_details ENABLE ROW LEVEL SECURITY;

-- Only admins can view guest details (NOT managers - stricter than reservations table)
CREATE POLICY "Only admin can view guest details"
ON public.reservation_guest_details
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Only admins can insert guest details
CREATE POLICY "Only admin can insert guest details"
ON public.reservation_guest_details
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'));

-- Only admins can update guest details
CREATE POLICY "Only admin can update guest details"
ON public.reservation_guest_details
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

-- Only admins can delete guest details
CREATE POLICY "Only admin can delete guest details"
ON public.reservation_guest_details
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Migrate existing guest data from reservations to the new table
INSERT INTO public.reservation_guest_details (reservation_id, guest_name, guest_email)
SELECT id, guest_name, guest_email 
FROM public.reservations 
WHERE guest_name IS NOT NULL OR guest_email IS NOT NULL;

-- Remove sensitive columns from reservations table
ALTER TABLE public.reservations DROP COLUMN IF EXISTS guest_name;
ALTER TABLE public.reservations DROP COLUMN IF EXISTS guest_email;