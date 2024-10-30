"use client";

import { SessionProvider } from "next-auth/react";
import { Sidebar } from "./components/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <Sidebar>{children}</Sidebar>
    </SessionProvider>
  );
}
