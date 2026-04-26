import { TrendingUp } from "lucide-react";

export const Finance = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-card-dark">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Resumo do dia</p>
                  <p className="mt-1 text-lg font-bold">Sábado · 19 abr</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-gold text-xs font-semibold px-3 py-1.5">
                  <TrendingUp className="size-3.5" />
                  +18%
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/50 p-4 sm:p-5">
                  <p className="text-xs text-muted-foreground">Atendimentos</p>
                  <p className="mt-2 text-3xl sm:text-4xl font-extrabold">27</p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
                  <p className="text-xs text-gold">Faturamento</p>
                  <p className="mt-2 text-2xl sm:text-4xl font-extrabold gradient-text-gold">R$ 1.080</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { name: "Corte", qty: 14, val: "R$ 560", pct: 52 },
                  { name: "Corte + Barba", qty: 8, val: "R$ 400", pct: 30 },
                  { name: "Barba", qty: 5, val: "R$ 120", pct: 18 },
                ].map((s) => (
                  <div key={s.name} className="rounded-xl border border-border bg-background/50 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        {s.name} <span className="text-xs text-muted-foreground">· {s.qty}x</span>
                      </p>
                      <p className="text-sm font-bold text-gold">{s.val}</p>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full gradient-gold rounded-full" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-lg">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Financeiro</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Sem planilha.
              <br />
              <span className="gradient-text-gold">Sem conta de cabeça.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Cada atendimento entra automaticamente no resumo. No fim do dia, você sabe exatamente quanto faturou.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
