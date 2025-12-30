import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", action: () => scrollToSection("about") },
    { label: "Videos", action: () => scrollToSection("videos") },
    { label: "Community", action: () => scrollToSection("community") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-sora font-bold text-foreground group-hover:text-primary transition-colors">
            Trading With <span className="text-gradient">Sujay</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Link to="/trade-audit-pro">
            <Button variant="default" size="sm">
              Trade Audit Pro
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors border-b border-border/30 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <Link to="/trade-audit-pro" className="block mt-3">
            <Button variant="default" className="w-full">
              Trade Audit Pro
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
