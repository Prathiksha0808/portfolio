import { ExternalLink, Github, Maximize2 } from "lucide-react";

const projects = [
  {
    title: "Movie Streaming Web Application ",
    description:
      "Developed a movie browsing web application that allows users to explore trending movies and TV shows, view detailed information, and search content through an intuitive and responsive interface.",
    details:
      "Integrated the TMDB API to fetch real-time movie and TV show data, including ratings, overviews, and genres. Implemented dynamic routing, search functionality, and optimized UI performance for a smooth user experience across devices.",
    technologies: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    codeUrl: "https://github.com/Prathiksha0808/Movie_app",
    liveUrl: "https://movie-app-inky-kappa.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bakeshop Management System ",
    description:
      "Developed a web-based online bakery application that allows users to browse products, register accounts, manage a shopping cart, and place orders through a simple and user-friendly interface.",
    details:
      "Built using PHP and MySQL with features including user authentication, product management, order processing, and an admin panel to manage product listings, track inventory, and oversee customer orders. Implemented responsive layouts for smooth usage across devices.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/Prathiksha0808/BakeShop",
    image:
      "https://images.unsplash.com/photo-1652891771857-e9c2dc024f9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "EPay Android Digital Wallet Application",
    description:
      "Developed an Android-based digital wallet application that enables users to securely manage wallet balance, add money, make payments, and view transaction history through a simple and intuitive interface.",
    details:
      "Built using Java and Firebase, the application includes user authentication, real-time wallet balance updates, payment processing, and transaction tracking. Implemented Firebase services for backend data storage and user management as part of an academic mini project.",
    technologies: ["Java", "Android", "Firebase", "XML"],

    codeUrl: "https://github.com/AnanyaBhatN/Epay-android-application",
    image:
      "https://images.unsplash.com/photo-1705948482595-606e2848c65b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
           <span className="gradient-text">Project</span> Showcase
          </h2>
          <p className="section-subtitle mx-auto">
            Explore my projects
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
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.details}
                </p>

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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
