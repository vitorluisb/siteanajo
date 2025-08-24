import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";

// Import gallery images
import oficinas1 from "@/assets/gallery/oficinas-1.jpg";
import oficinas2 from "@/assets/gallery/oficinas-2.jpg";
import atividades1 from "@/assets/gallery/atividades-1.jpg";
import atividades2 from "@/assets/gallery/atividades-2.jpg";
import voluntarios1 from "@/assets/gallery/voluntarios-1.jpg";
import eventos1 from "@/assets/gallery/eventos-1.jpg";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Oficinas Educativas",
      description: "Momentos de aprendizado e crescimento em nossas oficinas",
      images: [
        {
          src: oficinas1,
          title: "Oficina de Leitura",
          description: "Crianças descobrindo o mundo através dos livros"
        },
        {
          src: oficinas2,
          title: "Oficina de Arte",
          description: "Expressão criativa através das artes plásticas"
        }
      ]
    },
    {
      title: "Atividades Culturais e Esportivas",
      description: "Cultura, música e esporte transformando vidas",
      images: [
        {
          src: atividades1,
          title: "Música e Expressão",
          description: "Descobrindo talentos através da música"
        },
        {
          src: atividades2,
          title: "Esportes e Recreação",
          description: "Promovendo saúde e integração social"
        }
      ]
    },
    {
      title: "Ação dos Voluntários",
      description: "Nossos heróis em ação, dedicando amor e tempo",
      images: [
        {
          src: voluntarios1,
          title: "Apoio Educacional",
          description: "Voluntários auxiliando no desenvolvimento educacional"
        }
      ]
    },
    {
      title: "Eventos e Celebrações",
      description: "Momentos especiais que fortalecem nossa comunidade",
      images: [
        {
          src: eventos1,
          title: "Festa da Comunidade",
          description: "Celebrando conquistas e fortalecendo laços"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Nossa Galeria de Trabalhos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada foto conta uma história de transformação, esperança e amor. 
                Conheça os momentos que fazem a diferença na vida de nossas crianças e jovens.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {galleryCategories.map((category, index) => (
                <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>
                  
                  <GalleryCarousel images={category.images} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;