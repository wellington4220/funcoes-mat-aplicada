import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

interface FunctionCanvasProps {
  functionType: 'quadratic' | 'modular' | 'exponential' | 'trigonometric' | 'root';
  title: string;
  color: string;
}

export const FunctionCanvas = ({ functionType, title, color }: FunctionCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paramA, setParamA] = useState([1]);
  const [paramB, setParamB] = useState([0]);
  const [paramC, setParamC] = useState([0]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 20;

    ctx.strokeStyle = '#e5e5e5';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = 0; x <= width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y <= height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
  };

  const calculateY = (x: number, type: string, a: number, b: number, c: number): number => {
    switch (type) {
      case 'quadratic':
        return a * x * x + b * x + c;
      case 'modular':
        return a * Math.abs(x + b) + c;
      case 'exponential':
        return a * Math.pow(2, x + b) + c;
      case 'trigonometric':
        return a * Math.cos(x + b) + c;
      case 'root':
        return x >= -b ? a * Math.sqrt(x + b) + c : NaN;
      default:
        return 0;
    }
  };

  const drawFunction = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 20;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid
    drawGrid(ctx, width, height);

    // Draw function
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();

    let firstPoint = true;
    for (let px = 0; px < width; px += 2) {
      const x = (px - centerX) / scale;
      const y = calculateY(x, functionType, paramA[0], paramB[0], paramC[0]);
      
      if (!isNaN(y)) {
        const py = centerY - y * scale;
        
        if (py >= 0 && py <= height) {
          if (firstPoint) {
            ctx.moveTo(px, py);
            firstPoint = false;
          } else {
            ctx.lineTo(px, py);
          }
        } else {
          firstPoint = true;
        }
      } else {
        firstPoint = true;
      }
    }
    
    ctx.stroke();
  };

  useEffect(() => {
    drawFunction();
  }, [paramA, paramB, paramC, functionType, color]);

  const resetParameters = () => {
    setParamA([1]);
    setParamB([0]);
    setParamC([0]);
  };

  const getParameterLabels = () => {
    switch (functionType) {
      case 'quadratic':
        return { a: 'a (abertura)', b: 'b (posição X)', c: 'c (posição Y)' };
      case 'modular':
        return { a: 'a (escala)', b: 'b (deslocamento X)', c: 'c (deslocamento Y)' };
      case 'exponential':
        return { a: 'a (escala)', b: 'b (deslocamento X)', c: 'c (deslocamento Y)' };
      case 'trigonometric':
        return { a: 'a (amplitude)', b: 'b (fase)', c: 'c (deslocamento Y)' };
      case 'root':
        return { a: 'a (escala)', b: 'b (deslocamento X)', c: 'c (deslocamento Y)' };
      default:
        return { a: 'a', b: 'b', c: 'c' };
    }
  };

  const labels = getParameterLabels();

  return (
    <Card className="func-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span style={{ color }}>{title}</span>
          <Button variant="outline" size="sm" onClick={resetParameters}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white rounded-lg p-2 border">
          <canvas
            ref={canvasRef}
            width={320}
            height={240}
            className="w-full h-auto"
          />
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">{labels.a}: {paramA[0]}</label>
            <Slider
              value={paramA}
              onValueChange={setParamA}
              max={5}
              min={-5}
              step={0.1}
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">{labels.b}: {paramB[0]}</label>
            <Slider
              value={paramB}
              onValueChange={setParamB}
              max={5}
              min={-5}
              step={0.1}
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">{labels.c}: {paramC[0]}</label>
            <Slider
              value={paramC}
              onValueChange={setParamC}
              max={5}
              min={-5}
              step={0.1}
              className="mt-1"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};