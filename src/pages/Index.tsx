import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FunctionsSection } from "@/components/FunctionsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreClick = () => {
    setActiveSection("funcoes");
    const element = document.getElementById("funcoes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <section id="inicio">
          <HeroSection onExploreClick={handleExploreClick} />
        </section>
        
        <section id="funcoes">
          <FunctionsSection />
        </section>
      </main>

      <footer className="border-t bg-secondary/30 py-8">
        <div className="container text-center">
          <p className="text-muted-foreground">
            Desenvolvido com ❤️ por{" "}
            <span className="font-semibold text-primary">Wellington</span>
            {" "}- ADS IFPE Paulista, Pernambuco
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Projeto educativo para Matemática Aplicada © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
