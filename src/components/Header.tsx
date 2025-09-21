import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            INICIO
          </Link>
          <Link to="/actividades-cuenca" className="text-foreground hover:text-primary transition-colors">
            AC CUENCA
          </Link>
          <Link to="/cangas-apartments" className="text-foreground hover:text-primary transition-colors">
            AP CANGAS
          </Link>
          <Link to="/arriondas-apartaments" className="text-foreground hover:text-primary transition-colors">
            AP ARRIONDAS
          </Link>
          <Link to="/contacto" className="text-foreground hover:text-primary transition-colors">
            CONTACTO
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;