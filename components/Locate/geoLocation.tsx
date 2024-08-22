import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import LeafletControl from "../LeafletControl";
import { MdOutlineMyLocation } from "react-icons/md";
import L, { Layer, LayerGroup } from "leaflet";

interface LeadletMyPositionProps {}

export const MyLocation: React.FC<LeadletMyPositionProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [layers, setLayers] = useState<LayerGroup | null>(null);
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, 15);
      var marker = L.marker(e.latlng, {
        icon: L.icon({
          iconUrl: "/static/leaflet/location.svg",
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        }),
      });
      var bounds = L.circle(e.latlng, {
        radius: 150,
      });
      const layerGroup = L.layerGroup([marker]).addTo(map);
      map.on("zoomend", function () {
        layerGroup.addLayer(bounds).addTo(map);
      });
      setLayers(layerGroup);
      setLoading(false);
    },
  });

  return (
    <LeafletControl position={"bottomleft"}>
      <button
        className="bg-white h-10 w-10 flex justify-center items-center shadow-md rounded-md border"
        onClick={() => {
          setLoading(true);
          map.locate();
          layers?.clearLayers();
        }}
        disabled={loading}
      >
        <MdOutlineMyLocation size={20} color="black" />
      </button>
    </LeafletControl>
  );
};
