import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logoGis from "../assets/logoGis.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Contabilidade Geral", href: "#services" },
      { label: "Assessoria Tributária", href: "#services" },
      { label: "Consultoria Empresarial", href: "#services" },
      { label: "Departamento Pessoal", href: "#services" },
      { label: "Abertura de Empresas", href: "#services" }
    ],
    company: [
      { label: "Sobre Nós", href: "#about" },
      { label: "Nossa Equipe", href: "#about" },
      { label: "Missão e Valores", href: "#about" },
      { label: "Notícias", href: "#news" },
      { label: "Localização", href: "#location" }
    ],
    support: [
      { label: "Entre em Contato", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" }
    ]
  };

  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-500 text-primary-foreground">
      <div className="container py-16 text-center">
        <div className="grid gap-10 justify-center md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <img src={logoGis} alt="Logo GIS" className="w-40 h-20" />
            </div>
            <div className="space-y-3 text-center">
              <div className="flex justify-center items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Rua Júlio de Castilhos, 849 - Faxinal do Soturno/RS</span>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">(55) 3263-2363</span>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">atendimento@gisassessoriacontabil.com.br</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center md:flex-row md:space-y-0 md:space-x-6">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Gis Assessoria Contábil. Todos os direitos reservados. || Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/gustavoinacio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Arthur Zanon
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">Siga-nos:</span>
              <div className="flex space-x-3 justify-center">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 hover:text-accent">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 hover:text-accent">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/80 hover:text-accent">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
            <p className="text-xs text-primary-foreground/60">
              CNPJ: 21.897.803/0001-60 | Responsável Técnico: Gilberto Scolari - CRC/MT-009477/O
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
