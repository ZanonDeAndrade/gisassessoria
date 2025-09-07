import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

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
    "Mais de x empresas atendidas",
    "x anos de experiência no mercado",
    "Equipe especializada e certificada", 
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
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Badge variant="outline" className="mb-4 text-muted-foreground ">
              Sobre Nós
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-muted-foreground ">
              Sua <span className="text-primary ">Parceria Estratégica</span> em Contabilidade
            </h2>
            <p className="text-lg text-muted-foreground mb-8 ">
              Fundado em ......., a Gis Assessoria Contábil nasceu com o propósito de revolucionar 
              a prestação de serviços contábeis, combinando tradição, inovação e 
              excelência no atendimento.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 " />
                  <span className="text-muted-foreground ">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-100">
                  <div className="flex justify-center mb-3 ">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-muted-foreground ">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" onClick={scrollToContact}>
              Conheça Nossa Equipe
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={teamPhoto}
                  alt="Equipe ContabilCorp"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-background p-6 rounded-2xl shadow-elegant border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">x+</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-elegant border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-card rounded-2xl p-8 shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
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
