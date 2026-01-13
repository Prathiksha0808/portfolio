import { Code2, Award } from "lucide-react";
import { MapPin, Mail } from "lucide-react";

const stats = [
  {
    icon: Code2,
    title: " Projects",
    description: "Web and mobile applications development",
    value: "3",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Professional skills validated ",
    value: "6",
  },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 hover:border-primary/30">
            <h3 className="text-2xl font-bold font-heading mb-6">
              Passionate React Developer
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Final-year MCA student and a{" "}
                <span className="text-foreground font-medium">
                  React developer
                </span>{" "}
                with an interest in building clean and responsive web
                applications. I enjoy working on frontend development and
                creating user-friendly interfaces using modern web technologies.
              </p>{" "}
              <p>
                My experience includes building frontend applications using{" "}
                <span className="text-foreground font-medium">React </span>and{" "}
                <span className="text-foreground font-medium">JavaScript </span>
                with a focus on clean and responsive user interfaces. Alongside
                frontend development, I have worked on projects in Android
                development using{" "}
                <span className="text-foreground font-medium">
                  Java{" "}
                </span>and{" "}
                <span className="text-foreground font-medium">Firebase</span>{" "}
                which helped me gain practical experience in building real-world
                applications.
              </p>
              <p>
                Currently, I’m focused on growing as a React developer while
                learning{" "}
                <span className="text-foreground font-medium">TypeScript</span>,{" "}
                <span className="text-foreground font-medium">Node.js</span>,
                and improving my understanding of{" "}
                <span className="text-foreground font-medium">MongoDB</span>, as
                I prepare to start my career in the IT industry.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm">
                <MapPin size={16} className="text-primary" />
                Udupi,Karnataka
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm">
                <Mail size={16} className="text-green-500" />
                Open to work
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 w-full lg:max-w-xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl px-4 py-3 md:px-6 md:py-4
 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition
${
  index === 0
    ? "md:col-start-1 md:row-start-1"
    : "md:col-start-2 md:row-start-2"
}
      `}
                >
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="flex items-start gap-3 pr-12">
                    <span
                      className="text-5xl md:text-6xl lg:text-7xl
font-bold text-orange-400/90 leading-tight"
                    >
                      {stat.value}
                    </span>
                    <div className="pt-2">
                      <h4 className="text-base sm:text-sm font-semibold uppercase tracking-wide text-white whitespace-normal">
                        {stat.title}
                      </h4>
                      <p className="text-sm sm:text-xs text-muted-foreground mt-1 leading-snug max-w-[260px]">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
