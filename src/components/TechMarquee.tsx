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
    title: "Core Programming",
    technologies: [
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "C++", icon: "cpp" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Infrastructure & Systems",
    technologies: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "AWS", icon: "aws" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "Apache Kafka", icon: "kafka" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
  {
    title: "Security & OS",
    technologies: [
      { name: "Linux", icon: "linux" },
      { name: "Arch Linux", icon: "arch" },
      { name: "Kali Linux", icon: "kali" },
      { name: "Bash", icon: "bash" },
      { name: "Git", icon: "git" },
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
              Stack & Expertise ↘
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading">Technical Stack</DialogTitle>
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
