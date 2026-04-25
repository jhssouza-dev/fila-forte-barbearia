import { MessageCircleWarning, ListX, DoorOpen, Users, BarChart3 } from "lucide-react";

const pains = [
  {
    icon: MessageCircleWarning,
    title: "Cliente pergunta toda hora",
    desc: "“Quem é o próximo?” virou trilha sonora da barbearia.",
  },
  {
    icon: ListX,
    title: "Barbeiro se perde na ordem",
    desc: "No movimento forte, ninguém lembra quem chegou primeiro.",
  },
  {
    icon: DoorOpen,
    title: "Cliente vai embora sem avisar",
    desc: "Cansa de esperar e some — você nem sabe que perdeu o atendimento.",
  },
  {
    icon: Users,
    title: "Balcão confuso no horário cheio",
    desc: "Sábado lotado vira bagunça com gente em pé sem saber a vez.",
  },
  {
    icon: BarChart3,
    title: "Dono sem controle do dia",
    desc: "Quantos atendimentos rolaram hoje? Difícil saber sem anotar.",
  },
];

export const Problem = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border/60">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            O problema
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Sua fila ainda depende de <span className="gradient-text-gold">grito, papel ou memória?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Toda barbearia que atende por ordem de chegada já passou por isso.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <span className="grid place-items-center size-11 rounded-lg bg-primary/10 text-gold">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
