import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoGis from "../assets/logoGis.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Notícias", href: "#news" },
    { label: "Localização", href: "#location" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-400/60 bg-gray-500 backdrop-blur transition-smooth">
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logoGis}
            alt="Logo GIS"
            className="w-32 sm:w-36 md:w-40 h-auto transition-smooth"
          />
        </div>

        {/* NavItems centralizados */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-2 lg:gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-smooth"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Botões no canto direito */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-white text-gray-700 hover:bg-gray-100 font-medium"
            onClick={() => scrollToSection("#contact")}
          >
            Fale Conosco
          </Button>
          <Button
            className="bg-white text-gray-700 hover:bg-gray-100 font-medium"
            onClick={() => scrollToSection("#contact")}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Abrir navegação"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-400/60 bg-gray-500 backdrop-blur">
          <nav className="container py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full rounded-full px-4 py-2 text-left text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full bg-white text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => scrollToSection("#contact")}
              >
                Fale Conosco
              </Button>
              <Button
                className="w-full bg-white text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => scrollToSection("#contact")}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
