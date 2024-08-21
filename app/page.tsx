import { LazyLeafletMap } from "../components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <LazyLeafletMap center={[30.8687123, 75.8853272]} zoom={10}>
        <></>
      </LazyLeafletMap>
    </main>
  );
}
