import { Button } from "@/components/ui/button";
import { Users, UserCheck, TrendingUp, Award } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "+500",
      label: "Crianças atendidas",
      color: "text-primary"
    },
    {
      icon: UserCheck,
      number: "+200",
      label: "Voluntários ativos",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Taxa de permanência escolar",
      color: "text-primary"
    },
    {
      icon: Award,
      number: "8",
      label: "Anos de atuação",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Trabalhamos com transparência para gerar confiança
          </h2>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-card card-hover">
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="warm" size="lg" className="px-8 py-4">
            Veja nossos relatórios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;