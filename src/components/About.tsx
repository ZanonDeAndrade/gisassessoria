import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpeg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em nossos serviços e no atendimento aos clientes."
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta em todos os nossos relacionamentos."
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicação total ao sucesso e crescimento dos nossos clientes."
    }
  ];

  const achievements = [
    "Mais de 15 anos de experiência no mercado",
    "Equipe especializada", 
    "Atendimento personalizado para cada cliente"
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 space-y-8 lg:order-1">
            <Badge variant="outline" className="mb-4 text-muted-foreground">
              Sobre Nós
            </Badge>
            <h2 className="text-3xl font-bold text-muted-foreground md:text-4xl">
              Sua <span className="text-primary">Parceria Estratégica</span> em Contabilidade
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fundado em 2010, a Gis Assessoria Contábil nasceu com o propósito de revolucionar 
              a prestação de serviços contábeis, combinando tradição, inovação e 
              excelência no atendimento.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="rounded-lg bg-gray-100 p-5 text-center shadow-card">
                  <div className="mb-3 flex justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-muted-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
              Conheça Nossa Equipe
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={teamPhoto}
                  alt="Equipe ContabilCorp"
                  className="h-72 w-full object-cover sm:h-[420px] lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-card p-8 shadow-card md:mt-20">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-muted-foreground">Nossa Missão</h3>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-muted-foreground">
              Fornecer soluções contábeis e fiscais de alta qualidade, utilizando tecnologia 
              de ponta e conhecimento especializado para ajudar nossos clientes a alcançar 
              seus objetivos empresariais com segurança e eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
