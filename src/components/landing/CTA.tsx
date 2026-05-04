import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import barberImg from "@/assets/feature-barber.jpg";

export const CTA = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] border border-primary/20 bg-card">
          <img
            src={barberImg}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-25"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

          <div className="relative px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Ou você <span className="gradient-text-gold">organiza</span> sua barbearia,
              <br />
              ou continua perdendo cliente.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-md">
              Em 2 minutos seu sistema está rodando. Sem cartão, sem complicação.
            </p>

            <div className="mt-8">
              <Button variant="gold" size="xl" className="group shadow-gold w-full sm:w-auto">
                Começar grátis agora
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Grátis · Sem cartão · Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
