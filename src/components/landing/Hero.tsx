import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import atendimentos from "@/assets/app-atendimentos.png";
import agenda from "@/assets/app-agenda.png";
import qrcode from "@/assets/app-qrcode.png";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[60rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,transparent_50%,hsl(var(--background))_80%)]" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-gold backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Sistema operacional para barbearias
          </span>

          <h1 className="mt-6 text-[2rem] leading-[1.05] sm:text-5xl md:text-[4rem] font-extrabold tracking-tight">
            Organize a fila, os agendamentos e o atendimento
            <br className="hidden md:block" />{" "}
            <span className="gradient-text-gold">em uma única tela.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O Filafy mostra quem está esperando, quem tem horário marcado e quem deve ser atendido agora — sem confusão, sem papel e sem cliente perdido.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="xl" className="group shadow-gold w-full sm:w-auto">
              Começar teste grátis
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border h-14 px-6 text-base font-semibold hover:border-primary/40 transition-colors"
            >
              Ver como funciona
            </a>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
            Sem aplicativo para o cliente · Funciona por QR Code
          </p>
        </div>

        {/* Cinematic mockup composition */}
        <div className="relative mt-16 md:mt-24 mx-auto max-w-5xl">
          <div className="absolute -inset-x-20 -inset-y-10 bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative grid grid-cols-3 gap-3 sm:gap-6 items-end">
            {/* Left mockup */}
            <div className="relative translate-y-6 sm:translate-y-10 opacity-90">
              <div className="rounded-[1.4rem] border border-border/80 bg-card p-1.5 shadow-2xl shadow-black/70 rotate-[-4deg]">
                <img
                  src={qrcode}
                  alt="Tela do cliente Filafy"
                  className="w-full h-auto rounded-[1.1rem]"
                />
              </div>
            </div>

            {/* Center mockup — hero */}
            <div className="relative z-10">
              <div className="absolute -inset-6 bg-primary/25 blur-3xl rounded-full pointer-events-none" />
              <div className="relative rounded-[1.8rem] border border-primary/30 bg-card p-2 shadow-gold">
                <img
                  src={atendimentos}
                  alt="Tela Atendimentos do Filafy"
                  className="w-full h-auto rounded-[1.4rem]"
                />
              </div>
            </div>

            {/* Right mockup */}
            <div className="relative translate-y-6 sm:translate-y-10 opacity-90">
              <div className="rounded-[1.4rem] border border-border/80 bg-card p-1.5 shadow-2xl shadow-black/70 rotate-[4deg]">
                <img
                  src={agenda}
                  alt="Tela Agenda do Filafy"
                  className="w-full h-auto rounded-[1.1rem]"
                />
              </div>
            </div>
          </div>

          {/* fade bottom */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
