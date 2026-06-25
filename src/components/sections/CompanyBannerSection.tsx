import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "fcl",
    image: "/figmaAssets/rectangle-23985.png",
    title: "FCL",
    subtitle: "(Full Container Load)",
    description:
      "Pengiriman menggunakan satu container penuh untuk satu pelanggan. Cocok untuk muatan besar seperti bahan bangunan, produk industri, retail besar, atau kebutuhan proyek yang membutuhkan kapasitas khusus dan lebih terkontrol.",
    features: [
      { icon: "/figmaAssets/group-8271.png", text: "1 container untuk satu customer" },
      { icon: "/figmaAssets/group-8271-1.png", text: "Muatan tidak digabung dengan barang customer lain" },
      { icon: "/figmaAssets/group-8271-2.png", text: "Cocok pengiriman besar & rutin" },
      { icon: "/figmaAssets/group-8271-3.png", text: "Lebih aman, efisien, dan mudah dipantau" },
    ],
  },
  {
    id: "lcl",
    image: "/figmaAssets/rectangle-23983.png",
    title: "LCL",
    subtitle: "(Less Container Load)",
    description:
      "Layanan pengiriman barang dalam jumlah kecil hingga sedang dengan sistem gabungan dalam 1 container. Cocok untuk UMKM, retail customer yang belum membutuhkan satu container penuh.",
    features: [
      { icon: "/figmaAssets/group-8271.png", text: "1 container untuk banyak customer" },
      { icon: "/figmaAssets/group-8271-1.png", text: "Biaya lebih hemat" },
      { icon: "/figmaAssets/group-8271-2.png", text: "Cocok untuk barang kecil menengah" },
      { icon: "/figmaAssets/group-8271-3.png", text: "Tetap menggunakan jalur cargo laut" },
    ],
  },
  {
    id: "project",
    image: "/figmaAssets/project-cargo-photo.png",
    title: "Project Cargo",
    subtitle: "",
    description:
      "Layanan pengiriman barang proyek, alat berat, mesin, material konstruksi, atau muatan khusus yang membutuhkan penanganan lebih detail dan berkoordinasi.",
    features: [
      { icon: "/figmaAssets/group-8271.png", text: "Untuk barang besar/berat" },
      { icon: "/figmaAssets/group-8271-1.png", text: "Penanganan khusus dan terencana" },
      { icon: "/figmaAssets/group-8271-2.png", text: "Cocok untuk kebutuhan proyek" },
      { icon: "/figmaAssets/group-8271-3.png", text: "Koordinasi menyeluruh end-to-end" },
    ],
  },
];

const gridCols: Record<string, string> = {
  fcl:     "lg:grid-cols-[8fr_3fr_3fr]",
  lcl:     "lg:grid-cols-[3fr_8fr_3fr]",
  project: "lg:grid-cols-[3fr_3fr_8fr]",
};

export const CompanyBannerSection = (): JSX.Element => {
  const [activeId, setActiveId] = useState("fcl");

  return (
    <section className="relative w-full">
      <div className="flex w-full flex-col items-start gap-9">
        <header className="flex flex-col items-start gap-[5px]">
          <p className="relative self-stretch text-2xl font-bold leading-[normal] tracking-[0] text-[#aa4a4b]">
            Layanan Pengiriman Mahameru Logistic
          </p>
          <h2 className="relative max-w-[1239px] text-[40px] font-bold leading-[1.2] tracking-[0] text-black-700">
            Solusi Pengiriman yang Fleksibel untuk Setiap Kebutuhan
          </h2>
        </header>

        <div className={`grid w-full grid-cols-1 gap-6 transition-all duration-500 lg:gap-[33px] ${gridCols[activeId]}`}>
          {services.map((svc) => {
            const isActive = svc.id === activeId;

            if (isActive) {
              return (
                <Card key={svc.id} className="rounded-[50px] border-[0.6px] border-[#cacaca] bg-white shadow-[0px_8px_30px_#0f1b241a]">
                  <CardContent className="p-0">
                    <article className="flex h-full flex-col gap-6 px-[19px] pb-[22px] pt-[17px] md:flex-row md:items-stretch md:gap-4">
                      <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[32px] md:h-auto md:min-h-[545px] md:w-[324px] md:min-w-[324px] md:self-stretch">
                        <img
                          className="absolute inset-0 h-full w-full object-cover"
                          alt={svc.title}
                          src={svc.image}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-[39px]">
                        <div className="flex flex-col items-end gap-5">
                          <div className="flex flex-col items-start gap-[15px] self-stretch">
                            <div className="flex flex-col items-start">
                              <h3 className="text-5xl font-extrabold leading-[57.6px] tracking-[0] text-red-600">
                                {svc.title}
                              </h3>
                              {svc.subtitle && (
                                <p className="text-[24px] font-bold leading-[1.5] tracking-[0] text-[#0f1b24]">
                                  {svc.subtitle}
                                </p>
                              )}
                            </div>
                            <p className="self-stretch text-justify text-[14px] font-[500] leading-[155%] tracking-[0] text-black-600">
                              {svc.description}
                            </p>
                          </div>
                          <div className="flex flex-col items-start gap-[5px] self-stretch">
                            <p className="relative self-stretch text-sm font-normal leading-[14px] tracking-[0] text-black-600">
                              <span className="text-[14px] font-[500] leading-[155%] text-[#212729]">
                                Keunggulan Layanan:
                              </span>
                            </p>
                            <ul className="flex flex-col items-start gap-[5px] self-stretch">
                              {svc.features.map((item, index) => (
                                <li key={index} className="flex items-center gap-1.5 self-stretch">
                                  <img
                                    className="relative h-4 w-4 shrink-0"
                                    alt=""
                                    src={item.icon}
                                    width={16}
                                    height={16}
                                  />
                                  <span className="w-fit text-[14px] font-[500] leading-[155%] tracking-[0] text-black-600">
                                    {item.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <a href="#kontak" onClick={(e) => { e.preventDefault(); document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" }); }}>
                          <Button className="h-auto w-full overflow-hidden rounded-lg bg-grays px-[30px] py-5 hover:bg-grays">
                            <span className="text-[18px] font-[600] leading-[155%] tracking-[0] text-white">
                              Ajukan Penawaran
                            </span>
                          </Button>
                        </a>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              );
            }

            return (
              <button
                key={svc.id}
                type="button"
                onClick={() => setActiveId(svc.id)}
                className="relative min-h-[300px] cursor-pointer overflow-hidden rounded-[32px] text-left transition-transform duration-200 hover:scale-[1.02] lg:min-h-[596px]"
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  alt={svc.title}
                  src={svc.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="relative flex h-full flex-col justify-end px-6 pb-[29px]">
                  <h3 className="mb-[13px] w-[220px] text-left text-[40px] font-bold leading-[1.2] tracking-[0] text-white [text-shadow:0px_16px_40px_#0f1b241a]">
                    {svc.title}
                  </h3>
                  <span className="hidden h-auto w-[220px] items-center justify-center rounded-[90px] bg-white px-2.5 py-[18px] text-[18px] font-[600] leading-[155%] tracking-[0] text-secondary-600 lg:inline-flex">
                    Selengkapnya
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
