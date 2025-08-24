import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Calendar } from "lucide-react";

const GetInvolved = () => {
  const actions = [
    {
      icon: HandHeart,
      title: "Seja voluntário",
      description: "Doe seu tempo e faça parte dessa rede de esperança.",
      cta: "Quero ser voluntário"
    },
    {
      icon: Heart,
      title: "Doe",
      description: "Sua contribuição se transforma em oportunidades reais.",
      cta: "Fazer doação"
    },
    {
      icon: Calendar,
      title: "Participe de eventos",
      description: "Engaje-se em nossas ações e ajude a multiplicar o impacto.",
      cta: "Ver eventos"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Você também pode transformar vidas
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div 
                key={action.title}
                className="bg-card rounded-2xl p-8 text-center shadow-card card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-muted rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  {action.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {action.description}
                </p>
                
                <Button variant="hope" size="lg" className="w-full">
                  {action.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;