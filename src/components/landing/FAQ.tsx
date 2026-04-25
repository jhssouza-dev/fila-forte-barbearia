import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso instalar aplicativo?",
    a: "Não. O Filafy funciona direto pelo navegador, tanto para o cliente quanto para a barbearia.",
  },
  {
    q: "O cliente precisa criar conta?",
    a: "Não. O cliente acessa o link ou QR Code e entra na fila de forma simples.",
  },
  {
    q: "Funciona para mais de um barbeiro?",
    a: "Sim. A barbearia pode organizar a fila e acompanhar os atendimentos pelo painel.",
  },
  {
    q: "Posso usar QR Code na recepção?",
    a: "Sim. Você pode gerar o link da fila e transformar em QR Code para deixar visível no balcão.",
  },
  {
    q: "O sistema tem agendamento?",
    a: "Não neste momento. O foco atual do Filafy é ser o melhor sistema de fila digital para barbearias.",
  },
  {
    q: "Posso testar grátis?",
    a: "Sim. A ideia é permitir que você teste a fila na prática antes de decidir usar no dia a dia.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface border-y border-border/60">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Tirando suas <span className="gradient-text-gold">dúvidas</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
