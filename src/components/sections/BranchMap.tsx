"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Branch type - exported from here for other components to import
export type Branch = {
  name: string;
  address: string;
  hours: string;
  lat: number;
  lng: number;
  mapsUrl: string;
};

// Leaflet map component - loaded dynamically to avoid SSR issues
const BranchMapInner = dynamic(() => import("./BranchMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-gray-100 rounded-[24px]">
      <p className="text-sm text-gray-400">Memuat peta…</p>
    </div>
  ),
});

interface BranchMapProps {
  branches: Branch[];
  selected: number;
  panelHeight: number;
}

export function BranchMap(props: BranchMapProps) {
  return <BranchMapInner {...props} />;
}
