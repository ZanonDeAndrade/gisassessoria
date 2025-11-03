import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Package } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <Badge variant="outline" className="mb-4 text-muted-foreground">
            Localização
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-muted-foreground md:text-4xl">
            Venha <span className="text-primary">Nos Conhecer</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Nosso escritório está localizado no centro de Faxinal do Soturno
          </p>
        </div>

        <div className="flex flex-col gap-12 xl:flex-row xl:items-start">
          {/* Coluna esquerda */}
          <div className="order-2 flex-1 space-y-8 xl:order-1">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="text-left">
                <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Endereço Principal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
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
            <div className="grid gap-6 md:grid-cols-2">
              {/* Telefones ocupa 1 coluna */}
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader className="text-left">
                  <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary " />
                    <span>Telefones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left text-muted-foreground">
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
              <Card className="bg-gradient-card border-0 shadow-card md:col-span-2">
                <CardHeader className="text-left">
                  <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left text-muted-foreground">
                  <div>
                    <p className="break-words text-sm font-medium sm:text-base">
                      atendimento@gisassessoriacontabil.com.br
                    </p>
                    <p className="text-sm text-muted-foreground">Atendimento geral</p>
                  </div>
                  <div>
                    <p className="break-words text-sm font-medium sm:text-base">
                      gilberto.scolari@gisassessoriacontabil.com.br
                    </p>
                    <p className="text-sm text-muted-foreground">Contador</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horário */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="text-left">
                <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-left text-muted-foreground">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-muted-foreground">Segunda a Sexta</span>
                  <span className="text-sm text-muted-foreground sm:text-base">07:30 às 18h00</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-muted-foreground">Sábado e Domingo</span>
                  <span className="text-sm text-muted-foreground sm:text-base">Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna direita - Street View da Fachada */}
          <div className="order-1 flex-1 xl:order-2 xl:max-w-[520px]">
            <div className="rounded-2xl bg-gradient-card p-3 shadow-card sm:p-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[3/2] lg:aspect-[4/3]">
                <iframe
                  title="Fachada GIS Assessoria Contábil"
                  src="https://www.google.com/maps/embed?pb=!4v1725504799183!6m8!1m7!1sCAoSLEFGMVFpcFBueW83dGtsSDRVcDg1ckxNVkxheS1fM0FoYnF1NUh6WHdjdHkt!2m2!1d-29.5786997!2d-53.4447395!3f159.65!4f0!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  className="absolute inset-0 h-full w-full"
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
