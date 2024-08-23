import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import LeafletControl from "../LeafletControl";
import { MdOutlineMyLocation } from "react-icons/md";
import L, { Layer, LayerGroup } from "leaflet";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
    locationerror(e) {
      console.log(e);
      setLoading(false);
      alert(e.message);
    },
  });

  return (
    <LeafletControl position={"bottomleft"}>
      <button
        className="bg-white h-10 w-10 flex justify-center items-center shadow-md rounded-md border z-[2000]"
        onClick={() => {
          setLoading(true);
          layers?.clearLayers();
          map.locate({ setView: true, maxZoom: 15, timeout: 1000 });
        }}
        disabled={loading}
      >
        {loading ? (
          <AiOutlineLoading3Quarters
            className="animate-spin"
            size={20}
            color="black"
          />
        ) : (
          <MdOutlineMyLocation size={20} color="black" />
        )}
      </button>
    </LeafletControl>
  );
};
