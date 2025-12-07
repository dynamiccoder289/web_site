// import { Award, Mail, Linkedin } from 'lucide-react';

// export default function Leadership() {
//   const leaders = [
//     {
//       name: 'CA Rajesh Mehta',
//       position: 'Senior Partner & Founder',
//       qualification: 'FCA, DISA',
//       experience: '20+ Years',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
//       specialization: 'Corporate Tax, Statutory Audit, Business Strategy',
//       bio: 'CA Rajesh Mehta founded Excel Associates in 2008 with a vision to provide world-class accounting and financial services. With over two decades of experience, he has advised numerous corporations on tax planning, mergers & acquisitions, and financial restructuring. His leadership has been instrumental in building the firm\'s reputation for excellence.',
//       education: ['B.Com, University of Mumbai', 'Chartered Accountancy, ICAI', 'DISA (Information Systems Audit)'],
//       achievements: [
//         'Advised 100+ companies on tax optimization',
//         'Led successful audits for Fortune 500 companies',
//         'Speaker at national CA conferences',
//       ],
//     },
//     {
//       name: 'CA Priya Verma',
//       position: 'Partner',
//       qualification: 'FCA, CFA',
//       experience: '15+ Years',
//       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
//       specialization: 'Financial Advisory, GST Compliance, Investment Planning',
//       bio: 'CA Priya Verma joined Excel Associates in 2012 and was elevated to Partner in 2018. She heads the Financial Advisory and GST practice. Known for her analytical acumen and client-centric approach, she has helped numerous businesses navigate complex regulatory landscapes and achieve sustainable growth.',
//       education: ['B.Com (Hons), Delhi University', 'Chartered Accountancy, ICAI', 'CFA (Chartered Financial Analyst)'],
//       achievements: [
//         'Led GST implementation for 200+ clients',
//         'Expert in financial modeling and valuation',
//         'Published articles on GST and taxation',
//       ],
//     },
//     {
//       name: 'CA Amit Singh',
//       position: 'Partner',
//       qualification: 'ACA, MBA (Finance)',
//       experience: '12+ Years',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
//       specialization: 'Startup Consulting, Fundraising, Compliance',
//       bio: 'CA Amit Singh specializes in working with startups and high-growth companies. He joined the firm in 2015 and was made Partner in 2020. His expertise in fundraising, venture capital advisory, and startup compliance has made him a trusted advisor to entrepreneurs and investors alike.',
//       education: ['B.Com, Bangalore University', 'Chartered Accountancy, ICAI', 'MBA (Finance), IIM Bangalore'],
//       achievements: [
//         'Advised 50+ startups on fundraising',
//         'Facilitated investments worth $100M+',
//         'Mentor at leading startup incubators',
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h1>
//             <p className="text-xl text-blue-100">
//               Meet the experienced professionals guiding Excel Associates
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leaders</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               A team of seasoned chartered accountants with diverse expertise and a shared commitment to client success
//             </p>
//           </div>

//           <div className="space-y-16">
//             {leaders.map((leader, index) => (
//               <div
//                 key={index}
//                 className={`grid lg:grid-cols-2 gap-12 items-start ${
//                   index % 2 === 1 ? 'lg:grid-flow-dense' : ''
//                 }`}
//               >
//                 <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="w-full h-96 object-cover rounded-xl shadow-2xl"
//                   />

//                   <div className="mt-6 bg-blue-50 p-6 rounded-xl">
//                     <div className="flex items-center gap-4 mb-4">
//                       <Award size={24} className="text-blue-600" />
//                       <h4 className="font-semibold text-lg">Key Achievements</h4>
//                     </div>
//                     <ul className="space-y-2">
//                       {leader.achievements.map((achievement, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-gray-700">
//                           <span className="text-blue-600 mt-1">•</span>
//                           <span>{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
//                   <div className="mb-6">
//                     <h3 className="text-3xl font-bold mb-2">{leader.name}</h3>
//                     <p className="text-xl text-blue-600 font-semibold mb-2">{leader.position}</p>
//                     <p className="text-gray-600 mb-4">{leader.qualification}</p>

//                     <div className="flex gap-3">
//                       <a
//                         href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@excelassociates.com`}
//                         className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition"
//                       >
//                         <Mail size={20} />
//                       </a>
//                       <a
//                         href="#"
//                         className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition"
//                       >
//                         <Linkedin size={20} />
//                       </a>
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     <div>
//                       <h4 className="font-semibold text-lg mb-2">Experience</h4>
//                       <p className="text-gray-700">{leader.experience} in {leader.specialization}</p>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-lg mb-2">About</h4>
//                       <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-lg mb-2">Education</h4>
//                       <ul className="space-y-1">
//                         {leader.education.map((edu, idx) => (
//                           <li key={idx} className="text-gray-700 flex items-start gap-2">
//                             <span className="text-blue-600 mt-1">•</span>
//                             <span>{edu}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-lg mb-2">Areas of Expertise</h4>
//                       <p className="text-gray-700">{leader.specialization}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Philosophy</h2>
//           <p className="text-gray-700 text-lg leading-relaxed mb-8">
//             Our leadership team believes in leading by example, fostering a culture of continuous learning, and
//             empowering every team member to deliver excellence. We are committed to staying ahead of regulatory
//             changes, embracing innovation, and maintaining the highest standards of professional integrity.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Together, we work towards our shared vision of being the most trusted and client-centric chartered
//             accountancy firm in the region.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

