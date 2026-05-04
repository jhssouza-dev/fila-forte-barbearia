import dashboard from "@/assets/app-dashboard.png";
import atendimentos from "@/assets/app-atendimentos.png";
import agenda from "@/assets/app-agenda.png";
import qrcode from "@/assets/app-qrcode.png";
import historico from "@/assets/app-historico.png";

type Mod = {
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  punch?: string;
  img: string;
  reverse?: boolean;
};

const modules: Mod[] = [
  {
    tag: "Atendimentos",
    title: "A tela principal da barbearia",
    desc: "Botão único: Atender próximo. Fila e agendamento integrados, decisão final na sua mão.",
    bullets: ["Fila + agenda no mesmo painel", "Múltiplos barbeiros simultâneos", "Controle total do fluxo"],
    punch: "O sistema sugere. Você decide.",
    img: atendimentos,
  },
  {
    tag: "Estatísticas",
    title: "Sua barbearia em tempo real",
    desc: "Faturamento do dia, ticket médio, atendimentos e equipe online numa tela só.",
    bullets: ["Faturamento ao vivo", "Ticket médio automático", "Comparativo com ontem"],
    img: dashboard,
    reverse: true,
  },
  {
    tag: "Agendamentos",
    title: "Agenda inteligente, sem bagunça",
    desc: "Calendário visual moderno com horários disponíveis automáticos. Zero conflito.",
    bullets: ["Calendário visual por dia", "Conflito impossível", "Integrado com a fila"],
    img: agenda,
  },
  {
    tag: "QR Code",
    title: "Entrada simples para o cliente",
    desc: "Imprime, cola na parede. Cliente escaneia, entra na fila ou agenda. Sem app.",
    bullets: ["QR pronto pra imprimir", "Link público da loja", "Sem cadastro complicado"],
    img: qrcode,
    reverse: true,
  },
  {
    tag: "Histórico & Relatórios",
    title: "Tudo registrado, nada esquecido",
    desc: "Cada atendimento salvo. Baixe o relatório do dia, semana ou mês quando quiser.",
    bullets: ["Histórico completo", "Relatório em um clique", "Por barbeiro e serviço"],
    img: historico,
  },
];

export const Modules = () => {
  return (
    <section id="features" className="py-16 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">O sistema completo</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Tudo que sua barbearia precisa, <span className="gradient-text-gold">num lugar só</span>
          </h2>
        </div>

        <div className="mt-12 md:mt-20 space-y-20 md:space-y-32">
          {modules.map((m) => (
            <div
              key={m.tag}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                m.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="max-w-lg">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{m.tag}</span>
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  {m.title}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm sm:text-base">
                      <span className="mt-1.5 size-1.5 rounded-full bg-gold shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {m.punch && (
                  <p className="mt-6 text-lg font-bold gradient-text-gold">
                    “{m.punch}”
                  </p>
                )}
              </div>

              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm">
                <div className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
                <div className="relative rounded-[2rem] border border-border/80 bg-card p-2 shadow-2xl shadow-black/60">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="w-full h-auto rounded-[1.6rem]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
