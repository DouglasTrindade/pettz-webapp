import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    error?: "RefreshTokenError";
    user: {
      id: string;
      fullName: string;
      token?: string;
      accessToken?: string;
      refreshToken?: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    fullName: string;
    token?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    token?: string;
    fullName?: string;
    accessToken: string;
    refreshToken?: string;
    error?: "RefreshTokenError";
  }
}
