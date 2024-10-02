import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "./Schema";
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
import Link from "next/link";

export const LoginFields = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsSubmitting(true);
    console.log(data);

    try {
      await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.error("Erro ao fazer o login:", error);
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
                <span className="font-bold text-[10px] text-gray-500 uppercase">
                  Não tem uma conta?{" "}
                  <Link
                    href="/cadastro"
                    className="text-primary hover:text-purple-700"
                  >
                    Cadastre-se
                  </Link>
                </span>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </Form>
    </>
  );
};
