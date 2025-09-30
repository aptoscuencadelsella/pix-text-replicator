-- Configure cron job to sync iCal calendars every 30 minutes
SELECT cron.schedule(
  'sync-ical-calendars-every-30-minutes',
  '*/30 * * * *', -- Every 30 minutes
  $$
  SELECT
    net.http_post(
        url:='https://zrotjwlerjlowtxmzabz.supabase.co/functions/v1/sync-ical-calendars',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyb3Rqd2xlcmpsb3d0eG16YWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4OTA4ODEsImV4cCI6MjA3NDQ2Njg4MX0.wu1DmE95AVIKybZtqTkiiLW7SDXh9q6HIKxWF7whPMI"}'::jsonb,
        body:='{}'::jsonb
    ) as request_id;
  $$
);