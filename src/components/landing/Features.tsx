import { ListOrdered, QrCode, BellRing, Smartphone, Tag, History } from "lucide-react";

const features = [
  { icon: ListOrdered, title: "Fila em tempo real" },
  { icon: QrCode, title: "Link e QR Code da fila" },
  { icon: BellRing, title: "Chamar próximo num clique" },
  { icon: Smartphone, title: "Cliente vê a posição" },
  { icon: Tag, title: "Serviços e preços" },
  { icon: History, title: "Histórico do dia" },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold tracking-tight">
          Tudo que sua barbearia <span className="gradient-text-gold">precisa</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
            >
              <span className="grid place-items-center size-11 rounded-lg bg-primary/10 text-gold">
                <f.icon className="size-5" />
              </span>
              <p className="mt-3 text-sm md:text-base font-semibold">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
