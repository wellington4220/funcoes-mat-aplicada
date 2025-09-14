import { Button } from "@/components/ui/button";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: "inicio", label: "Início" },
    { id: "funcoes", label: "Funções" },
    { id: "atividades", label: "Atividades" },
    { id: "sobre", label: "Sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calculator className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-gradient">
              Funções Matemáticas
            </h1>
            <p className="text-xs text-muted-foreground">
              por Wellgingthon - ADS IFPE
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate(item.id)}
              className="font-medium transition-all duration-200"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start font-medium"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};