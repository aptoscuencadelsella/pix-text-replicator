import { Link } from "react-router-dom";
import cangasImage from "@/assets/cangas-de-onis.jpg";
import arriondasImage from "@/assets/arriondas.jpg";
import activitiesImage from "@/assets/actividades-cuenca.jpg";

const ApartmentGrid = () => {
  return (
    <section id="apartments-section" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Actividades de la Cuenca */}
          <div className="text-center group">
            <Link to="/actividades-cuenca" className="block">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={activitiesImage} 
                  alt="Actividades de la Cuenca"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                ACTIVIDADES DE LA CUENCA
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              La zona ofrece actividades para todos los gustos: desde el famoso <strong>Descenso del Sella</strong> en piragua hasta rutas por los Picos de Europa o visitas al <strong>Santuario de Covadonga</strong>. También puedes <strong>explorar cuevas</strong>, hacer <strong>barranquismo</strong>, <strong>montar a caballo</strong> o disfrutar de la <strong>gastronomía</strong> local.
            </p>
          </div>

          {/* Cangas de Onís */}
          <div className="text-center group">
            <Link to="/cangas-apartments" className="block">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={cangasImage} 
                  alt="Apartamentos Cangas de Onís"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                APARTAMENTOS CANGAS DE ONÍS
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Puerta de entrada a los <strong>Picos de Europa</strong>, Cangas de Onís es uno de los destinos más emblemáticos de Asturias. Desde su <strong>puente Romano</strong> a su cercanía a los <strong>Lagos de Covadonga</strong>
            </p>
          </div>

          {/* Arriondas */}
          <div className="text-center group">
            <Link to="/arriondas-apartaments" className="block">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={arriondasImage} 
                  alt="Apartamentos Arriondas"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                APARTAMENTOS ARRIONDAS
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Situada a orillas del <strong>río Sella</strong>, Arriondas es el punto de partida ideal para quienes buscan <strong>naturaleza</strong>, <strong>aventura</strong> y <strong>autenticidad</strong> asturiana. Conocida internacionalmente por ser la sede del famoso Descenso del Sella.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApartmentGrid;