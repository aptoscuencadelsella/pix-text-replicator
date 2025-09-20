import { Button } from "@/components/ui/button";
import activitiesImage from "@/assets/actividades-cuenca.jpg";

const ActivitiesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <a href="#activities" className="block">
              <img 
                src={activitiesImage} 
                alt="Actividades de la Cuenca"
                className="w-full h-80 object-cover rounded-lg shadow-card-nature hover:shadow-nature transition-shadow duration-300"
              />
            </a>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              <a href="#activities" className="hover:text-primary transition-colors">
                ACTIVIDADES DE LA CUENCA
              </a>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La zona ofrece actividades para todos los gustos: desde el famoso <strong>Descenso del Sella</strong> en piragua hasta rutas por los Picos de Europa o visitas al <strong>Santuario de Covadonga</strong>. También puedes <strong>explorar cuevas</strong>, hacer <strong>barranquismo</strong>, <strong>montar a caballo</strong> o disfrutar de la <strong>gastronomía</strong> local. Naturaleza, aventura y cultura en un entorno único.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;