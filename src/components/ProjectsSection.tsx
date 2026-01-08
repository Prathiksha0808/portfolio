import { ExternalLink, Github, Maximize2 } from 'lucide-react';

const projects = [
  {
    title: 'Crypto Verse – Digital Assets Hub',
    description:
      'Built a cryptocurrency tracking platform that consolidated live prices, market stats, and news into one dashboard, reducing information lookup time by 40%.',
    details:
      'Integrated CoinRanking API & News API via RapidAPI, improving data accuracy and enabling real-time updates within 2s latency.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Redux Toolkit', 'Chart.js', 'RapidAPI'],
    codeUrl: 'https://github.com/sayanadhi03/Crypto-Verse',
    liveUrl: 'https://crypto-verse-kappa.vercel.app/',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'AI Thief Detection System',
    description:
      'Built a real-time object detection security system using TensorFlow.js (COCO-SSD) for browser-based AI inference.',
    details:
      'Implemented person detection with bounding boxes and audio alerts, running entirely on the client-side for privacy.',
    technologies: ['Next.js', 'TensorFlow.js', 'React', 'Tailwind CSS'],
    codeUrl: 'https://github.com/sayanadhi03/AI-Thief-Detector',
    liveUrl: 'https://ai-thief-detector-gamma.vercel.app/',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Weather App 🌤️',
    description:
      'Built a modern weather application providing real-time weather data, 5-day forecasts, and AQI information for cities worldwide.',
    details:
      'Integrated Air Quality Index with health insights and multi-city weather tracking for comprehensive environmental monitoring.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    codeUrl: 'https://github.com/sayanadhi03/weather-app',
    liveUrl: 'https://weather-app-eight-livid-25.vercel.app/',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=60',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Interactive <span className="gradient-text">Project</span> Showcase
          </h2>
          <p className="section-subtitle mx-auto">
            Explore my portfolio projects with interactive following pointer effects
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Hover over any card to experience the magic ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <p className="text-muted-foreground text-sm mb-4">{project.details}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-secondary/80 border border-border/50 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/80 border border-border/50 rounded-lg text-sm hover:border-primary/50 transition-all"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 border border-border/50 rounded-full text-sm text-muted-foreground">
            <span>Hover over any project card to see the following pointer effect</span>
            <span className="text-primary">Interactive Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
