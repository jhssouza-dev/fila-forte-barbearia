import { BarChart3, Calendar, LayoutGrid, QrCode, Settings, Users, CreditCard } from "lucide-react";

const modules = [
  {
    icon: BarChart3,
    tag: "Estatísticas",
    title: "Veja o desempenho da barbearia",
    desc: "Acompanhe atendimentos, histórico e faturamento para entender o que está acontecendo no negócio.",
  },
  {
    icon: LayoutGrid,
    tag: "Atendimentos",
    title: "O centro da operação",
    desc: "Fila e agendamentos numa visão inteligente. O barbeiro sabe quem atender agora.",
    featured: true,
  },
  {
    icon: Calendar,
    tag: "Agendamentos",
    title: "Agenda visual e sem conflito",
    desc: "Horários disponíveis, calendário por dia e controle sem bagunçar a fila.",
  },
  {
    icon: Users,
    tag: "Barbeiros",
    title: "Controle da equipe",
    desc: "Ative, pause ou desative barbeiros conforme a operação do dia.",
  },
  {
    icon: QrCode,
    tag: "QR Code",
    title: "Entrada simples para o cliente",
    desc: "Basta escanear para entrar na fila ou agendar horário.",
  },
  {
    icon: CreditCard,
    tag: "Planos & Assinaturas",
    title: "Receita recorrente",
    desc: "Crie planos mensais. O sistema reconhece o cliente e desconta o uso automaticamente.",
  },
  {
    icon: Settings,
    tag: "Configurações",
    title: "Regras do seu jeito",
    desc: "Defina horários, serviços, duração, preços e modo de atendimento.",
  },
];

export const Modules = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Funcionalidades</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Tudo que a barbearia precisa
            <br />
            <span className="gradient-text-gold">para atender melhor.</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.tag}
                className={`group relative rounded-2xl border p-6 sm:p-7 transition-all hover:-translate-y-1 ${
                  m.featured
                    ? "border-primary/30 bg-primary/5 shadow-gold sm:row-span-2 sm:col-span-1 lg:col-span-1"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div
                  className={`grid place-items-center size-11 rounded-xl ${
                    m.featured ? "gradient-gold" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`size-5 ${m.featured ? "text-primary-foreground" : "text-gold"}`}
                  />
                </div>
                <p className={`mt-5 text-xs font-bold uppercase tracking-[0.15em] ${m.featured ? "text-gold" : "text-muted-foreground"}`}>
                  {m.tag}
                </p>
                <p className="mt-2 text-lg font-bold">{m.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
