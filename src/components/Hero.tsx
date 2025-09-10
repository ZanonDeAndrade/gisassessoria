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
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Soluções Contábeis</span>
                <br />
                <span className="text-foreground">Completas para</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Seu Negócio
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Mais de 15 anos oferecendo serviços contábeis de excelência. 
                Cuidamos da sua contabilidade para você focar no que realmente importa.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Assessoria tributária especializada",
                "Contabilidade digital moderna",
                "Atendimento personalizado"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground font-semibold">{item}</span>
                </div>
              ))}
            </div>


            <div className="flex flex-col sm:flex-row text-muted-foreground font-semibold">
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Escritório de contabilidade moderno"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;