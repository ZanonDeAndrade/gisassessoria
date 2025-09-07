import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Briefcase,
  PieChart,
  Clock,
  Award
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Geral",
      description: "Escrituração contábil completa e demonstrações financeiras",
      features: ["Balanço Patrimonial", "DRE", "Fluxo de Caixa", "Análises Gerenciais"],
      highlight: null
    },
    {
      icon: FileText,
      title: "Assessoria Tributária",
      description: "Planejamento e gestão tributária especializada",
      features: ["Elisão Fiscal", "Regime Tributário", "Obrigações Acessórias", "Consultoria"],
      highlight: null
    },
    {
      icon: TrendingUp,
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para crescimento do seu negócio",
      features: ["Análise Financeira", "Planejamento", "Gestão de Custos", "Indicadores"],
      highlight: null
    },
    {
      icon: Shield,
      title: "Compliance Fiscal",
      description: "Adequação às normas e regulamentações vigentes",
      features: ["SPED", "ECF", "EFD", "DCTF"],
      highlight: null
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa de recursos humanos e folha de pagamento",
      features: ["Folha de Pagamento", "eSocial", "Admissões", "Demissões"],
      highlight: null
    },
    {
      icon: Briefcase,
      title: "Abertura de Empresas",
      description: "Constituição e legalização de empresas",
      features: ["Registro na Junta", "CNPJ", "Licenças", "Consultorias"],
      highlight: null
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-5 text-muted-foreground ">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-muted-foreground ">
            Soluções Completas em
            <span className="text-primary"> Contabilidade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços contábeis e fiscais para empresas
            de todos os portes, sempre com qualidade e agilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-muted-foreground relative bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth group">
              {service.highlight && (
                <Badge 
                  variant="default" 
                  className="absolute -top-3 left-6 bg-accent text-accent-foreground"
                >
                  {service.highlight}
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 bg-primary/5 rounded-2xl p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <PieChart className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground ">Relatórios Personalizados</h3>
            <p className="text-muted-foreground">
              Relatórios financeiros e gerenciais adaptados às necessidades do seu negócio.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground ">Atendimento Ágil</h3>
            <p className="text-muted-foreground">
              Respostas rápidas e soluções eficientes para todas as suas demandas contábeis.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground ">Excelência Comprovada</h3>
            <p className="text-muted-foreground">
              Mais de 15 anos de experiência e centenas de clientes satisfeitos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
