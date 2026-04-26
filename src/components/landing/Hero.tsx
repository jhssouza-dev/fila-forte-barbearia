import { ArrowRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-barbershop.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative flex items-center pt-24 pb-16 md:min-h-[100svh] md:pt-28 md:pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="size-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-gold backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Fila digital para barbearias
            </span>

            <h1 className="mt-5 text-[2.5rem] leading-[1] sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              Sua barbearia,
              <br />
              <span className="gradient-text-gold">sem fila bagunçada.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cliente entra pelo QR Code, vê a posição. Você chama o próximo num clique.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
              <Button variant="gold" size="xl" className="group shadow-gold w-full sm:w-auto">
                Criar minha fila grátis
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              Grátis · Sem cartão · Pronto em 2 minutos
            </p>
          </div>

          {/* Mockup celular cliente */}
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-sm mt-4 lg:mt-0">
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-[2.5rem] border border-border/80 bg-card p-3 shadow-2xl shadow-black/50">
              <div className="rounded-[2rem] bg-background overflow-hidden">
                {/* notch */}
                <div className="h-6 flex items-center justify-center">
                  <div className="h-1.5 w-20 rounded-full bg-border" />
                </div>

                <div className="px-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid place-items-center size-8 rounded-lg gradient-gold">
                        <Scissors className="size-3.5 text-primary-foreground" />
                      </span>
                      <p className="text-sm font-semibold">Barbearia do Léo</p>
                    </div>
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Sua posição</p>
                    <p className="mt-2 text-7xl font-extrabold gradient-text-gold leading-none">3º</p>
                    <p className="mt-3 text-sm text-muted-foreground">tempo estimado</p>
                    <p className="text-2xl font-bold mt-1">~ 25 min</p>
                  </div>

                  <div className="mt-8 space-y-2">
                    {[
                      { n: 1, name: "Lucas M.", now: true },
                      { n: 2, name: "Pedro A." },
                      { n: 3, name: "Você", you: true },
                    ].map((c) => (
                      <div
                        key={c.n}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                          c.now
                            ? "bg-primary/10 border border-primary/30"
                            : c.you
                            ? "bg-card border border-border"
                            : "bg-card/40"
                        }`}
                      >
                        <span
                          className={`grid place-items-center size-7 rounded-lg text-xs font-bold ${
                            c.now
                              ? "bg-primary text-primary-foreground"
                              : c.you
                              ? "gradient-gold text-primary-foreground"
                              : "bg-secondary"
                          }`}
                        >
                          {c.n}
                        </span>
                        <p className={`text-sm flex-1 ${c.you ? "font-semibold" : ""}`}>{c.name}</p>
                        {c.now && <span className="text-[10px] font-bold text-gold uppercase">na cadeira</span>}
                      </div>
                    ))}
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
