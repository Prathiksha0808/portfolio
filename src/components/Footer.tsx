import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Prathiksha. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Prathiksha0808"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prathiksha-23b740361/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kotianprathiksha08@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
