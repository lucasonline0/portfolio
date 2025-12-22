import { ExternalLink } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-16 uppercase tracking-wider animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          Recent Works
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="group relative bg-card border border-border p-8 md:p-12 hover-lift card-shine animate-fade-in-scale opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
            <div className="absolute top-3 left-3 md:top-4 md:left-4 text-[10px] md:text-xs tracking-widest uppercase text-accent">
              Projeto em Destaque
            </div>

            <div className="text-center space-y-4 md:space-y-6 pt-6 md:pt-8">
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                Network Monitor IA
              </h3>
              
              <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
                Plataforma de monitoramento de rede com IA para detectar 
                padrões suspeitos como ataques DDoS.
              </p>

              <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
                <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-wider uppercase border border-border text-muted-foreground">
                  Python
                </span>
                <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-wider uppercase border border-border text-muted-foreground">
                  Flask
                </span>
                <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-wider uppercase border border-border text-muted-foreground">
                  AI/ML
                </span>
              </div>

              <a
                href="https://github.com/lucasonline0/Network_Monitor_IA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs group/btn"
              >
                View Project
                <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
