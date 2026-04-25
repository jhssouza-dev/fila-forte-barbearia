import { Store, Users, UserCheck, QrCode } from "lucide-react";

const cases = [
  {
    icon: Store,
    title: "Barbearia de bairro",
    desc: "Movimento por chegada, sem agenda. O Filafy organiza quem chegou primeiro.",
  },
  {
    icon: Users,
    title: "Barbearia com vários barbeiros",
    desc: "Acompanhe a fila inteira no painel e mantenha o salão fluindo.",
  },
  {
    icon: UserCheck,
    title: "Atendimento por chegada",
    desc: "Ordem clara, sem disputa entre clientes sobre quem é o próximo.",
  },
  {
    icon: QrCode,
    title: "QR Code no balcão",
    desc: "Cliente entra na fila escaneando o QR Code logo na porta da barbearia.",
  },
];

export const QueueUseCases = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border/60">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Pra quem é o Filafy
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Feito pra barbearia que atende <span className="gradient-text-gold">por ordem de chegada</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Se sua barbearia trabalha com fila, chegada espontânea ou movimento forte em horários de pico,
            o Filafy ajuda a organizar sem mudar sua rotina.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <span className="grid place-items-center size-12 rounded-xl gradient-gold shadow-gold">
                <c.icon className="size-6 text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