import { Award, Mail, Linkedin, BookOpen, Briefcase, GraduationCap, Target, Users, Star, ChevronRight } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: 'CA Rajesh Mehta',
      position: 'Senior Partner & Founder',
      qualification: 'FCA, DISA',
      experience: '20+ Years',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialization: 'Corporate Tax, Statutory Audit, Business Strategy',
      bio: 'Founded Excel Associates with a vision to create a world-class financial services firm that combines traditional expertise with modern solutions. With over two decades of experience, he has guided corporations through complex financial landscapes, specializing in tax optimization and strategic business advisory.',
      education: ['B.Com, University of Mumbai', 'Chartered Accountancy, ICAI', 'DISA (Information Systems Audit)'],
      achievements: [
        'Advised 100+ multinational corporations on tax planning',
        'Led statutory audits for Fortune 500 companies',
        'Regular speaker at ICAI national conferences',
        'Pioneered digital transformation in traditional accounting',
      ],
      expertise: ['Tax Planning & Strategy', 'Mergers & Acquisitions', 'Financial Restructuring', 'Risk Management'],
      contact: 'rajesh.mehta@excelassociates.in'
    },
    {
      name: 'CA Priya Verma',
      position: 'Partner',
      qualification: 'FCA, CFA',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialization: 'Financial Advisory, GST Compliance, Investment Planning',
      bio: 'Leads our Financial Advisory practice with exceptional analytical skills and client-focused approach. Her expertise in navigating complex regulatory frameworks has helped numerous businesses achieve compliance excellence while optimizing their financial performance.',
      education: ['B.Com (Hons), Delhi University', 'Chartered Accountancy, ICAI', 'CFA (Chartered Financial Analyst)'],
      achievements: [
        'Successfully implemented GST for 200+ enterprise clients',
        'Expert in financial modeling and business valuation',
        'Published author on contemporary tax matters',
        'Mentor for women in finance initiatives',
      ],
      expertise: ['GST Advisory', 'Financial Modeling', 'Business Valuation', 'Regulatory Compliance'],
      contact: 'priya.verma@excelassociates.in'
    },
    {
      name: 'CA Amit Singh',
      position: 'Partner',
      qualification: 'ACA, MBA (Finance)',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialization: 'Startup Consulting, Fundraising, Compliance',
      bio: 'Specializes in guiding startups and high-growth companies through their financial journey. His unique blend of CA expertise and MBA strategic thinking has made him the go-to advisor for entrepreneurs seeking funding and scalable financial systems.',
      education: ['B.Com, Bangalore University', 'Chartered Accountancy, ICAI', 'MBA (Finance), IIM Bangalore'],
      achievements: [
        'Facilitated $100M+ in startup funding',
        'Advised 50+ early-stage companies',
        'Regular mentor at leading startup incubators',
        'Developed proprietary financial frameworks for startups',
      ],
      expertise: ['Fundraising Strategy', 'Startup Finance', 'Investor Relations', 'Growth Planning'],
      contact: 'amit.singh@excelassociates.in'
    },
  ];

  const leadershipPrinciples = [
    {
      title: 'Lead by Example',
      description: 'Our leaders are actively involved in client engagements, setting the standard for excellence',
      icon: '👥'
    },
    {
      title: 'Empowerment Culture',
      description: 'We believe in empowering team members to take ownership and grow professionally',
      icon: '🚀'
    },
    {
      title: 'Continuous Learning',
      description: 'Committed to staying ahead of industry trends and regulatory changes',
      icon: '📚'
    },
    {
      title: 'Client-Centric Innovation',
      description: 'Continuously innovating to provide better solutions for our clients',
      icon: '💡'
    }
  ];

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
              to client success at Excel Associates
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[160px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">50+</div>
                <div className="text-sm">Combined Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[160px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">3</div>
                <div className="text-sm">Expert Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[160px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">500+</div>
                <div className="text-sm">Clients Guided</div>
              </div>
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
              At Excel Associates, leadership is about more than just experience—it's about vision, mentorship, 
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
      <section className="section-padding bg-white">
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
                {/* Decorative background for alternating pattern */}
                <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-1/2 h-4/5 rounded-3xl ${
                  index % 2 === 0 
                    ? 'left-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent' 
                    : 'right-0 bg-gradient-to-l from-[var(--color-secondary)]/5 to-transparent'
                }`}></div>
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center relative ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Image Column */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      {/* Main Image */}
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Floating Qualification Badge */}
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

                    {/* Achievements Card */}
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

                  {/* Content Column */}
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

                      {/* Contact Buttons */}
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
                      {/* Bio */}
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                          Professional Profile
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                      </div>

                      {/* Expertise */}
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

                      {/* Education */}
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
      </section>

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