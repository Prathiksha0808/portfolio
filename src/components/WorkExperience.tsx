import { Briefcase } from "lucide-react";

const experiences = [
  {
    dateRange: "Jan 2026 – Present",
    role: "Software Developer Intern",
    company: "Nighthack Labs",
    description:
      "Working as a software developer intern focusing on building and improving web application interfaces using modern frontend technologies.",
    highlights: [
      "Developing responsive user interfaces using React",
      "Building reusable components to improve maintainability",
      "Gained hands-on experience with modern frontend development workflows",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Git"],
  },
  
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-14 lg:mb-16 px-4">
        <h2 className="section-title mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle mx-auto max-w-xl">
          Building solutions and gaining experience across different domains
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-border 
                       p-5 sm:p-6 lg:p-8 hover:border-primary/30
                       bg-background/60 backdrop-blur"
          >
            {/* Date badge (desktop) */}
            <span
              className="hidden md:inline-block absolute top-4 right-4 px-3 py-1 
              bg-primary/10 border border-primary/30 
              rounded-full text-xs font-medium text-primary"
            >
              {exp.dateRange}
            </span>

            {/* Role + Company */}
            <div className="flex items-start gap-3 mb-4">
              {/* Icon */}
              <div className="p-2 bg-primary/10 rounded-lg mt-1">
                <Briefcase className="text-primary" size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold font-heading leading-tight">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
            </div>

            {/* Date badge (mobile) */}
            <span className="md:hidden inline-block text-xs font-medium mb-4 text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-2">
              {exp.dateRange}
            </span>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5">
              {exp.description}
            </p>

            <ul className="space-y-1">
              {exp.highlights.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-baseline gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 sm:px-3 sm:py-1
                  text-xs sm:text-sm
                  rounded-full
                  bg-primary/10
                  border border-primary/30
                  text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
