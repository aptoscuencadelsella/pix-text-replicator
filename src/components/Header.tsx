import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            INICIO
          </Link>
          <Link to="/actividades-cuenca" className="text-foreground hover:text-primary transition-colors font-medium">
            OCIO
          </Link>
          <Link to="/cangas-apartments" className="text-foreground hover:text-primary transition-colors font-medium">
            AP CANGAS
          </Link>
          <Link to="/arriondas-apartaments" className="text-foreground hover:text-primary transition-colors font-medium">
            AP ARRIONDAS
          </Link>
          <Link to="/contacto" className="text-foreground hover:text-primary transition-colors font-medium">
            CONTACTO
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-nature-forest" onClick={closeMenu}>
            CUENCA DEL SELLA
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="p-2 hover:bg-muted"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
                onClick={closeMenu}
              >
                INICIO
              </Link>
              <Link 
                to="/actividades-cuenca" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
                onClick={closeMenu}
              >
                OCIO
              </Link>
              <Link 
                to="/cangas-apartments" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
                onClick={closeMenu}
              >
                APARTAMENTOS CANGAS
              </Link>
              <Link 
                to="/arriondas-apartaments" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
                onClick={closeMenu}
              >
                APARTAMENTOS ARRIONDAS
              </Link>
              <Link 
                to="/contacto" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
                onClick={closeMenu}
              >
                CONTACTO
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;