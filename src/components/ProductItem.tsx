import { Card, CardContent } from "./ui/card";

interface ProductItemProps {
  title: string;
  imageUrl: string;
  price: number;
}

export const ProductItem = ({ imageUrl, title, price }: ProductItemProps) => {
  return (
    <Card className="w-[300px] h-full">
      <img
        className="rounded-t-lg w-full object-cover max-h-[200px]"
        src={imageUrl}
        alt={title}
      />
      <CardContent className="p-3">
        <div className="flex flex-col h-100">
          <span className="font-bold">{title}</span>
          <span className="text-sm text-gray-600 font-semibold">
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
