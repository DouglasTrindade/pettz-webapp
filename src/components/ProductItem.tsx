import { Card, CardContent } from "./ui/card";

interface ProductItemProps {
  title: string;
  price: number;
  imgUrls: string[];
}

export const ProductItem = ({ imgUrls, title, price }: ProductItemProps) => {
  return (
    <Card className="h-full">
      {imgUrls.map((imgUrl, index: number) => (
          <img
            key={index}
            className="rounded-t-lg w-full object-cover max-h-[250px]"
            src={imgUrl}
            alt={title}
          />
        ))}
      <CardContent className="p-3">
        <div className="flex flex-col h-100">
          <span className="font-medium text-gray-500">{title}</span>
          <span className="text-lg text-primary font-extrabold">
            {Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
