import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import FeatureCard from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Plus, Filter } from "lucide-react";
import { useState } from "react";

interface Pattern {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
}

const Padroes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const patterns: Pattern[] = [
    {
      id: "decomposicao-problemas",
      name: "Decomposição de Problemas",
      description: "Estratégia para quebrar problemas complexos em subproblemas menores e mais gerenciáveis.",
      category: "Decomposição",
      tags: ["fundamentais", "resolução-problemas", "estruturação"]
    },
    {
      id: "reconhecimento-visual",
      name: "Reconhecimento de Padrões Visuais",
      description: "Técnicas para identificar regularidades e semelhanças em representações visuais.",
      category: "Reconhecimento de Padrões",
      tags: ["visual", "percepção", "análise"]
    },
    {
      id: "abstracao-conceitual",
      name: "Abstração Conceitual",
      description: "Métodos para focar nos aspectos essenciais de um problema, ignorando detalhes irrelevantes.",
      category: "Abstração",
      tags: ["conceitos", "simplificação", "modelagem"]
    },
    {
      id: "algoritmo-passo-a-passo",
      name: "Algoritmo Passo-a-Passo",
      description: "Estruturação de soluções em sequências lógicas e sistemáticas de passos.",
      category: "Algoritmos",
      tags: ["sequencial", "lógica", "estruturação"]
    }
  ];

  const filteredPatterns = patterns.filter(pattern => {
    const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pattern.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || pattern.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Catálogo de Padrões Educacionais
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Explore nossa coleção de padrões estruturados para desenvolver o pensamento computacional
          </p>
        </div>
      </section>

      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar padrões..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Sugerir Padrão
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPatterns.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhum padrão encontrado</h3>
              <p className="text-muted-foreground">Tente ajustar os filtros ou termos de busca.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPatterns.map((pattern) => (
                <div key={pattern.id} className="group">
                  <FeatureCard
                    title={pattern.name}
                    description={pattern.description}
                    icon={BookOpen}
                    href={`/padroes/${pattern.id}`}
                    variant="pattern"
                    className="h-full"
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-1">
                      {pattern.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Contribua com a Comunidade</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tem um padrão educacional que gostaria de compartilhar? Ajude a expandir nosso catálogo!
          </p>
          <Button size="lg" className="flex items-center gap-2 mx-auto">
            <Plus className="w-5 h-5" />
            Enviar Novo Padrão
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Padroes;