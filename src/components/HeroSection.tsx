import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Calculator } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="container py-20 animate-slide-up">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="animate-bounce-in">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-delay">
          Bem-vindo ao mundo das{" "}
          <span className="text-gradient">
            Funções Matemáticas!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Vamos explorar gráficos e cálculos de forma divertida e interativa. 
          Prepare-se para uma jornada incrível pela matemática!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-6"
            onClick={onExploreClick}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explorar Funções
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 btn-func"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Ver Atividades
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <div className="func-quadratic text-2xl font-bold">f(x) = ax²</div>
            <div className="text-sm text-muted-foreground">Quadrática</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <div className="func-exponential text-2xl font-bold">f(x) = aˣ</div>
            <div className="text-sm text-muted-foreground">Exponencial</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <div className="func-modular text-2xl font-bold">f(x) = |x|</div>
            <div className="text-sm text-muted-foreground">Modular</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: '0.8s' }}>
            <div className="func-trigonometric text-2xl font-bold">f(x) = cos(x)</div>
            <div className="text-sm text-muted-foreground">Trigonométrica</div>
          </div>
        </div>
      </div>
    </section>
  );
};