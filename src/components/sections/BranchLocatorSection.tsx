import { useState, useMemo, Suspense, lazy } from "react";
import { Input } from "@/components/ui/input";
import type { Branch } from "./BranchMap";

const BranchMap = lazy(() => import("./BranchMap").then((m) => ({ default: m.BranchMap })));

const PANEL_HEIGHT = 600;

const BRANCHES: Branch[] = [
  {
    name: "Mahameru Logistik Surabaya",
    address: "Jl. Perak Barat, Surabaya",
    hours: "Senin – Jumat, 10.00 – 19.00 WIB",
    lat: -7.2072,
    lng: 112.7324,
    mapsUrl: "https://maps.app.goo.gl/surabaya",
  },
  {
    name: "Mahameru Logistik Banjarmasin",
    address: "Jl. Brigjen H. Hasan Basry, Banjarmasin",
    hours: "Senin – Jumat, 09.00 – 18.00 WIB",
    lat: -3.3186,
    lng: 114.5908,
    mapsUrl: "https://maps.app.goo.gl/banjarmasin",
  },
  {
    name: "Mahameru Logistik Jakarta",
    address: "Jl. Tanjung Priok, Jakarta Utara",
    hours: "Senin – Jumat, 09.00 – 18.00 WIB",
    lat: -6.1011,
    lng: 106.8693,
    mapsUrl: "https://maps.app.goo.gl/jakarta",
  },
];

const BRANCH_IMAGES = [
  "/figmaAssets/rectangle-3677-2.png",
  "/figmaAssets/rectangle-3676.png",
  "/figmaAssets/rectangle-23983.png",
];

export const BranchLocatorSection = (): JSX.Element => {
  const [query, setQuery]       = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BRANCHES.map((b, i) => ({ ...b, origIndex: i }));
    return BRANCHES
      .map((b, i) => ({ ...b, origIndex: i }))
      .filter((b) =>
        b.name.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q)
      );
  }, [query]);

  return (
    <section className="w-full">
      <div className="flex w-full flex-col gap-5 lg:flex-row" style={{ height: PANEL_HEIGHT }}>

        {/* ── Left: scrollable card list ── */}
        <div
          className="flex w-full flex-col overflow-hidden rounded-[24px] border border-[#e0e0e0] bg-white shadow-md lg:w-[420px] lg:shrink-0 xl:w-[460px]"
        >
          {/* Search bar — fixed at top */}
          <div className="shrink-0 border-b border-gray-100 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
              <img
                src="/figmaAssets/icon-outline-search.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0 opacity-40"
              />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari kota atau cabang…"
                className="h-auto border-0 bg-transparent p-0 text-sm shadow-none placeholder:text-gray-400 focus-visible:ring-0"
                aria-label="Cari cabang berdasarkan kota"
              />
            </div>
          </div>

          {/* Cards — scrollable area */}
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
            {filtered.length === 0 ? (
              <p className="py-8 text-center text-sm text-gray-400">
                Tidak ada cabang yang cocok.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {filtered.map((branch) => {
                  const isSelected = branch.origIndex === selected;
                  return (
                    <button
                      key={branch.origIndex}
                      type="button"
                      onClick={() => setSelected(branch.origIndex)}
                      className={`w-full overflow-hidden rounded-[16px] border text-left shadow-sm transition-all duration-200 ${
                        isSelected
                          ? "border-[#dc2626] shadow-[0_0_0_2px_rgba(220,38,38,0.18)]"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                      aria-pressed={isSelected}
                    >
                      {/* Branch photo */}
                      <div className="relative h-[120px] w-full overflow-hidden bg-gray-100">
                        <img
                          src={BRANCH_IMAGES[branch.origIndex]}
                          alt={branch.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      {/* Branch info */}
                      <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-gray-800">
                            {branch.name}
                          </p>
                          <div className="mt-0.5 flex items-center gap-1">
                            <span
                              className="h-3.5 w-3.5 shrink-0 bg-[url(/figmaAssets/icon-solid-location-marker.svg)] bg-cover"
                              aria-hidden
                            />
                            <span className="truncate text-xs text-gray-500">{branch.address}</span>
                          </div>
                          <div className="mt-0.5 flex items-center gap-1">
                            <span
                              className="h-3.5 w-3.5 shrink-0 bg-[url(/figmaAssets/icon-solid-clock.svg)] bg-cover"
                              aria-hidden
                            />
                            <span className="text-xs text-gray-500">{branch.hours}</span>
                          </div>
                        </div>

                        <a
                          href={branch.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-white shadow-sm transition-colors hover:bg-red-700"
                          aria-label={`Buka Google Maps untuk ${branch.name}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ── Right: map ── */}
        <div
          className="w-full overflow-hidden rounded-[24px] border border-[#e0e0e0] bg-white shadow-md lg:flex-1"
          style={{ isolation: "isolate" }}
        >
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                Memuat peta…
              </div>
            }
          >
            <BranchMap branches={BRANCHES} selected={selected} panelHeight={PANEL_HEIGHT} />
          </Suspense>
        </div>

      </div>
    </section>
  );
};
