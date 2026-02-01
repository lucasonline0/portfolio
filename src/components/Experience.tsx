import { Building2, ShieldCheck } from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    company: "Infrastructure & Data Specialist - Public Sector",
    role: "Backend Engineer & Data Analyst",
    icon: ShieldCheck,
  },
  {
    period: "2023 - Present",
    company: "Systems & Automation Specialist",
    role: "Full-Stack Developer",
    icon: Building2,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">
            Experience
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto px-4">
            Professional trajectory focused on engineering scalable data solutions and secure infrastructure.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8"
            >
              <div className="md:flex-1">
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2">
                  <exp.icon className="w-5 h-5 text-accent" />
                  {exp.company}
                </h3>
                <p className="text-foreground font-medium text-xs md:text-sm">
                  {exp.role}
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-accent font-bold text-xs md:text-sm uppercase tracking-wider">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
