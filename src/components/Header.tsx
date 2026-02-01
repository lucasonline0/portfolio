import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="">
          <span className="font-heading text-xs md:text-sm font-bold tracking-wider">
            LUCAS<br />
            <span className="text-muted-foreground">MADUREIRA</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="link-underline text-xs tracking-widest uppercase hover:text-accent transition-colors"
          >
            [ Home ]
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="link-underline text-xs tracking-widest uppercase hover:text-accent transition-colors"
          >
            [ Experience ]
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="link-underline text-xs tracking-widest uppercase hover:text-accent transition-colors"
          >
            [ Projects ]
          </button>
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:jmadureira00@gmail.com"
            className="text-xs tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2"
          >
            Contact
            <span className="inline-block">↗</span>
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-sm tracking-widest uppercase"
            >
              [ Home ]
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-sm tracking-widest uppercase"
            >
              [ Experience ]
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-sm tracking-widest uppercase"
            >
              [ Projects ]
            </button>
            <a
              href="mailto:jmadureira00@gmail.com"
              className="block text-sm tracking-widest uppercase"
            >
              Contact ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
