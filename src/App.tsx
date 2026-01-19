import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import { CookieConsent } from "./components/CookieConsent";
import Index from "./pages/Index";
import CangasApartments from "./pages/CangasApartments";
import ArriondasApartments from "./pages/ArriondasApartments";
import BookingPage from "./pages/BookingPage";
import Activities from "./pages/Activities";
import ActividadesCuenca from "./pages/ActividadesCuenca";
import EscaladaDeportiva from "./pages/EscaladaDeportiva";
import EscuelaAmieva from "./pages/EscuelaAmieva";
import CuevasDelMar from "./pages/CuevasDelMar";
import CarbesSector from "./pages/CarbesSector";
import CuetuMayu from "./pages/CuetuMayu";
import TrincheronaNFitu from "./pages/TrincheronaNFitu";
import Covadonga from "./pages/Covadonga";
import Cangas from "./pages/Cangas";
import Barranquismo from "./pages/Barranquismo";
import RutasCaballo from "./pages/RutasCaballo";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/actividades-cuenca" element={<ActividadesCuenca />} />
          <Route path="/escalada-deportiva" element={<EscaladaDeportiva />} />
          <Route path="/escuela-amieva" element={<EscuelaAmieva />} />
          <Route path="/cuevas-del-mar" element={<CuevasDelMar />} />
          <Route path="/carbes-sector" element={<CarbesSector />} />
          <Route path="/cuetu-mayu" element={<CuetuMayu />} />
          <Route path="/trincherona-fitu" element={<TrincheronaNFitu />} />
          <Route path="/cangas-apartments" element={<CangasApartments />} />
          <Route path="/arriondas-apartaments" element={<ArriondasApartments />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/covadonga" element={<Covadonga />} />
          <Route path="/cangas" element={<Cangas />} />
          <Route path="/barranquismo" element={<Barranquismo />} />
          <Route path="/rutas-caballo" element={<RutasCaballo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
