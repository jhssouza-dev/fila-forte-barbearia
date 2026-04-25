import { ArrowRight, PlayCircle, QrCode, Smartphone, Scissors, Users, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-gold">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Fila digital para barbearias
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Organize a fila da sua{" "}
              <span className="gradient-text-gold">barbearia</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Clientes entram pelo celular, acompanham a posição e você chama o próximo sem confusão.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="gold" size="xl" className="group">
                Criar minha fila grátis
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                <PlayCircle className="size-5" />
                Ver como funciona
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Sem aplicativo", "Funciona por link ou QR Code", "Feito para barbearias"].map((b) => (
                <span key={b} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-gold" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Visual / cards */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main panel mock */}
              <div className="rounded-2xl border border-border bg-surface shadow-card-dark p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="grid place-items-center size-9 rounded-lg gradient-gold">
                      <Scissors className="size-4 text-primary-foreground" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Barbearia do Léo</p>
                      <p className="text-xs text-muted-foreground">Painel ao vivo</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gold">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    Ao vivo
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  {[
                    { n: 1, name: "Lucas M.", svc: "Corte + Barba", now: true },
                    { n: 2, name: "Pedro A.", svc: "Corte" },
                    { n: 3, name: "Rafa S.", svc: "Barba" },
                    { n: 4, name: "Diego F.", svc: "Corte + Sobrancelha" },
                  ].map((c) => (
                    <div
                      key={c.n}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 ${
                        c.now ? "border-primary/50 bg-primary/10" : "border-border bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`grid place-items-center size-8 rounded-lg text-sm font-bold ${
                          c.now ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                        }`}>
                          {c.n}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.svc}</p>
                        </div>
                      </div>
                      {c.now ? (
                        <span className="text-xs font-semibold text-gold">No cadeira</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">aguardando</span>
                      )}
                    </div>
                  ))}
                </div>

                <Button variant="gold" className="mt-4 w-full">
                  Chamar próximo
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              {/* Floating cards */}
              <div className="hidden sm:flex absolute -left-10 top-10 items-center gap-3 rounded-xl border border-border bg-card/95 backdrop-blur p-3 shadow-card-dark">
                <span className="grid place-items-center size-9 rounded-lg bg-primary/15 text-gold">
                  <Users className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Na fila agora</p>
                  <p className="text-sm font-semibold">8 clientes</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -right-8 top-1/3 items-center gap-3 rounded-xl border border-border bg-card/95 backdrop-blur p-3 shadow-card-dark">
                <span className="grid place-items-center size-9 rounded-lg bg-primary/15 text-gold">
                  <Smartphone className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Sua posição</p>
                  <p className="text-sm font-semibold">3º lugar</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -right-6 -bottom-6 items-center gap-3 rounded-xl border border-border bg-card/95 backdrop-blur p-3 shadow-card-dark">
                <span className="grid place-items-center size-9 rounded-lg bg-primary/15 text-gold">
                  <QrCode className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Entrar pela fila</p>
                  <p className="text-sm font-semibold">QR Code no balcão</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -left-6 -bottom-4 items-center gap-3 rounded-xl border border-border bg-card/95 backdrop-blur p-3 shadow-card-dark">
                <span className="grid place-items-center size-9 rounded-lg bg-primary/15 text-gold">
                  <Clock className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Tempo médio</p>
                  <p className="text-sm font-semibold">~12 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
