-- CRÍTICO: Eliminar política RLS peligrosa y crear sistema de roles seguro

-- 1. Eliminar la política actual que permite acceso público total
DROP POLICY IF EXISTS "Allow all operations on reservations" ON public.reservations;

-- 2. Crear enum para roles de usuario
CREATE TYPE public.app_role AS ENUM ('admin', 'manager', 'user');

-- 3. Crear tabla de perfiles de usuario
CREATE TABLE public.profiles (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text,
  last_name text,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL,
  PRIMARY KEY (id)
);

-- 4. Crear tabla de roles de usuario (CRÍTICO para seguridad)
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- 5. Habilitar RLS en las nuevas tablas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 6. Crear función de seguridad para verificar roles (previene recursión RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 7. Crear función para verificar si el usuario es admin o manager
CREATE OR REPLACE FUNCTION public.is_admin_or_manager(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'manager')
  )
$$;

-- 8. POLÍTICAS RLS SEGURAS para reservations (solo admins y managers)
CREATE POLICY "Only admin and manager can view reservations" 
ON public.reservations 
FOR SELECT 
TO authenticated
USING (public.is_admin_or_manager(auth.uid()));

CREATE POLICY "Only admin and manager can insert reservations" 
ON public.reservations 
FOR INSERT 
TO authenticated
WITH CHECK (public.is_admin_or_manager(auth.uid()));

CREATE POLICY "Only admin and manager can update reservations" 
ON public.reservations 
FOR UPDATE 
TO authenticated
USING (public.is_admin_or_manager(auth.uid()));

CREATE POLICY "Only admin and manager can delete reservations" 
ON public.reservations 
FOR DELETE 
TO authenticated
USING (public.is_admin_or_manager(auth.uid()));

-- 9. Políticas RLS para profiles (usuarios pueden ver su propio perfil)
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

-- 10. Políticas RLS para user_roles (solo admins pueden gestionar roles)
CREATE POLICY "Only admin can view user roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admin can manage user roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 11. Función para manejar nuevos usuarios (crear perfil automáticamente)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (
    new.id, 
    new.raw_user_meta_data ->> 'first_name', 
    new.raw_user_meta_data ->> 'last_name'
  );
  RETURN new;
END;
$$;

-- 12. Trigger para crear perfil cuando se registra un usuario
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 13. Función para trigger de updated_at en profiles
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();