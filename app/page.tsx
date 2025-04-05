'use client';

import GoogleMapComponent from "../components/GoogleMap";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  // Example markers
  const markers = [
    { lat: 37.7749, lng: -122.4194 }, // San Francisco
    { lat: 37.3382, lng: -121.8863 }, // San Jose
    { lat: 37.8715, lng: -122.2730 }, // Berkeley
  ];

  return (
    <div className="flex flex-col min-h-screen p-8">
      <main className="flex-grow flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Google Maps in Next.js</h1>
        
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <GoogleMapComponent 
            apiKey={apiKey}
            markers={markers}
            zoom={9}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Markers Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>San Francisco (37.7749, -122.4194)</li>
            <li>San Jose (37.3382, -121.8863)</li>
            <li>Berkeley (37.8715, -122.2730)</li>
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
