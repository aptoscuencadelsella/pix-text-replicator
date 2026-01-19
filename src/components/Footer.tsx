const Footer = () => {
  return (
    <footer className="w-full py-4 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-muted-foreground">
          Sitio web creado por{" "}
          <a
            href="https://www.smartwlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            www.smartwlabs.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
