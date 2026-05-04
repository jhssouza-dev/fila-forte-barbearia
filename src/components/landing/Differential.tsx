import { Calendar, Users } from "lucide-react";

export const Differential = () => {
  return (
    <section className="py-16 md:py-32 bg-surface border-y border-border/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">O diferencial</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Fila e agendamento <span className="gradient-text-gold">trabalhando juntos</span> — de verdade
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Outros sistemas separam tudo. O Filafy calcula em tempo real: fila + agenda no mesmo fluxo.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="grid place-items-center size-12 rounded-xl bg-primary/10 mx-auto">
              <Users className="size-5 text-gold" />
            </div>
            <p className="mt-4 font-bold">Fila ao vivo</p>
            <p className="mt-1 text-sm text-muted-foreground">Quem chegou primeiro, atende primeiro.</p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center shadow-gold">
            <div className="grid place-items-center size-12 rounded-xl gradient-gold mx-auto">
              <span className="text-primary-foreground font-bold">+</span>
            </div>
            <p className="mt-4 font-bold gradient-text-gold">Tudo integrado</p>
            <p className="mt-1 text-sm text-muted-foreground">Sistema decide o próximo. Você confirma.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="grid place-items-center size-12 rounded-xl bg-primary/10 mx-auto">
              <Calendar className="size-5 text-gold" />
            </div>
            <p className="mt-4 font-bold">Agenda inteligente</p>
            <p className="mt-1 text-sm text-muted-foreground">Encaixa nos horários sem conflito.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
