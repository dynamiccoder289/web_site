import { Award, Mail, Linkedin, BookOpen, Briefcase, GraduationCap, Target, Users, Star, ChevronRight } from 'lucide-react';
import { LEADERS, LEADERSHIP_PRINCIPLES, LEADERSHIP_STATS } from '../constants/leadershipConstants';

export default function Leadership() {
  const leaders = LEADERS;
  const leadershipPrinciples = LEADERSHIP_PRINCIPLES;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-secondary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Users className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium tracking-wide">Guiding Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our 
              <span className="block text-[var(--color-primary)] mt-2">Leadership</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
              Meet the visionary professionals who lead with expertise, integrity, and a commitment 
              to client success at Somasekhara & Associates
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {LEADERSHIP_STATS.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[160px]">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-[var(--color-primary)]">Leadership Philosophy</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              At Somasekhara & Associates, leadership is about more than just experience—it's about vision, mentorship, 
              and creating lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {leadershipPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Meet Our Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Seasoned Experts, <span className="text-[var(--color-primary)]">Visionary Leaders</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of experience with forward-thinking approaches to deliver exceptional results
            </p>
          </div>

          <div className="space-y-20">
            {leaders.map((leader, index) => (
              <div key={index} className="relative">
                <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-1/2 h-4/5 rounded-3xl ${
                  index % 2 === 0 
                    ? 'left-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent' 
                    : 'right-0 bg-gradient-to-l from-[var(--color-secondary)]/5 to-transparent'
                }`}></div>
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center relative ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                      </div>

                      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Expertise</h4>
                            <p className="text-sm text-gray-600">{leader.qualification}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <Star className="w-5 h-5 text-[var(--color-primary)]" />
                        <h4 className="font-bold text-lg text-gray-900">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-8 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full"></div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{leader.name}</h3>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-xl font-semibold text-[var(--color-primary)] mb-1">{leader.position}</p>
                        <p className="text-gray-600">{leader.experience} of Professional Excellence</p>
                      </div>

                      <div className="flex items-center gap-4 mb-8">
                        <a
                          href={`mailto:${leader.contact}`}
                          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-3 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Mail size={20} />
                          <span className="font-medium">Connect</span>
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                        >
                          <Linkedin size={20} />
                          <span className="font-medium">LinkedIn</span>
                        </a>
                      </div>
                    </div>

                    <div className="space-y-8">
                 
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                          Professional Profile
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                      </div>

                    
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <Target className="w-5 h-5 text-[var(--color-primary)]" />
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {leader.expertise.map((expertise, idx) => (
                            <span key={idx} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium">
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <GraduationCap className="w-5 h-5 text-[var(--color-primary)]" />
                          Education & Qualifications
                        </h4>
                        <ul className="space-y-3">
                          {leader.education.map((edu, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2"></div>
                              <span className="text-gray-700">{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Users size={64} className="mx-auto mb-8 text-white/90" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Connect With Our <span className="text-white/90">Leadership</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our partners are actively involved in client engagements. Schedule a direct consultation 
            with our leadership team for strategic financial guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Leadership Consultation
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              Meet Our Full Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}