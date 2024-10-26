"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  User,
  Heart,
  ShoppingCart,
  Menu,
  ArrowDown,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { data: session, status } = useSession();

  const navLinks = [
    { name: "inicio", path: "/" },
    { name: "produtos", path: "/produtos" },
    { name: "sobre nós", path: "/sobre" },
    { name: "contato", path: "/contato" },
  ];

  return (
    <div className="py-5 px-6 mt-3 rounded-full shadow-xl bg-white">
      <div className="flex items-center justify-between">
        <div className="font-extrabold text-xl">
          pettz<span className="text-primary">.</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative">
                <Link
                  href={link.path}
                  className="text-gray-700 hover:text-primary transition duration-300 font-bold"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-6">
          <Heart />
          <ShoppingCart />

          {status === "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center p-0">
                  <Button variant="outline" asChild>
                    <Link href="/login">
                      <User />
                      <span className="font-semibold pe-2 ps-1">
                        {session?.user.fullName.split(" ")[0]}
                      </span>
                      <ArrowDown size={15} className="ms-1" />
                    </Link>
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Meus Dados</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Meus pedidos</DropdownMenuItem>
                <DropdownMenuItem className="text-danger cursor-pointer">
                  <button onClick={() => signOut({ callbackUrl: "/" })}>
                    <div className="flex items-center gap-2">
                      <LogOut size={15} />
                      Sair
                    </div>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <User />
            </Link>
          )}
        </div>

        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-700">
                <Menu />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-y-1 me-4">
              {navLinks.map((link, index) => (
                <DropdownMenuItem key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-700 hover:text-primary transition duration-300 font-bold"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
