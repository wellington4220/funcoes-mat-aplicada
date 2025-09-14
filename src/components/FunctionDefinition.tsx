import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calculator } from "lucide-react";

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
            "Se a > 0, abre para cima; se a < 0, abre para baixo",
            "Vértice em V = (-b/2a, -Δ/4a)",
            "Δ = b² - 4ac (discriminante)"
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
            "Sempre não negativo (f(x) ≥ 0)",
            "Simetria em relação ao eixo y",
            "f(0) = 0",
            "Função par: f(-x) = f(x)"
          ],
          example: "Para f(x) = |x|:",
          calculation: "f(-2) = |-2| = 2, f(2) = |2| = 2",
          sampleCalc: (x: number) => Math.abs(x)
        };
      case 'exponential':
        return {
          title: "Função Exponencial",
          definition: "f(x) = a × b^x, com b > 0 e b ≠ 1",
          properties: [
            "Se b > 1, função crescente",
            "Se 0 < b < 1, função decrescente",
            "Assíntota horizontal no eixo x",
            "Domínio: ℝ, Contradomínio: ℝ₊"
          ],
          example: "Para f(x) = 2^x:",
          calculation: "f(0) = 2⁰ = 1, f(2) = 2² = 4",
          sampleCalc: (x: number) => Math.pow(2, x)
        };
      case 'trigonometric':
        return {
          title: "Função Trigonométrica",
          definition: "M(t) = 3 cos(t) + 4",
          properties: [
            "Função periódica",
            "Amplitude: 3",
            "Deslocamento vertical: +4",
            "Período: 2π"
          ],
          example: "Para M(t) = 3 cos(t) + 4:",
          calculation: "M(0°) = 3 cos(0°) + 4 = 3×1 + 4 = 7 GB",
          sampleCalc: (x: number) => 3 * Math.cos(x * Math.PI / 180) + 4
        };
      case 'root':
        return {
          title: "Função Raiz",
          definition: "T(m) = √m + 4",
          properties: [
            "Domínio: m ≥ 0",
            "Função crescente",
            "Deslocamento vertical: +4",
            "Ponto inicial: (0, 4)"
          ],
          example: "Para T(m) = √m + 4:",
          calculation: "T(5) = √5 + 4 ≈ 2.24 + 4 = 6.24 segundos",
          sampleCalc: (x: number) => x >= 0 ? Math.sqrt(x) + 4 : NaN
        };
      default:
        return {
          title: "",
          definition: "",
          properties: [],
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
            Definição
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Definição:</h4>
          <p className="text-sm bg-muted p-3 rounded-lg font-mono">
            {data.definition}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Propriedades:</h4>
          <ul className="text-sm space-y-1">
            {data.properties.map((prop, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {prop}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Exemplo:</h4>
          <p className="text-sm mb-2">{data.example}</p>
          <p className="text-sm bg-accent/20 p-3 rounded-lg font-mono">
            {data.calculation}
          </p>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-2">Calculator Interativo:</h4>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Digite um valor para x"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button onClick={calculate} size="sm" className="btn-func">
              <Calculator className="h-4 w-4" />
            </Button>
          </div>
          {result !== null && !isNaN(result) && (
            <div className="mt-2 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm font-medium">
                Resultado: <span style={{ color }}>{result.toFixed(3)}</span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};