const skills = [
  'React', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js',
  'Postman', 'Firebase', 'Python', 'Flask', 'JavaScript', 'TypeScript', 'GitHub', 'Git', 'Next.js',
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <div className="skill-badge whitespace-nowrap mx-2">
    {skill}
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="section-title mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* First Row - Left to Right */}
        <div className="flex mb-6 overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <SkillBadge key={`row1-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {[...skills, ...skills].map((skill, index) => (
              <SkillBadge key={`row1-dup-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse">
            {[...skills.reverse(), ...skills].map((skill, index) => (
              <SkillBadge key={`row2-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex animate-marquee-reverse" aria-hidden="true">
            {[...skills, ...skills].map((skill, index) => (
              <SkillBadge key={`row2-dup-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
