import { ArrowRight, Scissors } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="py-16 md:py-32 bg-surface border-y border-border/40">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Recursos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Pensado para o <span className="gradient-text-gold">dia a dia da barbearia</span>
          </h2>
        </div>

        <div className="mt-10 md:mt-16 grid lg:grid-cols-2 gap-5 md:gap-6">
          {/* Card 1 — Fila ao vivo (large) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 hover:border-primary/40 transition-colors">
            <div className="absolute -top-32 -right-32 size-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                  Fila em tempo real
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Veja todos os clientes esperando, quem está na cadeira agora e quem é o próximo. Atualiza sozinho, sem precisar dar refresh.
                </p>
              </div>

              {/* Painel mockup */}
              <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-4 sm:p-5 shadow-card-dark">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <span className="grid place-items-center size-8 rounded-lg gradient-gold">
                      <Scissors className="size-3.5 text-primary-foreground" />
                    </span>
                    <p className="text-sm font-semibold">Painel do barbeiro</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-gold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    Ao vivo
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { n: 1, name: "Lucas M.", svc: "Corte + Barba", now: true },
                    { n: 2, name: "Pedro A.", svc: "Corte" },
                    { n: 3, name: "Rafa S.", svc: "Barba" },
                  ].map((c) => (
                    <div
                      key={c.n}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${
                        c.now ? "bg-primary/10 border border-primary/30" : "bg-card/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid place-items-center size-7 rounded-lg text-xs font-bold ${
                            c.now ? "bg-primary text-primary-foreground" : "bg-secondary"
                          }`}
                        >
                          {c.n}
                        </span>
                        <div>
                          <p className="text-sm font-medium leading-tight">{c.name}</p>
                          <p className="text-[11px] text-muted-foreground">{c.svc}</p>
                        </div>
                      </div>
                      {c.now && <span className="text-[10px] font-bold text-gold uppercase">cadeira</span>}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-gold text-primary-foreground font-semibold py-2.5 text-sm shadow-gold">
                  Chamar próximo
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 — QR Code */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 hover:border-primary/40 transition-colors">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              QR Code próprio da sua fila
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Imprima, cole na parede ou compartilhe o link. Cliente entra na fila em segundos.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/15 blur-2xl rounded-full" />
                <div className="relative rounded-2xl bg-background border border-border p-5">
                  {/* fake QR pattern */}
                  <div
                    className="size-32 grid grid-cols-8 grid-rows-8 gap-0.5"
                    aria-hidden
                  >
                    {Array.from({ length: 64 }).map((_, i) => {
                      const filled =
                        [0, 1, 2, 5, 6, 7, 8, 10, 13, 15, 16, 18, 19, 21, 23, 24, 26, 28, 31, 33, 34, 37, 39, 40, 42, 45, 47, 48, 51, 52, 54, 56, 57, 58, 61, 62, 63].includes(i);
                      return (
                        <div
                          key={i}
                          className={filled ? "bg-foreground rounded-[1px]" : "bg-transparent"}
                        />
                      );
                    })}
                  </div>
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <div className="size-9 rounded-lg gradient-gold grid place-items-center shadow-gold">
                      <Scissors className="size-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Cliente vê posição */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 hover:border-primary/40 transition-colors">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              Cliente vê quanto falta
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Posição e tempo estimado em tempo real. Ele decide se espera ou volta depois.
            </p>

            <div className="mt-6 sm:mt-8 flex items-end justify-center gap-2">
              <div className="text-center px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-background border border-border">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Posição</p>
                <p className="mt-1 text-3xl sm:text-4xl font-extrabold gradient-text-gold leading-none">3º</p>
              </div>
              <div className="text-center px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-background border border-primary/30 shadow-gold">
                <p className="text-[10px] uppercase tracking-wider text-gold">Estimado</p>
                <p className="mt-1 text-3xl sm:text-4xl font-extrabold leading-none">25<span className="text-base sm:text-lg text-muted-foreground">min</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
