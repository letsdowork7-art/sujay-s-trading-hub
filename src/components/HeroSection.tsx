import { TrendingUp, ChartLine, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Trader • Educator • Analyst</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trade Smarter,{" "}
            <span className="text-gradient">Not Harder</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hey, I'm Sujay! I help traders understand markets, develop strategies, and build the discipline needed to succeed in trading.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#videos">
              <Button size="lg" variant="glow">
                Watch My Videos
              </Button>
            </a>
            <a href="#community">
              <Button size="lg" variant="outline">
                Join Community
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <ChartLine className="text-primary" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-sora font-bold text-foreground">5+</div>
              <div className="text-xs text-muted-foreground">Years Trading</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="text-primary" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-sora font-bold text-foreground">10K+</div>
              <div className="text-xs text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-sora font-bold text-foreground">100+</div>
              <div className="text-xs text-muted-foreground">Videos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
