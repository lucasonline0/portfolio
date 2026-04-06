import { ArrowUpRight, Database, Github, Linkedin, Mail, Shield, Sparkles, Terminal } from "lucide-react";

const timeline = [
  {
    title: "Engenheiro de Software no Setor Público",
    role: "Atuação em sistemas e serviços para o setor público",
    period: "2025 - Presente",
  },
  {
    title: "Responsável pelo gerenciamento do banco de dados",
    role: "Gestão, manutenção e otimização de banco de dados",
    period: "2024 - Presente",
  },
];

const areas = ["Cibersegurança", "Programação de Sistemas", "Cloud Native", "Arquitetura Backend"];

const areaIcons = {
  Cibersegurança: Shield,
  "Programação de Sistemas": Terminal,
  "Cloud Native": Sparkles,
  "Arquitetura Backend": Database,
} as const;

const projects = [
  {
    title: "WAF-Proxy",
    subtitle: "Firewall de Aplicação Web e Proxy Reverso em Rust",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/lucasonline0/waf-proxy",
  },
  {
    title: "GoSpector",
    subtitle: "CLI de reconhecimento para varredura de subdomínios e portas",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/lucasonline0/gospector",
  },
  {
    title: "LogFlux",
    subtitle: "Analisador de logs cloud-native para insights acionáveis",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/amazonext/LogFlux",
  },
  {
    title: "Local Vault",
    subtitle: "Gerenciador local de senhas seguro",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/lucasonline0/Desktop-Password-Vault",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-[#080a0d] text-[#f2ebdf] overflow-x-hidden font-sans">
      <main className="w-full">
        <section
          className="relative min-h-screen w-full bg-cover bg-center border-b border-white/20 animate-hero-pan"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(8,10,13,.18), rgba(8,10,13,.62)), url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=2200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,rgba(8,10,13,0.1),rgba(8,10,13,0.72))]" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <div className="flex items-center justify-between px-4 py-5 text-[10px] uppercase tracking-[0.22em] text-white/90 sm:px-8 sm:text-xs lg:px-14">
              <p className="font-display font-bold">Lucas Madureira</p>
              <p className="hidden text-white/75 md:block">Estudante de Ciência da Computação, Desenvolvedor</p>
              <div className="flex gap-3 sm:gap-5">
                <a href="#works" className="transition-colors hover:text-[#e8cd9d]">
                  projetos
                </a>
                <a href="#about" className="transition-colors hover:text-[#e8cd9d]">
                  sobre
                </a>
                <a href="#contact" className="transition-colors hover:text-[#e8cd9d]">
                  contato
                </a>
              </div>
            </div>

            <div className="flex flex-1 items-center px-3 pb-16 pt-10 sm:px-5 lg:px-8">
              <div className="mx-auto grid w-full max-w-[1600px] items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.78fr)] lg:gap-20">
                <div className="animate-slide-left text-left">
                  <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#f0dfc6] sm:text-base">
                    criativo
                  </p>
                  <h1 className="font-display text-balance-display max-w-[6ch] text-[40px] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] sm:text-[60px] lg:text-[78px] xl:text-[88px]">
                    Estudante de Ciência da Computação
                  </h1>
                  <a
                    href="#contact"
                    className="icon-cta mt-8 inline-flex items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm uppercase tracking-[0.14em] transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black sm:text-base"
                  >
                    Fale comigo
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div
                  className="lg:justify-self-end lg:text-right animate-slide-right"
                  style={{ animationDelay: "0.18s", animationFillMode: "forwards" }}
                >
                  <p className="max-w-[34rem] text-base font-bold uppercase leading-relaxed tracking-[0.06em] text-[#f8e8ca] sm:text-xl lg:text-[1.35rem] xl:text-2xl">
                    Eu construo sistemas robustos e de alta performance, conectando segurança ofensiva e defensiva,
                    arquitetura backend e infraestrutura cloud-native.
                  </p>
                  <div className="mt-8 flex items-center gap-4 lg:justify-end">
                    <div className="avatar-orbit">
                      <span className="avatar-ring avatar-ring-a" />
                      <span className="avatar-ring avatar-ring-b" />
                      <img
                        src="https://github.com/lucasonline0.png"
                        alt="Lucas Madureira"
                        className="h-16 w-16 rounded-full border border-white/40 object-cover grayscale transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <p className="max-w-[14rem] text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm">
                      Lucas Madureira
                      <span className="mt-1 block text-white/60">
                        Estudante de Ciência da Computação, Desenvolvedor
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-[#080a0d] px-4 py-16 sm:px-8 md:py-20 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="font-display animate-fade-up text-5xl uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl">
              Olá, eu sou o Lucas
            </h2>
            <div className="animate-fade-up space-y-6" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <p className="text-lg uppercase leading-relaxed tracking-[0.05em] text-white/90">
                Focado em engenharia de cibersegurança, sistemas backend resilientes e observabilidade em nuvem.
                Eu projeto e implemento software seguro com performance de nível de produção.
              </p>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={item.title}
                    className="border-b border-dashed border-white/25 pb-3 transition-all duration-500 hover:translate-x-1 hover:border-[#e8cd9d]"
                    style={{ animationDelay: `${0.25 + index * 0.1}s` }}
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-[#e8cd9d]">{item.period}</p>
                    <p className="font-display text-xl font-semibold tracking-[-0.03em]">{item.title}</p>
                    <p className="text-white/75">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="w-full bg-[#080a0d] px-4 py-16 sm:px-8 md:py-20 lg:px-14">
          <p className="mb-10 text-lg uppercase tracking-[0.24em] text-[#f0dfc6] animate-fade-up">✷ Casos selecionados</p>
          <div className="space-y-12">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`grid items-center gap-6 animate-fade-up md:grid-cols-[1fr_1.2fr] ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                style={{ animationDelay: `${0.15 + i * 0.12}s`, animationFillMode: "forwards" }}
              >
                <div className={i % 2 ? "md:text-right" : ""}>
                  <h3 className="font-display text-4xl font-medium uppercase leading-[0.92] tracking-[-0.04em] transition-colors duration-500 hover:text-[#e8cd9d] sm:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70 sm:text-sm">{project.subtitle}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm uppercase tracking-[0.12em] underline transition-all duration-500 hover:translate-x-1 hover:text-[#e8cd9d]"
                  >
                    Ver caso ↗
                  </a>
                </div>
                <div className="group h-44 overflow-hidden border border-white/15 md:h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="w-full min-h-[70vh] bg-cover bg-center border-t border-white/15 animate-hero-pan"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(8,10,13,.3), rgba(8,10,13,.55)), url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=2200&q=80')",
          }}
        >
          <div className="grid min-h-[70vh] gap-8 items-end px-4 py-14 sm:px-8 md:py-16 lg:grid-cols-[1fr_1.4fr] lg:px-14">
            <h2 className="font-display animate-slide-left max-w-[6ch] text-[52px] uppercase leading-[0.82] tracking-[-0.05em] sm:text-[90px] lg:text-[120px]">
              Vamos nos conectar
            </h2>
            <div className="animate-slide-right" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
              <p className="mb-4 uppercase tracking-[0.22em] text-[#f0dfc6]">Tenho interesse em</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {areas.map((tag) => (
                  <span
                    key={tag}
                    className="interest-pill rounded-full border border-white/80 px-3 py-1 text-sm uppercase tracking-[0.08em] transition-all duration-500 hover:border-[#e8cd9d] hover:text-[#e8cd9d]"
                  >
                    {(() => {
                      const Icon = areaIcons[tag as keyof typeof areaIcons];
                      return <Icon size={14} className="interest-pill-icon" />;
                    })()}
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="mailto:jmadureira00@gmail.com"
                className="icon-cta inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-semibold uppercase tracking-[0.12em] text-black transition-all duration-500 hover:scale-105"
              >
                Fale comigo
                <Mail size={16} />
              </a>
              <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.18em] text-white/80">
                <a href="https://github.com/lucasonline0" target="_blank" rel="noopener noreferrer" className="social-link transition-colors hover:text-[#e8cd9d]">
                  <Github size={15} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/lucasblackstar/" target="_blank" rel="noopener noreferrer" className="social-link transition-colors hover:text-[#e8cd9d]">
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a href="mailto:jmadureira00@gmail.com" className="social-link transition-colors hover:text-[#e8cd9d]">
                  <Mail size={15} />
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
