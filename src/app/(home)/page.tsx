import { Carousel } from "@/components/Carousel";
import { ProductItem } from "@/components/ProductItem";

const Home = () => {
  return (
    <div className="container h-screen py-8">
      <div className="text-2xl font-bold">Navegue por categoria</div>
      <div className="mt-8">
        <Carousel />
      </div>
      <div className="text-center text-2xl font-bold pt-8">
        Produtos mais vendidos
      </div>
      <div>
        <ProductItem
          title="Ração Premium Dog"
          price={200}
          imageUrl="/category.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
