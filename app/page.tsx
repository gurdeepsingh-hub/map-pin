import {
  LazyLeafletMap,
  LazyLeafletMarker,
  LazyMarkerCluster,
} from "../components/Map";

export default function Home() {
  return (
    <main className="flex min-h-[100%] flex-col items-center justify-between w-full">
      <LazyLeafletMap center={[0, 0]} zoom={3}>
        <LazyMarkerCluster>
          <></>
        </LazyMarkerCluster>
      </LazyLeafletMap>
    </main>
  );
}
