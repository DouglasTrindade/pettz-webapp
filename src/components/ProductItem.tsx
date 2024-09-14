import { Card, CardContent } from "./ui/card";

interface ProductItemProps {
  title: string;
  imageUrl: string;
  price: number;
}

export const ProductItem = ({ imageUrl, title, price }: ProductItemProps) => {
  return (
    <Card className="w-[350px] h-[350px]">
      <img
        className="rounded-t-lg w-full object-cover h-[150px]"
        src={imageUrl}
        alt={title}
      />
      <CardContent className="p-4">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-sm text-gray-400">{price}</span>
        </div>
      </CardContent>
    </Card>
  );
};
