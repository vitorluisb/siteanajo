import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary rounded-full p-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">AnaJô</h3>
            </div>
            
            <p className="text-lg leading-relaxed text-background/80 mb-6 max-w-2xl">
              <strong>AnaJô</strong> – acolhendo, cuidando e transformando vidas de crianças e jovens em situação de risco.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="bg-primary-soft/20 p-3 rounded-full hover:bg-primary-soft/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-soft/20 p-3 rounded-full hover:bg-primary-soft/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-soft/20 p-3 rounded-full hover:bg-primary-soft/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-soft" />
                <span className="text-background/80">contato@anajo.org.br</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-soft" />
                <span className="text-background/80">(11) 99999-9999</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-soft mt-1" />
                <span className="text-background/80">
                  Praça do Encontro<br />
                  Bairro Nordeste II<br />
                  Guarabira - PB
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} ONG AnaJô. Todos os direitos reservados. 
            Desenvolvido com 💚 para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;