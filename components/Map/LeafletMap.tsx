"use client";
import type { MapOptions } from "leaflet";
import React from "react";
// React: import type { FC, ReactNode } from 'react'
import { MapContainer, TileLayer } from "react-leaflet";

const LeafletMap: React.FC<
  {
    center: [number, number];
    children: React.ReactNode;
    zoom: number;
  } & MapOptions
> = ({ children, ...options }) => {
  return (
    <MapContainer
      className="h-screen w-full relative"
      maxZoom={18}
      {...options}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; '
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
    </MapContainer>
  );
};

export default LeafletMap;
