import { BookOpen, Users, Palette, Heart } from "lucide-react";

const Initiatives = () => {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Oficinas Educativas",
      description: "Reforço escolar e atividades pedagógicas que abrem portas para o conhecimento.",
      impact: "A cada oficina, uma nova chance de acreditar no futuro."
    },
    {
      icon: Users,
      title: "Apoio Escolar",
      description: "Acompanhamento individualizado para fortalecer o aprendizado e a autoestima.",
      impact: "Cada criança merece ter suas potencialidades reconhecidas."
    },
    {
      icon: Palette,
      title: "Atividades Culturais",
      description: "Arte, música e cultura como ferramentas de expressão e desenvolvimento.",
      impact: "Através da arte, descobrimos talentos e construímos sonhos."
    },
    {
      icon: Heart,
      title: "Apoio Psicológico",
      description: "Cuidado emocional especializado para fortalecer a saúde mental.",
      impact: "Um coração cuidado é capaz de transformar qualquer realidade."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossas ações mudam realidades todos os dias
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div 
                key={initiative.title}
                className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-muted rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-card-foreground text-center">
                  {initiative.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-center leading-relaxed">
                  {initiative.description}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-primary font-medium text-center italic">
                    "{initiative.impact}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;