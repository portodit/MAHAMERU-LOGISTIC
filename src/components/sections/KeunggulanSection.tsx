"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const advantageCards = [
  {
    title: "Harga Pengiriman Kompetitif",
    description:
      "Solusi pengiriman cargo laut dengan biaya efisien untuk kebutuhan bisnis, retail, dan proyek.",
    imageSrc: "/figmaAssets/money-loss-1.svg",
    imageAlt: "Money loss",
  },
  {
    title: "Rute Pengiriman Strategis",
    description:
      "Melayani pengiriman cargo laut melalui titik utama Surabaya, Jakarta, dan Banjarmasin.",
    imageSrc: "/figmaAssets/route-1.png",
    imageAlt: "Route",
  },
  {
    title: "Layanan Fleksibel",
    description:
      "Tersedia pilihan pengiriman FCL, LCL, dan Project Cargo sesuai volume dan kebutuhan barang.",
    imageSrc: "/figmaAssets/material-management-1.png",
    imageAlt: "Material management",
  },
  {
    title: "Tim Logistik Berpengalaman",
    description:
      "Didukung tim operasional yang memahami proses pengiriman container dan cargo laut.",
    imageSrc: "/figmaAssets/badge-1.png",
    imageAlt: "Badge",
  },
  {
    title: "Keamanan Barang Prioritas",
    description:
      "Keamanan setiap muatan menjadi prioritas utama kami dalam setiap proses pengiriman.",
    imageSrc: "/figmaAssets/badge-1.png",
    imageAlt: "Security",
  },
  {
    title: "Respon Cepat & Komunikatif",
    description:
      "Tim kami siap merespons dengan cepat dan komunikatif untuk memastikan pengiriman berjalan lancar.",
    imageSrc: "/figmaAssets/route-1.png",
    imageAlt: "Fast response",
  },
  {
    title: "Solusi Logistik Hemat & Efektif",
    description:
      "Kami menghadirkan solusi logistik yang hemat biaya namun tetap efektif untuk berbagai skala bisnis.",
    imageSrc: "/figmaAssets/money-loss-1.svg",
    imageAlt: "Efficient logistics",
  },
];

export const KeunggulanSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !cardsContainer) return;

    const handleScroll = (e: WheelEvent) => {
      // Check if section is in viewport
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Section is in view if it's visible in viewport (at least partially)
      const inView = sectionTop < viewportHeight && sectionBottom > 0;
      setIsInView(inView);

      if (!inView) return;

      // Check if cards container has overflow (needs scrolling)
      const hasOverflow = cardsContainer.scrollHeight > cardsContainer.clientHeight;
      if (!hasOverflow) return;

      const { scrollTop, scrollHeight, clientHeight } = cardsContainer;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Determine scroll direction
      const delta = e.deltaY;
      const scrollingDown = delta > 0;

      // Lock logic:
      // - If scrolling down and at top, intercept and scroll cards
      // - If scrolling up and at bottom, intercept and scroll cards up
      // - If already in middle of cards, allow card scrolling
      if (scrollingDown && isAtTop) {
        // User scrolls down while at top of cards - scroll cards first
        e.preventDefault();
        cardsContainer.scrollTop += Math.abs(delta);
        setIsLocked(true);
      } else if (!scrollingDown && isAtBottom) {
        // User scrolls up while at bottom of cards - scroll cards first
        e.preventDefault();
        cardsContainer.scrollTop -= Math.abs(delta);
        setIsLocked(true);
      } else if (!isAtTop && !isAtBottom) {
        // Cards are being scrolled in middle - intercept
        e.preventDefault();
        cardsContainer.scrollTop += delta;
        setIsLocked(true);
      } else if (isAtTop && !scrollingDown) {
        // At top and scrolling up - unlock
        setIsLocked(false);
      } else if (isAtBottom && scrollingDown) {
        // At bottom and scrolling down - unlock
        setIsLocked(false);
      }
    };

    // Add passive: false to allow preventDefault
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 py-16 sm:px-6 md:px-8 lg:px-[78px] md:py-24">
      {/* Background Container - full width responsive */}
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat sm:rounded-3xl lg:rounded-[35px]"
        style={{
          backgroundImage: "url('/figmaAssets/frame-1618873361.png')",
        }}
      >
        {/* Overlay: top-to-bottom on mobile, left-to-right on desktop */}
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* Content Grid */}
        <div className="relative z-10 flex min-h-0 w-full flex-col gap-6 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:grid lg:grid-cols-[437px_auto] lg:gap-14 lg:py-[49px]">
          {/* Header / Left column */}
          <header className="flex min-h-0 flex-col gap-4 lg:justify-between lg:gap-0">
            <div>
              <p className="text-sm font-bold leading-normal text-white sm:text-base lg:text-2xl">
                Keunggulan Usaha
              </p>
              <h2 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[40px]">
                Mengapa Memilih Mahameru Logistic?
              </h2>
            </div>
            <p className="max-w-full text-sm font-semibold leading-relaxed text-white text-justify lg:max-w-[437px] lg:text-[18px]">
              Solusi pengiriman cargo laut dari Surabaya, Jakarta, dan
              Banjarmasin untuk kebutuhan FCL, LCL, dan Project Cargo.
            </p>
          </header>

          {/* Cards / Right column - scrollable */}
          <div
            ref={cardsContainerRef}
            className="no-scrollbar flex min-h-0 flex-col gap-3 overflow-y-auto sm:gap-[14px] lg:max-h-[480px] lg:justify-self-end"
          >
            {advantageCards.map((card) => (
              <Card
                key={card.title}
                className="flex-shrink-0 rounded-xl border border-[#cacaca] bg-white shadow-[0px_8px_24px_#0f1b241a] lg:rounded-[12.14px]"
              >
                <CardContent className="flex items-center gap-3 px-4 py-4 sm:gap-[18px] sm:px-[16.18px] sm:py-5">
                  <img
                    className="h-12 w-12 flex-shrink-0 object-contain sm:h-[62px] sm:w-[62px] lg:h-[75px] lg:w-[75px]"
                    alt={card.imageAlt}
                    src={card.imageSrc}
                  />
                  <article className="flex min-w-0 flex-1 flex-col">
                    <h3 className="text-base font-bold leading-snug text-[#0f1b24] sm:text-lg lg:text-[24.3px]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs font-normal leading-relaxed text-[#757575] sm:text-sm lg:text-[14.2px]">
                      {card.description}
                    </p>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
