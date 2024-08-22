import {
  LazyLeafletMap,
  LazyLeafletMarker,
  LazyMarkerCluster,
} from "../components/Map";
const randomCoordinates = [
  { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
  { lat: 48.8566, lng: 2.3522 }, // Paris, France
  { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
  { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
  { lat: 40.7128, lng: -74.006 }, // New York City, USA
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires, Argentina
  { lat: 51.5074, lng: -0.1278 }, // London, UK
  { lat: 55.7558, lng: 37.6173 }, // Moscow, Russia
  { lat: 28.6139, lng: 77.209 }, // New Delhi, India
  { lat: -26.2041, lng: 28.0473 }, // Johannesburg, South Africa
  { lat: 19.4326, lng: -99.1332 }, // Mexico City, Mexico
  { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
  { lat: 52.52, lng: 13.405 }, // Berlin, Germany
  { lat: 41.9028, lng: 12.4964 }, // Rome, Italy
  { lat: 39.9042, lng: 116.4074 }, // Beijing, China
  { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brazil
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
  { lat: 31.2304, lng: 121.4737 }, // Shanghai, China
  { lat: 13.7563, lng: 100.5018 }, // Bangkok, Thailand
  { lat: 43.651, lng: -79.347 }, // Toronto, Canada
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <LazyLeafletMap center={[30.8687123, 75.8853272]} zoom={10}>
        <LazyMarkerCluster>
          {randomCoordinates.map((cordinate) => (
            <LazyLeafletMarker key={cordinate.lat} position={cordinate} />
          ))}
        </LazyMarkerCluster>
      </LazyLeafletMap>
    </main>
  );
}
