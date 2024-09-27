import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchema } from "./Schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api } from "@/services/api";

export const Fields = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    setIsSubmitting(true);
    console.log(data);

    try {
      await api.post("/register", {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.error("Erro ao fazer o cadastro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-neutral-300 rounded-6 text-base leading-5"
                    placeholder="Digite seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">
                  Senha
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-neutral-300 rounded-6 text-base leading-5"
                    placeholder="Digite sua senha"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">
                  Confirme sua senha
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-neutral-300 rounded-6 text-base leading-5"
                    placeholder="Digite sua senha"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </Form>
    </>
  );
};
