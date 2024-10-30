"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import { ProductsListItem } from "./ListItem";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useSession } from "next-auth/react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export const ProductsList = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!session?.user?.token) return;

    try {
      api
        .get("/products/admin/getAll", {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        })
        .then((response) => {
          setProducts(response.data);
        });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }, [session]);

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
