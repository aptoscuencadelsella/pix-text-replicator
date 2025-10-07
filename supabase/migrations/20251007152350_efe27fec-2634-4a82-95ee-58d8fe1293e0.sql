-- Add DELETE policy to profiles table
-- Only allow admins to delete user profiles for security
CREATE POLICY "Only admins can delete profiles"
ON public.profiles
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));