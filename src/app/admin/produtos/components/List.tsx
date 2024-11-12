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
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

interface Product {
  idProduct: string;
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
        .get("/products/admin", {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        })
        .then((response) => {
          setProducts(response?.data?._embedded?.productWithIdResponseList);
        });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }, [session]);

  const handleEdit = (product: Product) => {
    console.log(product);
  };

  const handleDelete = async (idProduct: string) => {
    try {
      await api.delete(`/products/admin/${idProduct}`, {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.idProduct !== idProduct)
      );
      toast.success("Produto deletado com sucesso!");
    } catch (error) {
      toast.error("Ops... Ocorreu um erro ao deletar esse produto.");
    }
  };

  return (
    <>
      <div className="flex items-end justify-end">
        <Button size="sm" asChild>
          <Link href="/">Novo Produto</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Estoque</TableHead>
            <TableHead className="text-end">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products &&
            products.map((product: Product) => (
              <ProductsListItem
                key={product.idProduct}
                {...product}
                onEdit={() => handleEdit(product)}
                onDelete={() => handleDelete(product.idProduct)}
              />
            ))}
        </TableBody>
      </Table>
    </>
  );
};
