import * as z from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "E-mail é obrigatório" })
      .email({ message: "E-mail inválido" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    confirm_password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A confirmação da senha deve corresponder à senha",
        path: ["confirm_password"],
      });
    }
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
