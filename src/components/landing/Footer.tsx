import logo from "@/assets/header-logo.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#top" className="flex items-center" aria-label="Filafy">
              <img src={logo} alt="Filafy" className="h-9 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Sistema para organizar a fila da sua barbearia sem papel, gritaria ou confusão.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Produto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#como-funciona" className="hover:text-foreground">Como funciona</a></li>
              <li><a href="#features" className="hover:text-foreground">Recursos</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Conta</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Entrar</a></li>
              <li><a href="#" className="hover:text-foreground">Criar conta</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Filafy — fila digital para barbearias.</p>
          <p>Feito com cuidado pra quem trabalha na cadeira.</p>
        </div>
      </div>
    </footer>
  );
};
