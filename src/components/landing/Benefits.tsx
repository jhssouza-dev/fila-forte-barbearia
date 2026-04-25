import { CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
  "Fila organizada em tempo real",
  "Menos confusão no balcão",
  "Cliente sabe a posição dele",
  "Barbeiro chama o próximo com clareza",
  "Funciona direto no navegador",
  "Não precisa instalar aplicativo",
  "Ideal para barbearias pequenas e médias",
  "Configura em poucos minutos",
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Benefícios
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Mais controle <span className="gradient-text-gold">sem complicar</span> sua rotina
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              O Filafy foi feito pra resolver UM problema bem feito: organizar a fila da barbearia.
              Nada de menu cheio de coisa, nada de aprender sistema novo.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3">
              <Sparkles className="size-5 text-gold" />
              <span className="text-sm">
                Simples o suficiente pro barbeiro usar enquanto atende.
              </span>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
