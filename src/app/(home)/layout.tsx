import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <Header />
      <Hero />
      <main>{children}</main>
    </div>
  );
}
