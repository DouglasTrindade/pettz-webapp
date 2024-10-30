"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import { ProductsListItem } from "./ListItem";
import { useRecords } from "@/hooks/useRecords";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export const ProductsList = () => {
  const { records: products } = useRecords<Product>("/products/admin/getAll");
  console.log(products);

  const handleEdit = (product: Product) => {
    console.log(product);
  };

  const handleDelete = (id: string) => {
    console.log(`Deletar produto com id: ${id}`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Estoque</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products &&
          products.map((product: Product) => (
            <ProductsListItem
              key={product.id}
              {...product}
              onEdit={() => handleEdit(product)}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
      </TableBody>
    </Table>
  );
};
