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
        console.log("credentials", credentials);
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new Error("Por favor, forneça tanto o email quanto a senha.");
        }

        try {
          const response = await api.post("/auth/login", { email, password });

          if (!response.data || !response.data.token) {
            console.error("Resposta inesperada da API:", response.data);
            throw new Error("Falha na autenticação.");
          }

          console.log("Usuário autenticado:", response.data);

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
        token.token = user.token;
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
  secret: process.env.NEXTAUTH_SECRET,
});
