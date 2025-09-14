import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Calculator, BookOpen, Lightbulb, Target, Zap } from "lucide-react";

interface FunctionDefinitionProps {
  functionType: 'quadratic' | 'modular' | 'exponential' | 'trigonometric' | 'root';
  color: string;
}

export const FunctionDefinition = ({ functionType, color }: FunctionDefinitionProps) => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const getFunctionData = () => {
    switch (functionType) {
      case 'quadratic':
        return {
          title: "Função Quadrática",
          definition: "f(x) = ax² + bx + c, com a ≠ 0",
          properties: [
            "Gráfico é uma parábola (curva em formato de U)",
            "Se a > 0, parábola abre para cima (côncava para cima)",
            "Se a < 0, parábola abre para baixo (côncava para baixo)",
            "Vértice é o ponto mais alto ou mais baixo da parábola",
            "Eixo de simetria passa pelo vértice: x = -b/(2a)",
            "Δ = b² - 4ac determina quantas raízes reais existem"
          ],
          applications: [
            "Movimento de projéteis (física)",
            "Cálculo de lucro máximo (economia)",
            "Problemas de otimização",
            "Antenas parabólicas"
          ],
          stepByStep: [
            "1. Identifique os coeficientes a, b e c",
            "2. Calcule o discriminante Δ = b² - 4ac",
            "3. Encontre o vértice: x = -b/(2a), y = f(x)",
            "4. Determine se a parábola abre para cima ou baixo",
            "5. Encontre as raízes (se existirem)"
          ],
          example: "Para f(x) = x² - 4x + 3:",
          calculation: "Vértice: x = -(-4)/(2×1) = 2, y = 4 - 8 + 3 = -1",
          sampleCalc: (x: number) => x * x - 4 * x + 3
        };
      case 'modular':
        return {
          title: "Função Modular",
          definition: "f(x) = |x| = { x, se x ≥ 0; -x, se x < 0 }",
          properties: [
            "Sempre não negativo: f(x) ≥ 0 para todo x real",
            "Gráfico em formato de 'V' com vértice na origem",
            "Simetria par em relação ao eixo y: f(-x) = f(x)",
            "Função decrescente para x < 0 e crescente para x > 0",
            "Ponto mínimo em (0, 0)",
            "Não é diferenciável no ponto x = 0"
          ],
          applications: [
            "Cálculo de distâncias",
            "Análise de desvios e erros",
            "Processamento de sinais",
            "Programação (valor absoluto)"
          ],
          stepByStep: [
            "1. Identifique se x é positivo, negativo ou zero",
            "2. Se x ≥ 0, então |x| = x",
            "3. Se x < 0, então |x| = -x",
            "4. O resultado é sempre não negativo",
            "5. Para gráficos, trace a reta y = x à direita e y = -x à esquerda"
          ],
          example: "Para f(x) = |x|:",
          calculation: "f(-2) = |-2| = 2, f(2) = |2| = 2",
          sampleCalc: (x: number) => Math.abs(x)
        };
      case 'exponential':
        return {
          title: "Função Exponencial",
          definition: "f(x) = a × b^x, com a > 0, b > 0 e b ≠ 1",
          properties: [
            "Crescimento/decrescimento muito rápido",
            "Se b > 1: função estritamente crescente",
            "Se 0 < b < 1: função estritamente decrescente",
            "Assíntota horizontal y = 0 (eixo x)",
            "Domínio: ℝ (todos os reais)",
            "Contradomínio: ℝ₊ (números positivos)",
            "Passa sempre pelo ponto (0, a)"
          ],
          applications: [
            "Crescimento populacional",
            "Juros compostos",
            "Decaimento radioativo",
            "Crescimento de bactérias",
            "Algoritmos computacionais"
          ],
          stepByStep: [
            "1. Identifique a base b e o coeficiente a",
            "2. Se b > 1, a função cresce exponencialmente",
            "3. Se 0 < b < 1, a função decresce exponencialmente",
            "4. O ponto (0, a) sempre pertence ao gráfico",
            "5. A função nunca toca o eixo x (assíntota horizontal)"
          ],
          example: "Para f(x) = 2^x:",
          calculation: "f(0) = 2⁰ = 1, f(2) = 2² = 4, f(3) = 2³ = 8",
          sampleCalc: (x: number) => Math.pow(2, x)
        };
      case 'trigonometric':
        return {
          title: "Função Trigonométrica (Cosseno)",
          definition: "f(x) = A cos(Bx + C) + D",
          properties: [
            "Função periódica: repete em intervalos regulares",
            "Amplitude A: máxima variação em relação ao centro",
            "Período: 2π/B (tempo para completar um ciclo)",
            "Fase C: deslocamento horizontal",
            "Deslocamento vertical D: linha média da oscilação",
            "Domínio: ℝ, Contradomínio: [D-A, D+A]",
            "Oscila entre valor máximo e mínimo"
          ],
          applications: [
            "Ondas sonoras e electromagnéticas",
            "Movimento harmônico simples",
            "Análise de sinais",
            "Modelo de marés",
            "Oscilações em engenharia"
          ],
          stepByStep: [
            "1. Identifique A (amplitude), B (frequência), C (fase), D (centro)",
            "2. Período = 2π/B",
            "3. Valor máximo = D + A, valor mínimo = D - A",
            "4. A função oscila em torno da linha y = D",
            "5. Complete um ciclo a cada período"
          ],
          example: "Para M(t) = 3 cos(t) + 4:",
          calculation: "M(0°) = 3 cos(0°) + 4 = 3×1 + 4 = 7",
          sampleCalc: (x: number) => 3 * Math.cos(x * Math.PI / 180) + 4
        };
      case 'root':
        return {
          title: "Função Raiz Quadrada",
          definition: "f(x) = a√(x + b) + c, com x + b ≥ 0",
          properties: [
            "Domínio restrito: x ≥ -b (radicando deve ser não negativo)",
            "Função estritamente crescente no seu domínio",
            "Gráfico em formato de 'meia parábola' deitada",
            "Ponto inicial: (-b, c)",
            "Cresce de forma desacelerada (derivada decresce)",
            "Contradomínio: [c, +∞) se a > 0"
          ],
          applications: [
            "Cálculo de tempo em física (queda livre)",
            "Modelos de crescimento desacelerado",
            "Geometria (cálculo de lados)",
            "Estatística (desvio padrão)",
            "Engenharia (relações não lineares)"
          ],
          stepByStep: [
            "1. Verifique se x + b ≥ 0 (condição de existência)",
            "2. Se não existir, a função é indefinida",
            "3. Calcule √(x + b)",
            "4. Multiplique por a e some c",
            "5. A função cresce de forma desacelerada"
          ],
          example: "Para T(m) = √m + 4:",
          calculation: "T(5) = √5 + 4 ≈ 2.236 + 4 = 6.236",
          sampleCalc: (x: number) => x >= 0 ? Math.sqrt(x) + 4 : NaN
        };
        default:
        return {
          title: "",
          definition: "",
          properties: [],
          applications: [],
          stepByStep: [],
          example: "",
          calculation: "",
          sampleCalc: (x: number) => x
        };
    }
  };

  const data = getFunctionData();

  const calculate = () => {
    const x = parseFloat(inputValue);
    if (!isNaN(x)) {
      const res = data.sampleCalc(x);
      setResult(res);
    }
  };

  return (
    <Card className="func-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span style={{ color }}>{data.title}</span>
          <Badge variant="secondary" style={{ backgroundColor: `${color}20`, color }}>
            Guia Completo
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Definição */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            Definição Matemática:
          </h4>
          <p className="text-sm bg-muted p-3 rounded-lg font-mono">
            {data.definition}
          </p>
        </div>

        <Separator />

        {/* Propriedades */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Propriedades Importantes:
          </h4>
          <ul className="text-sm space-y-2">
            {data.properties.map((prop, index) => (
              <li key={index} className="flex items-start gap-2 p-2 bg-secondary/30 rounded">
                <span className="text-primary font-bold text-base">•</span>
                <span>{prop}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Aplicações */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Aplicações no Mundo Real:
          </h4>
          <ul className="text-sm space-y-2">
            {data.applications.map((app, index) => (
              <li key={index} className="flex items-start gap-2 p-2 bg-accent/20 rounded">
                <span className="text-accent font-bold">→</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Passo a passo */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            Como Resolver - Passo a Passo:
          </h4>
          <ol className="text-sm space-y-2">
            {data.stepByStep.map((step, index) => (
              <li key={index} className="flex items-start gap-3 p-2 bg-muted/50 rounded">
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold min-w-[24px] text-center">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <Separator />

        {/* Exemplo */}
        <div>
          <h4 className="font-semibold mb-2">📝 Exemplo Prático:</h4>
          <p className="text-sm mb-2 font-medium">{data.example}</p>
          <div className="bg-accent/20 p-3 rounded-lg">
            <p className="text-sm font-mono font-medium">
              {data.calculation}
            </p>
          </div>
        </div>

        <Separator />

        {/* Calculadora */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-primary" />
            Calculadora Interativa:
          </h4>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Digite um valor para x"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button onClick={calculate} size="sm" className="btn-func">
              Calcular
            </Button>
          </div>
          {result !== null && !isNaN(result) && (
            <div className="mt-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-medium">
                🎯 Resultado: <span style={{ color }} className="text-lg font-bold">{result.toFixed(4)}</span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};