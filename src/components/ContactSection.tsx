import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:sayanadhikary003@gmail.com" className="font-medium hover:text-primary transition-colors">
                    sayanadhikary003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919339712883" className="font-medium hover:text-primary transition-colors">
                    +91 93397 12883
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
