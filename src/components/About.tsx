const About = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              Sobre nós
            </h2>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-warm">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                A AnaJô nasceu com um propósito simples e poderoso: dar voz, acolhimento e 
                oportunidades para crianças e jovens em situação de risco. Cada vida importa e, 
                com cuidado e apoio, podemos abrir caminhos para um futuro digno e cheio de possibilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;