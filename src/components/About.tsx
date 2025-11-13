import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Gilberto from "@/assets/Gilberto.jpeg";
import Claudio from "@/assets/Claudio.jpeg";
import Igor from "@/assets/Igor.jpeg";
import Isabel from "@/assets/Isabel.jpeg";
import Mauren from "@/assets/Mauren.jpeg";
import Rita from "@/assets/Rita.jpeg";
import Roger from "@/assets/Roger.jpeg";
import Tainara from "@/assets/Tainara.jpeg";
import William from "@/assets/William.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TeamVideo from "@/assets/Video1.mp4";

const TEAM_MEMBERS = [
  {
    name: "Gilberto Scolari",
    role: "Contador e Sócio Propietário",
    photo: Gilberto
  },
  {
    name: "Claudio Heesch",
    role: "Resposável pelas empresas do Lucro Real e Presumido",
    photo: Claudio
  },
  {
    name: "Isabel",
    role: "Departamento Pessoal",
    photo: Isabel
  },
  {
    name: "Rita",
    role: "Departamento Pessoal",
    photo: Rita
  },
  {
    name: "William",
    role: "Departamento Fiscal",
    photo: William
  },
  {
    name: "Roger",
    role: "Departamento Contábil",
    photo: Roger
  },
  {
    name: "Mauren",
    role: "Departamento Contábil",
    photo: Mauren
  },
  {
    name: "Igor",
    role: "Recepção e Atendimento ao cliente",
    photo: Igor
  },
  {
    name: "Tainara",
    role: "Recepção e Atendimento ao cliente",
    photo: Tainara
  }

];

const About = () => {
  const [activeMember, setActiveMember] = useState(0);
  const totalMembers = TEAM_MEMBERS.length;

  const showNext = () => {
    setActiveMember((prev) => (prev + 1) % totalMembers);
  };

  const showPrevious = () => {
    setActiveMember((prev) => (prev - 1 + totalMembers) % totalMembers);
  };

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
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeMember * 100}%)` }}
                >
                  {TEAM_MEMBERS.map((member) => (
                    <div key={member.name} className="relative w-full flex-shrink-0">
                      <img
                        src={member.photo}
                        alt={`Foto de ${member.name}`}
                        className="h-72 w-full object-cover sm:h-[420px] lg:h-[500px]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent px-6 pb-6 pt-14">
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-sm text-white/80">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Ver colaborador anterior"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-lg backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Ver próximo colaborador"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-lg backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {TEAM_MEMBERS.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveMember(index)}
                      aria-label={`Ver ${TEAM_MEMBERS[index].name}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${activeMember === index ? "bg-primary" : "bg-white/40 hover:bg-white/70"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vídeo institucional após as fotos */}
        <div className="mt-12">
          <AspectRatio ratio={16 / 9}>
            <video
              src={TeamVideo}
              controls
              preload="metadata"
              playsInline
              className="h-full w-full rounded-2xl object-cover shadow-elegant"
            />
          </AspectRatio>
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
