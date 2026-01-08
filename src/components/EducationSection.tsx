import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech. in Computer Science & Engineering',
    period: '2022 - 2026',
    institution: 'Techno Engineering College, Banipur',
    location: 'Banipur, North 24 PGS',
    grade: '7.34 CGPA',
    achievements: [
      'Maintaining excellent academic performance.',
      'Working on various software development projects.',
    ],
  },
  {
    degree: 'Higher Secondary (Science)',
    period: '2020 - 2021',
    institution: 'Habra High School (H.S)',
    location: 'Habra, North 24 PGS',
    grade: '89%',
    achievements: [
      'Specialized in Computer Science and Mathematics.',
      'Achieved outstanding results in Computer Science in board examinations.',
    ],
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

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

              {/* Date Badge - Desktop */}
              <div className="hidden md:flex flex-1 items-start justify-end">
                <div
                  className={`px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  {edu.period}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 ml-12 md:ml-0">
                <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  {/* Mobile Date */}
                  <div className="md:hidden mb-4">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
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
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
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
