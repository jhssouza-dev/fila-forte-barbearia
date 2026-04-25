import { History, CalendarDays, Scissors, Wallet } from "lucide-react";

const items = [
  { icon: History, title: "Histórico de atendimentos", desc: "Tudo que foi atendido fica registrado." },
  { icon: CalendarDays, title: "Resumo diário", desc: "Veja quantos clientes passaram no dia." },
  { icon: Scissors, title: "Serviços mais usados", desc: "Saiba o que mais sai na sua barbearia." },
  { icon: Wallet, title: "Controle simples de ganhos", desc: "Acompanhe o faturamento do dia sem planilha." },
];

export const Finance = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mock card */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-dark">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Resumo do dia</p>
                  <p className="text-2xl font-extrabold mt-1">Sábado, 14h</p>
                </div>
                <span className="rounded-lg bg-primary/15 text-gold text-xs font-semibold px-2.5 py-1">
                  Em tempo real
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">Atendimentos</p>
                  <p className="mt-1 text-3xl font-extrabold gradient-text-gold">27</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">Faturamento</p>
                  <p className="mt-1 text-3xl font-extrabold gradient-text-gold">R$ 1.080</p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {[
                  { name: "Corte", qty: 14, val: "R$ 560" },
                  { name: "Corte + Barba", qty: 8, val: "R$ 400" },
                  { name: "Barba", qty: 5, val: "R$ 120" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.qty} atendimentos</p>
                    </div>
                    <p className="text-sm font-bold text-gold">{s.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Resumo & histórico
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Entenda melhor o <span className="gradient-text-gold">movimento da barbearia</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Veja atendimentos finalizados, serviços realizados e um resumo simples do faturamento do dia.
              Sem precisar abrir planilha nem ficar fazendo conta de cabeça.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {items.map((i) => (
                <li key={i.title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="grid place-items-center size-10 rounded-lg bg-primary/10 text-gold shrink-0">
                    <i.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{i.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
