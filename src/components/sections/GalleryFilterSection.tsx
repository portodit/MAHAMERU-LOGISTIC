import { useEffect, useRef, useState, useCallback } from "react";

const galleryLocations = ["Semua Lokasi", "Surabaya", "Banjarmasin", "Jakarta"];

const galleryCards: { location: string; src: string; title: string; desc: string }[] = [
  { location: "Surabaya", src: "/gallery/surabaya-1.png", title: "Pengiriman LCL",        desc: "Surabaya — Banjarmasin" },
  { location: "Surabaya", src: "/gallery/surabaya-2.png", title: "Muat Barang Container", desc: "Surabaya — Banjarmasin" },
  { location: "Surabaya", src: "/gallery/surabaya-3.png", title: "Stuffing Container",    desc: "Surabaya — Manado"      },
  { location: "Surabaya", src: "/gallery/surabaya-4.png", title: "Cargo Campuran",        desc: "Surabaya — Banjarmasin" },
  { location: "Surabaya", src: "/gallery/surabaya-5.png", title: "Pengiriman Besi Beton", desc: "Surabaya — Banjarmasin" },
  { location: "Surabaya", src: "/gallery/surabaya-6.png", title: "Muat Truk Kontainer",   desc: "Surabaya — Manado"      },
  { location: "Surabaya", src: "/gallery/surabaya-7.png", title: "Pallet Plastik",        desc: "Surabaya — Banjarmasin" },
  { location: "Surabaya", src: "/gallery/surabaya-8.png", title: "Reach Stacker Depo",   desc: "Surabaya — Banjarmasin" },
  { location: "Surabaya", src: "/gallery/surabaya-9.png", title: "Proses Strapping",      desc: "Surabaya — Banjarmasin" },
];

const AUTO_SCROLL_INTERVAL = 3500;

type LightboxCard = { src: string; title: string; desc: string };

