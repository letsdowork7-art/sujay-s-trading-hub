import { Link } from "react-router-dom";
import { Youtube, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-sora font-bold mb-4">
              Trading With <span className="text-gradient">Sujay</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering traders with insights, analysis, and tools to navigate the financial markets with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sora font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Videos
              </a>
              <a href="#community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Community
              </a>
              <Link to="/trade-audit-pro" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Trade Audit Pro
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-sora font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@tradingwithsujay.com"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 mb-6">
          <h5 className="font-sora font-semibold text-sm text-primary mb-3">Financial Disclaimer</h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            The content provided on this website and associated channels is for educational and informational purposes only. It should not be considered as financial advice, investment recommendations, or a solicitation to buy or sell any financial instruments. Trading in financial markets involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. You should consult with a qualified financial advisor before making any investment decisions. Trading With Sujay and its affiliates are not responsible for any losses incurred as a result of using the information provided. Always conduct your own research and due diligence before trading.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground">
          <p>© {currentYear} Trading With Sujay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
