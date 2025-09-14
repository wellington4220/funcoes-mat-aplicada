import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Code, Heart, BookOpen, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Sobre o Projeto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça mais sobre este projeto educativo e seu criador
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="func-card animate-fade-in-delay">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                O Criador
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">W</span>
                </div>
                <h3 className="text-xl font-bold">Wellgingthon</h3>
                <p className="text-muted-foreground">Estudante de ADS</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>IFPE Campus Paulista, Pernambuco</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Análise e Desenvolvimento de Sistemas</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Disciplina: Matemática Aplicada</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Canvas API</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="func-card animate-fade-in-delay" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Sobre o Site
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Este site foi criado como parte do aprendizado em Matemática Aplicada 
                no curso de ADS do IFPE Paulista. A ideia é tornar a matemática mais 
                acessível e divertida para todos os colegas!
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Recursos do Site:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Gráficos interativos com controles deslizantes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Definições claras e propriedades das funções
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Exemplos práticos e cálculos passo a passo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Atividades interativas para praticar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Design responsivo e animações suaves
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground italic">
                  "A matemática não é apenas números e fórmulas - é uma linguagem 
                  para entender o mundo ao nosso redor. Espero que este site ajude 
                  você a ver a beleza nas funções matemáticas!"
                </p>
                <p className="text-right text-sm font-medium mt-2">- Wellgingthon</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="func-card max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Objetivo Educacional</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Este projeto demonstra como a tecnologia pode ser usada para criar 
                experiências de aprendizado mais envolventes e eficazes. Combinando 
                programação, design e matemática, criamos uma ferramenta que torna 
                conceitos complexos mais acessíveis e divertidos de aprender.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};