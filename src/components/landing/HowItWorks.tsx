import { QrCode, Smartphone, Monitor, BellRing } from "lucide-react";

const steps = [
  { n: "1", icon: QrCode, title: "Gere seu QR Code" },
  { n: "2", icon: Smartphone, title: "Cliente entra na fila" },
  { n: "3", icon: Monitor, title: "Você vê tudo no painel" },
  { n: "4", icon: BellRing, title: "Chame o próximo" },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-surface border-y border-border/60">
      <div className="container">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold tracking-tight">
          Funciona em <span className="gradient-text-gold">4 passos</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <span className="grid place-items-center size-14 rounded-2xl gradient-gold shadow-gold">
                <s.icon className="size-6 text-primary-foreground" />
              </span>
              <span className="mt-4 text-xs font-bold text-gold">PASSO {s.n}</span>
              <h3 className="mt-1 text-base md:text-lg font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
