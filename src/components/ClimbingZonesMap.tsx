import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ClimbingZone {
  id: number;
  name: string;
  location: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  grades: string;
  routes: string;
  detailPage: string;
}

interface ClimbingZonesMapProps {
  zones: ClimbingZone[];
}

export default function ClimbingZonesMap({ zones }: ClimbingZonesMapProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Haz clic en cada zona para ver su ficha completa
        </p>
      </div>

      {/* Zone cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zones.map((zone, index) => (
          <div 
            key={zone.id} 
            className="bg-white rounded-lg p-6 shadow-nature hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-100"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'both'
            }}
          >
            <h3 className="font-bold text-nature-forest text-lg mb-3 line-clamp-2">
              {zone.name}
            </h3>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
              <span className="text-sm">{zone.location}</span>
            </div>

            <div className="space-y-2 mb-6">
              <div>
                <span className="font-semibold text-nature-forest">Rutas:</span>
                <span className="text-gray-700 ml-2">{zone.routes}</span>
              </div>
              <div>
                <span className="font-semibold text-nature-forest">Grados:</span>
                <span className="text-gray-700 ml-2">{zone.grades}</span>
              </div>
            </div>

            <Link to={zone.detailPage} className="block">
              <Button
                variant="outline"
                className="w-full bg-gray-50 hover:bg-nature-forest hover:text-white border-gray-200 transition-all duration-300"
              >
                Ver Ficha Completa
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}