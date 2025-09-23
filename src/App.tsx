import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CangasApartments from "./pages/CangasApartments";
import ArriondasApartments from "./pages/ArriondasApartments";
import BookingPage from "./pages/BookingPage";
import Activities from "./pages/Activities";
import ActividadesCuenca from "./pages/ActividadesCuenca";
import Covadonga from "./pages/Covadonga";
import Cangas from "./pages/Cangas";
import Barranquismo from "./pages/Barranquismo";
import RutasCaballo from "./pages/RutasCaballo";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/actividades-cuenca" element={<ActividadesCuenca />} />
          <Route path="/cangas-apartments" element={<CangasApartments />} />
          <Route path="/arriondas-apartaments" element={<ArriondasApartments />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/covadonga" element={<Covadonga />} />
          <Route path="/cangas" element={<Cangas />} />
          <Route path="/barranquismo" element={<Barranquismo />} />
          <Route path="/rutas-caballo" element={<RutasCaballo />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
