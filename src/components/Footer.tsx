import { Github, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6 md:space-y-8 animate-slide-left opacity-0 text-center md:text-left" style={{ animationFillMode: 'forwards' }}>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Let's Work
              <br />
              Together
            </h2>

            <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
              <a
                href="https://github.com/lucasonline0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-float" />
                <span className="link-underline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lucasblackstar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-float" />
                <span className="link-underline">LinkedIn</span>
              </a>
              <a
                href="https://dev.to/lucasonline0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors group"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-float" />
                <span className="link-underline">Dev.to</span>
              </a>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 text-center md:text-right animate-slide-right opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
            <div>
              <p className="text-accent text-xs uppercase tracking-wider mb-2">
                ★ Lucas Madureira
              </p>
              <p className="text-foreground font-bold text-sm">Portfolio</p>
            </div>

            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs tracking-widest uppercase animate-fade-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
            © 2025 by Lucas Madureira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
