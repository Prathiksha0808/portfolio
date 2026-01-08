import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const stats = [
  { icon: '📚', value: '27', label: 'Public Repos' },
  { icon: '⭐', value: '2', label: 'Total Stars' },
  { icon: '🍴', value: '1', label: 'Total Forks' },
  { icon: '👥', value: '3', label: 'Followers' },
  { icon: '➕', value: '1', label: 'Following' },
  { icon: '💻', value: '0', label: 'Contributions' },
];

const languages = [
  { name: 'JavaScript', repos: 14, percentage: 63.6, color: 'bg-yellow-400' },
  { name: 'Python', repos: 5, percentage: 22.7, color: 'bg-blue-500' },
  { name: 'Jupyter Notebook', repos: 1, percentage: 4.5, color: 'bg-orange-500' },
  { name: 'C++', repos: 1, percentage: 4.5, color: 'bg-pink-500' },
  { name: 'TypeScript', repos: 1, percentage: 4.5, color: 'bg-blue-400' },
];

const GitHubSection = () => {
  return (
    <section className="py-20 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            GitHub <span className="gradient-text">Insights</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into my coding journey and contributions to the open-source community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="text-2xl mb-2">{stat.icon}</span>
              <span className="text-2xl font-bold font-heading">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Languages */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold font-heading mb-6">🚀 Top Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {lang.repos} repos · {lang.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${lang.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-6">
              <img
                src="https://avatars.githubusercontent.com/u/183743793?v=4"
                alt="GitHub Avatar"
                className="w-20 h-20 rounded-full border-2 border-primary/50"
              />
              <div>
                <h3 className="text-xl font-bold font-heading">Sayan Adhikary</h3>
                <p className="text-muted-foreground">@sayanadhi03</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              A passionate web developer from India.
              <br />
              Full Stack || MERN || DSA in C++
              <br />
              Open to learn & collaboration.
              <br />
              Currently looking for opportunities.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                Kolkata
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                Joined 10/3/2024
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-sm">📊 Quick Stats</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Repositories</span>
                  <span>27</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stars Earned</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Forks Created</span>
                  <span>1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network</span>
                  <span>4</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/sayanadhi03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
            >
              <span>👨‍💻</span>
              View Full GitHub Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
