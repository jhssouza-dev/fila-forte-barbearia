import atendimentos from "@/assets/app-atendimentos.png";
import agenda from "@/assets/app-agenda.png";
import dashboard from "@/assets/app-dashboard.png";
import qrcode from "@/assets/app-qrcode.png";
import assinatura from "@/assets/app-assinatura.png";
import historico from "@/assets/app-historico.png";

const shots = [
  { img: atendimentos, label: "Atendimentos" },
  { img: agenda, label: "Agenda" },
  { img: dashboard, label: "Estatísticas" },
  { img: assinatura, label: "Planos & Assinaturas" },
  { img: qrcode, label: "QR Code" },
  { img: historico, label: "Histórico" },
];

export const Showcase = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[60rem] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="container relative">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Em ação</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Veja o Filafy <span className="gradient-text-gold">funcionando de verdade.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {shots.map((s, i) => (
            <div key={s.label} className="group relative">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div
                className="relative rounded-2xl border border-border bg-card p-1.5 shadow-2xl shadow-black/60 transition-transform group-hover:-translate-y-2"
                style={{ transform: i % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)" }}
              >
                <img src={s.img} alt={s.label} loading="lazy" className="w-full h-auto rounded-[1.1rem]" />
              </div>
              <p className="mt-4 text-center text-xs sm:text-sm font-semibold text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
