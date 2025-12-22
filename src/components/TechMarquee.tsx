import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const techCategories = [
  {
    title: "Programming Languages",
    technologies: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "C#", icon: "cs" },
      { name: "Go", icon: "go" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "js" },
      { name: "Lua", icon: "lua" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
      { name: "Ruby", icon: "ruby" },
      { name: "Rust", icon: "rust" },
      { name: "Solidity", icon: "solidity" },
      { name: "TypeScript", icon: "ts" },
    ],
  },
  {
    title: "Backend & Cloud Native",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Apache Kafka", icon: "kafka" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "AWS", icon: "aws" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
  {
    title: "Frontend Ecosystem",
    technologies: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue.js", icon: "vue" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vite", icon: "vite" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Security & OS",
    technologies: [
      { name: "Arch Linux", icon: "arch" },
      { name: "Linux", icon: "linux" },
      { name: "Kali Linux", icon: "kali" },
      { name: "Bash", icon: "bash" },
      { name: "Vim", icon: "vim" },
      { name: "Git", icon: "git" },
      { name: "Grafana", icon: "grafana" },
    ],
  },
];

const TechMarquee = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-3 md:py-4 border-y border-border bg-foreground text-background overflow-hidden">
      <div className="relative">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="block md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 text-background font-medium text-xs md:text-sm tracking-widest uppercase z-10 bg-foreground px-2 hover:text-foreground transition-colors cursor-pointer mb-2 md:mb-0">
              Top Technologies ↘
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading">Top Technologies</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              {techCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-3 font-heading">{category.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 text-sm bg-muted text-foreground px-3 py-2 rounded-md font-body"
                      >
                        <img
                          src={`https://skillicons.dev/icons?i=${tech.icon}`}
                          alt={tech.name}
                          className="w-5 h-5"
                        />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex animate-marquee whitespace-nowrap">
          {techCategories.flatMap(cat => cat.technologies.map(t => t.name)).map((tech, index) => (
            <span
              key={index}
              className="mx-4 md:mx-8 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase text-background/80 hover:text-background transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
