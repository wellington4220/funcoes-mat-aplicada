import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Calculator, BookOpen, Lightbulb, Target, Zap, Code } from "lucide-react";

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
            "Gráfico é uma parábola",
            "Se a > 0, abre para cima; se a < 0, para baixo",
            "Vértice: x = -b/(2a)",
            "Δ = b² - 4ac (discriminante)"
          ],
          applications: [
            "Movimento de projéteis",
            "Cálculo de lucro máximo",
            "Problemas de otimização"
          ],
          codeExample: `// JavaScript - Função Quadrática
function quadratica(x, a = 1, b = 0, c = 0) {
  return a * x * x + b * x + c;
}

// Calcular vértice
function vertice(a, b, c) {
  const x = -b / (2 * a);
  const y = quadratica(x, a, b, c);
  return { x, y };
}

// Exemplo de uso
console.log(quadratica(2, 1, -4, 3)); // -1
console.log(vertice(1, -4, 3)); // { x: 2, y: -1 }`,
          example: "f(x) = x² - 4x + 3",
          calculation: "Vértice: (2, -1)",
          sampleCalc: (x: number) => x * x - 4 * x + 3
        };
      case 'modular':
        return {
          title: "Função Modular",
          definition: "f(x) = |x| = { x, se x ≥ 0; -x, se x < 0 }",
          properties: [
            "Sempre não negativo: f(x) ≥ 0",
            "Gráfico em formato de 'V'",
            "Simetria par: f(-x) = f(x)",
            "Mínimo em (0, 0)"
          ],
          applications: [
            "Cálculo de distâncias",
            "Análise de erros",
            "Processamento de sinais"
          ],
          codeExample: `// JavaScript - Função Modular
function modular(x) {
  return Math.abs(x);
}

// Implementação manual
function modularManual(x) {
  return x >= 0 ? x : -x;
}

// Função modular generalizada
function modularGeral(x, a = 1, b = 0, c = 0) {
  return a * Math.abs(x + b) + c;
}

// Exemplo de uso
console.log(modular(-5)); // 5
console.log(modularGeral(-3, 2, 1, -1)); // 3`,
          example: "f(x) = |x|",
          calculation: "f(-2) = 2, f(2) = 2",
          sampleCalc: (x: number) => Math.abs(x)
        };
      case 'exponential':
        return {
          title: "Função Exponencial",
          definition: "f(x) = a × b^x, com a > 0, b > 0 e b ≠ 1",
          properties: [
            "Se b > 1: crescimento exponencial",
            "Se 0 < b < 1: decaimento exponencial",
            "Assíntota horizontal y = 0",
            "Passa por (0, a)"
          ],
          applications: [
            "Crescimento populacional",
            "Juros compostos",
            "Decaimento radioativo"
          ],
          codeExample: `// JavaScript - Função Exponencial
function exponencial(x, a = 1, b = 2) {
  return a * Math.pow(b, x);
}

// Juros compostos
function jurosCompostos(capital, taxa, tempo) {
  return capital * Math.pow(1 + taxa, tempo);
}

// Crescimento populacional
function crescimentoPop(popInicial, taxa, tempo) {
  return popInicial * Math.pow(1 + taxa, tempo);
}

// Exemplo de uso
console.log(exponencial(3, 2, 2)); // 2 * 2³ = 16
console.log(jurosCompostos(1000, 0.05, 10)); // R$ 1628.89`,
          example: "f(x) = 2^x",
          calculation: "f(3) = 2³ = 8",
          sampleCalc: (x: number) => Math.pow(2, x)
        };
      case 'trigonometric':
        return {
          title: "Função Trigonométrica (Cosseno)",
          definition: "f(x) = A cos(Bx + C) + D",
          properties: [
            "Função periódica: repete a cada 2π/B",
            "Amplitude A: variação máxima",
            "Oscila entre D-A e D+A",
            "Fase C: deslocamento horizontal"
          ],
          applications: [
            "Ondas sonoras",
            "Movimento harmônico",
            "Análise de sinais"
          ],
          codeExample: `// JavaScript - Função Trigonométrica
function cosseno(x, A = 1, B = 1, C = 0, D = 0) {
  return A * Math.cos(B * x + C) + D;
}

// Converter graus para radianos
function grausParaRad(graus) {
  return graus * Math.PI / 180;
}

// Função do exemplo M(t)
function usoMemoria(t) {
  return 3 * Math.cos(grausParaRad(t)) + 4;
}

// Exemplo de uso
console.log(cosseno(0)); // 1
console.log(usoMemoria(0)); // 7 GB
console.log(usoMemoria(90)); // 4 GB`,
          example: "M(t) = 3 cos(t) + 4",
          calculation: "M(0°) = 7 GB",
          sampleCalc: (x: number) => 3 * Math.cos(x * Math.PI / 180) + 4
        };
      case 'root':
        return {
          title: "Função Raiz Quadrada",
          definition: "f(x) = a√(x + b) + c, com x + b ≥ 0",
          properties: [
            "Domínio: x ≥ -b",
            "Função crescente (crescimento desacelerado)",
            "Gráfico: 'meia parábola' deitada",
            "Ponto inicial: (-b, c)"
          ],
          applications: [
            "Tempo de queda livre",
            "Modelos de crescimento",
            "Cálculos geométricos"
          ],
          codeExample: `// JavaScript - Função Raiz
function raizQuadrada(x, a = 1, b = 0, c = 0) {
  if (x + b < 0) {
    return NaN; // Não existe no conjunto dos reais
  }
  return a * Math.sqrt(x + b) + c;
}

// Tempo de coleta (exemplo do projeto)
function tempoColeta(moedas) {
  return Math.sqrt(moedas) + 4;
}

// Fórmula da queda livre: t = √(2h/g)
function tempoQueda(altura, gravidade = 9.8) {
  return Math.sqrt(2 * altura / gravidade);
}

// Exemplo de uso
console.log(raizQuadrada(9)); // 3
console.log(tempoColeta(5)); // ~6.236 segundos`,
          example: "T(m) = √m + 4",
          calculation: "T(5) ≈ 6.236",
          sampleCalc: (x: number) => x >= 0 ? Math.sqrt(x) + 4 : NaN
        };
      default:
        return {
          title: "",
          definition: "",
          properties: [],
          applications: [],
          codeExample: "",
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
            Teoria + Código
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Definição */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            Definição:
          </h4>
          <p className="text-sm bg-muted p-3 rounded-lg font-mono">
            {data.definition}
          </p>
        </div>

        {/* Propriedades */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Propriedades:
          </h4>
          <ul className="text-sm space-y-1">
            {data.properties.map((prop, index) => (
              <li key={index} className="flex items-start gap-2 p-2 bg-secondary/30 rounded text-xs">
                <span className="text-primary font-bold">•</span>
                <span>{prop}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Aplicações */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Aplicações:
          </h4>
          <ul className="text-sm space-y-1">
            {data.applications.map((app, index) => (
              <li key={index} className="flex items-start gap-2 p-1 bg-accent/20 rounded text-xs">
                <span className="text-accent font-bold">→</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Código de Programação */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            💻 Implementação em JavaScript:
          </h4>
          <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
            <pre className="whitespace-pre-wrap">{data.codeExample}</pre>
          </div>
        </div>

        <Separator />

        {/* Exemplo */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            📝 Exemplo:
          </h4>
          <p className="text-sm mb-2 font-medium">{data.example}</p>
          <div className="bg-accent/20 p-2 rounded-lg">
            <p className="text-sm font-mono font-medium">
              {data.calculation}
            </p>
          </div>
        </div>

        {/* Calculadora */}
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-primary" />
            🧮 Teste Aqui:
          </h4>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Digite x"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button onClick={calculate} size="sm" className="btn-func">
              Calcular
            </Button>
          </div>
          {result !== null && !isNaN(result) && (
            <div className="mt-2 p-3 bg-primary/10 border border-primary/20 rounded-lg">
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