"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const topBarItems = [
  {
    icon: "/figmaAssets/watch.png",
    iconAlt: "Watch",
    text: "Sen - Sab: 08.30 - 17.00, Minggu: Tutup",
    iconClassName: "h-[11.62px] w-[11.62px]",
  },
  {
    icon: "/figmaAssets/vector.svg",
    iconAlt: "Phone",
    text: "+088 65952 23366",
    iconClassName: "h-[10.5px] w-[10.5px]",
  },
  {
    icon: "/figmaAssets/map-pin.png",
    iconAlt: "Map pin",
    text: "Jl. Yos Sudarso No.7, Banjarmasin, Kalimantan Selatan",
    iconClassName: "h-[11.4px] w-[9.9px]",
  },
];

const navItems = ["Home", "About", "Services", "Projects", "Blog & Insights", "Contact"];

const socialItems = [
  { label: "Facebook", symbol: "", muted: true },
  { label: "Twitter", symbol: "", muted: false },
  { label: "Pinterest", symbol: "", muted: true },
  { label: "Instagram", symbol: "", muted: true },
];

export default function HeroBannerSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[100svh] w-full md:min-h-[649px]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          alt="Container shipping yard"
          src="/figmaAssets/img-8716-1.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(181deg,rgba(255,255,255,0)_8%,rgba(0,0,0,1)_100%)] opacity-60" />

        <header
          className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ease-in-out ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              scrolled ? "max-h-0 opacity-0" : "max-h-[40px] opacity-100"
            } bg-[url(/figmaAssets/line.svg)] bg-[100%_100%] bg-no-repeat`}
          >
            <div className="mx-auto flex min-h-[27px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-[79px]">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                {topBarItems.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-[4px] text-[10.5px] font-normal leading-[normal] text-white"
                  >
                    <img
                      className={item.iconClassName}
                      alt={item.iconAlt}
                      src={item.icon}
                    />
                    <span className="text-center">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="hidden items-center gap-4 text-[10.5px] leading-[normal] sm:flex">
                {socialItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    aria-label={item.label}
                    className={`h-auto whitespace-nowrap bg-transparent p-0 ${
                      item.muted ? "text-[#ffffffb2]" : "text-white"
                    }`}
                  >
                    {item.symbol}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white transition-colors duration-300">
            <div className="mx-auto flex min-h-[65px] w-full max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-[79px]">
              <img
                className="h-11 w-[171px] object-contain"
                alt="Mahameru"
                src="/figmaAssets/mahameru-transportasi-nusantara-logo-transparent-2.png"
              />
              <nav aria-label="Main navigation" className="hidden md:block">
                <ul className="flex items-center gap-[22.51px]">
                  {navItems.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="text-xs font-semibold leading-[normal] text-black transition-opacity hover:opacity-70"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-3">
                <Button className="hidden h-auto rounded-[5.43px] bg-grays px-[20.35px] py-[13.57px] text-[12.2px] font-semibold leading-[18.9px] text-white hover:bg-grays/90 md:flex">
                  Kontak Admin
                </Button>
                <button
                  type="button"
                  aria-label="Toggle menu"
                  data-testid="button-mobile-menu"
                  onClick={() => setMobileOpen((v) => !v)}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-gray-100 md:hidden"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            } bg-white shadow-lg`}
          >
            <nav aria-label="Mobile navigation" className="px-4 pb-4 pt-2">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-black transition-colors hover:bg-gray-50"
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <Button className="w-full bg-grays text-[12.2px] font-semibold text-white hover:bg-grays/90">
                    Kontak Admin
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] items-center justify-center px-4 pb-16 pt-36 sm:px-6 md:min-h-[649px] md:pt-28 lg:px-[79px]">
          <div className="flex max-w-[1282px] flex-col items-center text-center text-white">
            <h1 className="text-[38px] font-bold leading-[1.15] tracking-tight text-white sm:text-[52px] lg:text-[64px] lg:leading-[80px]" style={{ textShadow: "0px 3px 5px #000000b2" }}>
              Solusi Logistik Laut
              <br />
              Murah, Cepat, Terpercaya
            </h1>
            <p className="mt-6 max-w-[1120px] text-base font-medium leading-[1.7] text-white sm:text-lg lg:text-xl lg:leading-[34px]">
              Sejak 2020, Mahameru Logistic melayani pengiriman cargo container
              ke Banjarmasin dan Manado melalui layanan FCL, LCL, dan project
              cargo untuk kebutuhan retail, UMKM, supplier, hingga industri.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-[60px]">
              <Button className="h-[56px] rounded-lg bg-grays px-[30px] py-5 text-base font-semibold text-white hover:bg-grays/90 sm:h-[60px]">
                Layanan Kami
              </Button>
              <Button
                variant="secondary"
                className="h-[56px] rounded-lg bg-white px-[30px] py-5 text-base font-semibold text-secondary-600 hover:bg-white/90 sm:h-[60px]"
              >
                Lacak Pengiriman
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}