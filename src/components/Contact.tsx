import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [service, setService] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceID = "service_u7iji7z";
    const templateID = "template_r5bgre9";
    const publicKey = "GPj1Z7jOfmWy2L8gp";

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setIsSubmitted(true);
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Retornaremos o contato em até 24 horas.",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((err) => {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Tente novamente mais tarde.",
        });
        console.error("Erro EmailJS:", err);
      });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Fale diretamente conosco",
      value: "(55) 3263-2363",
      action: "Ligar",
      link: "tel:+555532632363",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Mande mensagem",
      value: "(55) 9 9977-9482",
      action: "WhatsApp",
      link: "https://wa.me/55999779482",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua dúvida",
      value: "atendimento@gisassessoriacontabil.com.br",
      action: "Enviar E-mail",
      link: "mailto:atendimento@gisassessoriacontabil.com.br",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16 text-muted-foreground">
          <Badge variant="outline" className="mb-4 text-muted-foreground">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para <span className="text-primary">Começar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a crescer com soluções contábeis personalizadas.
          </p>
        </div>

        {/* Cards de contato */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group h-full overflow-hidden border-0 bg-gradient-card text-center text-muted-foreground shadow-card transition-smooth hover:shadow-elegant"
            >
              <CardHeader className="space-y-3">
                <div className="flex justify-center">
                  <div className="rounded-2xl bg-primary/10 p-4 transition-smooth group-hover:bg-primary/20">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>{method.title}</CardTitle>
                <p className="text-sm text-muted-foreground/80 text-balance">
                  {method.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <p className="w-full text-balance break-words text-lg font-semibold">
                  {method.value}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-sm transition-smooth group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formulário + Benefícios */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Formulário */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-muted-foreground">Solicite uma Consultoria</CardTitle>
              <p className="text-muted-foreground">Preencha o formulário e entraremos em contato.</p>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-muted-foreground">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                      <Input name="user_name" placeholder="Seu nome completo" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">E-mail</label>
                      <Input type="email" name="user_email" placeholder="seu@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input name="user_phone" placeholder="(11) 99999-9999" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa</label>
                      <Input name="user_company" placeholder="Nome da sua empresa" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tipo de Serviço</label>
                    <Select onValueChange={(value) => setService(value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o serviço de interesse" />
                      </SelectTrigger>
                      <SelectContent className="text-muted-foreground">
                        <SelectItem value="contabilidade">Contabilidade Geral</SelectItem>
                        <SelectItem value="tributario">Assessoria Tributária</SelectItem>
                        <SelectItem value="consultoria">Consultoria Empresarial</SelectItem>
                        <SelectItem value="abertura">Abertura de Empresa</SelectItem>
                        <SelectItem value="pessoal">Departamento Pessoal</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="service" value={service} />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensagem</label>
                    <Textarea
                      name="message"
                      placeholder="Descreva suas necessidades ou dúvidas..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="default" className="w-full" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Solicitação
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/20 rounded-full">
                      <CheckCircle className="h-12 w-12 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground mb-6">
                    Recebemos sua solicitação e retornaremos o contato em breve.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Enviar Nova Mensagem
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefícios da empresa */}
          <div className="space-y-8">
            <Card className="border-0 shadow-elegant">
              <CardContent className="rounded-2xl bg-gradient-card p-8 text-muted-foreground">
                <h3 className="text-2xl font-bold mb-4">Por que escolher a Gis Assessoria Contábil?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Atendimento personalizado e humanizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Tecnologia de ponta em contabilidade digital</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Equipe especializada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Relatórios gerenciais personalizados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Suporte técnico especializado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
