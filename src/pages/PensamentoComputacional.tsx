import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import FeatureCard from "@/components/ui/feature-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Puzzle, Target, Lightbulb, BookOpen, Users, ArrowRight, PlayCircle } from "lucide-react";
import {Link} from "react-router-dom";

const PensamentoComputacional = () => {
  const pillars = [
    {
      icon: Puzzle,
      title: "Decomposição",
      description: "A arte de quebrar problemas complexos em partes menores e mais gerenciáveis",
      example: "Como resolver um projeto escolar dividindo-o em etapas menores",
      color: "educational-blue"
    },
    {
      icon: Target,
      title: "Reconhecimento de Padrões",
      description: "Identificar semelhanças, regularidades e tendências em dados e situações",
      example: "Encontrar semelhanças entre diferentes problemas matemáticos",
      color: "educational-green"
    },
    {
      icon: Lightbulb,
      title: "Abstração",
      description: "Focar no que é importante, ignorando detalhes desnecessários",
      example: "Criar um mapa mental focando apenas nos conceitos principais",
      color: "educational-orange"
    },
    {
      icon: BookOpen,
      title: "Algoritmos",
      description: "Desenvolver sequências de passos claros para resolver problemas",
      example: "Criar uma receita detalhada para ensinar algo novo",
      color: "primary"
    }
  ];

  const benefits = [
    "Melhora na resolução de problemas",
    "Desenvolvimento do raciocínio lógico",
    "Capacidade de análise e síntese",
    "Pensamento crítico e criativo",
    "Preparação para a era digital"
  ];

  const patterns = {
    name: "Padrões",
    href: "/padroes"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Pensamento Computacional
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-2">
              Descubra como desenvolver habilidades fundamentais para resolver problemas 
              de forma sistemática e criativa, essenciais para a educação do século XXI.
            </p>
            {/*<Button size="lg" variant="secondary" className="group">*/}
            {/*  <PlayCircle className="w-5 h-5 mr-2" />*/}
            {/*  Começar Jornada*/}
            {/*  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />*/}
            {/*</Button>*/}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">O que é Pensamento Computacional?</h2>
            
            <div className="grid gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O pensamento computacional é uma metodologia de resolução de problemas que pode ser 
                  aplicada em qualquer área do conhecimento. Não se trata apenas de programação, 
                  mas de uma forma estruturada de pensar.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desenvolvido inicialmente por <strong>Jeannette Wing</strong> em 2006, 
                  este conceito revolucionou a educação ao mostrar como as técnicas usadas 
                  na ciência da computação podem ajudar a resolver problemas do dia a dia.
                </p>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Os Quatro Pilares</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entenda os conceitos fundamentais que formam a base do pensamento computacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="group hover:shadow-educational transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{pillar.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          Pilar {index + 1} de 4
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="bg-accent/50 rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Exemplo Prático:</h4>
                      <p className="text-sm text-muted-foreground">{pillar.example}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn p-2 h-auto">
                      Explorar mais
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Aplicações Práticas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja como o pensamento computacional pode ser aplicado em diferentes áreas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Matemática"
              description="Resolver problemas complexos quebrando-os em etapas menores e identificando padrões numéricos."
              icon={Target}
              variant="educational"
            />
            
            <FeatureCard
              title="Ciências"
              description="Criar hipóteses, abstrair variáveis e desenvolver experimentos sistemáticos."
              icon={Lightbulb}
              variant="educational"
            />
            
            <FeatureCard
              title="Linguagens"
              description="Analisar estruturas textuais, reconhecer padrões linguísticos e organizar ideias."
              icon={BookOpen}
              variant="educational"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Explore nossos padrões educacionais e veja como aplicar o pensamento computacional na prática.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link key={patterns.name} to={patterns.href}>
              <Button size="lg" variant="secondary">
                <BookOpen className="w-5 h-5 mr-2" />
                Ver Padrões
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PensamentoComputacional;