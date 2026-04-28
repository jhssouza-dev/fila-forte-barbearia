

export const Plans = () => {
  return (
    <section id="planos" className="py-16 md:py-32 border-t border-border/60">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="max-w-lg">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Planos & Assinaturas</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Planos mensais
              <br />
              <span className="gradient-text-gold">para seus clientes</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Cadastre assinaturas, acompanhe clientes ativos e veja quantos cortes ainda restam.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground">Assinantes ativos</p>
                <p className="mt-1 text-2xl sm:text-3xl font-extrabold">3</p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
                <p className="text-xs text-gold">Planos no mês</p>
                <p className="mt-1 text-2xl sm:text-3xl font-extrabold gradient-text-gold">R$ 300</p>
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative space-y-3">
              {[
                { name: "João", plan: "Corte mensal", used: 1, total: 4, status: "Ativo" },
                { name: "Marcos", plan: "Corte + Barba", used: 2, total: 4, status: "Ativo" },
                { name: "Rafael", plan: "Corte mensal", used: 3, total: 4, status: "Ativo" },
              ].map((c) => {
                const remaining = c.total - c.used;
                const pct = (remaining / c.total) * 100;
                return (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card-dark"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Cliente</p>
                        <p className="mt-0.5 text-base font-bold truncate">{c.name}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-gold text-xs font-semibold px-3 py-1.5">
                        <span className="size-1.5 rounded-full bg-gold" />
                        {c.status}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Plano</p>
                        <p className="mt-0.5 text-sm font-medium">{c.plan}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Restam</p>
                        <p className="mt-0.5 text-sm font-bold">
                          <span className="gradient-text-gold text-lg">{remaining}</span>
                          <span className="text-muted-foreground"> de {c.total} cortes</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 h-1 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full gradient-gold rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
