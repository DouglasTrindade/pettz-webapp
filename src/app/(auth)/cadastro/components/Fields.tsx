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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const RegisterFields = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    setIsSubmitting(true);

    try {
      const res = await api.post("/auth/signup", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      if (res.status === 201) {
        toast.success("Seu cadastro foi realizado com sucesso.");
        router.push("/login");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Não foi possível realizar o cadastro. Tente novamente.");
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">
                  Nome
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-neutral-300 rounded-6 text-base leading-5"
                    placeholder="Digite seu nome completo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                <span className="font-bold text-[10px] text-gray-500 uppercase">
                  Você já tem uma conta?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:text-purple-700"
                  >
                    Fazer login
                  </Link>
                </span>
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
