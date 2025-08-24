import Navigation from "@/components/Navigation";
import Initiatives from "@/components/Initiatives";
import Footer from "@/components/Footer";

const InitiativesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Initiatives />
      </main>
      <Footer />
    </div>
  );
};

export default InitiativesPage;