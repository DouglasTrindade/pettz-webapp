import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ProductFormData, productSchema } from "./Schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductsFields } from "./Fields";
import { useState } from "react";

export const ProductsEdit = ({ initialData }: { initialData: ProductFormData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ProductsFields control={form.control} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </Form>
  );
};
