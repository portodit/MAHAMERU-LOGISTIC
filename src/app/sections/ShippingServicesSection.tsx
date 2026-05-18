import { Card, CardContent } from "@/components/ui/card";

const shippingServicesContent = {
  eyebrow: "Layanan Pengiriman Mahameru Logistic",
  title: "Solusi Pengiriman yang Fleksibel untuk Setiap Kebutuhan",
};

export default function ShippingServicesSection() {
  return (
    <section className="relative w-full">
      <Card className="w-full border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-start gap-1 p-0">
          <p className="mt-[-1px] text-2xl font-semibold leading-normal tracking-normal text-[#aa4a4b]">
            {shippingServicesContent.eyebrow}
          </p>
          <h2 className="max-w-[1239px] text-3xl font-bold leading-tight tracking-tight text-black-700 sm:text-4xl">
            {shippingServicesContent.title}
          </h2>
        </CardContent>
      </Card>
    </section>
  );
}