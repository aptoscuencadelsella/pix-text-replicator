import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

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

export default function ClimbingZonesMap({ zones }: ClimbingZonesMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dO7o3T3GE-o4ec' // Demo key - replace with your own
  });

  const [selectedZone, setSelectedZone] = useState<ClimbingZone | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // Optional: Adjust bounds to fit all markers
    const bounds = new window.google.maps.LatLngBounds();
    zones.forEach(zone => {
      bounds.extend(zone.coordinates);
    });
    map.fitBounds(bounds);
  }, [zones]);

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