import { Card, CardContent } from "@/components/ui/card";

const companyProfile = {
  eyebrow: "Profil Usaha",
  title: "PT MAHAMERU TRANSPORTASI NUSANTARA",
};

export default function CompanyShowcaseSection() {
  return (
    <section className="relative w-full">
      <Card className="w-full border-0 bg-transparent shadow-none">
        <CardContent className="flex w-full flex-col items-start gap-0 p-0">
          <p className="mt-[-1px] self-stretch text-2xl font-semibold leading-normal tracking-normal text-secondary-600">
            {companyProfile.eyebrow}
          </p>
          <h2 className="self-stretch text-3xl font-bold leading-tight tracking-tight text-black-700 sm:text-4xl">
            {companyProfile.title}
          </h2>
        </CardContent>
      </Card>
    </section>
  );
}