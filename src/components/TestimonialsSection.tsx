import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Sujay's approach to trading changed my perspective completely. His risk management strategies helped me become consistently profitable.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Swing Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The community is incredibly supportive. I've learned more in 3 months here than I did in 2 years of solo trading.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Options Trader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "The trade setups and market analysis are top-notch. Sujay explains complex concepts in the simplest way possible.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Beginner Trader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "As a complete beginner, I was scared to start trading. Sujay's videos and community gave me the confidence to take my first trade.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Full-time Trader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Trade Audit Pro is a game-changer. It helped me identify my weaknesses and improve my win rate significantly.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Part-time Trader",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "The daily market updates keep me informed even when I'm busy with work. Highly recommend joining the community!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-sora font-bold mt-2 mb-4">
            What Our <span className="text-gradient">Community</span> Says
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from traders who have transformed their trading journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass rounded-xl p-6 relative group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors" size={32} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-sora font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
