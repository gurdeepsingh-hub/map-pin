"use client";
import dynamic from "next/dynamic";

export const LazyLeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

export const LazyLeafletMarker = dynamic(
  async () => (await import("react-leaflet")).Marker,
  {
    ssr: false,
  }
);

export const LazyMarkerCluster = dynamic(
  async () => (await import("./MarkerCluster")).MarkerCluster,
  { ssr: false }
);
