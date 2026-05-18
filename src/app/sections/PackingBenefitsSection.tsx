import { Card, CardContent } from "@/components/ui/card";

const packingBenefitsContent = {
  eyebrow: "Keunggulan Usaha",
  title: "Mengapa Memilih Mahameru Logistic?",
  description:
    "Lorem ipsum dulur sit amet dulur sit amet Lorem ipsum dulur sit amet dulur sit ametLorem ipsum dulur sit amet dulur sit amet",
};

export default function PackingBenefitsSection() {
  return (
    <section className="relative w-full">
      <Card className="h-auto w-full border-0 bg-transparent shadow-none">
        <CardContent className="flex w-full max-w-[474px] flex-col items-start gap-[29px] p-0">
          <header className="flex w-full flex-col items-start">
            <p className="mt-[-1px] w-full text-2xl font-semibold leading-normal tracking-normal text-secondary-600">
              {packingBenefitsContent.eyebrow}
            </p>
            <h2 className="w-full text-3xl font-bold leading-tight tracking-tight text-black-700 sm:text-4xl">
              {packingBenefitsContent.title}
            </h2>
          </header>
          <p className="w-full max-w-[437px] text-base font-normal leading-relaxed text-black-900 text-justify sm:text-lg">
            {packingBenefitsContent.description}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}