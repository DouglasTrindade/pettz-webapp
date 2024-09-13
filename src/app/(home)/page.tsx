import { Carousel } from "@/components/Carousel";

const Home = () => {
  return (
    <div className="container h-screen mt-8">
      <span className="text-3xl font-bold">Navegue por categoria</span>
      <div className="mt-8">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
