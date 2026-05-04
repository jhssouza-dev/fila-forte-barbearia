import atendimentos from "@/assets/app-atendimentos.png";

const timeline = [
  { time: "09:00", label: "Cliente da fila", type: "fila" },
  { time: "09:30", label: "Cliente da fila", type: "fila" },
  { time: "10:30", label: "Agendamento", type: "agenda" },
  { time: "11:00", label: "Próximo atendimento", type: "next" },
];

export const Differential = () => {
  return (
    <section className="py-20 md:py-32 bg-surface border-y border-border/40 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 size-[40rem] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">O diferencial</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Fila e agendamento <span className="gradient-text-gold">trabalhando juntos</span> — do jeito certo.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              No Filafy, agendamento não fica separado da fila. O sistema calcula o fluxo do dia considerando serviços, duração, barbeiros e atendimentos em andamento.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "A fila continua sendo fila.",
                "O agendamento continua sendo agendamento.",
                "A tela Atendimentos junta tudo numa visão inteligente.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-bold gradient-text-gold">
              Inteligente para calcular. Flexível para operar.
            </p>
          </div>

          {/* Timeline + mockup */}
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur p-5 sm:p-7 shadow-card-dark">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Fluxo do dia</p>
              <p className="mt-1 text-sm font-semibold">O sistema sugere a ordem. Você mantém o controle.</p>

              <div className="mt-5 space-y-2">
                {timeline.map((t) => (
                  <div
                    key={t.time + t.label}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 border ${
                      t.type === "next"
                        ? "border-primary/40 bg-primary/10 shadow-gold"
                        : "border-border bg-background/50"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold tabular-nums ${
                        t.type === "next" ? "gradient-text-gold" : "text-muted-foreground"
                      }`}
                    >
                      {t.time}
                    </span>
                    <span className={`text-sm flex-1 ${t.type === "next" ? "font-bold" : ""}`}>{t.label}</span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                        t.type === "agenda"
                          ? "bg-primary/10 text-gold"
                          : t.type === "next"
                          ? "gradient-gold text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {t.type === "agenda" ? "Agenda" : t.type === "next" ? "Próximo" : "Fila"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
                <img
                  src={atendimentos}
                  alt="Tela Atendimentos"
                  className="w-20 h-auto rounded-lg border border-border shadow-lg shadow-black/50"
                />
                <p className="text-xs text-muted-foreground">
                  Visão real da tela <span className="text-foreground font-semibold">Atendimentos</span> — fila e agenda no mesmo lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
