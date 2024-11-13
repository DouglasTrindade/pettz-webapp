"use client";

import { Sidebar } from "./components/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Sidebar>
    <div className="px-8 py-5">{children}</div>
  </Sidebar>;
}
