import qrcode from "@/assets/app-qrcode.png";

const steps = [
  {
    n: "01",
    title: "Escaneia o QR Code",
    desc: "O cliente abre a página da barbearia direto no celular.",
  },
  {
    n: "02",
    title: "Escolhe fila ou agendamento",
    desc: "A barbearia decide se usa fila, agenda ou os dois.",
  },
  {
    n: "03",
    title: "Vê a previsão",
    desc: "Quantos atendimentos estão à frente e o tempo estimado.",
  },
  {
    n: "04",
    title: "Acompanha em tempo real",
    desc: "Sem precisar perguntar nada no balcão.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          {/* Mockup */}
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-sm order-2 lg:order-1">
            <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-black/70">
              <img
                src={qrcode}
                alt="Tela pública do cliente"
                className="w-full h-auto rounded-[1.6rem]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Para o cliente</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              O cliente entra <span className="gradient-text-gold">sem baixar aplicativo.</span>
            </h2>

            <div className="mt-10 space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div className="grid place-items-center size-12 rounded-full border border-primary/30 bg-background">
                      <span className="text-base font-extrabold gradient-text-gold">{s.n}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p className="text-lg font-bold">{s.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-base font-semibold text-foreground">
              Menos dúvida para o cliente.{" "}
              <span className="gradient-text-gold">Menos interrupção para o barbeiro.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
