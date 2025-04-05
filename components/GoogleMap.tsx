'use client';

import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Container style for the map
const containerStyle = {
  width: '100%',
  height: '500px'
};

// Default center position (San Francisco)
const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194
};

// Interface for GoogleMapComponent props
interface GoogleMapComponentProps {
  apiKey: string;
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  markers?: google.maps.LatLngLiteral[];
}

export default function GoogleMapComponent({
  apiKey,
  center = defaultCenter,
  zoom = 10,
  markers = []
}: GoogleMapComponentProps) {
  // Save the map instance to state
  const [, setMap] = useState<google.maps.Map | null>(null);

  // Save map instance when it loads
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  // Clear map instance when it unmounts
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Add markers if provided */}
        {markers.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
} 