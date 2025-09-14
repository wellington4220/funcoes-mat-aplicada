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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore as <span className="text-gradient">Funções Matemáticas</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Interaja com os gráficos e aprenda as definições, propriedades e cálculos de cada função.
          Use os controles deslizantes para ver como os parâmetros afetam o gráfico!
        </p>
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