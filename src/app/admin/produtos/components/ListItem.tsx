import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface ProductsListItemProps {
  name: string;
  price: number;
  code: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const ProductsListItem = ({
  name,
  price,
  code,
  onEdit,
  onDelete,
}: ProductsListItemProps) => {
  return (
    <TableRow>
      <TableCell className="font-semibold text-gray-600">{code}</TableCell>
      <TableCell className="font-semibold text-gray-600">{name}</TableCell>
      <TableCell>{`R$ ${price.toFixed(2)}`}</TableCell>
      <TableCell className="flex gap-2 justify-end">
        <Button className="bg-success-light hover:bg-success" variant="outline" size="icon" onClick={onEdit}>
          <Edit className="h-4 w-4 text-gray-600" />
        </Button>
        <Button className="bg-danger-light hover:bg-danger" variant="outline" size="icon" onClick={onDelete}>
          <Trash className="h-4 w-4 text-gray-600" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
