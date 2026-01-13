import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2024- 2026",
    institution: "Manipal Institute of Technology,Manipal",
    location: "Udupi, Karnataka",
    grade: "8.5 CGPA",
    achievements: ["Maintaining excellent academic performance."],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 - 2024",
    institution: "Mangalore University",
    location: "Udupi, Karnataka",
    grade: "9.6 CGPA",
    achievements: ["Secured 7th rank at Mangalore University"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My academic journey and continuous learning path in technology
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-3 lg:left-1/2 top-6 bottom-6 w-px bg-border" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-3 lg:left-1/2 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10" />

              {/* Content Card */}
              <div
                className={`w-full lg:w-[46%] pl-8 lg:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto lg:pl-12"
                    : "md:ml-auto lg:pr-12"
                }`}
              >
                <div
                  className="glass-card rounded-2xl p-6 md:pr-24
 hover:border-primary/30 transition-all duration-300 relative"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">
                        {edu.degree}
                      </h3>
                      {/* Year Badge */}
                      <span
                        className="hidden md:inline-block absolute top-4 right-4 px-3 py-1 
  bg-primary/10 border border-primary/30 
  rounded-full text-xs font-medium text-primary"
                      >
                        {edu.period}
                      </span>

                      <p className="text-muted-foreground">{edu.institution}</p>
                      {/* Mobile Year */}
                      <span className="md:hidden mt-2 inline-block text-xs font-medium text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin size={14} />
                    {edu.location}
                  </div>

                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-4">
                    {edu.grade}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
