import { Shield, Heart, Lightbulb, Target, Users, TrendingUp, Star, Award, Handshake, Clock, Zap, Globe } from 'lucide-react';
import { CORE_VALUES, VALUE_PILLARS, VALUES_HERO_STATS, VALUES_LIVING_STATS } from '../constants/ourValuesConstants';

const VALUE_ICONS = [
  <Shield size={48} />,
  <Target size={48} />,
  <Heart size={48} />,
  <Lightbulb size={48} />,
  <Users size={48} />,
  <TrendingUp size={48} />,
];

const PILLAR_ICONS = [
  <Handshake size={32} />,
  <Award size={32} />,
  <TrendingUp size={32} />,
  <Zap size={32} />,
];

export default function OurValues() {
  const coreValues = CORE_VALUES.map((v, i) => ({ ...v, icon: VALUE_ICONS[i] }));
  const valuePillars = VALUE_PILLARS.map((p, i) => ({ ...p, icon: PILLAR_ICONS[i] }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-[var(--color-primary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Star className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium tracking-wide">Our Guiding Principles</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our 
              <span className="block text-[var(--color-primary)] mt-2">Core Values</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
              The unwavering principles that define our culture, guide our decisions, 
              and shape every interaction with our clients
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {VALUES_HERO_STATS.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((pillar, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100">
                  <div className="text-5xl font-bold text-gray-200 mb-4">{pillar.number}</div>
                  <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              The Principles That <span className="text-[var(--color-primary)]">Drive Us</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              These six core values are embedded in our DNA. They influence how we hire, how we work, 
              and how we measure success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-gradient-to-br from-gray-100 to-gray-50 w-24 h-24 -top-12 -right-12"></div>
                </div>
                
                <div className="p-8 relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                  
                  <div className="space-y-3">
                    {value.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Our Values */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/5 via-white to-[var(--color-secondary)]/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-6">
                Values in Practice
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                More Than <span className="text-[var(--color-primary)]">Words</span> on a Page
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Somasekhara & Associates, our values are not just corporate statements—they are living principles 
                  that shape our daily operations, decision-making processes, and client relationships.
                </p>
                <p>
                  We have built a culture where these values are celebrated, measured, and reinforced through 
                  our performance systems, training programs, and recognition initiatives.
                </p>
                <p>
                  Every team member undergoes comprehensive value-based training, and our leadership team 
                  regularly reviews how well we're living up to these principles in our service delivery.
                </p>
              </div>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {VALUES_LIVING_STATS.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Somasekhara & Associates Team Living Our Values - Professional Ethical Practice"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Value-Driven Excellence</h4>
                    <p className="text-sm text-gray-600">Recognized for ethical practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Globe size={64} className="mx-auto mb-8 text-white/90" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience Value-Driven <span className="text-white/90">Excellence</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with a firm where principles matter as much as performance. 
            Let's build success together on a foundation of shared values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Your Journey With Us
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              Download Our Value Charter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}