import atendimentos from "@/assets/app-atendimentos.png";
import { Check } from "lucide-react";

const features = [
  "Botão único: Atender próximo",
  "Atendimento em andamento sempre visível",
  "Fila + agendamentos na mesma visão",
  "Sugestão de barbeiro sem travar a operação",
  "Finalização com serviços extras",
  "Reconhece planos e assinaturas ativas",
];

export const Operation = () => {
  return (
    <section className="py-20 md:py-32 bg-surface border-y border-border/40 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[50rem] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Para a barbearia</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Uma tela <span className="gradient-text-gold">para operar o dia.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              A tela Atendimentos mostra o que importa: quem está em atendimento, quem é o próximo e quem está aguardando.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid place-items-center size-5 rounded-full bg-primary/10 shrink-0">
                    <Check className="size-3 text-gold" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-semibold">
              O barbeiro não precisa alternar entre agenda, fila e WhatsApp.{" "}
              <span className="gradient-text-gold">O fluxo está em um só lugar.</span>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-md">
            <div className="absolute -inset-12 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-[2rem] border border-primary/30 bg-card p-2 shadow-gold">
              <img
                src={atendimentos}
                alt="Tela Atendimentos do Filafy"
                className="w-full h-auto rounded-[1.6rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
