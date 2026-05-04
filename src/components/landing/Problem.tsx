export const Problem = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/60">
      <div className="container max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">A dor</span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
          Cliente esperando sem saber.
          <br />
          Barbeiro perdido.
          <br />
          <span className="text-muted-foreground">Agendamento atrasando tudo.</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl font-semibold">
          Resultado? <span className="gradient-text-gold">Cliente indo embora.</span>
        </p>
      </div>
    </section>
  );
};
