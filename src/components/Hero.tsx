import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] items-center overflow-hidden pt-24 pb-8 sm:min-h-[calc(100vh-5rem)] sm:pb-12 md:pb-16"
    >
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="text-primary">Soluções Contábeis</span>
                <br />
                <span className="text-foreground">Completas para</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Seu Negócio
                </span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                Mais de 15 anos oferecendo serviços contábeis de excelência. Cuidamos da
                sua contabilidade para você focar no que realmente importa.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Assessoria tributária especializada",
                "Contabilidade digital moderna",
                "Atendimento personalizado",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base font-semibold text-muted-foreground md:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={scrollToContact} className="group gap-2">
                Fale com um especialista
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hidden font-semibold sm:inline-flex"
                onClick={scrollToServices}
              >
                Conheça nossos serviços
              </Button>
            </div>

            <div className="hidden flex-wrap gap-6 pt-6 text-left sm:flex">
              <div className="min-w-[140px] rounded-2xl border border-border/70 bg-background/90 p-4 shadow-card">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="min-w-[140px] rounded-2xl border border-border/70 bg-background/90 p-4 shadow-card">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
              </div>
              <div className="min-w-[140px] rounded-2xl border border-border/70 bg-background/90 p-4 shadow-card">
                <div className="text-3xl font-bold text-primary">Expertise</div>
                <div className="text-sm text-muted-foreground">Equipe multidisciplinar</div>
              </div>
            </div>
          </div>

          <div className="relative hidden sm:block">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={heroImage}
                alt="Escritório de contabilidade moderno"
                className="h-72 w-full object-cover sm:h-96 lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20" />
            </div>

            <div className="absolute -bottom-6 right-4 hidden rounded-2xl bg-background/95 p-5 shadow-card sm:flex lg:-right-10 lg:bottom-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Consultoria dedicada
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Gestão contábil completa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
