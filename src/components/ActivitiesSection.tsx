import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Trophy, Lightbulb } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  correctAnswer: number;
  tolerance?: number;
  explanation: string;
  functionType: string;
}

export const ActivitiesSection = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [results, setResults] = useState<{ [key: number]: boolean | null }>({});
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "Qual o uso de memória quando t = 0° em M(t) = 3 cos(t) + 4?",
      correctAnswer: 7,
      explanation: "M(0°) = 3 cos(0°) + 4 = 3 × 1 + 4 = 7 GB",
      functionType: "Trigonométrica"
    },
    {
      id: 2,
      question: "Quanto tempo leva para coletar 5 moedas com T(m) = √m + 4?",
      correctAnswer: 6.236,
      tolerance: 0.1,
      explanation: "T(5) = √5 + 4 ≈ 2.236 + 4 = 6.236 segundos",
      functionType: "Raiz"
    },
    {
      id: 3,
      question: "Para f(x) = x² - 4x + 3, qual é a coordenada x do vértice?",
      correctAnswer: 2,
      explanation: "x do vértice = -b/(2a) = -(-4)/(2×1) = 4/2 = 2",
      functionType: "Quadrática"
    },
    {
      id: 4,
      question: "Calcule f(-3) para a função modular f(x) = |x|",
      correctAnswer: 3,
      explanation: "f(-3) = |-3| = 3 (o módulo sempre retorna valor positivo)",
      functionType: "Modular"
    },
    {
      id: 5,
      question: "Para f(x) = 2^x, qual é o valor de f(3)?",
      correctAnswer: 8,
      explanation: "f(3) = 2³ = 2 × 2 × 2 = 8",
      functionType: "Exponencial"
    }
  ];

  const checkAnswer = (questionId: number) => {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = parseFloat(answers[questionId]);
    
    if (!question || isNaN(userAnswer)) {
      toast.error("Por favor, digite uma resposta válida!");
      return;
    }

    const tolerance = question.tolerance || 0.01;
    const isCorrect = Math.abs(userAnswer - question.correctAnswer) <= tolerance;
    
    setResults(prev => ({ ...prev, [questionId]: isCorrect }));
    
    if (results[questionId] === null || results[questionId] === undefined) {
      setTotalAnswered(prev => prev + 1);
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
    } else if (results[questionId] === false && isCorrect) {
      setScore(prev => prev + 1);
    } else if (results[questionId] === true && !isCorrect) {
      setScore(prev => prev - 1);
    }

    if (isCorrect) {
      toast.success("🎉 Parabéns! Resposta correta!");
    } else {
      toast.error("❌ Tente novamente! Verifique seus cálculos.");
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setResults({});
    setScore(0);
    setTotalAnswered(0);
    toast("Quiz reiniciado! Boa sorte! 🚀");
  };

  const getScoreColor = () => {
    const percentage = totalAnswered > 0 ? (score / totalAnswered) * 100 : 0;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <section className="container py-16 bg-secondary/30">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Trophy className="h-12 w-12 text-primary animate-bounce-in" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Atividades Práticas</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Teste seus conhecimentos com estas questões interativas! 
          Calcule, digite sua resposta e veja se acertou.
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Trophy className="h-4 w-4 mr-2" />
            Score: <span className={getScoreColor()}>{score}/{totalAnswered}</span>
          </Badge>
          <Button variant="outline" onClick={resetQuiz}>
            Reiniciar Quiz
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {questions.map((question, index) => (
          <Card 
            key={question.id} 
            className="func-card animate-fade-in-delay"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>Questão {question.id}</span>
                <Badge variant="secondary" className="text-xs">
                  {question.functionType}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-medium leading-relaxed">
                {question.question}
              </p>
              
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Sua resposta..."
                  value={answers[question.id] || ""}
                  onChange={(e) => setAnswers(prev => ({ 
                    ...prev, 
                    [question.id]: e.target.value 
                  }))}
                  className="flex-1"
                />
                <Button 
                  onClick={() => checkAnswer(question.id)}
                  size="sm"
                  className="btn-func"
                >
                  {results[question.id] === true ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : results[question.id] === false ? (
                    <XCircle className="h-4 w-4 text-red-600" />
                  ) : (
                    "Verificar"
                  )}
                </Button>
              </div>

              {results[question.id] !== null && results[question.id] !== undefined && (
                <div className={`p-3 rounded-lg text-sm ${
                  results[question.id] 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                }`}>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">
                        {results[question.id] ? "Correto!" : "Explicação:"}
                      </p>
                      <p>{question.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};