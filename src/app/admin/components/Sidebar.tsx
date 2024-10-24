import React, { useState } from "react";
import {
  ShoppingCart,
  Video,
  Users,
  ChartColumnStacked,
  ArrowLeftToLine,
  ArrowRightToLine,
  Bolt,
} from "lucide-react";
import Link from "next/link";

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
      className={`absolute z-20 -right-5 top-4 bg-gray-900 text-gray-300 hover:bg-gray-700 p-2 rounded-full transform transition-transform duration-300 ease-in-out`}
    >
      {isOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
    </button>
    <SidebarIcon icon={<Video />} />
    <NavLinks isOpen={isOpen} />
    <SidebarFooter
      icon={<Bolt />}
      isOpen={isOpen}
      title={"Configurações"}
      href={"/"}
    />
  </div>
);

const SidebarIcon = ({ icon }: { icon: React.ReactNode }) => (
  <Link
    className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    href="#"
  >
    {icon}
  </Link>
);

const SidebarFooter = ({
  icon,
  isOpen,
  href,
  title,
}: {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  href: string;
}) => (
  <Link
    className="flex items-center w-full h-12 px-3 mt-auto rounded hover:bg-gray-700 hover:text-gray-300"
    href={href}
  >
    {icon}
    <span className={`ml-2 text-sm font-medium ${isOpen ? "block" : "hidden"}`}>
      {title}
    </span>
  </Link>
);

const NavLinks = ({ isOpen }: { isOpen: boolean }) => {
  const links = [
    { title: "Produtos", icon: <ShoppingCart />, href: "#" },
    { title: "Categorias", icon: <ChartColumnStacked />, href: "#" },
    { title: "Users", icon: <Users />, href: "#" },
  ];

  return (
    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
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
