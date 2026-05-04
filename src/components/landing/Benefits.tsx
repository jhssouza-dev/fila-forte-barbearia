import dashboard from "@/assets/app-dashboard.png";

const items = [
  "Menos clientes indo embora",
  "Mais previsibilidade no atendimento",
  "Mais controle sobre o tempo dos barbeiros",
  "Mais oportunidades para vender serviços extras",
  "Planos mensais para gerar receita recorrente",
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-surface border-y border-border/40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm order-2 lg:order-1">
            <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-black/70">
              <img
                src={dashboard}
                alt="Estatísticas do Filafy"
                className="w-full h-auto rounded-[1.6rem]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Resultado</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Organização aparece <span className="gradient-text-gold">no faturamento.</span>
            </h2>

            <ul className="mt-8 space-y-3">
              {items.map((t, i) => (
                <li key={t} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 px-4 py-3">
                  <span className="text-xs font-bold text-muted-foreground tabular-nums">0{i + 1}</span>
                  <span className="text-sm sm:text-base font-medium">{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-bold gradient-text-gold leading-snug">
              Uma barbearia organizada atende melhor, vende melhor e perde menos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
