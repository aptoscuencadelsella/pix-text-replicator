import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            INICIO
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            ABOUT
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            SERVICES
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;