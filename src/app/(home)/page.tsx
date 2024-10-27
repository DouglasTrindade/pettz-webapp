"use client";

import _ from "lodash";
import { Carousel } from "@/components/Carousel";
import { ProductItem } from "@/components/ProductItem";
import { Banner } from "@/components/Banner";
import { PostCard } from "../blog/components/PostCard";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { useUserRolePermissions } from "@/hooks/useUserRolePermissions";

const POSTCARDS = 4;

interface ProductProps {
  imgUrls: string[];
  id: number;
  name: string;
  price: number;
}

interface ApiResponse {
  content: ProductProps[];
}

const Home = () => {
  const [products, setProducts] = useState<ApiResponse>({ content: [] });
  const { redirectTo, isAdmin } = useUserRolePermissions();

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isAdmin) redirectTo();
  return (
    <div className="h-screen py-8">
      <div className="text-2xl font-bold text-gray-600">
        Navegue por categoria
      </div>
      <div className="mt-8">
        <Carousel />
      </div>
      <div className="text-center text-2xl text-gray-600 font-bold py-8">
        Produtos mais vendidos
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.content.map((product, index) => (
          <ProductItem
            key={index}
            title={product.name}
            price={product.price}
            imgUrls={product.imgUrls}
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
      <div>
        <div className="text-center py-8">
          <span className="text-gray-600 text-2xl font-bold">News & Blog</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {_.map(_.range(POSTCARDS), (index) => (
            <PostCard
              key={index}
              title="Urna cras et mauris congue nunc nisi nec tempus cursus"
              badgeName="News"
              date="24 May,2024"
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
