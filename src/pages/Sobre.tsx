import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Target, Mail, Lightbulb } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/images/7bfb7414-9607-4852-b964-de2fcbee5d0d.png"
            alt="LCS Logo"
            className="w-24 h-24 rounded-full mx-auto mb-6 shadow-glow"
          />
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Sobre o Projeto
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Linguagem de Padrões para o Desenvolvimento do Pensamento Computacional na Educação
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-primary" />
                  <span>Nossa Missão</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolver e estruturar padrões educacionais que auxiliem professores 
                  e estudantes no desenvolvimento do pensamento computacional.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <span>Nossa Visão</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar o acesso ao pensamento computacional e preparar
                  educadores para os desafios da educação do século XXI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">O que são Linguagens de Padrões?</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As linguagens de padrões foram originalmente desenvolvidas pelo arquiteto 
                <strong> Christopher Alexander</strong> na década de 1970 para descrever 
                soluções recorrentes em arquitetura e planejamento urbano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Origem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvida por Christopher Alexander em "A Pattern Language" (1977), 
                    inicialmente para arquitetura e design urbano.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Evolução</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Adaptada para engenharia de software na década de 1990 pelo "Gang of Four" 
                    e posteriormente aplicada em diversas áreas do conhecimento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Na Educação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nossa aplicação busca criar padrões específicos para o desenvolvimento 
                    do pensamento computacional no contexto educacional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Objetivos do Projeto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-educational transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-educational-blue mx-auto mb-4" />
                <CardTitle>Catalogar Padrões</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identificar e documentar padrões no ensino do pensamento computacional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-educational transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-educational-green mx-auto mb-4" />
                <CardTitle>Capacitar Educadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fornecer recursos e ferramentas para professores aplicarem em suas práticas pedagógicas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-educational transition-all duration-300">
              <CardHeader>
                <Target className="w-12 h-12 text-educational-orange mx-auto mb-4" />
                <CardTitle>Democratizar Acesso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tornar o pensamento computacional acessível para qualquer público.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Para Educadores
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Este projeto foi desenvolvido pensando especialmente em professores que desejam 
            integrar o pensamento computacional em suas disciplinas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-primary-foreground/10 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-primary-foreground mb-3">Materiais Prontos</h3>
              <p className="text-primary-foreground/80 text-sm">
                Acesse atividades, exercícios e exemplos práticos que podem ser aplicados 
                imediatamente em sala de aula.
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-primary-foreground mb-3">Flexibilidade</h3>
              <p className="text-primary-foreground/80 text-sm">
                Adapte os padrões para diferentes disciplinas e níveis de ensino, 
                desde educação básica até ensino superior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contribua com o Projeto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Este é um projeto colaborativo. Sua experiência e conhecimento podem ajudar 
              a expandir e melhorar nossa coleção de padrões educacionais.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Compartilhe suas experiências, sugestões ou proponha novos padrões.
                </p>
                <Button variant="outline" size="sm">
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;