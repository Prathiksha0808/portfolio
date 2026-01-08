import { MapPin, Briefcase } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Happy Clients' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold font-heading mb-6">
              Passionate Full-Stack Developer
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Final-year Computer Science student skilled in full-stack web development (
                <span className="text-foreground font-medium">React</span>,{' '}
                <span className="text-foreground font-medium">Node.js</span>,{' '}
                <span className="text-foreground font-medium">MongoDB</span>) with project
                experience in AI-based applications. Passionate about problem-solving, clean code,
                and currently exploring{' '}
                <span className="text-foreground font-medium">Agentic AI</span> for building
                intelligent, autonomous systems.
              </p>

              <p>
                My expertise spans across frontend frameworks like{' '}
                <span className="text-foreground font-medium">React</span> and{' '}
                <span className="text-foreground font-medium">Next.js</span>, backend technologies
                including <span className="text-foreground font-medium">Node.js</span>, and database
                management with <span className="text-foreground font-medium">MongoDB</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm">
                <MapPin size={16} className="text-primary" />
                Kolkata, India
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm">
                <Briefcase size={16} className="text-green-500" />
                Available for hire
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="text-4xl font-bold font-heading gradient-text">{stat.value}</span>
                <span className="text-muted-foreground mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
