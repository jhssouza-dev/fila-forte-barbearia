const steps = [
  {
    n: "01",
    title: "Gere seu QR Code",
    desc: "Crie sua fila em 2 minutos. Imprima o QR Code e cole na recepção.",
  },
  {
    n: "02",
    title: "Cliente entra na fila",
    desc: "Ele escaneia, digita o nome e pronto. Sem app, sem cadastro.",
  },
  {
    n: "03",
    title: "Você acompanha tudo",
    desc: "Painel ao vivo no celular ou tablet com a fila atualizada.",
  },
  {
    n: "04",
    title: "Chame o próximo",
    desc: "Um toque e o próximo cliente é avisado. Sem grito, sem confusão.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Como funciona</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Do QR Code à cadeira em <span className="gradient-text-gold">4 passos</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* linha conectando */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative group">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative grid place-items-center size-16 rounded-full border border-primary/30 bg-background">
                      <span className="text-xl font-extrabold gradient-text-gold">{s.n}</span>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
