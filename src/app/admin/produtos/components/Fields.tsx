import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { ProductFormData } from "./Schema";

interface ProductsFieldsProps {
  control: Control<ProductFormData>;
}

export const ProductsFields: React.FC<ProductsFieldsProps> = ({ control }) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <FormField
        control={control}
        name="colors"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Colors</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter colors, separated by commas"
                {...field}
                onChange={(e) =>
                  field.onChange(
                    e.target.value.split(",").map((color) => color.trim())
                  )
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="imgUrls"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image URLs</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter image URLs, separated by commas"
                {...field}
                onChange={(e) =>
                  field.onChange(
                    e.target.value.split(",").map((url) => url.trim())
                  )
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter product name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Enter price"
                {...field}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
