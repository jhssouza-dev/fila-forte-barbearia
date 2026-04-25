import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso instalar aplicativo?", a: "Não. Funciona direto no navegador, pra você e pro cliente." },
  { q: "O cliente precisa criar conta?", a: "Não. Ele abre o link ou QR Code e entra na fila." },
  { q: "Funciona com vários barbeiros?", a: "Sim. Toda a fila aparece no painel pra qualquer barbeiro chamar." },
  { q: "Posso testar grátis?", a: "Sim. Crie sua barbearia agora e teste sem cartão de crédito." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="container max-w-2xl">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold tracking-tight">
          Perguntas <span className="gradient-text-gold">frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="mt-8 space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
