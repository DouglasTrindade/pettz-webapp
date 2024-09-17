import { Button } from "./ui/button";

export const Banner = () => {
  return (
    <div className="relative grid grid-cols-2 items-center h-[400px] overflow-hidden">
      <div className="relative h-full">
        <img
          className="w-full h-full object-cover"
          src="/bg-banner.svg"
          alt="banner"
        />
      </div>

      <div className="flex flex-col gap-3 ">
        <span className="text-primary font-bold text-sm">Pet Shop</span>
        <span className="text-2xl font-extrabold">
          A maneira mais inteligente de fazer compras para seu animal de
          estimação
        </span>
        <span className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. At et vehicula sodales est
          proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget
          sit
        </span>
        <Button className="font-bold me-auto">Ler mais</Button>
      </div>

      <div className="absolute -left-40 xl:-left-20 2xl:-left-5 -top-5  h-full flex items-end justify-end z-0">
        <img className="h-full" src="/dog-banner.png" alt="dog-banner" />
      </div>
    </div>
  );
};
