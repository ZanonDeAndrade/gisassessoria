import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Package } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-muted-foreground">
            Localização
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-muted-foreground">
            Venha <span className="text-primary">Nos Conhecer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso escritório está localizado no centro de Faxinal do Soturno
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Coluna esquerda */}
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
                  <p className="font-medium text-muted-foreground">
                    Rua Júlio de Castilhos, 849
                  </p>
                  <p className="text-muted-foreground">Centro, Sala 849</p>
                  <p className="text-muted-foreground">
                    Faxinal do Soturno - RS, 97220-000
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>Em frente aos Correios</span>
                </div>
              </CardContent>
            </Card>

            {/* Telefones + E-mails */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Telefones ocupa 1 coluna */}
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary " />
                    <span>Telefones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium">(55)9 9977-9482</p>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                  </div>
                  <div>
                    <p className="font-medium">(55) 3263-2363</p>
                    <p className="text-sm text-muted-foreground">Telefone Fixo</p>
                  </div>
                </CardContent>
              </Card>

              {/* E-mails ocupa 2 colunas */}
              <Card className="bg-gradient-card border-0 shadow-card sm:col-span-2 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium break-words">
                      atendimento@gisassessoriacontabil.com.br
                    </p>
                    <p className="text-sm text-muted-foreground">Atendimento geral</p>
                  </div>
                  <div>
                    <p className="font-medium break-words">
                      gilberto.scolari@gisassessoriacontabil.com.br
                    </p>
                    <p className="text-sm text-muted-foreground">Contador</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horário */}
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
                  <span className="text-muted-foreground">07:30 às 18h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábado e Domingo</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna direita - Street View da Fachada */}
          <div className="space-y-6 lg:pl-12">
            <div className="bg-gradient-card rounded-2xl p-4 shadow-card">
              <div className="h-64 overflow-hidden rounded-xl sm:h-80 lg:h-[450px]">
                <iframe
                  title="Fachada GIS Assessoria Contábil"
                  src="https://www.google.com/maps/embed?pb=!4v1725504799183!6m8!1m7!1sCAoSLEFGMVFpcFBueW83dGtsSDRVcDg1ckxNVkxheS1fM0FoYnF1NUh6WHdjdHkt!2m2!1d-29.5786997!2d-53.4447395!3f159.65!4f0!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