export const GalleryFilterSection = (): JSX.Element => {
  const [activeLocation, setActiveLocation] = useState("Semua Lokasi");
  const [activeDot, setActiveDot]           = useState(0);
  const [lightbox, setLightbox]             = useState<LightboxCard | null>(null);

  const scrollRef   = useRef<HTMLDivElement>(null);
  const isPaused    = useRef(false);
  const isDragging  = useRef(false);
  const dragStartX  = useRef(0);
  const dragScrollL = useRef(0);
  const dragMoved   = useRef(false);

  const filtered =
    activeLocation === "Semua Lokasi"
      ? galleryCards
      : galleryCards.filter((c) => c.location === activeLocation);

  const dotCount = Math.min(5, filtered.length);

  const handleFilterClick = (loc: string) => {
    setActiveLocation(loc);
    setActiveDot(0);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };

  const scrollToDot = (dotIndex: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 16 : 300;
    const cardsPerDot = Math.ceil(filtered.length / dotCount);
    el.scrollTo({ left: dotIndex * cardsPerDot * cardW, behavior: "smooth" });
    setActiveDot(dotIndex);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) { setActiveDot(0); return; }
    const dot = Math.min(dotCount - 1, Math.round((el.scrollLeft / maxScroll) * (dotCount - 1)));
    setActiveDot(dot);
  };

  useEffect(() => {
    if (filtered.length <= 1) return;
    const timer = setInterval(() => {
      if (isPaused.current) return;
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      if (el.scrollLeft + 5 >= maxScroll) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardW = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 16 : 300;
        el.scrollBy({ left: cardW, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [filtered.length]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current  = true;
    dragMoved.current   = false;
    dragStartX.current  = e.pageX;
    dragScrollL.current = el.scrollLeft;
    isPaused.current    = true;
    el.style.cursor     = "grabbing";
    el.style.userSelect = "none";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = e.pageX - dragStartX.current;
    if (Math.abs(delta) > 4) dragMoved.current = true;
    el.scrollLeft = dragScrollL.current - delta;
  }, []);

  const onMouseUp = useCallback(() => {
    const el = scrollRef.current;
    isDragging.current = false;
    isPaused.current   = false;
    if (el) { el.style.cursor = "grab"; el.style.userSelect = ""; }
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const noPhotos = filtered.length === 0;

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-[78px]">
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8">

        {/* Heading */}
        <div className="w-full text-center">
          <p className="text-lg font-bold leading-normal text-[#aa4a4b] sm:text-2xl">
            Galeri Foto Usaha
          </p>
          <h2 className="w-full text-[clamp(1.4rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[0] text-black-700">
            Dokumentasi Pengiriman Mahameru Logistic
          </h2>
        </div>

        {/* Filter buttons */}
        <nav
          aria-label="Filter lokasi galeri"
          className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5"
        >
          {galleryLocations.map((location) => {
            const isActive = activeLocation === location;
            return (
              <button
                key={location}
                type="button"
                onClick={() => handleFilterClick(location)}
                className={[
                  "h-auto rounded-[10px] px-4 py-2 text-[14px] font-semibold leading-[160%] tracking-[0] transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-[15px]",
                  isActive
                    ? "bg-[#dc2626] text-white shadow-sm"
                    : "bg-[#f3f7f8] text-[#090f32] hover:bg-[#e8eef1]",
                ].join(" ")}
              >
                {location}
              </button>
            );
          })}
        </nav>

        {/* Gallery carousel */}
        {noPhotos ? (
          <div className="flex w-full items-center justify-center rounded-2xl bg-gray-50 py-20 text-center">
            <div>
              <p className="text-4xl">📦</p>
              <p className="mt-3 text-base font-medium text-gray-500">
                Foto untuk lokasi ini akan segera hadir
              </p>
            </div>
          </div>
        ) : (
          <div className="relative w-full">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={() => { onMouseUp(); isPaused.current = false; }}
              onMouseEnter={() => { isPaused.current = true; }}
              onTouchStart={() => { isPaused.current = true; }}
              onTouchEnd={() => { isPaused.current = false; }}
              className="flex gap-4 overflow-x-auto scroll-smooth sm:gap-5"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                cursor: "grab",
              } as React.CSSProperties}
            >
              {filtered.map((card, i) => (
                <div
                  key={i}
                  className="group relative shrink-0 overflow-hidden rounded-2xl shadow-sm"
                  style={{
                    width: "clamp(260px, 72vw, 440px)",
                    height: "clamp(300px, 55vw, 540px)",
                    flexShrink: 0,
                  }}
                  onClick={() => {
                    if (!dragMoved.current) {
                      setLightbox({ src: card.src, title: card.title, desc: card.desc });
                    }
                  }}
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Bottom info bar */}
                  <div className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between gap-3 rounded-[14px] bg-white px-3 py-2.5 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-3 sm:px-4 sm:py-3">
                    <div className="min-w-0">
                      <p className="truncate text-[16px] font-bold leading-[1.4] text-colortext sm:text-[18px]">
                        {card.title}
                      </p>
                      <p className="truncate text-[13px] font-[500] leading-[160%] text-colorparagraph sm:text-[14px]">
                        {card.desc}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dc2626] sm:h-10 sm:w-10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dot navigation */}
        {!noPhotos && dotCount > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: dotCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => scrollToDot(i)}
                className={`block h-3 rounded-[10px] transition-all duration-300 ${
                  i === activeDot ? "w-8 bg-[#dc2626]" : "w-4 bg-[#dc262640]"
                }`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-[90vw] flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Tutup"
              onClick={() => setLightbox(null)}
              className="absolute -right-2 -top-10 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:-right-4 sm:-top-4 sm:h-10 sm:w-10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="block max-h-[75vh] w-full max-w-full rounded-2xl object-contain shadow-2xl"
              draggable={false}
            />

            <div className="text-center">
              <p className="text-sm font-semibold text-white sm:text-base">{lightbox.title}</p>
              <p className="text-xs text-white/70 sm:text-sm">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
