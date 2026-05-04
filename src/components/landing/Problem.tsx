const pains = [
  {
    title: "Cliente pergunta: demora muito?",
    desc: "E ninguém consegue responder com segurança.",
  },
  {
    title: "Agendamento atrasa a fila",
    desc: "Horário marcado e ordem de chegada acabam virando conflito.",
  },
  {
    title: "Barbeiro perde tempo se organizando",
    desc: "Em vez de atender, precisa decidir quem é o próximo.",
  },
  {
    title: "Cliente desiste sem avisar",
    desc: "Ele vai embora antes mesmo de ser atendido.",
  },
];

export const Problem = () => {
  return (
    <section className="py-20 md:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">A realidade</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Sua barbearia perde dinheiro quando o cliente
            <span className="text-muted-foreground"> não entende a espera.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">
            Quando a fila está no papel, no WhatsApp ou só na cabeça do barbeiro, ninguém sabe exatamente o que está acontecendo.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 grid place-items-center size-9 rounded-xl border border-border bg-background/50 text-xs font-bold text-muted-foreground">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-lg font-bold">{p.title}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg sm:text-xl font-semibold max-w-2xl">
          Desorganização não parece custo. Mas{" "}
          <span className="gradient-text-gold">tira dinheiro da barbearia todos os dias.</span>
        </p>
      </div>
    </section>
  );
};
