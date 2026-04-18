import { useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useScrollMotion } from "@/hooks/useScrollMotion";

const navItems = [
  { label: "Início", id: "home" },
  { label: "Capítulo", id: "about" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

const quickFacts = [
  {
    label: "Base",
    value: "Brasil / estudante de Ciência da Computação",
  },
  {
    label: "Foco",
    value: "Backend, cloud, engenharia de software e segurança",
  },
  {
    label: "Princípio",
    value: "Clareza arquitetural, operação real e leitura de risco",
  },
];

const experience = [
  {
    period: "2025 - Presente",
    title: "Engenheiro de Software no setor público",
    description:
      "Atuação em sistemas e serviços para o setor público com foco em estabilidade, manutenção e clareza operacional.",
    note: "Entrega técnica orientada por continuidade, consistência e serviço crítico.",
  },
  {
    period: "2024 - Presente",
    title: "Responsável pelo gerenciamento do banco de dados",
    description:
      "Gestão, manutenção e otimização de banco de dados como camada estratégica de operação e performance.",
    note: "Persistência tratada como infraestrutura viva, não como detalhe de implementação.",
  },
];

const disciplineLines = [
  "BACKEND & ARQUITETURA",
  "CLOUD & OBSERVABILIDADE",
  "SEGURANÇA OFENSIVA & DEFENSIVA",
  "SOFTWARE DE PRODUÇÃO",
];

const projects = [
  {
    number: "01",
    title: "WAF-Proxy",
    titleLines: ["WAF", "Proxy"],
    meta: "Rust / Lua / Reverse Proxy",
    description:
      "Firewall de aplicação web e proxy reverso em Rust para inspeção de tráfego em tempo real com regras dinâmicas.",
    link: "https://github.com/lucasonline0/waf-proxy",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    details: ["Inspeção em tempo real", "Camada defensiva", "Performance previsível"],
    surfaceClass: "bg-[#171514] text-[#f5f1e8]",
    borderClass: "border-white/12",
    kickerClass: "text-white/42",
    titleClass: "text-white",
    bodyClass: "text-white/72",
    detailsClass: "text-white/44",
    linkClass: "text-white",
    imageFrameClass: "bg-black",
    imageOverlayClass: "bg-gradient-to-t from-black/26 via-transparent to-transparent",
  },
  {
    number: "02",
    title: "GoSpector",
    titleLines: ["Go", "Spector"],
    meta: "Go / Recon / Networking",
    description:
      "CLI de reconhecimento para enumeração de subdomínios e portas com concorrência agressiva e throughput alto.",
    link: "https://github.com/lucasonline0/gospector",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    details: ["Enumeração", "Concorrência", "Leitura ofensiva"],
    surfaceClass: "bg-[#f1ede6] text-black",
    borderClass: "border-black/16",
    kickerClass: "text-black/52",
    titleClass: "text-[#ff4d22]",
    bodyClass: "text-black/82",
    detailsClass: "text-black/58",
    linkClass: "text-black",
    imageFrameClass: "bg-black",
    imageOverlayClass: "bg-gradient-to-t from-black/10 via-transparent to-transparent",
  },
  {
    number: "03",
    title: "LogFlux",
    titleLines: ["Log", "Flux"],
    meta: "Python / Flask / Cloud Native",
    description:
      "Analisador cloud-native para transformar logs em sinais operacionais acionáveis com ingestão eficiente.",
    link: "https://github.com/amazonext/LogFlux",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    details: ["Ingestão", "Observabilidade", "Análise operacional"],
    surfaceClass: "bg-[#141d39] text-[#f5f1e8]",
    borderClass: "border-white/12",
    kickerClass: "text-white/42",
    titleClass: "text-[#f5f1e8]",
    bodyClass: "text-white/72",
    detailsClass: "text-white/44",
    linkClass: "text-white",
    imageFrameClass: "bg-black",
    imageOverlayClass: "bg-gradient-to-t from-black/20 via-transparent to-transparent",
  },
  {
    number: "04",
    title: "Local Vault",
    titleLines: ["Local", "Vault"],
    meta: "Python / Cryptography / Desktop",
    description:
      "Gerenciador local de senhas com criptografia forte, persistência controlada e foco em confidencialidade.",
    link: "https://github.com/lucasonline0/Desktop-Password-Vault",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    details: ["Criptografia", "Persistência local", "Confidencialidade"],
    surfaceClass: "bg-[#4258ff] text-black",
    borderClass: "border-black/16",
    kickerClass: "text-black/52",
    titleClass: "text-black",
    bodyClass: "text-black/82",
    detailsClass: "text-black/58",
    linkClass: "text-black",
    imageFrameClass: "bg-black",
    imageOverlayClass: "bg-gradient-to-t from-black/18 via-transparent to-transparent",
  },
];

const contactLinks = [
  {
    label: "E-mail",
    value: "jmadureira00@gmail.com",
    href: "mailto:jmadureira00@gmail.com",
  },
  {
    label: "GitHub",
    value: "lucasonline0",
    href: "https://github.com/lucasonline0",
  },
  {
    label: "LinkedIn",
    value: "lucasblackstar",
    href: "https://www.linkedin.com/in/lucasblackstar/",
  },
];

type ProjectShowcaseProps = {
  project: (typeof projects)[number];
  index: number;
};

const motionStyle = (delay = 0, distance = 18) =>
  ({
    "--motion-delay": `${delay}ms`,
    "--motion-distance": `${distance}px`,
  }) as CSSProperties;

const ProjectShowcase = ({ project, index }: ProjectShowcaseProps) => {
  return (
    <article
      data-motion="card"
      style={motionStyle(Math.min(index * 70, 210), 20)}
      className={`project-showcase px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-14 ${project.surfaceClass}`}
    >
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-14">
        <div className={`project-showcase-copy max-w-[36rem] border-t pt-5 ${project.borderClass}`}>
          <p className={`poster-kicker ${project.kickerClass}`}>
            Caso {project.number} / {project.meta}
          </p>

          <h3
            className={`mt-4 max-w-[8ch] font-display text-[clamp(3rem,6.3vw,6.2rem)] uppercase leading-[0.84] tracking-[-0.09em] ${project.titleClass}`}
          >
            {project.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          <p className={`mt-6 max-w-[31rem] text-lg leading-relaxed sm:text-xl ${project.bodyClass}`}>
            {project.description}
          </p>

          <div className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.24em] ${project.detailsClass}`}>
            {project.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`poster-link mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] ${project.linkClass}`}
          >
            Ver projeto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-group project-showcase-media relative block overflow-hidden ${project.imageFrameClass}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image h-[24rem] w-full object-cover grayscale sm:h-[30rem] lg:h-[36rem]"
          />
          <div className={`project-image-overlay absolute inset-0 ${project.imageOverlayClass}`} />
        </a>
      </div>
    </article>
  );
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useScrollMotion();

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        setScrolled(currentScroll > 18);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

    element?.scrollIntoView({ behavior, block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="poster-shell min-h-screen overflow-x-hidden bg-[#0e0c0b] text-[#f5f1e8] selection:bg-[#ff4d22] selection:text-black">
      <div className="poster-noise pointer-events-none fixed inset-0 z-0 opacity-[0.065]" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`motion-nav w-full border-b transition-all duration-300 ${
            scrolled ? "border-white/20 bg-[#0e0c0b]/96" : "border-white/10 bg-transparent"
          } ${scrolled ? "motion-nav-scrolled" : ""}`}
        >
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="mx-auto flex max-w-[1760px] items-center justify-between py-4">
              <button onClick={() => scrollToSection("home")} className="text-left">
                <span className="block text-[10px] uppercase tracking-[0.34em] text-[#ff4d22]">Lucas Madureira</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/55">
                  Backend / Cloud / Segurança
                </span>
              </button>

              <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.28em] text-white/72 lg:flex">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <a
                href="mailto:jmadureira00@gmail.com"
                className="nav-cta hidden text-[11px] uppercase tracking-[0.28em] text-white md:inline-flex md:items-center md:gap-2"
              >
                Iniciar conversa
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/14 text-white lg:hidden"
                aria-label="Alternar menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div
            className={`mx-auto max-w-[1760px] ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div
              className={`fixed inset-0 z-40 bg-[#0e0c0b] px-4 pb-10 pt-24 transition-all duration-300 lg:hidden ${
                mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="mx-auto flex h-full max-w-[1760px] flex-col justify-between sm:px-4">
                <div className="space-y-3 text-[clamp(2.7rem,10vw,4.4rem)] uppercase leading-[0.88] tracking-[-0.07em] text-white">
                  {navItems.map((item) => (
                    <button key={item.id} onClick={() => scrollToSection(item.id)} className="block text-left transition-opacity duration-200 hover:opacity-80">
                      {item.label}
                    </button>
                  ))}
                </div>

                <a
                  href="mailto:jmadureira00@gmail.com"
                  className="nav-cta inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#ff4d22]"
                >
                  Falar sobre uma oportunidade
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="scroll-mt-24 px-4 pb-14 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">
          <div className="mx-auto max-w-[1760px]">
            <div className="grid gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16 xl:gap-24">
              <div className="relative min-h-[25rem] lg:min-h-[42rem] lg:pr-8 xl:min-h-[47rem] xl:pr-12">
                <div className="hero-load hero-load-delay-3 hidden lg:absolute lg:right-[3%] lg:top-[13%] lg:z-10 lg:block lg:w-[17rem] xl:w-[19rem]">
                  <div className="overflow-hidden bg-[#f1ede6] p-3 shadow-[22px_22px_0_0_rgba(255,77,34,0.98)]">
                    <img
                      src="https://github.com/lucasonline0.png"
                      alt="Lucas Madureira"
                      className="h-[13rem] w-full object-cover grayscale xl:h-[15rem]"
                    />
                  </div>
                </div>

                <p className="hero-load poster-kicker text-white/62">Engenharia, backend, cloud e mentalidade de segurança</p>

                <h1 className="mt-5 max-w-[7.8ch] font-display text-[clamp(4.35rem,13vw,12rem)] uppercase leading-[0.8] tracking-[-0.09em] text-white">
                  <span className="hero-load-line hero-load-delay-1">Engenharia</span>
                  <span className="hero-load-line hero-load-delay-2">para</span>
                  <span className="hero-load-line hero-load-delay-3">sistemas</span>
                  <span className="hero-load-line hero-load-delay-4">que</span>
                  <span className="hero-load-line hero-load-delay-5 text-[#ff4d22]">resistem.</span>
                </h1>

                <div className="hero-load hero-load-delay-2 mt-10 max-w-[27rem] space-y-4 border-t border-white/14 pt-5 lg:ml-[5rem] lg:mt-14 lg:max-w-[29rem] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 xl:ml-[6.5rem] xl:mt-16 xl:max-w-[30rem] xl:pl-7">
                  <p className="font-editorial text-[1.75rem] leading-[0.98] text-[#f5f1e8] sm:text-[2.15rem]">
                    Backend, cloud e segurança tratados como estrutura, não como ornamentação de interface.
                  </p>
                  <p className="max-w-sm text-sm leading-relaxed text-white/68 sm:text-base">
                    Eu construo software pensando em pressão real: arquitetura, persistência, observabilidade,
                    risco e continuidade operando juntos.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-10 lg:pt-16 xl:pt-24">
                <article className="hero-load hero-load-delay-2 bg-[#ff4d22] px-7 py-8 text-black sm:px-10 sm:py-10">
                  <p className="poster-kicker text-black/70">Manifesto</p>
                  <p className="mt-5 max-w-[13ch] font-display text-[clamp(1.9rem,4.4vw,3.7rem)] uppercase leading-[0.9] tracking-[-0.07em]">
                    Clareza arquitetural. Densidade técnica. Presença visual.
                  </p>
                </article>

                <div className="grid gap-7 sm:grid-cols-[0.56fr_0.44fr] sm:items-end">
                  <div className="overflow-hidden bg-[#171514]">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                      alt="Macro de chip em atmosfera escura"
                      className="h-[18rem] w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03] sm:h-[20rem]"
                    />
                  </div>

                  <div className="hero-load hero-load-delay-3 self-end space-y-7">
                    <p className="max-w-[16rem] text-sm leading-relaxed text-white/72 sm:text-base">
                      Meu interesse está em sistemas robustos, backend confiável, infraestrutura observável e
                      segurança ofensiva e defensiva com menos ruído visual e mais intenção.
                    </p>

                    <div className="space-y-3 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.28em] text-white/70">
                      <button
                        onClick={() => scrollToSection("projects")}
                        className="poster-link inline-flex items-center gap-2 text-white"
                      >
                        Ver projetos
                        <ArrowUpRight className="h-4 w-4" />
                      </button>

                      <a href="mailto:jmadureira00@gmail.com" className="poster-link inline-flex items-center gap-2">
                        Falar comigo
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {quickFacts.map((fact, index) => (
                <article
                  key={fact.label}
                  data-motion="text"
                  style={motionStyle(index * 50, 14)}
                  className="max-w-[22rem] border-t border-white/18 pt-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/38">{fact.label}</p>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-white/78 sm:text-lg">{fact.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#f1ede6] px-4 py-20 text-black sm:px-8 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
          <div className="mx-auto max-w-[1760px]">
            <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] xl:gap-16">
              <div>
                <p className="poster-kicker text-black/58">01 / Capítulo</p>
                <h2
                  data-motion="title"
                  style={motionStyle(0, 20)}
                  className="mt-5 max-w-[8ch] font-display text-[clamp(3.7rem,9vw,8.3rem)] uppercase leading-[0.82] tracking-[-0.09em]"
                >
                  Clareza arquitetural antes do ruído.
                </h2>
              </div>

              <div className="space-y-7 pt-1">
                <p
                  data-motion="text"
                  style={motionStyle(70, 16)}
                  className="max-w-[34rem] text-xl leading-relaxed text-black/82 sm:text-2xl"
                >
                  Sou estudante de Ciência da Computação com foco em backend, cloud, engenharia de software e
                  segurança aplicada. Quero que o trabalho pareça o que ele é: estratégico, preciso e pensado
                  para ambientes de verdade.
                </p>

                <p className="max-w-lg text-[11px] uppercase tracking-[0.28em] text-black/56">
                  Construção de sistemas robustos, clareza de arquitetura, operação previsível e mentalidade de
                  segurança como parte do desenho, não uma camada tardia.
                </p>
              </div>
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] xl:gap-16">
              <div>
                <p className="poster-kicker text-black/58">Narrativa</p>
                <p
                  data-motion="title"
                  style={motionStyle(0, 18)}
                  className="mt-5 max-w-[19rem] font-editorial text-[2rem] leading-[0.96] text-black sm:max-w-[22rem] sm:text-[2.75rem]"
                >
                  Penso software como sistema vivo: performance, persistência, observabilidade, ameaça e
                  manutenção coexistindo no mesmo desenho.
                </p>
              </div>

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <article
                    key={item.title}
                    data-motion="text"
                    style={motionStyle(index * 70, 16)}
                    className="grid gap-5 border-t border-black/14 pt-7 sm:pt-8 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-8"
                  >
                    <p className="font-display text-[1.6rem] uppercase leading-[0.86] tracking-[-0.05em] text-[#ff4d22] sm:text-[2.1rem]">
                      {item.period}
                    </p>

                    <div>
                      <h3 className="max-w-[11ch] font-display text-[clamp(1.8rem,3.6vw,3.35rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-black/78 sm:text-lg">
                        {item.description}
                      </p>
                      <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-black/52">{item.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f1ede6] px-4 pb-16 text-[#ff4d22] sm:px-8 lg:px-12 lg:pb-20 xl:px-16">
          <div className="mx-auto max-w-[1760px] border-t border-black/14 pt-8">
            <p className="poster-kicker text-black/58">Atuação</p>
            <div
              data-motion="title"
              style={motionStyle(0, 18)}
              className="mt-5 font-display text-[clamp(2.4rem,5.4vw,5.7rem)] uppercase leading-[0.88] tracking-[-0.08em]"
            >
              {disciplineLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#4258ff] px-4 py-12 text-black sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1760px]">
            <p className="poster-kicker text-black/58">Posicionamento</p>
            <p
              data-motion="title"
              style={motionStyle(0, 18)}
              className="mt-4 max-w-[15ch] font-display text-[clamp(2.6rem,6.4vw,6rem)] uppercase leading-[0.88] tracking-[-0.08em]"
            >
              Segurança não entra no fim. Ela organiza o sistema desde o início.
            </p>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
          <div className="mx-auto max-w-[1760px]">
            <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[0.65fr_1.35fr] xl:gap-16">
              <div>
                <p className="poster-kicker text-white/52">02 / Projetos</p>
              </div>

              <div>
                <h2
                  data-motion="title"
                  style={motionStyle(0, 20)}
                  className="max-w-[9ch] font-display text-[clamp(3.7rem,9vw,8rem)] uppercase leading-[0.82] tracking-[-0.09em] text-white"
                >
                  Vitrine editorial para peças de engenharia.
                </h2>
                <p
                  data-motion="text"
                  style={motionStyle(80, 16)}
                  className="mt-6 max-w-2xl text-lg leading-relaxed text-white/68 sm:text-xl"
                >
                  Aqui os projetos deixam de parecer cards de portfólio tech e passam a funcionar como spreads:
                  imagem dominante, título com peso gráfico e descrição reduzida ao essencial.
                </p>
              </div>
            </div>

            <div className="mt-16 space-y-8 lg:space-y-10">
              {projects.map((project, index) => (
                <ProjectShowcase key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#ff4d22] px-4 py-20 text-black sm:px-8 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
          <div className="mx-auto max-w-[1760px]">
            <div className="grid gap-12 lg:grid-cols-[1.16fr_0.84fr] xl:gap-16">
              <div>
                <p className="poster-kicker text-black/62">03 / Contato</p>
                <h2
                  data-motion="title"
                  style={motionStyle(0, 20)}
                  className="mt-5 max-w-[7ch] font-display text-[clamp(4rem,10vw,9.8rem)] uppercase leading-[0.8] tracking-[-0.1em]"
                >
                  Pronto para o próximo sistema?
                </h2>
              </div>

              <div className="flex max-w-[38rem] flex-col justify-end gap-9">
                <p
                  data-motion="text"
                  style={motionStyle(70, 16)}
                  className="max-w-[31rem] text-lg leading-relaxed text-black/80 sm:text-xl"
                >
                  Se existe uma arquitetura importante para desenhar, um backend para endurecer ou uma operação
                  que precisa de clareza, essa conversa faz sentido.
                </p>

                <a
                  data-motion="text"
                  style={motionStyle(120, 14)}
                  href="mailto:jmadureira00@gmail.com"
                  className="poster-link inline-flex max-w-max items-center gap-3 font-display text-[clamp(1.8rem,3.6vw,3.4rem)] uppercase leading-[0.92] tracking-[-0.07em]"
                >
                  jmadureira00@gmail.com
                  <ArrowUpRight className="h-8 w-8" />
                </a>

                <div className="grid gap-5 border-t border-black/16 pt-6 sm:grid-cols-3 sm:gap-8">
                  {contactLinks.map((link, index) => {
                    const isGithub = link.label === "GitHub";
                    const isLinkedin = link.label === "LinkedIn";
                    const isMail = link.label === "E-mail";

                    return (
                      <a
                        key={link.label}
                        data-motion="text"
                        style={motionStyle(160 + index * 45, 14)}
                        href={link.href}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "noopener noreferrer"}
                        className="contact-link block space-y-3"
                      >
                        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-black/56">
                          {isGithub ? (
                            <Github className="h-3.5 w-3.5" />
                          ) : isLinkedin ? (
                            <Linkedin className="h-3.5 w-3.5" />
                          ) : isMail ? (
                            <Mail className="h-3.5 w-3.5" />
                          ) : null}
                          {link.label}
                        </span>
                        <span className="block max-w-[13rem] text-sm leading-relaxed text-black/82 sm:text-base">{link.value}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#0a0908] px-4 py-6 text-white/42 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto flex max-w-[1760px] flex-col gap-2 text-[10px] uppercase tracking-[0.28em] sm:flex-row sm:items-center sm:justify-between">
            <p>Lucas Madureira / Portfólio 2026</p>
            <p>Construído com clareza, precisão e intenção.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
