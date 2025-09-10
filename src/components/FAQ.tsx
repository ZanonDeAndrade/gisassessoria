import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais documentos preciso para iniciar a contabilidade da minha empresa?",
      answer: "Para iniciar os serviços contábeis, você precisará do contrato social, cartão CNPJ, inscrições estadual e municipal (se houver), últimas declarações fiscais, extratos bancários dos últimos 3 meses, e documentos comprobatórios de todas as movimentações financeiras do período."
    },
    {
      question: "Com que frequência recebo relatórios financeiros?",
      answer: "Fornecemos relatórios mensais obrigatórios e relatórios gerenciais personalizados que podem ser entregues com a frequência que sua empresa necessitar (mensal, trimestral ou anual)."
    },
    {
      question: "Vocês atendem empresas de todos os portes?",
      answer: "Sim, atendemos desde microempreendedores individuais (MEI) até empresas de grande porte. Nossos serviços são adaptados para atender as necessidades específicas de cada tipo e porte de empresa, sempre com a mesma qualidade e dedicação."
    },
    {
      question: "Como funciona o atendimento e comunicação?",
      answer: "Oferecemos múltiplos canais de atendimento: telefone, WhatsApp, e-mail e presencial. Cada cliente tem um colaborador para garantir continuidade e conhecimento profundo do negócio."
    },
    {
      question: "Quais são os prazos para entrega das obrigações?",
      answer: "Cumprimos rigorosamente todos os prazos legais. As declarações são enviadas sempre com antecedência."
    },
    {
      question: "Vocês ajudam na escolha do regime tributário?",
      answer: "Sim, realizamos estudo detalhado para identificar o regime tributário mais vantajoso para sua empresa (Simples Nacional, Lucro Presumido ou Lucro Real). Fazemos análise para garantir que você sempre esteja na melhor opção."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-muted-foreground">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tire Suas <span className="text-primary">Dúvidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para as principais questões sobre nossos serviços contábeis 
            e como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card rounded-lg border-0 shadow-card px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-smooth py-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas questões e ajudar 
              você a encontrar a melhor solução para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={scrollToContact}>
                Entre em contato conosco
              </Button>
              <Button variant="outline" size="lg">
                WhatsApp: (55) 9 9977-9482
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;