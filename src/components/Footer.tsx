import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const navLinks = [
    {
      enterprise: [
        { name: "Empresa" },
        { name: "Sobre nós" },
        { name: "Blog" },
        { name: "Carreira" },
      ],
      usefulLinks: [
        { name: "Links Úteis" },
        { name: "Novos produtos" },
        { name: "Produtos mais vendidos" },
        { name: "Descontos" },
        { name: "Carreira" },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-5 ">
      <div className="flex flex-col gap-3">
        <span className="font-extrabold text-md">pettz.</span>
        <span className="font-medium text-gray-600">
          Sed viverra eget fames sit varius. Pellentesque mattis libero viverra
          dictumst ornaresed justo convallis vitae
        </span>
        <span className="flex gap-2 ">
          <Facebook className="cursor-pointer hover:text-primary" />
          <Instagram className="cursor-pointer hover:text-primary" />
          <Linkedin className="cursor-pointer hover:text-primary" />
          <Youtube className="cursor-pointer hover:text-primary" />
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="font-bold">Empresa</span>
        <span>Sobre nós</span>
        <span>Blog</span>
        <span>Carreira</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="font-bold">Links Úteis</span>
        <span>Novos produtos</span>
        <span>Produtos mais vendidos</span>
        <span>Descontos</span>
        <span>F.A.Q</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="font-bold">Links Úteis</span>
        <span>Novos produtos</span>
        <span>Produtos mais vendidos</span>
        <span>Descontos</span>
        <span>F.A.Q</span>
      </div>
    </div>
  );
};
