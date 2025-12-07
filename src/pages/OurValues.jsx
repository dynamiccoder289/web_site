// import { Shield, Heart, Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

// export default function OurValues() {
//   const values = [
//     {
//       icon: <Shield size={64} />,
//       title: 'Integrity',
//       description: 'We uphold the highest standards of professional ethics and maintain complete transparency in all our dealings. Trust is the foundation of our client relationships.',
//       color: 'blue',
//     },
//     {
//       icon: <Target size={64} />,
//       title: 'Excellence',
//       description: 'We are committed to delivering superior quality in every engagement. Our pursuit of excellence drives continuous improvement and professional development.',
//       color: 'green',
//     },
//     {
//       icon: <Heart size={64} />,
//       title: 'Client Focus',
//       description: 'Your success is our priority. We listen, understand, and tailor our services to meet your unique needs with personalized attention and care.',
//       color: 'red',
//     },
//     {
//       icon: <Lightbulb size={64} />,
//       title: 'Innovation',
//       description: 'We embrace technology and modern methodologies to provide efficient, effective solutions that keep you ahead in a dynamic business environment.',
//       color: 'yellow',
//     },
//     {
//       icon: <Users size={64} />,
//       title: 'Collaboration',
//       description: 'We believe in working together as partners. Our collaborative approach ensures alignment with your goals and seamless execution.',
//       color: 'purple',
//     },
//     {
//       icon: <TrendingUp size={64} />,
//       title: 'Accountability',
//       description: 'We take ownership of our commitments and deliver results. Our reputation is built on reliability, consistency, and meeting deadlines.',
//       color: 'orange',
//     },
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: 'bg-blue-50 text-blue-600',
//       green: 'bg-green-50 text-green-600',
//       red: 'bg-red-50 text-red-600',
//       yellow: 'bg-amber-50 text-amber-600',
//       purple: 'bg-violet-50 text-violet-600',
//       orange: 'bg-orange-50 text-orange-600',
//     };
//     return colors[color] || colors.blue;
//   };

//   return (
//     <div className="min-h-screen">
//       <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h1>
//             <p className="text-xl text-blue-100">
//               The principles that guide everything we do
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our values are more than words on a page. They shape our culture, guide our decisions, and define
//               how we serve our clients every single day. These principles have been the cornerstone of our success
//               for over 15 years.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
//                 <div className={`inline-block p-4 rounded-full mb-6 ${getColorClasses(value.color)}`}>
//                   {value.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-white p-12 rounded-2xl shadow-xl">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Living Our Values</h2>
//             <div className="space-y-6 text-gray-700 leading-relaxed">
//               <p>
//                 At Excel Associates, our values are not just aspirational statements. They are lived and demonstrated
//                 in every client interaction, every decision we make, and every service we deliver.
//               </p>
//               <p>
//                 We hold ourselves accountable to these principles and continuously evaluate our performance against
//                 them. Our team members are selected, trained, and rewarded based on their alignment with these core values.
//               </p>
//               <p>
//                 This commitment to our values has earned us the trust and loyalty of our clients, many of whom have been
//                 with us since our inception. It's what sets us apart in a competitive industry and what will continue to
//                 drive our success in the future.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-blue-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Values in Action</h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Experience the difference that value-driven service makes. Partner with a firm that puts principles into practice.
//           </p>
//           <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
//             Work With Us
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Shield, Heart, Lightbulb, Target, Users, TrendingUp, Star, Award, Handshake, Clock, Zap, Globe } from 'lucide-react';

export default function OurValues() {
  const coreValues = [
    {
      icon: <Shield size={48} />,
      title: 'Integrity & Ethics',
      description: 'Unyielding commitment to honesty, transparency, and ethical conduct in all our engagements',
      color: 'from-blue-500 to-blue-700',
      points: [
        'Complete financial transparency',
        'Confidentiality assured',
        'Ethical compliance framework'
      ]
    },
    {
      icon: <Target size={48} />,
      title: 'Excellence & Precision',
      description: 'Pursuing perfection in every deliverable with meticulous attention to detail',
      color: 'from-emerald-500 to-green-600',
      points: [
        '99.8% accuracy rate',
        'Continuous quality checks',
        'Industry best practices'
      ]
    },
    {
      icon: <Heart size={48} />,
      title: 'Client-Centricity',
      description: 'Putting client success at the heart of everything we do',
      color: 'from-rose-500 to-pink-600',
      points: [
        'Personalized service approach',
        'Dedicated relationship managers',
        'Proactive communication'
      ]
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Innovation & Agility',
      description: 'Embracing technology and creative thinking for smarter solutions',
      color: 'from-amber-500 to-orange-600',
      points: [
        'Digital-first approach',
        'Automated processes',
        'Future-ready solutions'
      ]
    },
    {
      icon: <Users size={48} />,
      title: 'Collaborative Partnership',
      description: 'Working together as an extension of your team for shared success',
      color: 'from-purple-500 to-violet-600',
      points: [
        'Seamless team integration',
        'Regular strategy sessions',
        'Shared goal alignment'
      ]
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Accountability & Results',
      description: 'Taking ownership and delivering measurable outcomes',
      color: 'from-indigo-500 to-blue-600',
      points: [
        'Performance metrics tracking',
        'Timely delivery commitment',
        'Result-oriented approach'
      ]
    },
  ];

  const valuePillars = [
    {
      number: '01',
      title: 'Trust Foundation',
      description: 'Building lasting relationships on transparency and reliability',
      icon: <Handshake size={32} />
    },
    {
      number: '02',
      title: 'Quality Commitment',
      description: 'Uncompromising standards in every service delivered',
      icon: <Award size={32} />
    },
    {
      number: '03',
      title: 'Growth Partnership',
      description: 'Actively contributing to our clients\' success stories',
      icon: <TrendingUp size={32} />
    },
    {
      number: '04',
      title: 'Future Ready',
      description: 'Adapting to evolving business landscapes and technologies',
      icon: <Zap size={32} />
    }
  ];

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
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">6</div>
                <div className="text-sm">Core Values</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">15+</div>
                <div className="text-sm">Years Upholding</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">100%</div>
                <div className="text-sm">Commitment</div>
              </div>
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
                  At Excel Associates, our values are not just corporate statements—they are living principles 
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
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Value-Based Client Success Stories</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
                  <div className="text-gray-700 font-medium">Ethical Practice Commitment</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Excel Associates Team Living Our Values - Professional Ethical Practice"
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