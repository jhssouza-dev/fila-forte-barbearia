export const Finance = () => {
  return (
    <section className="py-16 md:py-20 bg-surface border-y border-border/60">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-dark">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Resumo do dia</p>
                <span className="rounded-md bg-primary/15 text-gold text-xs font-semibold px-2 py-0.5">
                  Sábado
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">Atendimentos</p>
                  <p className="mt-1 text-3xl font-extrabold gradient-text-gold">27</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">Faturamento</p>
                  <p className="mt-1 text-3xl font-extrabold gradient-text-gold">R$ 1.080</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { name: "Corte", qty: 14, val: "R$ 560" },
                  { name: "Corte + Barba", qty: 8, val: "R$ 400" },
                  { name: "Barba", qty: 5, val: "R$ 120" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-2.5">
                    <p className="text-sm font-medium">{s.name} <span className="text-xs text-muted-foreground">· {s.qty}</span></p>
                    <p className="text-sm font-bold text-gold">{s.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Saiba quanto sua barbearia <span className="gradient-text-gold">faturou hoje</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Sem planilha, sem conta de cabeça. Tudo que foi atendido aparece no resumo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
