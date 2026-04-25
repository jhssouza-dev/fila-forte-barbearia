import { ListOrdered, Link2, Monitor, Smartphone, Tag, History } from "lucide-react";

const features = [
  {
    icon: ListOrdered,
    title: "Fila digital",
    desc: "Veja todos os clientes esperando e a ordem de chegada, em tempo real.",
  },
  {
    icon: Link2,
    title: "Link da barbearia",
    desc: "Compartilhe um link ou QR Code para os clientes entrarem na fila direto do celular.",
  },
  {
    icon: Monitor,
    title: "Painel do barbeiro",
    desc: "Chame o próximo, finalize atendimentos e acompanhe o movimento sem complicação.",
  },
  {
    icon: Smartphone,
    title: "Status do cliente",
    desc: "O cliente acompanha a posição dele direto no celular, sem precisar perguntar nada.",
  },
  {
    icon: Tag,
    title: "Serviços e preços",
    desc: "Cadastre cortes, barba e outros serviços com valores que aparecem na hora da fila.",
  },
  {
    icon: History,
    title: "Histórico do dia",
    desc: "Veja os atendimentos finalizados e tenha mais controle da rotina da barbearia.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface border-y border-border/60">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Recursos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            O essencial para <span className="gradient-text-gold">controlar sua fila</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Sem firula. Só o que faz diferença no dia a dia da barbearia.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-card-dark transition-all"
            >
              <span className="grid place-items-center size-12 rounded-xl bg-primary/10 text-gold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
