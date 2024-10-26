import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "@/services/api";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  sub: string;
  fullName: string;
  email: string;
  roles: string[];
}
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

        try {
          const response = await api.post("/auth/signin", {
            email,
            password,
          });
          console.log("Response Data:", response.data);

          const { accessToken, refreshToken, fullName, idUser } = response.data;
          const decoded = jwtDecode<DecodedToken>(accessToken);
          console.log("Decoded Token:", decoded);

          const user = {
            roles: decoded.roles,
            email: decoded.sub,
            fullName: fullName,
            idUser: idUser,
            token: accessToken,
            refreshToken,
          };

          return user;
        } catch (error) {
          console.error("Erro ao autenticar:", error);
          throw new Error("Falha na autenticação. Verifique suas credenciais.");
        }
      },
    }),
  ],
  debug: true,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.fullName = user.fullName;
        token.accessToken = user.token;
        token.roles = user.roles;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user.id = token.id as string;
        session.user.fullName = token.fullName as string;
        session.user.token = token.accessToken as string | undefined;
        session.user.roles = token.roles as string[];
      }

      return session;
    },
    async signIn() {
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
