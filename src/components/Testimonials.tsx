import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A AnaJô me ensinou que eu posso ser qualquer coisa que eu quiser. Hoje eu sonho em ser professora.",
      author: "Maria, 14 anos",
      type: "Beneficiária"
    },
    {
      text: "Ver o sorriso das crianças quando descobrem algo novo é o que me motiva a continuar sendo voluntária aqui.",
      author: "Ana Paula",
      type: "Voluntária"
    },
    {
      text: "Meu filho encontrou na AnaJô um lugar seguro para crescer e aprender. Sou grata por tudo.",
      author: "Carla Santos",
      type: "Mãe"
    }
  ];

  return (
    <section className="py-20 bg-primary-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Histórias que inspiram, vozes que emocionam
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <p className="text-lg text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;