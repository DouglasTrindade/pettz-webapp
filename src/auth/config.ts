import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "@/services/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Por favor, forneça tanto o email quanto a senha.");
        }

        try {
          const response = await api.post("/login", { email, password });

          if (!response.data) {
            throw new Error("Resposta inesperada da API.");
          }

          return {
            email: response.data.email,
            id: response.data.id,
            token: response.data.token,
          };
        } catch (error) {
          throw new Error("Falha na autenticação. Verifique suas credenciais.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.token = token.token as string | undefined;
      return session;
    },
    async signIn() {
      return true;
    },
  },
});
