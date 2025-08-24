import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-anajo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Acreditamos no poder de transformar vidas com{" "}
            <span className="text-primary-soft">amor</span> e{" "}
            <span className="text-primary-soft">oportunidades</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100 max-w-3xl mx-auto">
            A AnaJô acolhe crianças e jovens em situação de risco, oferecendo apoio, 
            educação e esperança para um futuro melhor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hope" 
              size="lg"
              className="text-lg px-8 py-6 animate-scale-in"
            >
              Conheça nossa missão
            </Button>
            
            <Button 
              variant="warm" 
              size="lg"
              className="text-lg px-8 py-6 bg-white/20 border-white/30 text-white hover:bg-white/30 animate-scale-in"
              style={{ animationDelay: '0.2s' }}
            >
              Faça parte dessa transformação
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;