import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';
import { Helmet } from 'react-helmet';

// Validación con Zod para seguridad
const emailSchema = z.string().email('Por favor, introduce un email válido');
const passwordSchema = z.string().min(6, 'La contraseña debe tener al menos 6 caracteres');
const nameSchema = z.string().min(2, 'El nombre debe tener al menos 2 caracteres').optional();

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users to home
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const validateForm = () => {
    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);
      
      if (!isLogin) {
        if (firstName) nameSchema.parse(firstName);
        if (lastName) nameSchema.parse(lastName);
      }
      
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
        return false;
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            setError('Email o contraseña incorrectos');
          } else {
            setError(error.message);
          }
        } else {
          toast.success('¡Bienvenido de vuelta!');
          navigate('/');
        }
      } else {
        const { error } = await signUp(email, password, firstName, lastName);
        if (error) {
          if (error.message.includes('already registered')) {
            setError('Este email ya está registrado. Prueba a iniciar sesión.');
          } else {
            setError(error.message);
          }
        } else {
          toast.success('Cuenta creada exitosamente. Revisa tu email para confirmar.');
        }
      }
    } catch (err) {
      setError('Ha ocurrido un error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead />
      
      <Helmet>
        <title>{isLogin ? 'Iniciar Sesión' : 'Registrarse'} - Cuenca del Sella</title>
        <meta 
          name="description" 
          content="Accede al panel de administración de reservas de apartamentos en la Cuenca del Sella" 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-nature-mint to-white">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-nature-forest hover:text-nature-green transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Volver al Inicio</span>
            </Link>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="shadow-nature border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-nature-forest">
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </CardTitle>
                <CardDescription>
                  {isLogin 
                    ? 'Accede al panel de gestión de reservas' 
                    : 'Crea una cuenta para gestionar reservas'
                  }
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellidos</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Tus apellidos"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Tu contraseña"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-nature-green hover:bg-nature-forest text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isLogin ? 'Iniciando sesión...' : 'Creando cuenta...'}
                      </>
                    ) : (
                      isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                  </p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                    }}
                    className="text-nature-green hover:text-nature-forest"
                  >
                    {isLogin ? 'Crear una cuenta' : 'Iniciar sesión'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Solo usuarios autorizados pueden acceder al sistema de reservas</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}