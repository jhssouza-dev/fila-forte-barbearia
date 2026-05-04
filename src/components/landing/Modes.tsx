import { Calendar, LayoutGrid, Users } from "lucide-react";

const modes = [
  {
    icon: Users,
    title: "Somente fila",
    desc: "Para barbearias que atendem por ordem de chegada.",
  },
  {
    icon: Calendar,
    title: "Somente agendamentos",
    desc: "Para quem trabalha com horário marcado.",
  },
  {
    icon: LayoutGrid,
    title: "Fila + agendamentos",
    desc: "Flexibilidade sem perder organização.",
    featured: true,
  },
];

export const Modes = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Modos de operação</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Use do jeito que <span className="gradient-text-gold">sua barbearia trabalha.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className={`rounded-2xl border p-7 ${
                  m.featured
                    ? "border-primary/30 bg-primary/5 shadow-gold"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`grid place-items-center size-11 rounded-xl ${
                    m.featured ? "gradient-gold" : "bg-primary/10"
                  }`}
                >
                  <Icon className={`size-5 ${m.featured ? "text-primary-foreground" : "text-gold"}`} />
                </div>
                <p className="mt-5 text-lg font-bold">{m.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-base sm:text-lg font-semibold">
          O Filafy se adapta à barbearia — <span className="gradient-text-gold">não o contrário.</span>
        </p>
      </div>
    </section>
  );
};
