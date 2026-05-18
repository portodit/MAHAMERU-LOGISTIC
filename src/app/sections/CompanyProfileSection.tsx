import { Card, CardContent } from "@/components/ui/card";

const companyProfileParts = [
  { text: "Adalah ", className: "font-medium leading-[27.9px]" },
  { text: "perusahaan logistik ", className: "font-medium leading-[27.9px]" },
  { text: "yang berdiri ", className: "font-medium leading-[27.9px]" },
  { text: "sejak 2020", className: "font-medium leading-[27.9px]" },
  { text: " dan berpengalaman dalam ", className: "font-medium leading-[27.9px]" },
  { text: "pengiriman cargo container", className: "font-medium leading-[27.9px]" },
  { text: " ke Banjarmasin dan Manado. Mahameru Logistic melayani berbagai kebutuhan pengiriman, mulai dari perorangan, retail, distributor, manufaktur, hingga instansi pemerintahan melalui layanan FCL, LCL, dan project cargo yang fleksibel, aman, dan efisien.", className: "font-medium leading-[27.9px]" },
];

export default function CompanyProfileSection() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[920px]">
        <Card className="h-auto border-0 bg-transparent p-0 shadow-none">
          <CardContent className="p-0">
            <p className="text-base font-normal leading-relaxed tracking-normal text-black-900 text-justify sm:text-lg">
              {companyProfileParts.map((part, index) => (
                <span
                  key={`company-profile-part-${index}`}
                  className={part.className}
                >
                  {part.text}
                </span>
              ))}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}