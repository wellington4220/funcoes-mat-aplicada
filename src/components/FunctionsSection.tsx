import { FunctionCanvas } from "./FunctionCanvas";
import { FunctionDefinition } from "./FunctionDefinition";

export const FunctionsSection = () => {
  const functions = [
    {
      type: 'quadratic' as const,
      title: 'Função Quadrática',
      color: 'hsl(30, 95%, 60%)', // laranja
    },
    {
      type: 'modular' as const,
      title: 'Função Modular',
      color: 'hsl(320, 75%, 65%)', // rosa
    },
    {
      type: 'exponential' as const,
      title: 'Função Exponencial',
      color: 'hsl(270, 80%, 65%)', // roxo
    },
    {
      type: 'trigonometric' as const,
      title: 'Função Trigonométrica',
      color: 'hsl(200, 80%, 55%)', // azul-ciano
    },
    {
      type: 'root' as const,
      title: 'Função Raiz',
      color: 'hsl(60, 70%, 55%)', // amarelo-verde
    },
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Guia Completo das <span className="text-gradient">Funções Matemáticas</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
          Mergulhe no mundo fascinante das funções! Cada seção oferece uma explicação completa 
          com gráficos interativos, propriedades detalhadas, aplicações práticas e exemplos 
          passo a passo para dominar completamente cada tipo de função.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          <div className="bg-func-quadratic/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-func-quadratic mb-1">5</div>
            <div className="text-sm text-muted-foreground">Funções</div>
          </div>
          <div className="bg-primary/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Propriedades</div>
          </div>
          <div className="bg-accent/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Aplicações</div>
          </div>
          <div className="bg-func-exponential/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-func-exponential mb-1">∞</div>
            <div className="text-sm text-muted-foreground">Exemplos</div>
          </div>
          <div className="bg-func-modular/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-func-modular mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Interativo</div>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {functions.map((func, index) => (
          <div key={func.type} className="animate-fade-in-delay" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="order-2 lg:order-1">
                <FunctionCanvas
                  functionType={func.type}
                  title={func.title}
                  color={func.color}
                />
              </div>
              <div className="order-1 lg:order-2">
                <FunctionDefinition
                  functionType={func.type}
                  color={func.color}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};