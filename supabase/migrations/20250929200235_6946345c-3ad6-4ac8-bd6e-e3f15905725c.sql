-- Create table to store iCal URLs for each apartment
CREATE TABLE IF NOT EXISTS public.apartment_ical_urls (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  apartment_name TEXT NOT NULL,
  apartment_location TEXT NOT NULL,
  ical_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(apartment_name, apartment_location)
);

-- Enable RLS
ALTER TABLE public.apartment_ical_urls ENABLE ROW LEVEL SECURITY;

-- Only admin and manager can manage iCal URLs
CREATE POLICY "Only admin and manager can view iCal URLs"
  ON public.apartment_ical_urls
  FOR SELECT
  USING (is_admin_or_manager(auth.uid()));

CREATE POLICY "Only admin and manager can insert iCal URLs"
  ON public.apartment_ical_urls
  FOR INSERT
  WITH CHECK (is_admin_or_manager(auth.uid()));

CREATE POLICY "Only admin and manager can update iCal URLs"
  ON public.apartment_ical_urls
  FOR UPDATE
  USING (is_admin_or_manager(auth.uid()));

CREATE POLICY "Only admin and manager can delete iCal URLs"
  ON public.apartment_ical_urls
  FOR DELETE
  USING (is_admin_or_manager(auth.uid()));

-- Trigger for updated_at
CREATE TRIGGER update_apartment_ical_urls_updated_at
  BEFORE UPDATE ON public.apartment_ical_urls
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable pg_cron and pg_net extensions for scheduled tasks
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;