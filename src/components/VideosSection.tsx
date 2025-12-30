import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Understanding Price Action Basics",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=340&fit=crop",
    duration: "12:45",
    views: "15K",
  },
  {
    id: 2,
    title: "Risk Management Strategies",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=340&fit=crop",
    duration: "18:32",
    views: "8.5K",
  },
  {
    id: 3,
    title: "Technical Analysis Deep Dive",
    thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=340&fit=crop",
    duration: "24:18",
    views: "12K",
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Learn With Me</span>
          <h2 className="text-3xl md:text-5xl font-sora font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Videos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Check out my latest educational content on trading strategies, market analysis, and more.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group glass rounded-xl overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-primary">
                    <Play size={28} className="text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-sora font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              View All Videos
              <ExternalLink size={18} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
