import { QrCode, Smartphone, Monitor, BellRing } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: QrCode,
    title: "Gere o link ou QR Code",
    desc: "Crie sua barbearia em segundos e tenha um link único da fila para compartilhar.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Cliente entra pelo celular",
    desc: "Sem app, sem cadastro chato. Ele abre o link, escolhe o serviço e entra na fila.",
  },
  {
    n: "03",
    icon: Monitor,
    title: "Você acompanha no painel",
    desc: "Veja todo mundo esperando, em ordem, em tempo real, direto no seu celular ou notebook.",
  },
  {
    n: "04",
    icon: BellRing,
    title: "Chame o próximo com 1 clique",
    desc: "O cliente sabe na hora que é a vez dele. Sem grito, sem confusão, sem cliente perdido.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface border-y border-border/60">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Como funciona <span className="gradient-text-gold">na prática</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Em 4 passos simples sua barbearia já tá com a fila organizada.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <span className="text-5xl font-extrabold gradient-text-gold leading-none">{s.n}</span>
              <span className="mt-5 grid place-items-center size-11 rounded-lg bg-primary/10 text-gold">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
