import React, { MouseEventHandler, useState } from "react";
import {
  ShoppingCart,
  Users,
  ChartColumnStacked,
  ArrowLeftToLine,
  ArrowRightToLine,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex w-screen h-screen bg-gray-100 relative z-0">
      <VerticalSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 transition-all duration-300">{children}</div>
    </div>
  );
};

const VerticalSidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => (
  <div
    className={`flex flex-col ${
      isOpen ? "w-60" : "w-16"
    } h-full text-gray-400 bg-gray-900 transition-width duration-300 ease-in-out relative`}
  >
    <button
      onClick={toggleSidebar}
      className={`absolute z-20 -right-4 top-4 border border-gray-400 bg-orange-700 p-2 rounded transform transition-transform duration-300 ease-in-out`}
    >
      {isOpen ? (
        <ArrowLeftToLine size={15} color="orange" />
      ) : (
        <ArrowRightToLine size={15} color="orange" />
      )}
    </button>
    <SidebarLogo imageUrl="4pettz.png" isOpen={isOpen} />
    <NavLinks isOpen={isOpen} />
    <SidebarFooter
      icon={<LogOut />}
      isOpen={isOpen}
      title={"Sair"}
      onClick={() => signOut({ callbackUrl: "/login" })}
    />
  </div>
);

const SidebarLogo = ({
  imageUrl,
  isOpen,
}: {
  imageUrl: string;
  isOpen: boolean;
}) => (
  <div className="flex justify-center bg-orange-700">
    <img src={imageUrl} alt="Logo" className={` ${isOpen ? "w-20" : "w-16"}`} />
  </div>
);

const SidebarFooter = ({
  icon,
  isOpen,
  onClick,
  title,
}: {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: MouseEventHandler;
}) => (
  <button
    className="flex items-center w-full h-12 px-3 mt-auto rounded  text-danger hover:text-danger-dark"
    onClick={onClick}
  >
    {icon}
    <span className={`ml-2 text-sm font-medium ${isOpen ? "block" : "hidden"}`}>
      {title}
    </span>
  </button>
);

const NavLinks = ({ isOpen }: { isOpen: boolean }) => {
  const links = [
    { title: "Produtos", icon: <ShoppingCart />, href: "#" },
    { title: "Categorias", icon: <ChartColumnStacked />, href: "#" },
    { title: "Usuários", icon: <Users />, href: "#" },
  ];

  return (
    <div className="flex flex-col items-center w-full border-t border-gray-700">
      {links.map((link, index) => (
        <SidebarMenu
          key={index}
          title={link.title}
          icon={link.icon}
          isOpen={isOpen}
          href={link.href}
        />
      ))}
    </div>
  );
};

const SidebarMenu = ({
  title,
  icon,
  isOpen,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  href: string;
}) => (
  <Link
    className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    href={href}
  >
    {icon}
    <span className={`ml-2 text-sm font-medium ${isOpen ? "block" : "hidden"}`}>
      {title}
    </span>
  </Link>
);
