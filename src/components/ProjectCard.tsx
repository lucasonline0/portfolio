import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, link, delay = 0 }: ProjectCardProps) => {
  return (
    <div
      className="group bg-card border border-border p-4 md:p-6 hover-lift card-shine animate-fade-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="space-y-3 md:space-y-4">
        <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <div className="flex gap-1 md:gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] md:text-xs tracking-wider text-accent"
            >
              / {tag}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors group/link border border-border px-3 md:px-4 py-1.5 md:py-2 hover:border-accent"
        >
          <span>View Details</span>
          <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
