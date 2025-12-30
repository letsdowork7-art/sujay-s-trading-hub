import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideosSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
