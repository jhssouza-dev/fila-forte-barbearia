import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] border border-primary/20 bg-card">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="absolute -top-20 -right-20 size-[30rem] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 size-[25rem] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="relative px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Pare de administrar sua barbearia
              <br />
              <span className="gradient-text-gold">no improviso.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              O Filafy coloca fila, agenda, atendimentos e planos no mesmo sistema — simples para o cliente, claro para o barbeiro e poderoso para o dono.
            </p>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" size="xl" className="group shadow-gold w-full sm:w-auto">
                Começar teste grátis
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              Sem app para o cliente · Configuração rápida · Pronto para usar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
