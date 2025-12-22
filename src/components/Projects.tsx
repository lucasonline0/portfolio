import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Calop Agender",
    description: "Aplicação Full-Stack para agendamento em barbearias, com app para clientes e dashboard para administradores.",
    tags: ["React Native", "SQLite", "Expo"],
    link: "https://github.com/amazonext/calop-agender",
  },
  {
    title: "Duck Manager",
    description: "Sistema desktop para gerenciamento de vendas e estoque, com interface intuitiva e relatórios detalhados.",
    tags: ["Java", "MySQL", "HTML/CSS"],
    link: "https://github.com/amazonext/duck-manager",
  },
  {
    title: "Cofre de Senhas",
    description: "Ferramenta segura para armazenamento local de senhas, utilizando criptografia para proteger os dados.",
    tags: ["Python", "CustomTkinter"],
    link: "https://github.com/lucasonline0/Desktop-Password-Vault",
  },
  {
    title: "LogFlux",
    description: "Analisador de logs com interface web que transforma arquivos de syslog em insights visuais.",
    tags: ["Python", "Flask", "JavaScript"],
    link: "https://github.com/amazonext/LogFlux",
  },
  {
    title: "Network Monitor",
    description: "Plataforma de monitoramento de rede para detectar padrões suspeitos como ataques DDoS.",
    tags: ["Python", "Flask"],
    link: "https://github.com/lucasonline0/Network_Monitor_IA",
  },
  {
    title: "DevSecOps Orchestrator",
    description: "Pipeline CI/CD com GitHub Actions que escaneia código em busca de vulnerabilidades e segredos expostos.",
    tags: ["GitHub Actions", "Python", "DevSecOps"],
    link: "https://github.com/lucasonline0/Devsecops-Orchestrator",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            Projetos
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto animate-fade-up opacity-0 delay-100 px-4" style={{ animationFillMode: 'forwards' }}>
            Abaixo estão alguns dos meus projetos recentes e, claro, meus favoritos. 
            Neles, você pode ver como eu abordo desenvolvimento e como traduzo isso visualmente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
