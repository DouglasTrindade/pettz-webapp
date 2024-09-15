import _ from "lodash";

import { Carousel } from "@/components/Carousel";
import { ProductItem } from "@/components/ProductItem";
import { Banner } from "@/components/Banner";
import Link from "next/link";

const PRODUCTS = 6;

const Home = () => {
  return (
    <div className="container h-screen py-8">
      <div className="text-2xl font-bold">Navegue por categoria</div>
      <div className="mt-8">
        <Carousel />
      </div>
      <div className="text-center text-2xl font-bold py-8">
        Produtos mais vendidos
      </div>
      <div className="grid grid-cols-3 gap-y-6 w-full">
        {_.map(_.range(PRODUCTS), (index) => (
          <ProductItem
            key={index}
            title="Ração Premium Dog"
            price={200}
            imageUrl="/category.jpg"
          />
        ))}
      </div>
      <div className="text-center pt-5 pb-20">
        <Link
          className="uppercase font-semibold text-sm border-b-2 border-black hover:border-primary hover:text-primary"
          href=""
        >
          Carregar mais
        </Link>
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
