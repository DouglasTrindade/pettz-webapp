import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  badgeName: string;
  title: string;
  date: string;
}

export const PostCard = ({ badgeName, title, date }: PostCardProps) => {
  return (
    <Card className="relative w-[300px] h-full">
      <img
        className="rounded-t-lg w-full object-cover max-h-[200px]"
        src="/category.jpg"
        alt="dog"
      />
      <Badge className="absolute top-0 m-2 rounded-full">{badgeName}</Badge>
      <CardContent className="p-2">
        <div className="flex flex-col gap-2">
          <span className="text-gray-500 text-semibold text-sm">{date}</span>
          <span className="text-md text-gray-700 font-bold">{title}</span>
        </div>
      </CardContent>
    </Card>
  );
};
