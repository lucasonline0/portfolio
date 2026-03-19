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
    <div className="w-full min-h-screen bg-[#080a0d] text-[#f2ebdf] overflow-x-hidden font-body-redhat">
      <main className="w-full">
        <section
          className="min-h-screen w-full bg-cover bg-center border-b border-white/20 animate-hero-pan"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(8,10,13,.18), rgba(8,10,13,.62)), url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=2200&q=80')",
          }}
        >
          <div className="w-full px-4 sm:px-8 lg:px-14 py-5 md:py-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[10px] sm:text-xs uppercase tracking-[0.28em] text-white/90 animate-fade-up font-accent">
              <p>Lucas Madureira</p>
              <p className="text-white/75">Estudante de Ciência da Computação, Desenvolvedor</p>
              <div className="flex gap-3 sm:gap-5">
                <a href="#works" className="hover:text-[#e8cd9d] transition-colors">projetos</a>
                <a href="#about" className="hover:text-[#e8cd9d] transition-colors">sobre</a>
                <a href="#contact" className="hover:text-[#e8cd9d] transition-colors">contato</a>
              </div>
            </div>

            <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-8 items-end">
              <div className="animate-slide-left" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
                <p className="text-[#f0dfc6] mb-3 text-lg sm:text-xl uppercase tracking-[0.35em] font-accent">criativo</p>
                <h1 className="font-display text-balance-display uppercase leading-[0.82] tracking-[0.04em] text-[56px] sm:text-[92px] lg:text-[124px] drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                  Estudante de Ciência
                  <br />
                  da Computação
                </h1>
              </div>

              <div
                className="lg:justify-self-end max-w-xl animate-slide-right"
                style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
              >
                <p className="uppercase text-lg sm:text-2xl leading-tight font-semibold tracking-[0.08em] font-accent text-[#f8e8ca]">
                  Eu construo sistemas robustos e de alta performance, conectando segurança ofensiva e defensiva,
                  arquitetura backend e infraestrutura cloud-native.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="https://github.com/lucasonline0.png"
                    alt="Lucas Madureira"
                    className="w-16 h-16 rounded-full object-cover grayscale border border-white/40 transition-transform duration-500 hover:scale-110"
                  />
                  <a
                    href="#contact"
                    className="rounded-full border border-white px-4 py-1.5 uppercase text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 font-accent tracking-[0.18em]"
                  >
                    Fale comigo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-[#080a0d] px-4 sm:px-8 lg:px-14 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <h2 className="font-display uppercase leading-[0.84] text-5xl sm:text-7xl animate-fade-up tracking-[0.05em]">Olá, eu sou o Lucas</h2>
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <p className="uppercase text-lg leading-relaxed text-white/90 font-accent tracking-[0.12em]">
                Focado em engenharia de cibersegurança, sistemas backend resilientes e observabilidade em nuvem.
                Eu projeto e implemento software seguro com performance de nível de produção.
              </p>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={item.title}
                    className="border-b border-dashed border-white/25 pb-3 transition-all duration-500 hover:border-[#e8cd9d] hover:translate-x-1"
                    style={{ animationDelay: `${0.25 + index * 0.1}s` }}
                  >
                    <p className="uppercase text-sm text-[#e8cd9d] font-accent tracking-[0.25em]">{item.period}</p>
                    <p className="text-xl font-semibold font-display tracking-[0.04em]">{item.title}</p>
                    <p className="text-white/75">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="w-full bg-[#080a0d] px-4 sm:px-8 lg:px-14 py-16 md:py-20">
          <p className="uppercase text-lg mb-10 animate-fade-up font-accent tracking-[0.3em] text-[#f0dfc6]">✷ Casos selecionados</p>
          <div className="space-y-12">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`grid md:grid-cols-[1fr_1.2fr] gap-6 items-center animate-fade-up ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                style={{ animationDelay: `${0.15 + i * 0.12}s`, animationFillMode: "forwards" }}
              >
                <div className={i % 2 ? "md:text-right" : ""}>
                  <h3 className="font-display uppercase leading-[0.9] text-4xl sm:text-6xl transition-colors duration-500 hover:text-[#e8cd9d] tracking-[0.05em]">
                    {project.title}
                  </h3>
                  <p className="uppercase text-xs sm:text-sm tracking-[0.22em] text-white/70 mt-2 font-accent">{project.subtitle}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 underline uppercase text-sm transition-all duration-500 hover:text-[#e8cd9d] hover:translate-x-1 font-accent tracking-[0.16em]"
                  >
                    Ver caso ↗
                  </a>
                </div>
                <div className="h-44 md:h-52 border border-white/15 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
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
          <div className="w-full min-h-[70vh] px-4 sm:px-8 lg:px-14 py-14 md:py-16 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-end">
            <h2 className="font-display uppercase leading-[0.8] text-[52px] sm:text-[90px] lg:text-[120px] animate-slide-left tracking-[0.05em]">Vamos nos conectar</h2>
            <div className="animate-slide-right" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
              <p className="uppercase mb-4 font-accent tracking-[0.28em] text-[#f0dfc6]">Tenho interesse em</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {areas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/80 px-3 py-1 uppercase text-sm transition-all duration-500 hover:border-[#e8cd9d] hover:text-[#e8cd9d] font-accent tracking-[0.15em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="mailto:jmadureira00@gmail.com"
                className="inline-block rounded-full bg-white text-black px-5 py-2 font-semibold uppercase transition-all duration-500 hover:scale-105 font-accent tracking-[0.18em]"
              >
                Fale comigo
              </a>
              <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.22em] text-white/80 font-accent">
                <a href="https://github.com/lucasonline0" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8cd9d] transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/lucasblackstar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8cd9d] transition-colors">LinkedIn</a>
                <a href="mailto:jmadureira00@gmail.com" className="hover:text-[#e8cd9d] transition-colors">E-mail</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
