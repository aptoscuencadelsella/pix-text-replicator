import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ApartmentGrid from "../components/ApartmentGrid";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ApartmentGrid />
      
      {/* Best Information Source Section */}
      <section className="py-16 bg-gradient-to-b from-nature-green/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-green/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-nature-forest">
              Tu Guía de Confianza en la Cuenca del Sella
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos <strong className="text-nature-green">la mejor página de información de la zona</strong>, 
              ofreciendo datos actualizados, recomendaciones expertas y toda la información que necesitas 
              para disfrutar al máximo de tu experiencia en los Picos de Europa.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-nature-green/10 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-nature-forest mb-2">Información Actualizada</h3>
                <p className="text-sm text-muted-foreground">
                  Horarios, precios y recomendaciones siempre al día
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-nature-green/10 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-nature-forest mb-2">Conocimiento Local</h3>
                <p className="text-sm text-muted-foreground">
                  Consejos de expertos que conocen cada rincón de la zona
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-nature-green/10 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-nature-forest mb-2">Experiencia Completa</h3>
                <p className="text-sm text-muted-foreground">
                  Todo lo que necesitas para planificar tu viaje perfecto
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-nature-green/10 rounded-lg border border-nature-green/20 inline-block">
              <p className="text-sm text-nature-forest font-medium">
                ✨ Más de <strong>10.000 visitantes</strong> confían en nuestra información cada año
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default Index;
