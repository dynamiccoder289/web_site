import { Building2, Award, Globe, TrendingUp, Users, Target, Clock, Shield, Brain, Rocket } from 'lucide-react';
import { FIRM_MILESTONES, FIRM_CAPABILITIES, FOUNDING_PRINCIPLES, FIRM_HERO_STATS, FIRM_IMAGES } from '../constants/theFirmConstants';

const CAPABILITY_ICONS = [
  <Rocket size={40} />,
  <Brain size={40} />,
  <Shield size={40} />,
  <Clock size={40} />,
];

export default function TheFirm() {
  const milestones = FIRM_MILESTONES;
  const capabilities = FIRM_CAPABILITIES.map((c, i) => ({ ...c, icon: CAPABILITY_ICONS[i] }));
  const foundingPrinciples = FOUNDING_PRINCIPLES;

  return (
    <div className="min-h-screen">
      {/* Custom Hero Section for "The Firm" */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-20">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-secondary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">New Beginnings • Founded 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Firm
                <span className="block text-[var(--color-primary-light)] mt-2 text-3xl md:text-4xl">
                  Building the Future of Accounting
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                A modern chartered accountancy practice founded in 2024 with a vision to redefine 
                financial services through innovation, integrity, and exceptional client experience.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {FIRM_HERO_STATS.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image - Modern Office/Team related to new firm */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={FIRM_IMAGES.hero}
                  alt="Excel Associates Modern Office - New Chartered Accountancy Firm"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gray-900)]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-md">
                    <p className="text-gray-900 font-semibold">
                      "We're not just starting a firm; we're starting a movement towards better, smarter financial services."
                    </p>
                    <p className="text-gray-600 text-sm mt-2">- Founding Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-medium mb-4">
                Our Founding Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Redefining Chartered Accountancy for the Modern Era
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Excel Associates was founded in 2024 by a group of visionary chartered accountants who recognized 
                  the need for a modern approach to financial services. We saw an opportunity to create a firm that 
                  combines traditional accounting excellence with contemporary technology and client-centric service.
                </p>
                <p>
                  Unlike traditional practices, we started with a blank slate—free from legacy systems and outdated 
                  processes. This allows us to build our firm around what truly matters: innovative solutions, 
                  transparent communication, and measurable client success.
                </p>
                <p>
                  Our founding team brings together decades of combined experience in diverse sectors, united by a 
                  shared commitment to building something exceptional. We're not just keeping up with industry changes; 
                  we're helping to drive them.
                </p>
              </div>
              
              {/* Founding Principles */}
              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {foundingPrinciples.map((principle, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5">
                    <div className="text-3xl mb-3">{principle.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">{principle.title}</h4>
                    <p className="text-sm text-gray-600">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  // src="https://images.unsplash.com/photo-1551836026-d5c2c0b4d9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                 src={FIRM_IMAGES.story}
                  alt="Excel Associates Founding Team - Modern Financial Services"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Startup Mindset</h4>
                    <p className="text-sm text-gray-600">Agile, innovative, client-focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-medium mb-4">
              Our Differentiators
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why We're Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a new firm, we have the advantage of building everything from the ground up with modern best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-medium mb-4">
              Our Roadmap
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Building Our Future</h2>
            <p className="text-gray-600">From our founding to our vision for growth</p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`inline-block p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                      milestone.year === '2024' 
                        ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white'
                        : 'bg-white'
                    }`}>
                      <div className={`text-2xl font-bold mb-2 ${
                        milestone.year === '2024' ? 'text-white' : 'text-[var(--color-primary)]'
                      }`}>
                        {milestone.year}
                      </div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        milestone.year === '2024' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {milestone.event}
                      </h4>
                      <p className={`text-sm ${
                        milestone.year === '2024' ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                    milestone.year === '2024' 
                      ? 'bg-[var(--color-primary)] animate-pulse' 
                      : 'bg-[var(--color-secondary)]'
                  }`}></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-white/20 rounded-full mb-6">
            <Target size={48} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            As a new firm, we bring fresh energy, innovative thinking, and an unwavering commitment to your success. 
            We're building our reputation one client at a time, ensuring that every engagement receives our full attention 
            and expertise.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-medium italic mb-4">
              "We may be new, but our standards are timeless. Excellence is not just our goal—it's our starting point."
            </p>
            <p className="text-white/80">— The Excel Associates Team</p>
          </div>
        </div>
      </section>
    </div>
  );
}