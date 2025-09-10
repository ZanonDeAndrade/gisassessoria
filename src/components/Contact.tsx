import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornaremos o contato em até 24 horas.",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Fale diretamente conosco",
      value: "(55) 3263-2363",
      action: "Entre em contato"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Mande mensagem",
      value: "(55)9 9977-9482",
      action: "WhatsApp"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua dúvida",
      value: "atendimento@gisassessoriacontabil.com.br",
      action: "Enviar E-mail"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 ">
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

        <div className="grid lg:grid-cols-3 gap-8 mb-12 ">
          {contactMethods.map((method, index) => (
            <Card key={index} className=" text-muted-foreground bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth group text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-smooth">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>{method.title}</CardTitle>
                <p className="text-muted-foreground">{method.description}</p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg mb-4">{method.value}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-muted-foreground">Solicite uma Consultoria</CardTitle>
              <p className="text-muted-foreground ">
                Preencha o formulário e entraremos em contato.
              </p>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 text-muted-foreground">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                      <Input placeholder="Seu nome completo" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">E-mail</label>
                      <Input type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input placeholder="(11) 99999-9999" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa</label>
                      <Input placeholder="Nome da sua empresa" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block ">Tipo de Serviço</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço de interesse " />
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
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensagem</label>
                    <Textarea 
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
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar Nova Mensagem
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-text-primary-foreground border-0 shadow-elegant">
              <CardContent className="p-8 bg-gradient-card text-muted-foreground">
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