import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, AlertTriangle, FileText } from "lucide-react";

const News = () => {
  const news = [
    {
      category: "Tributário",
      title: "Mudanças no Simples Nacional 2024",
      description: "Novas regras e limites para enquadramento no Simples Nacional entram em vigor.",
      date: "15 de Dezembro, 2024",
      type: "Atualização",
      icon: TrendingUp,
      isUrgent: false
    },
    {
      category: "Compliance",
      title: "EFD-Reinf: Prazo Final se Aproxima",
      description: "Empresas têm até 31 de dezembro para adequação às novas obrigações.",
      date: "10 de Dezembro, 2024",
      type: "Urgente",
      icon: AlertTriangle,
      isUrgent: true
    },
    {
      category: "Trabalhista",
      title: "eSocial: Novas Funcionalidades",
      description: "Plataforma recebe atualizações importantes para gestão de folha de pagamento.",
      date: "5 de Dezembro, 2024",
      type: "Novidade",
      icon: FileText,
      isUrgent: false
    },
    {
      category: "Contábil",
      title: "SPED Contábil: Alterações no Layout",
      description: "Receita Federal anuncia mudanças na estrutura do arquivo digital.",
      date: "28 de Novembro, 2024",
      type: "Informativo",
      icon: FileText,
      isUrgent: false
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-muted-foreground">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-muted-foreground">
            Notícias & Atualizações
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mantenha-se <span className="text-primary">Sempre Atualizado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe as principais mudanças na legislação tributária, contábil 
            e trabalhista que podem impactar o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 ">
          {news.map((item, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant={item.isUrgent ? "destructive" : "secondary"}
                    className="mb-2 "
                  >
                    {item.type}
                  </Badge>
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth text-muted-foreground">
                  {item.title}
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
