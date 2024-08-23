"use client";
import type { MapOptions } from "leaflet";
import React from "react";
import { Marker, icon } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { MyLocation } from "../Locate/geoLocation";

const LeafletMap: React.FC<
  {
    center: [number, number];
    children: React.ReactNode;
    zoom: number;
  } & MapOptions
> = ({ children, ...options }) => {
  return (
    <MapContainer
      className="h-[100%] w-auto relative"
      maxZoom={18}
      doubleClickZoom={false}
      worldCopyJump={true}
      markerZoomAnimation={true}
      {...options}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; '
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <MyLocation />
      {children}
    </MapContainer>
  );
};
export default LeafletMap;

Marker.prototype.options.icon = icon({
  iconUrl: "/static/leaflet/map-marker.svg",
  iconRetinaUrl: "/static/leaflet/map-marker.svg",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  shadowUrl: "/static/leaflet/marker-shadow.png",
  shadowRetinaUrl: "/static/leaflet/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});
