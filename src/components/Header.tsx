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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-500 backdrop-blur-md border-b shadow-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoGis} alt="Logo GIS" className="w-40 h-20" />
        </div>

        {/* NavItems centralizados */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-white hover:text-gray-200 transition-smooth font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Botões no canto direito */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 " /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t shadow-elegant">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button
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
