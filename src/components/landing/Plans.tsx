import assinatura from "@/assets/app-assinatura.png";
import { Check } from "lucide-react";

const plans = [
  { name: "Corte mensal", uses: "4 cortes/mês", price: "R$ 150" },
  { name: "Corte + Barba", uses: "Pacote mensal", price: "R$ 220" },
  { name: "Personalizado", uses: "Você define", price: "—" },
];

export const Plans = () => {
  return (
    <section id="planos" className="py-20 md:py-32 border-t border-border/40">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Planos & Assinaturas</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Transforme clientes frequentes em
              <span className="gradient-text-gold"> receita previsível.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Com planos e assinaturas, a barbearia para de depender apenas de atendimentos avulsos.
            </p>

            <div className="mt-8 space-y-3">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid place-items-center size-9 rounded-xl bg-primary/10 shrink-0">
                      <Check className="size-4 text-gold" strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.uses}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold gradient-text-gold whitespace-nowrap">{p.price}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base sm:text-lg font-semibold leading-relaxed">
              Quando o cliente chega, o Filafy identifica o plano ativo, aplica o uso e cobra apenas o que for extra.
              <br />
              <span className="gradient-text-gold">Menos controle manual. Mais recorrência.</span>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm">
            <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-black/70">
              <img
                src={assinatura}
                alt="Tela de Assinatura no Filafy"
                className="w-full h-auto rounded-[1.6rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
