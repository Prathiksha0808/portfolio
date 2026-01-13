import { useEffect, useState } from "react";
import { MapPin, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const roles = ["REACT DEVELOPER"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <div className="floating-orb w-96 h-96 bg-orange-500/30 top-20 -left-48" />
      <div className="floating-orb w-72 h-72 bg-amber-500/20 bottom-20 right-0" />
      <div className="floating-orb w-48 h-48 bg-orange-600/20 top-1/2 right-1/4" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left ">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">
              Hey, I'm <span className="gradient-text">Prathiksha</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-400 mb-6">
              <MapPin size={18} />
              <span>Karnataka, India</span>
            </div>

            <div className="text-xl md:text-3xl font-semibold font-heading tracking-[0.18em] text-white/80 mb-8 h-8">
              <span>{displayText}</span>
              <span className="animate-blink text-primary">|</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/Prathiksha0808"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/80 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prathiksha-23b740361/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/80 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://drive.google.com/file/d/1yucwOXhqpZzxeVfid30tICb8fhoK8VmK/view?usp=sharing"
                className="flex items-center gap-2 px-6 py-3 bg-secondary/80 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Resume
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:max-w-lg flex justify-center relative">
            <div className="relative">
              {/* Floating particles */}
              <div className="absolute top-10 -left-10 w-2 h-2 bg-orange-400/60 rounded-full animate-float" />
              <div
                className="absolute top-1/3 -right-12 w-3 h-3 bg-amber-400/50 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 -left-8 w-2 h-2 bg-orange-300/40 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute bottom-10 right-0 w-4 h-4 bg-red-400/40 rounded-full animate-float"
                style={{ animationDelay: "0.5s" }}
              />

              {/* Image Container */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-500/50 animate-pulse-glow relative">
                <img
                  src={profileImage}
                  alt="Prathiksha"
                  className="w-full h-full object-cover object-[50%_25%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(0 0% 7%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
