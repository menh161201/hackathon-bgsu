'use client';

import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Container style for the map
const containerStyle = {
  width: '100%',
  height: '500px'
};

// Default center position (Bowling Green, OH)
const defaultCenter = {
  lat: 41.3744,
  lng: -83.6513
};

export type Coordinates = {
  lat: number;
  lng: number;
};

// Interface for GoogleMapComponent props
interface GoogleMapComponentProps {
  apiKey: string;
  addresses: string[];
  zoom?: number;
}

export const geocodeAddress = async (address: string): Promise<Coordinates | null> => {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;

  try {
    const response = await axios.get(url);
    if (response.data.length > 0) {
      const location = response.data[0];
      return {
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lon),
      };
    } else {
      console.warn('No results found for address.');
      return null;
    }
  } catch (error) {
    console.error('Geocoding failed:', error);
    return null;
  }
};

export default function GoogleMapComponent({
  apiKey,
  addresses,
  zoom = 13,
}: GoogleMapComponentProps) {
  const [markers, setMarkers] = useState<Coordinates[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const loadMarkers = async () => {
      const newMarkers = [];
      for (const address of addresses) {
        const coords = await geocodeAddress(address);
        if (coords) {
          newMarkers.push(coords);
        }
      }
      setMarkers(newMarkers);
    };
    loadMarkers();
  }, [addresses]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markers[0] || defaultCenter}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
