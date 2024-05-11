import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Wonderful seller! Beautiful healthy plants and well packaged with fast shipping.",
      author: "Gustavo Fring",
    },
    {
      text: "My order shipped pretty much across the country. Very happy with the quality of shipping and service!",
      author: "Carl Johnson",
    },
    {
      text: "Thank you for the care you put into these plants. They always arrive so healthy looking and do great in my aquariums!",
      author: "Tupac Shakur",
    },
  ];

  return (
    <Carousel className="max-w-[300px] mt-8 mx-auto md:max-w-[600px] lg:max-w-[900px]">
      <CarouselContent>
        {testimonials.map(({ text, author }) => (
          <CarouselItem key={author} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <q className="text-lg">{text}</q>
                  <p className="text-sm mt-4 text-gray-500 text-right w-full">
                    - {author}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
