import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const navLinks = {
    company: [{ name: "Sobre nós" }, { name: "Blog" }, { name: "Carreira" }],
    usefulLinks: [
      { name: "Novos produtos" },
      { name: "Produtos mais vendidos" },
      { name: "Descontos" },
      { name: "F.A.Q" },
    ],
    customerService: [
      { name: "Contate-nos" },
      { name: "Envio" },
      { name: "Retorno" },
      { name: "Rastreamento de pedidos" },
    ],
  };

  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
      <div className="flex flex-col gap-3">
        <span className="font-extrabold text-lg">
          pettz<span className="text-primary">.</span>
        </span>
        <p className="text-gray-600 font-medium">
          Sed viverra eget fames sit varius. Pellentesque mattis libero viverra
          dictumst ornare sed justo convallis vitae.
        </p>
        <div className="flex gap-2 mt-2">
          <Facebook className="cursor-pointer hover:text-primary" />
          <Instagram className="cursor-pointer hover:text-primary" />
          <Linkedin className="cursor-pointer hover:text-primary" />
          <Youtube className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-bold">Empresa</span>
        {navLinks.company.map((link, index) => (
          <a
            key={index}
            className="text-gray-600 hover:text-primary cursor-pointer font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-bold">Links Úteis</span>
        {navLinks.usefulLinks.map((link, index) => (
          <a
            key={index}
            className="text-gray-600 hover:text-primary cursor-pointer font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-bold">Atendimento ao Cliente</span>
        {navLinks.customerService.map((link, index) => (
          <a
            key={index}
            className="text-gray-600 hover:text-primary cursor-pointer font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-gray-600 font-medium"> © Copyright pettz. 2024.</p>
    </footer>
  );
};
