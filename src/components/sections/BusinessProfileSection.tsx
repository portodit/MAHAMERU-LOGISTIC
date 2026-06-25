import { useEffect, useRef, useState } from "react";

const stats = [
  { iconSrc: "/figmaAssets/vector-2.svg",    iconAlt: "Container terkirim", target: 1000, suffix: "+", label: "Container Terkirim" },
  { iconSrc: "/figmaAssets/streamline-sharp-color-location-office-flat.svg", iconAlt: "Kantor cabang", target: 3, suffix: "+", label: "Kantor Cabang" },
  { iconSrc: "/figmaAssets/vector-1.svg",     iconAlt: "Pelanggan tetap",    target: 10,   suffix: "+", label: "Pelanggan Tetap"  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let rafId = 0;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, duration]);
  return count;
}

function StatCard({ stat, started, delay }: { stat: (typeof stats)[0]; started: boolean; delay: number }) {
  const count = useCountUp(stat.target, 1600, started);
  return (
    <article
      className="flex flex-col items-start"
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={stat.iconSrc}
          alt={stat.iconAlt}
          className="h-8 w-8 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        />
        <span
          className="font-extrabold leading-none tracking-tight text-secondary-600"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
        >
          {count}{stat.suffix}
        </span>
      </div>
      <p className="mt-1 text-sm sm:text-base lg:text-lg font-semibold text-[#212527]">
        {stat.label}
      </p>
    </article>
  );
}

export const BusinessProfileSection = (): JSX.Element => {
  const textRef  = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [textVisible,  setTextVisible]  = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [imgVisible,   setImgVisible]   = useState(false);

  useEffect(() => {
    let done = false;
    const showText = () => { if (done) return; setTextVisible(true); setTimeout(() => setStatsVisible(true), 220); };
    const showImg  = () => { if (done) return; setImgVisible(true); };

    const immediateCheck = () => {
      const inView = (el: Element | null) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight + 100 && r.bottom > 0;
      };
      if (inView(textRef.current))  showText();
      if (inView(imageRef.current)) showImg();
    };

    const t0      = setTimeout(immediateCheck, 80);
    const fallback = setTimeout(() => { showText(); showImg(); }, 1200);

    const makeObs = (el: Element | null, cb: () => void) => {
      if (!el) return new IntersectionObserver(() => {});
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { cb(); obs.disconnect(); } },
        { threshold: 0, rootMargin: "0px 0px -30px 0px" },
      );
      obs.observe(el);
      return obs;
    };

    const o1 = makeObs(textRef.current,  showText);
    const o2 = makeObs(imageRef.current, showImg);

    return () => {
      done = true;
      clearTimeout(t0);
      clearTimeout(fallback);
      o1.disconnect();
      o2.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[78px]">
      <div className="flex w-full flex-col items-start gap-8 md:gap-12">

        {/* Top row: text+stats on left, container image on right */}
        <div
          ref={textRef}
          className="flex w-full items-start gap-8 lg:gap-12"
          style={{
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateX(0)" : "translateX(-36px)",
          }}
        >
          {/* Left: title, description, stats */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-lg font-bold text-secondary-600 md:text-2xl">Profil Usaha</p>
              <h2
                className="font-bold leading-snug text-[#1c2122]"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
              >
                PT MAHAMERU TRANSPORTASI NUSANTARA
              </h2>
            </div>

            <p className="mb-6 text-justify text-[clamp(0.85rem,1.3vw,1.05rem)] font-normal leading-relaxed text-[#1c2122] md:leading-[1.8]">
              Adalah <span className="font-semibold">perusahaan logistik</span> yang berdiri{" "}
              <span className="font-semibold">sejak 2020</span> dan berpengalaman dalam{" "}
              <span className="font-semibold">pengiriman cargo container</span> ke Banjarmasin dan
              Manado. Mahameru Logistic melayani berbagai kebutuhan pengiriman, mulai dari perorangan,
              retail, distributor, manufaktur, hingga instansi pemerintahan melalui layanan{" "}
              <span className="font-semibold">FCL, LCL, dan project cargo</span> yang fleksibel, aman,
              dan efisien.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 items-start gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} started={statsVisible} delay={i * 160} />
              ))}
            </div>
          </div>

          {/* Right: decorative container image — desktop only */}
          <div className="hidden shrink-0 lg:block">
            <img
              src="/figmaAssets/group-1321314671.png"
              alt=""
              aria-hidden
              className="pointer-events-none h-[280px] w-auto object-contain xl:h-[340px]"
            />
          </div>
        </div>

        {/* Full-width office photo */}
        <div
          ref={imageRef}
          className="w-full overflow-hidden rounded-2xl"
          style={{
            transition: "opacity 0.85s ease, transform 0.85s ease",
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? "translateY(0)" : "translateY(48px)",
          }}
        >
          <img
            src="/figmaAssets/rectangle-3158.png"
            alt="Gedung PT Mahameru Transportasi Nusantara"
            className="h-[180px] w-full object-cover sm:h-[260px] md:h-[380px] lg:h-[480px] xl:h-[560px]"
          />
        </div>

      </div>
    </section>
  );
};
