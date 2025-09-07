import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-muted-foreground">
            Localização
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-muted-foreground">
            Venha <span className="text-primary">Nos Conhecer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso escritório está estrategicamente localizado no centro empresarial, 
            com fácil acesso e estacionamento disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Endereço Principal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-muted-foreground">Rua das Empresas, 1234</p>
                  <p className="text-muted-foreground">Centro Empresarial, Sala 501</p>
                  <p className="text-muted-foreground">São Paulo - SP, 01234-567</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Car className="h-4 w-4" />
                  <span>Estacionamento próprio disponível</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Bus className="h-4 w-4" />
                  <span>Próximo ao metrô Liberdade (Linha 1)</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary " />
                    <span>Telefones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium">(11) 3456-7890</p>
                    <p className="text-sm text-muted-foreground">Linha principal</p>
                  </div>
                  <div>
                    <p className="font-medium">(11) 98765-4321</p>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium">contato@contabilcorp.com.br</p>
                    <p className="text-sm text-muted-foreground">Atendimento geral</p>
                  </div>
                  <div>
                    <p className="font-medium">comercial@contabilcorp.com.br</p>
                    <p className="text-sm text-muted-foreground">Novos clientes</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="text-muted-foreground">8h00 às 18h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábado</span>
                  <span className="text-muted-foreground">8h00 às 12h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Domingo</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card rounded-2xl p-4 shadow-card">
              <div className="bg-muted rounded-xl h-[400px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
                    <p className="text-muted-foreground">
                      Visualize nossa localização e planeje sua visita
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Rua das Empresas, 1234</p>
                    <p>Centro Empresarial - São Paulo/SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;