import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WAF-Proxy (Defensive Engine)",
    description: "A high-performance Web Application Firewall and Reverse Proxy engineered in Rust. Leverages zero-cost abstractions and memory safety for real-time traffic inspection. Supports dynamic Lua scripting for custom rule definitions against SQLi and XSS attacks.",
    tags: ["Rust", "Lua", "Networking"],
    link: "https://github.com/lucasonline0/waf-proxy",
  },
  {
    title: "GoSpector (Reconnaissance CLI)",
    description: "Offensive security CLI tool optimized for large-scale subdomain enumeration and port scanning. Implements advanced Go concurrency patterns to ensure high-throughput reconnaissance with minimal latency.",
    tags: ["Go", "Cybersecurity", "CLI"],
    link: "https://github.com/lucasonline0/gospector",
  },
  {
    title: "LogFlux",
    description: "Cloud-native log analyzer designed to transform raw syslog streams into actionable visual insights. Features a high-performance backend for efficient data ingestion and processing.",
    tags: ["Python", "Flask", "DevOps"],
    link: "https://github.com/amazonext/LogFlux",
  },
  {
    title: "Local Vault",
    description: "Cryptographically secure local password manager. Implements industry-standard encryption algorithms to ensure data persistence and confidentiality at rest.",
    tags: ["Python", "Cryptography"],
    link: "https://github.com/lucasonline0/Desktop-Password-Vault",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto px-4">
            A curated selection of projects focusing on high-performance systems, 
            defensive security architecture, and scalable backend engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
