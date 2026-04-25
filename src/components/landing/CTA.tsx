import { ArrowRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="relative">
            <span className="inline-grid place-items-center size-14 rounded-2xl gradient-gold shadow-gold">
              <Scissors className="size-7 text-primary-foreground" />
            </span>

            <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
              Teste o Filafy na sua <span className="gradient-text-gold">barbearia hoje</span>
            </h2>

            <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
              Crie sua fila grátis, gere seu link e comece a organizar os atendimentos em poucos minutos.
            </p>

            <div className="mt-8 flex justify-center">
              <Button variant="gold" size="xl" className="group">
                Criar minha barbearia grátis
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Sem cartão de crédito. Sem instalação. Direto no navegador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
