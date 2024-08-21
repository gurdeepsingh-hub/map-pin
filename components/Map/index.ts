import dynamic from "next/dynamic";

export const LazyLeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});
