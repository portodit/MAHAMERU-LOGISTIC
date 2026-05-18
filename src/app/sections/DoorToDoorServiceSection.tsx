import { Card, CardContent } from "@/components/ui/card";

const serviceCard = {
  title: "Door to Door",
  subtitle: "Service Full Container",
  image: "/figmaAssets/image-2.png",
};

export default function DoorToDoorServiceSection() {
  return (
    <section className="w-full">
      <Card className="h-full w-full overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none">
        <CardContent className="h-full p-0">
          <article
            className="flex h-full min-h-[338px] w-full items-end bg-[length:100%_100%] bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${serviceCard.image})` }}
          >
            <div className="flex w-full flex-col items-center px-6 pb-8 text-center sm:px-8 sm:pb-10">
              <h3 className="text-[40px] font-bold leading-[48px] text-white" style={{ textShadow: "0px 16px 40px #0f1b241a" }}>
                {serviceCard.title}
              </h3>
              <p className="mt-2 text-lg font-semibold text-white">
                {serviceCard.subtitle}
              </p>
            </div>
          </article>
        </CardContent>
      </Card>
    </section>
  );
}