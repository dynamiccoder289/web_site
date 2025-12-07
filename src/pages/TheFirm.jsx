// import { Building2, Award, Globe, Users, Target } from "lucide-react";

// export default function TheFirm() {
//   const milestones = [
//     { year: "2023", event: "Excel Associates Conceptualized" },
//     { year: "2024", event: "Firm Officially Launched" },
//     { year: "2024", event: "First 50+ Clients Onboarded" },
//     { year: "2024", event: "Digital Operations & Advisory Expansion" },
//     { year: "2025", event: "Serving Clients Across Multiple Cities" },
//   ];

//   const capabilities = [
//     {
//       icon: <Building2 size={40} />,
//       title: "Modern Full-Service Firm",
//       description:
//         "Integrated accounting, taxation, compliance, and advisory solutions under one roof",
//     },
//     {
//       icon: <Users size={40} />,
//       title: "Young & Expert Team",
//       description:
//         "Dynamic chartered accountants with strong domain & regulatory expertise",
//     },
//     {
//       icon: <Globe size={40} />,
//       title: "Digital-First Presence",
//       description:
//         "Serving clients remotely across India using modern digital infrastructure",
//     },
//     {
//       icon: <Award size={40} />,
//       title: "Highest Professional Ethics",
//       description:
//         "Strong commitment to transparency, confidentiality, and compliance excellence",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* ✅ HERO SECTION WITH IMAGE + ABOUT US CONTEXT */}
//       <section
//         className="relative py-28 bg-center bg-cover"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/70"></div>

//         <div className="relative max-w-7xl mx-auto px-4 text-center">
//           <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-[var(--color-primary)] text-white">
//             About Us
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//             The Firm – Excel Associates
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             A modern chartered accountancy firm built on trust, ethics, and
//             technology-driven professional services.
//           </p>
//         </div>
//       </section>

//       {/* ✅ WHO WE ARE */}
//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
//               <div className="space-y-4 text-gray-700 leading-relaxed">
//                 <p>
//                   Excel Associates is a professionally managed chartered
//                   accountancy firm established with the vision of delivering
//                   reliable, ethical, and growth-driven financial solutions to
//                   businesses across India.
//                 </p>
//                 <p>
//                   Though we are a newly established firm, our leadership and
//                   core advisory team bring together strong industry exposure,
//                   regulatory expertise, and hands-on experience across multiple
//                   domains.
//                 </p>
//                 <p>
//                   We serve startups, MSMEs, corporates, and professionals in
//                   areas including taxation, audit, corporate compliance,
//                   business advisory, and financial structuring.
//                 </p>
//               </div>
//             </div>

//             <div>
//               <img
//                 src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Excel Associates Office"
//                 className="rounded-xl shadow-2xl w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ OUR CAPABILITIES */}
//       <section className="section-padding bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Capabilities
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Comprehensive solutions backed by qualification, compliance, and
//               commitment
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {capabilities.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-md text-center card-hover"
//               >
//                 <div className="inline-block p-4 bg-[var(--color-gray-50)] rounded-full text-[var(--color-primary)] mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ OUR JOURNEY (RECENTLY STARTED TIMELINE) */}
//       <section className="section-padding bg-white">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Journey
//             </h2>
//             <p className="text-gray-600">
//               Key milestones in our evolving growth story
//             </p>
//           </div>

//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

//             <div className="space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center ${
//                     index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                   }`}
//                 >
//                   <div
//                     className={`w-1/2 ${
//                       index % 2 === 0
//                         ? "pr-8 text-right"
//                         : "pl-8 text-left"
//                     }`}
//                   >
//                     <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
//                       <div className="text-2xl font-bold text-blue-600 mb-2">
//                         {milestone.year}
//                       </div>
//                       <p className="text-gray-700">{milestone.event}</p>
//                     </div>
//                   </div>

//                   <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

//                   <div className="w-1/2"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ OUR COMMITMENT */}
//       <section className="section-padding bg-blue-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <Target size={48} className="mx-auto mb-6 text-white" />
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Our Commitment
//           </h2>
//           <p className="text-xl text-blue-100 leading-relaxed">
//             We are committed to building long-term professional relationships
//             through integrity, consistency, quality service, and digitally
//             enabled advisory solutions that empower our clients’ financial
//             growth.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Building2, Award, Globe, TrendingUp, Users, Target, Clock, Shield, Brain, Rocket } from 'lucide-react';

export default function TheFirm() {
  const milestones = [
    { year: '2024', event: 'Excel Associates Founded', description: 'Launch of our modern accounting practice with cutting-edge technology' },
    { year: '2024', event: 'Digital-First Approach', description: 'Implementation of cloud-based accounting solutions from day one' },
    { year: '2025', event: 'Core Team Assembly', description: 'Onboarding of specialized chartered accountants and advisors' },
    { year: '2025', event: 'Client Foundation Phase', description: 'Building our initial portfolio with select visionary clients' },
    { year: '2026', event: 'Service Expansion', description: 'Planned diversification into specialized advisory services' },
  ];

  const capabilities = [
    {
      icon: <Rocket size={40} />,
      title: 'Forward-Thinking Approach',
      description: 'Leveraging modern technology and innovative solutions for contemporary business challenges',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Brain size={40} />,
      title: 'Strategic Mindset',
      description: 'Combining traditional accounting expertise with strategic business insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield size={40} />,
      title: 'Integrity & Transparency',
      description: 'Building trust through clear communication and ethical practices from day one',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Clock size={40} />,
      title: 'Agile Operations',
      description: 'Flexible, responsive service model adapting to evolving client needs',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const foundingPrinciples = [
    {
      title: "Innovation in Tradition",
      description: "We respect traditional accounting principles while embracing technological innovation to deliver superior value.",
      icon: "💡"
    },
    {
      title: "Client Partnership",
      description: "We view every client relationship as a long-term partnership focused on mutual growth and success.",
      icon: "🤝"
    },
    {
      title: "Excellence as Standard",
      description: "We set high standards for ourselves, ensuring quality and accuracy in every deliverable.",
      icon: "⭐"
    }
  ];

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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">2024</div>
                  <div className="text-sm">Year Founded</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">New</div>
                  <div className="text-sm">Modern Approach</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">Vision</div>
                  <div className="text-sm">Driven</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image - Modern Office/Team related to new firm */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
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
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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