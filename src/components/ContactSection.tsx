import { Button } from "@/components/ui/button";
import contactBg from "@/assets/contact-bg.jpg";

const ContactSection = () => {
  return (
    <section 
      className="py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute inset-0 bg-nature-forest/70"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          ESCRÍBENOS!
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          ¿Tienes alguna pregunta? Estamos abiertos a hablar de negocios, nuevos projects, creative opportunities and how we can help you.
        </p>
        <Button 
          variant="secondary"
          size="lg"
          className="bg-white hover:bg-white/90 text-nature-forest border-none font-semibold px-8 py-3 text-lg shadow-nature transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;