import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
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

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

// Center map on Asturias region
const center = {
  lat: 43.3614,
  lng: -5.2096
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: true,
  fullscreenControl: true,
};

// Fallback static map component
function StaticMapFallback({ zones }: ClimbingZonesMapProps) {
  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-nature-mint to-nature-green/20 rounded-lg relative overflow-hidden">
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

export default function ClimbingZonesMap({ zones }: ClimbingZonesMapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  });

  const [selectedZone, setSelectedZone] = useState<ClimbingZone | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds();
    zones.forEach(zone => {
      bounds.extend(zone.coordinates);
    });
    map.fitBounds(bounds);
  }, [zones]);

  // If there's no API key or loading error, show fallback
  if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY || loadError) {
    return <StaticMapFallback zones={zones} />;
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nature-forest mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-nature">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        options={mapOptions}
      >
        {zones.map((zone) => (
          <Marker
            key={zone.id}
            position={zone.coordinates}
            onClick={() => setSelectedZone(zone)}
            icon={{
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#22c55e" stroke="white" stroke-width="2"/>
                  <path d="M20 8L24 16H16L20 8Z" fill="white"/>
                  <circle cx="20" cy="22" r="3" fill="white"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 40)
            }}
          />
        ))}

        {selectedZone && (
          <InfoWindow
            position={selectedZone.coordinates}
            onCloseClick={() => setSelectedZone(null)}
          >
            <div className="p-2 max-w-xs">
              <h3 className="font-bold text-nature-forest mb-1">
                {selectedZone.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                📍 {selectedZone.location}
              </p>
              <div className="text-sm space-y-1">
                <p><strong>Rutas:</strong> {selectedZone.routes}</p>
                <p><strong>Grados:</strong> {selectedZone.grades}</p>
              </div>
              <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                {selectedZone.description}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}