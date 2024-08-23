import {
  LazyLeafletMap,
  LazyLeafletMarker,
  LazyMarkerCluster,
} from "../components/Map";

export default function Home() {
  return (
    <main className="h-full w-screen">
      <LazyLeafletMap center={[0, 0]} zoom={3}>
        <LazyMarkerCluster>
          <></>
        </LazyMarkerCluster>
      </LazyLeafletMap>
    </main>
  );
}
