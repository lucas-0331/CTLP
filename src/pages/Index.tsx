import HeroSection from "@/components/ui/hero-section";
import FeatureCard from "@/components/ui/feature-card";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { BookOpen, Brain, Lightbulb, Users, Target, Puzzle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        title="Padrões Educacionais"
        subtitle="Desenvolvendo o Pensamento Computacional através de Padrões"
        description="Uma plataforma que conecta linguagem de padrões com o desenvolvimento do pensamento computacional para educadores e estudantes."
        primaryAction={{
          text: "Explorar Padrões",
          href: "/padroes",
          icon: BookOpen
        }}
        secondaryAction={{
          text: "Pensamento Computacional",
          href: "/pensamento-computacional",
          icon: Brain
        }}
      />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore a Plataforma</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra como os padrões podem transformar o ensino e aprendizado do pensamento computacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Catálogo de Padrões"
              description="Explore nossa coleção de padrões educacionais estruturados para desenvolver o pensamento computacional de forma efetiva."
              icon={BookOpen}
              href="/padroes"
              variant="pattern"
            />
            
            <FeatureCard
              title="Pensamento Computacional"
              description="Compreenda os pilares fundamentais: decomposição, reconhecimento de padrões, abstração e algoritmos."
              icon={Brain}
              href="/pensamento-computacional"
              variant="educational"
            />
            
            <FeatureCard
              title="Para Educadores"
              description="Materiais e recursos especialmente desenvolvidos para professores aplicarem em suas práticas pedagógicas."
              icon={Users}
              href="/educadores"
              variant="default"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Os Pilares do Pensamento Computacional</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entenda os conceitos fundamentais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Decomposição"
              description="Quebrar problemas complexos em partes menores e mais gerenciáveis."
              icon={Puzzle}
              variant="educational"
            />
            
            <FeatureCard
              title="Reconhecimento de Padrões"
              description="Identificar semelhanças e regularidades em problemas e soluções."
              icon={Target}
              variant="educational"
            />
            
            <FeatureCard
              title="Abstração"
              description="Focar nos aspectos essenciais, ignorando detalhes desnecessários."
              icon={Lightbulb}
              variant="educational"
            />
            
            <FeatureCard
              title="Algoritmos"
              description="Criar sequências de passos para resolver problemas de forma sistemática."
              icon={BookOpen}
              variant="educational"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
