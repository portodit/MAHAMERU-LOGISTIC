"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Branch } from "./BranchMap";

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 13, { duration: 1 });
  }, [lat, lng, map]);
  return null;
}

interface BranchMapInnerProps {
  branches: Branch[];
  selected: number;
  panelHeight: number;
}

export default function BranchMapInner({
  branches,
  selected,
  panelHeight,
}: BranchMapInnerProps) {
  const center = branches[selected] ?? branches[0];

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: panelHeight,
        width: "100%",
        borderRadius: 24,
        zIndex: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyTo lat={center.lat} lng={center.lng} />

      {branches.map((b, i) => (
        <Marker key={i} position={[b.lat, b.lng]} icon={redIcon}>
          <Popup>
            <div style={{ minWidth: 180 }}>
              <p style={{ fontWeight: 700, margin: 0 }}>{b.name}</p>
              <p style={{ fontSize: 12, color: "#666", margin: "2px 0 0" }}>{b.address}</p>
              <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>{b.hours}</p>
              <a
                href={b.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 8,
                  padding: "4px 10px",
                  background: "#dc2626",
                  color: "#fff",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Buka Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
