import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface ProductsListItemProps {
  name: string;
  price: number;
  category: string;
  stock: number;
  onEdit: () => void;
  onDelete: () => void;
}

export const ProductsListItem = ({
  name,
  price,
  category,
  stock,
  onEdit,
  onDelete,
}: ProductsListItemProps) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{`R$ ${price.toFixed(2)}`}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell>
        <Button variant="outline" size="icon" onClick={onEdit}>
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onDelete}>
          <Trash className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
