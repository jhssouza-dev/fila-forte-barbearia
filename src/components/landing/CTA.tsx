import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
              Sua próxima fila <span className="gradient-text-gold">organizada</span> começa agora
            </h2>

            <div className="mt-8 flex justify-center">
              <Button variant="gold" size="xl" className="group">
                Criar minha fila grátis
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Sem cartão. Sem instalação. Pronto em 2 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
