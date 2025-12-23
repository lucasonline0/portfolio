import { useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="pt-20 pb-8 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-none tracking-tight mb-6 md:mb-10 animate-slide-left opacity-0 whitespace-normal md:whitespace-nowrap overflow-hidden" style={{ animationFillMode: 'forwards' }}>
          SECURITY ENGINEER
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-8 md:mb-12">
          <div className="space-y-1 animate-fade-up opacity-0 delay-200 order-2 md:order-1" style={{ animationFillMode: 'forwards' }}>
            <p className="text-foreground font-medium text-xs md:text-sm">/ CIBERSEGURANÇA</p>
            <p className="text-foreground font-medium text-xs md:text-sm">/ DESENVOLVIMENTO WEB</p>
            <p className="text-foreground font-medium text-xs md:text-sm">/ DATA ANALYSIS</p>
            <p className="text-foreground font-medium text-xs md:text-sm">/ BACKEND & FRONTEND</p>
          </div>

          <div className="flex justify-center animate-fade-in-scale opacity-0 delay-300 order-1 md:order-2" style={{ animationFillMode: 'forwards' }}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden bg-muted">
              <img
                src="https://github.com/lucasonline0.png"
                alt="Lucas Madureira"
                className={`w-full h-full object-cover grayscale transition-all duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
            </div>
          </div>

          <div className="text-center md:text-right animate-fade-up opacity-0 delay-400 order-3" style={{ animationFillMode: 'forwards' }}>
            <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground">
              B A S E D &nbsp; I N &nbsp; B E L É M
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-up opacity-0 delay-500" style={{ animationFillMode: 'forwards' }}>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base uppercase tracking-wide leading-relaxed">
            "SECURITY ENGINEER que projeta sistemas de alta performance — transformando conceitos complexos de defesa em arquiteturas blindadas e resilientes."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 animate-fade-up opacity-0 delay-600 border-t border-border pt-6" style={{ animationFillMode: 'forwards' }}>
          <div className="text-center sm:text-left">
            <p className="text-accent text-xs uppercase tracking-wider mb-1">Disponível para colaboração ↘</p>
            <a
              href="mailto:jmadureira00@gmail.com"
              className="text-foreground hover:text-accent transition-colors link-underline text-xs sm:text-sm"
            >
              jmadureira00@gmail.com
            </a>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Foco atual →</p>
            <p className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">Cibersegurança</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
