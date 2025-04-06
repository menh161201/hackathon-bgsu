'use client';

import axios from 'axios';
import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
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

// Map options
const mapOptions = {
  gestureHandling: 'greedy' as const,
  zoomControl: true,
  mapTypeControl: true,
  streetViewControl: true,
  fullscreenControl: true,
  disableDefaultUI: false,
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export const geocodeAddress = async (address: string): Promise<Coordinates | null> => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    console.log(`Geocoding address: ${address}`);
    const response = await axios.get(url);
    if (response.data.results && response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      console.log(`Successfully geocoded: ${address} to ${location.lat}, ${location.lng}`);
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      console.warn(`No results found for address: ${address}`);
      return null;
    }
  } catch (error) {
    console.error(`Geocoding failed for ${address}:`, error);
    return null;
  }
};

export default function Map( {addresses}: {addresses: string[]}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [markers, setMarkers] = useState<Coordinates[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  // Memoize markers to prevent unnecessary re-renders
  const markerElements = useMemo(() => 
    markers.map((position, index) => (
      <Marker key={index} position={position} />
    )), [markers]
  );

  useEffect(() => {
    const loadMarkers = async () => {
      const newMarkers = [];
      console.log('Starting to geocode addresses...');
      for (const address of addresses) {
        const coords = await geocodeAddress(address);
        if (coords) {
          newMarkers.push(coords);
        }
      }
      console.log(`Successfully geocoded ${newMarkers.length} out of ${addresses.length} addresses`);
      setMarkers(newMarkers);
    };
    loadMarkers();
  }, [addresses]);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
    setMap(null);
  }, []);

  const onDragEnd = useCallback(() => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center) {
        mapRef.current.setCenter(center);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <main className="flex-grow flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Google Maps in Next.js</h1>
        
        {loadError && (
          <div className="text-red-500 p-4 border border-red-300 rounded">
            Error loading Google Maps: {loadError}
          </div>
        )}
        
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <LoadScript 
            googleMapsApiKey={apiKey}
            onError={(error) => {
              console.error("Google Maps loading error:", error);
              setLoadError(error.message);
            }}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={13}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={mapOptions}
            >
              {markerElements}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Locations</h2>
          <ul className="list-disc pl-5 space-y-2">
            {addresses.map((address, index) => (
              <li key={index}>{address}</li>
            ))}
          </ul>
        </div>
      </main>
      
      <footer className="mt-8 py-4 border-t">
        <p className="text-center text-gray-500">
          Made with Next.js and Google Maps API
        </p>
      </footer>
    </div>
  );
} 