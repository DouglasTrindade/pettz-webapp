"use client";
import { ArrowLeft } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <SessionProvider>
      <div className="relative">
        <Button
          className="absolute top-20 left-20"
          variant="outline"
          onClick={router.back}
        >
          <ArrowLeft size={17} />
          <span className="ms-1">Voltar</span>
        </Button>
        {children}
      </div>
    </SessionProvider>
  );
}
