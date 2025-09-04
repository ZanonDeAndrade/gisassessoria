import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

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
      { label: "Termos de Uso", href: "#" },
      { label: "Newsletter", href: "#news" }
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ContabilCorp</h3>
                <p className="text-sm text-primary-foreground/80">Escritório de Contabilidade</p>
              </div>
            </div>
            <p className="text-primary-foreground/80">
              Há mais de 15 anos oferecendo soluções contábeis de excelência, 
              ajudando empresas a crescerem com segurança e eficiência.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Rua das Empresas, 1234 - São Paulo/SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">contato@contabilcorp.com.br</span>
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

          {/* Support & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Suporte</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
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
            
            <div className="space-y-4">
              <h5 className="font-medium">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent" size="sm">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Gis Assessoria Contábil. Todos os direitos reservados. || Desenvolvido por <a href="https://www.linkedin.com/in/gustavoinacio/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Arthur Zanon</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">Siga-nos:</span>
              <div className="flex space-x-3">
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
              CNPJ: 12.345.678/0001-90 | 
              Responsável Técnico: João Silva - CRC/SP 1SP234567
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;