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
                  alt="Actividades de la Cuenca"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                TURISMO ACTIVO CUENCA DEL SELLA
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              Descubre las mejores <strong>actividades turísticas en Asturias</strong>: desde el famoso <strong>Descenso del Sella en canoa</strong> hasta rutas de senderismo por los <strong>Picos de Europa</strong>, visitas al <strong>Santuario de Covadonga</strong> y <strong>barranquismo</strong>. Turismo activo y aventura en plena naturaleza asturiana.
            </p>
          </div>

          {/* Cangas de Onís */}
          <div className="text-center group flex flex-col h-full">
            <Link to="/cangas-apartments" className="block flex-shrink-0">
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
            <p className="text-muted-foreground leading-relaxed flex-grow">
              <strong>Apartamentos turísticos en Cangas de Onís</strong>, puerta de entrada a los <strong>Picos de Europa</strong>. Alojamiento rural de calidad cerca del histórico <strong>Puente Romano</strong> y los famosos <strong>Lagos de Covadonga</strong>. Turismo rural en el corazón de Asturias.
            </p>
          </div>

          {/* Arriondas */}
          <div className="text-center group flex flex-col h-full">
            <Link to="/arriondas-apartaments" className="block flex-shrink-0">
              <div className="mb-6 overflow-hidden rounded-lg shadow-card-nature group-hover:shadow-nature transition-all duration-300">
                <img 
                  src={arriondasImage} 
                  alt="Apartamentos Arriondas"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                APARTAMENTOS ARRIONDAS
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              <strong>Apartamentos rurales en Arriondas</strong>, situados a orillas del <strong>río Sella</strong>. El punto de partida perfecto para el <strong>descenso del Sella</strong> y actividades de <strong>turismo de aventura</strong>. Alojamiento rural auténtico en el <strong>Oriente de Asturias</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApartmentGrid;