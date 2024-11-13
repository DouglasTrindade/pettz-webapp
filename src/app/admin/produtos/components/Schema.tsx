import { z } from "zod";

export const productSchema = z.object({
  colors: z.array(z.string()).nonempty("At least one color is required."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  imgUrls: z.array(z.string().url("Invalid URL format.")).nonempty("At least one image URL is required."),
  name: z.string().min(3, "Name must be at least 3 characters."),
  price: z.number().positive("Price must be a positive number."),
});

export type ProductFormData = z.infer<typeof productSchema>;
