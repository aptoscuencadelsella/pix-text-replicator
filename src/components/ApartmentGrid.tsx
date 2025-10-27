import { Link } from "react-router-dom";
import cangasImage from "@/assets/cangas-de-onis.jpg";
import arriondasImage from "@/assets/arriondas.jpg";
import activitiesImage from "@/assets/actividades-cuenca.jpg";

const ApartmentGrid = () => {
  return (
    <section id="apartments-section" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          
          {/* Actividades de la Cuenca */}
          <div className="text-center group flex flex-col h-full">
            <Link to="/actividades-cuenca" className="block flex-shrink-0">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={activitiesImage} 
                  alt="Actividades cuenca del sella - descenso del Sella, kayak río Sella y turismo activo en Asturias"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                ACTIVIDADES Y TURISMO ACTIVO CUENCA DEL SELLA
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              Descubre las mejores <strong>actividades cuenca del sella</strong>: <strong>descenso del Sella en piragua</strong> desde Arriondas, 
              <strong>kayak y rafting en el río Sella</strong>, senderismo en los <strong>Picos de Europa</strong>, 
              visitar los <strong>Lagos de Covadonga</strong>, <strong>barranquismo</strong> y rutas por la naturaleza asturiana. 
              <strong>Turismo activo</strong> y aventura para toda la familia.
            </p>
          </div>

          {/* Cangas de Onís */}
          <div className="text-center group flex flex-col h-full">
            <Link to="/cangas-apartments" className="block flex-shrink-0">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={cangasImage} 
                  alt="Apartamentos en Cangas de Onís - alojamiento turístico cerca Lagos de Covadonga y Picos de Europa"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                APARTAMENTOS EN CANGAS DE ONÍS
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              <strong>Alojamiento en Cangas de Onís</strong>, puerta de entrada a los <strong>Picos de Europa</strong>. 
              <strong>Apartamentos turísticos</strong> cerca del <strong>Puente Romano</strong>, los <strong>Lagos de Covadonga</strong> 
              y el inicio del <strong>descenso del Sella</strong>. Perfecto para <strong>vacaciones en Cangas de Onís</strong> 
              y <strong>turismo activo cuenca del sella</strong>.
            </p>
          </div>

          {/* Arriondas */}
          <div className="text-center group flex flex-col h-full">
            <Link to="/arriondas-apartaments" className="block flex-shrink-0">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={arriondasImage} 
                  alt="Apartamentos en Arriondas - alojamiento río Sella para descenso del Sella y turismo activo cuenca del sella"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                APARTAMENTOS EN ARRIONDAS
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              <strong>Alojamiento en Arriondas</strong> junto al <strong>río Sella</strong>. 
              <strong>Apartamentos turísticos</strong> ideales para el <strong>descenso del Sella</strong>, 
              <strong>piragüismo</strong> y <strong>turismo activo</strong>. 
              Punto de partida perfecto para <strong>actividades en Arriondas</strong> y <strong>vacaciones en la naturaleza del valle del Sella</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApartmentGrid;