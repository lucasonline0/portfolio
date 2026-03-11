const timeline = [
  {
    title: "Infrastructure & Data Specialist - Public Sector",
    role: "Backend Engineer & Data Analyst",
    period: "2025 - Present",
  },
  {
    title: "Systems & Automation Specialist",
    role: "Full-Stack Developer",
    period: "2023 - Present",
  },
];

const areas = ["Cybersecurity", "Systems Programming", "Cloud Native", "Backend Architecture"];

const projects = [
  {
    title: "WAF-Proxy",
    subtitle: "Web Application Firewall and Reverse Proxy in Rust",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/lucasonline0/waf-proxy",
  },
  {
    title: "GoSpector",
    subtitle: "Reconnaissance CLI for subdomain and port scanning",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/lucasonline0/gospector",
  },
  {
    title: "LogFlux",
    subtitle: "Cloud-native log analyzer for actionable insights",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/amazonext/LogFlux",
  },
  {
    title: "Local Vault",
    subtitle: "Secure local password manager",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/lucasonline0/Desktop-Password-Vault",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-[#080a0d] text-[#f2ebdf] overflow-x-hidden">
      <main className="w-full">
        <section
          className="min-h-screen w-full bg-cover bg-center border-b border-white/20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(8,10,13,.18), rgba(8,10,13,.62)), url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=2200&q=80')",
          }}
        >
          <div className="w-full px-4 sm:px-8 lg:px-14 py-5 md:py-8">
            <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/90">
              <p>Lucas Madureira</p>
              <p>Security Engineer, Developer</p>
              <div className="flex gap-3 sm:gap-5">
                <a href="#works">works</a>
                <a href="#about">about</a>
                <a href="#contact">contact</a>
              </div>
            </div>

            <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-8 items-end">
              <div>
                <p className="text-[#f0dfc6] mb-2 text-lg">creative</p>
                <h1 className="uppercase font-black leading-[0.86] tracking-tight text-[54px] sm:text-[88px] lg:text-[120px]">
                  Security
                  <br />
                  Engineer
                </h1>
              </div>

              <div className="lg:justify-self-end max-w-xl">
                <p className="uppercase text-lg sm:text-2xl leading-tight font-semibold">
                  I build robust and high-performance systems, bridging offensive and defensive security, backend
                  architecture, and cloud-native infrastructure.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="https://github.com/lucasonline0.png"
                    alt="Lucas Madureira"
                    className="w-16 h-16 rounded-full object-cover grayscale border border-white/40"
                  />
                  <a
                    href="#contact"
                    className="rounded-full border border-white px-4 py-1.5 uppercase text-sm sm:text-base hover:bg-white hover:text-black transition-colors"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-[#080a0d] px-4 sm:px-8 lg:px-14 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <h2 className="uppercase font-black leading-[0.84] text-5xl sm:text-7xl">Hello I am Lucas</h2>
            <div className="space-y-6">
              <p className="uppercase text-lg leading-relaxed text-white/90">
                Focused on cybersecurity engineering, resilient backend systems, and cloud observability. I design and
                implement secure software with production-grade performance.
              </p>
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div key={item.title} className="border-b border-dashed border-white/25 pb-3">
                    <p className="uppercase text-sm text-[#e8cd9d]">{item.period}</p>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-white/75">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="w-full bg-[#080a0d] px-4 sm:px-8 lg:px-14 py-16 md:py-20">
          <p className="uppercase text-lg mb-10">✷ Selected Cases</p>
          <div className="space-y-12">
            {projects.map((project, i) => (
              <article key={project.title} className={`grid md:grid-cols-[1fr_1.2fr] gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={i % 2 ? "md:text-right" : ""}>
                  <h3 className="uppercase font-black leading-[0.9] text-4xl sm:text-6xl">{project.title}</h3>
                  <p className="uppercase text-xs sm:text-sm tracking-wider text-white/70 mt-1">{project.subtitle}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 underline uppercase text-sm">
                    View case ↗
                  </a>
                </div>
                <div className="h-44 md:h-52 border border-white/15 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="w-full min-h-[70vh] bg-cover bg-center border-t border-white/15"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(8,10,13,.3), rgba(8,10,13,.55)), url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=2200&q=80')",
          }}
        >
          <div className="w-full min-h-[70vh] px-4 sm:px-8 lg:px-14 py-14 md:py-16 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-end">
            <h2 className="uppercase font-black leading-[0.8] text-[52px] sm:text-[90px] lg:text-[120px]">Let&apos;s Connect</h2>
            <div>
              <p className="uppercase mb-4">I&apos;m always interested about</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {areas.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/80 px-3 py-1 uppercase text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="mailto:jmadureira00@gmail.com" className="inline-block rounded-full bg-white text-black px-5 py-2 font-semibold uppercase">
                Contact me
              </a>
              <div className="mt-6 flex gap-4 text-xs uppercase tracking-wider text-white/80">
                <a href="https://github.com/lucasonline0" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/lucasblackstar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:jmadureira00@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
