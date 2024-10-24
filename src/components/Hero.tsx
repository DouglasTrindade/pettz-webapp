import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative h-[500px]">
      <div className="relative">
        <div className="hidden md:block">
          <Image
            className="absolute top-[-4rem] left-[50%] -translate-x-[50%] -z-10"
            src="/hero-1.svg"
            width={150}
            height={150}
            alt="hero-1"
          />
        </div>
        <div className="flex flex-col pt-[130px] gap-y-4">
          <span className="text-primary font-bold text-sm">Pet Shop</span>
          <span className="text-4xl font-extrabold">
            Um pet shop com tudo que você precisa
          </span>
          <span className="text-gray-600 font-semibold w-[300px] lg:w-[400px]">
            Sociis blandit et pellentesque aliquet at quisque tortor lacinia
            nullam. Mattis aenean scelerisque dui libero
          </span>
          <Button className="font-bold me-auto">Comprar agora</Button>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block">
          <Image
            className="absolute bottom-0"
            src="/hero.svg"
            width={700}
            height={600}
            alt="hero"
          />
        </div>
        <div className="hidden md:block">
          <Image
            className="absolute lg:left-[10%] bottom-0"
            src="/hero-girls.png"
            width={500}
            height={450}
            alt="hero"
          />
        </div>
      </div>
      <Image
        className="absolute bottom-0 left-[28%] hidden md:block"
        src="/hero-2.svg"
        width={150}
        height={150}
        alt="hero-2"
      />
    </div>
  );
};
