import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';

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
}

interface ClimbingZonesMapProps {
  zones: ClimbingZone[];
}

export default function ClimbingZonesMap({ zones }: ClimbingZonesMapProps) {
  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-nature-mint to-nature-green/20 rounded-lg relative overflow-hidden shadow-nature">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(22, 163, 74, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-white/90 to-transparent">
        <h3 className="text-xl font-bold text-nature-forest mb-2 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Zonas de Escalada en Asturias
        </h3>
        <p className="text-sm text-gray-600">
          Haz clic en cada zona para ver su ubicación en Google Maps
        </p>
      </div>

      {/* Zone markers */}
      <div className="absolute inset-0 p-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          {zones.map((zone, index) => (
            <div 
              key={zone.id} 
              className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-nature hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <h4 className="font-bold text-nature-forest text-sm mb-2 line-clamp-2">
                {zone.name}
              </h4>
              <p className="text-xs text-gray-600 mb-2">📍 {zone.location}</p>
              <div className="text-xs space-y-1 mb-3">
                <p><strong>Rutas:</strong> {zone.routes}</p>
                <p><strong>Grados:</strong> {zone.grades}</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full text-xs h-8"
                onClick={() => {
                  const url = `https://www.google.com/maps?q=${zone.coordinates.lat},${zone.coordinates.lng}`;
                  window.open(url, '_blank');
                }}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Ver en Google Maps
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}