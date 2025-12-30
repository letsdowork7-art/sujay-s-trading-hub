import { Users, MessageCircle, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MessageCircle,
    title: "Daily Market Updates",
    description: "Get my personal insights on market movements and potential opportunities.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Connect with like-minded traders, share ideas, and grow together.",
  },
  {
    icon: Zap,
    title: "Trade Ideas",
    description: "Access curated trade setups with detailed entry, exit, and risk levels.",
  },
  {
    icon: Star,
    title: "Exclusive Content",
    description: "Premium educational material not available on public channels.",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Join The Tribe</span>
          <h2 className="text-3xl md:text-5xl font-sora font-bold mt-2 mb-4">
            Trading <span className="text-gradient">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Be part of an exclusive community of traders dedicated to consistent growth and learning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-sora font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12 text-center border-primary/20">
          <h3 className="text-2xl md:text-3xl font-sora font-bold mb-4">
            Ready to Level Up Your Trading?
          </h3>
          <p className="text-muted-foreground mb-8">
            Join hundreds of traders who are already benefiting from our community. Get started today!
          </p>
          <Button size="lg" variant="glow">
            Join Community Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
