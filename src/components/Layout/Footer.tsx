import { Heart, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/7bfb7414-9607-4852-b964-de2fcbee5d0d.png"
                alt="LCS Logo"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-foreground">Padrões Educacionais LCS</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Promovendo o pensamento computacional através de linguagem de padrões educacionais.
              Uma ferramenta para educadores e estudantes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/padroes" className="hover:text-primary transition-colors">Catálogo de Padrões</a></li>
              <li><a href="/pensamento-computacional" className="hover:text-primary transition-colors">Pensamento Computacional</a></li>
              <li><a href="/sobre" className="hover:text-primary transition-colors">Sobre o Projeto</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <Heart className="w-4 h-4 text-purple-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;