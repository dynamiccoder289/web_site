// import { Award, Building2, TrendingUp, Users, Globe, CheckCircle, Star } from 'lucide-react';

// export default function Experience() {
//   const stats = [
//     { number: '15+', label: 'Years in Business', icon: <Award size={40} /> },
//     { number: '500+', label: 'Clients Served', icon: <Users size={40} /> },
//     { number: '5000+', label: 'Tax Returns Filed', icon: <TrendingUp size={40} /> },
//     { number: '200+', label: 'Companies Audited', icon: <Building2 size={40} /> },
//   ];

//   const industries = [
//     {
//       name: 'Manufacturing & Engineering',
//       clients: '80+',
//       description: 'From small-scale units to large manufacturing enterprises',
//     },
//     {
//       name: 'Information Technology',
//       clients: '60+',
//       description: 'Startups, SaaS companies, and IT service providers',
//     },
//     {
//       name: 'Retail & E-commerce',
//       clients: '50+',
//       description: 'Traditional retail and online marketplace sellers',
//     },
//     {
//       name: 'Real Estate & Construction',
//       clients: '45+',
//       description: 'Developers, contractors, and property consultants',
//     },
//     {
//       name: 'Healthcare & Pharmaceuticals',
//       clients: '40+',
//       description: 'Hospitals, clinics, diagnostic centers, and pharma distributors',
//     },
//     {
//       name: 'Financial Services',
//       clients: '35+',
//       description: 'NBFCs, insurance agents, and financial advisors',
//     },
//     {
//       name: 'Hospitality & Tourism',
//       clients: '30+',
//       description: 'Hotels, restaurants, travel agencies, and event companies',
//     },
//     {
//       name: 'Professional Services',
//       clients: '160+',
//       description: 'Consultants, law firms, agencies, and other service providers',
//     },
//   ];

//   const milestones = [
//     { year: '2008', event: 'Excel Associates founded by CA Rajesh Mehta' },
//     { year: '2010', event: 'Crossed 100 client milestone' },
//     { year: '2012', event: 'CA Priya Verma joins as Partner' },
//     { year: '2015', event: 'Launched dedicated GST practice' },
//     { year: '2018', event: 'Expanded to business advisory services' },
//     { year: '2020', event: 'CA Amit Singh elevated to Partner' },
//     { year: '2022', event: 'Achieved 500+ client milestone' },
//     { year: '2024', event: 'Celebrating 15+ years of excellence' },
//   ];

//   const testimonials = [
//     {
//       text: 'Excel Associates has been our trusted accounting partner for 8 years. Their expertise in tax planning has saved us lakhs in taxes while ensuring full compliance.',
//       client: 'Rajesh Kumar',
//       company: 'Tech Innovations Pvt Ltd',
//       industry: 'IT Services',
//       rating: 5,
//     },
//     {
//       text: 'Professional, responsive, and extremely knowledgeable. They helped us navigate GST implementation smoothly and continue to provide excellent ongoing support.',
//       client: 'Priya Sharma',
//       company: 'Fashion Boutique',
//       industry: 'Retail',
//       rating: 5,
//     },
//     {
//       text: 'Their audit services are thorough and insightful. Beyond compliance, they provided valuable recommendations that improved our internal controls and processes.',
//       client: 'Amit Patel',
//       company: 'Manufacturing Solutions',
//       industry: 'Manufacturing',
//       rating: 5,
//     },
//   ];

//   const recognitions = [
//     'Top CA Firm - Bangalore 2023',
//     'Excellence in Client Service Award',
//     'Member - ICAI',
//     'ISO 9001:2015 Certified',
//   ];

//   return (
//     <div className="min-h-screen">
//       <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <Award size={64} className="mx-auto mb-6" />
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Experience</h1>
//             <p className="text-xl text-blue-100">
//               15+ years of excellence in accounting, taxation, and business advisory
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg text-center card-hover">
//                 <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
//                 <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Experience</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               We have served clients across diverse industries, bringing specialized knowledge and best practices
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {industries.map((industry, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover">
//                 <div className="flex items-start justify-between mb-3">
//                   <Globe size={24} className="text-blue-600" />
//                   <span className="text-blue-600 font-bold text-lg">{industry.clients}</span>
//                 </div>
//                 <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
//                 <p className="text-gray-600 text-sm">{industry.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Key milestones in our 15+ year journey
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

//               <div className="space-y-8">
//                 {milestones.map((milestone, index) => (
//                   <div key={index} className="relative flex items-start gap-6">
//                     <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
//                       {milestone.year}
//                     </div>
//                     <div className="bg-white p-6 rounded-xl shadow-lg flex-grow">
//                       <p className="text-gray-700 font-medium">{milestone.event}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               What our clients say about working with us
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>

//                 <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

//                 <div className="border-t pt-4">
//                   <div className="font-semibold text-gray-900">{testimonial.client}</div>
//                   <div className="text-sm text-gray-600">{testimonial.company}</div>
//                   <div className="text-xs text-blue-600 mt-1">{testimonial.industry}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition & Memberships</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             {recognitions.map((recognition, index) => (
//               <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
//                 <CheckCircle size={24} className="text-blue-600 flex-shrink-0" />
//                 <span className="text-gray-700 font-medium">{recognition}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-blue-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience That Matters</h2>
//           <p className="text-xl text-blue-100 mb-8">
//             15+ years of serving businesses with integrity, expertise, and dedication. Let us put our experience
//             to work for you.
//           </p>
//           <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
//             Partner With Us
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Award, Building2, TrendingUp, Users, Globe, CheckCircle, Star, Clock, Target, Briefcase, ChevronRight, Trophy } from 'lucide-react';

export default function Experience() {
  const stats = [
    { number: '1+', label: 'Years of Excellence', icon: <Award size={40} />, description: 'Trusted financial partnership' },
    { number: '500+', label: 'Clients Served', icon: <Users size={40} />, description: 'Across diverse industries' },
    { number: '5000+', label: 'Tax Returns Filed', icon: <TrendingUp size={40} />, description: 'Accurate & timely compliance' },
    { number: '200+', label: 'Successful Audits', icon: <Briefcase size={40} />, description: 'Comprehensive financial reviews' },
  ];

  const industries = [
    {
      name: 'Manufacturing & Engineering',
      clients: '80+',
      description: 'From small-scale units to large manufacturing enterprises',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Information Technology',
      clients: '60+',
      description: 'Startups, SaaS companies, and IT service providers',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Retail & E-commerce',
      clients: '50+',
      description: 'Traditional retail and online marketplace sellers',
      color: 'from-rose-500 to-rose-700'
    },
    {
      name: 'Real Estate & Construction',
      clients: '45+',
      description: 'Developers, contractors, and property consultants',
      color: 'from-amber-500 to-amber-700'
    },
    {
      name: 'Healthcare & Pharmaceuticals',
      clients: '40+',
      description: 'Hospitals, clinics, diagnostic centers, and pharma distributors',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      name: 'Financial Services',
      clients: '35+',
      description: 'NBFCs, insurance agents, and financial advisors',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      name: 'Hospitality & Tourism',
      clients: '30+',
      description: 'Hotels, restaurants, travel agencies, and event companies',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      name: 'Professional Services',
      clients: '160+',
      description: 'Consultants, law firms, agencies, and service providers',
      color: 'from-violet-500 to-violet-700'
    },
  ];

  const milestones = [
    { year: '2008', event: 'Excel Associates founded with vision for excellence', highlight: true },
    { year: '2010', event: 'Crossed 100 client milestone - Rapid growth phase' },
    { year: '2012', event: 'Expanded services with strategic partnership additions' },
    { year: '2015', event: 'Launched dedicated GST practice - Market leadership' },
    { year: '2018', event: 'Introduced comprehensive business advisory services' },
    { year: '2020', event: 'Enhanced digital infrastructure for remote services' },
    { year: '2022', event: 'Achieved 50+ client trust milestone' },
    { year: '2024', event: 'Celebrating 1+ years of financial excellence', highlight: true },
  ];

  const testimonials = [
    {
      text: 'Excel Associates has been our trusted accounting partner for 8 years. Their proactive tax planning has consistently saved us significant amounts while ensuring 100% compliance.',
      client: 'Rajesh Kumar',
      company: 'Tech Innovations Pvt Ltd',
      industry: 'IT Services',
      rating: 5,
      duration: '8 Years Partner',
    },
    {
      text: 'Professional, responsive, and exceptionally knowledgeable. They transformed our financial processes during GST implementation and continue to deliver exceptional ongoing support.',
      client: 'Priya Sharma',
      company: 'Urban Fashion Boutique',
      industry: 'Retail & E-commerce',
      rating: 5,
      duration: '5 Years Partner',
    },
    {
      text: 'Their audit services go beyond compliance. The strategic recommendations improved our internal controls by 40% and enhanced our financial reporting accuracy significantly.',
      client: 'Amit Patel',
      company: 'Precision Manufacturing Solutions',
      industry: 'Manufacturing',
      rating: 5,
      duration: '6 Years Partner',
    },
  ];

  const recognitions = [
    { 
      title: 'Top CA Firm - Bangalore 2023', 
      organization: 'Business Excellence Awards',
      year: '2023'
    },
    { 
      title: 'Excellence in Client Service', 
      organization: 'Professional Services Awards',
      year: '2022'
    },
    { 
      title: 'Member - ICAI', 
      organization: 'Institute of Chartered Accountants',
      year: 'Since 2008'
    },
    { 
      title: 'ISO 9001:2015 Certified', 
      organization: 'Quality Management Systems',
      year: '2021'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Design */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-gray-900)] via-[var(--color-gray-800)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
  
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-secondary)] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Award className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium tracking-wide">Trusted Since 2008</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our 
              <span className="block text-[var(--color-primary)] mt-2">Experience</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
              15+ years of delivering exceptional accounting, taxation, and business advisory 
              services with precision, integrity, and client-focused excellence
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[140px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[140px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 min-w-[140px]">
                <div className="text-3xl font-bold text-[var(--color-primary)]">50+</div>
                <div className="text-sm">Industry Segments</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section
  className="relative overflow-hidden text-white py-10 md:py-14 bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1920')",
  }}
>
  {/* ✅ Dark Brand Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-900)]/90 to-[var(--color-primary-dark)]/30"></div>

  {/* ✅ Decorative Glow Effects (slightly reduced size for compact look) */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-12 left-8 w-72 h-72 bg-[var(--color-primary)] rounded-full mix-blend-overlay blur-3xl"></div>
    <div className="absolute bottom-12 right-8 w-64 h-64 bg-[var(--color-secondary)] rounded-full mix-blend-overlay blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      {/* ✅ Badge (reduced spacing) */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5">
        <Award className="w-4 h-4 text-[var(--color-primary)]" />
        <span className="text-xs font-medium tracking-wide">
          Trusted Since 2008
        </span>
      </div>

      {/* ✅ Headings (reduced bottom margins) */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
        Our
        <span className="block text-[var(--color-primary)] mt-1">
          Experience
        </span>
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
        Delivering reliable accounting, taxation, and business advisory services
        with precision, integrity, and client-focused excellence
      </p>

      {/* ✅ Stats (reduced padding & spacing) */}
      <div className="flex flex-wrap justify-center gap-3">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[120px]">
          <div className="text-2xl font-bold text-[var(--color-primary)]">
            1+
          </div>
          <div className="text-xs">Years Experience</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[120px]">
          <div className="text-2xl font-bold text-[var(--color-primary)]">
            50+
          </div>
          <div className="text-xs">Happy Clients</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[120px]">
          <div className="text-2xl font-bold text-[var(--color-primary)]">
            50+
          </div>
          <div className="text-xs">Industry Segments</div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Stats Section with Background Pattern */}
      <section className="relative section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center card-hover border border-gray-100"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-gradient-to-br from-gray-50 to-gray-100 w-20 h-20 -top-10 -right-10"></div>
                </div>
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience Section with Gradient Background */}
      <section className="section-padding bg-gradient-to-br from-white via-[var(--color-primary)]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Diverse Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Industry <span className="text-[var(--color-primary)]">Experience</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Serving businesses across diverse sectors with specialized financial solutions 
              and industry-specific expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 card-hover border border-gray-100"
              >
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute transform rotate-45 bg-gradient-to-br ${industry.color} w-24 h-24 -top-12 -right-12 opacity-10`}></div>
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${industry.color} text-white`}>
                    <Globe size={20} />
                  </div>
                  <span className="text-lg font-bold text-gray-900">{industry.clients}</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <div className="flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium">
                  <span>Learn More</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline with Background */}
      <section className="relative section-padding bg-gradient-to-b from-gray-50 to-white">
        {/* Diagonal background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_25%,rgba(68,68,68,.1)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.1)_75%,rgba(68,68,68,.1))] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Our Growth Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Milestones of <span className="text-[var(--color-primary)]">Excellence</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tracing our journey of growth, innovation, and continuous improvement
            </p>
          </div>

          <div className="relative">
            {/* Center timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`inline-block p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                      milestone.highlight 
                        ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white'
                        : 'bg-white'
                    }`}>
                      <div className={`text-2xl font-bold mb-2 ${
                        milestone.highlight ? 'text-white' : 'text-[var(--color-primary)]'
                      }`}>
                        {milestone.year}
                      </div>
                      <p className={`${
                        milestone.highlight ? 'text-white/90' : 'text-gray-700'
                      }`}>
                        {milestone.event}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                    milestone.highlight 
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

      {/* Testimonials with Gradient Background */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/5 via-white to-[var(--color-secondary)]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Client Voices
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Trusted <span className="text-[var(--color-primary)]">Partnerships</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from businesses who have experienced our commitment to excellence firsthand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8">
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-gray-100 opacity-50">"</div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.text}"</p>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold">
                      {testimonial.client.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.client}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{testimonial.industry}</span>
                    <span className="text-[var(--color-primary)] font-medium">{testimonial.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="relative section-padding bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <Trophy className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">Recognition & Credentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Excellence <span className="text-[var(--color-primary)]">Recognized</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Our commitment to quality and professionalism has been acknowledged through various accolades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{recognition.title}</h3>
                    <p className="text-gray-300 text-sm">{recognition.organization}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[var(--color-primary)] font-semibold">{recognition.year}</span>
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
          <Award size={64} className="mx-auto mb-8 text-white/90" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience That <span className="text-white/90">Delivers Results</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Leverage our 1+ years of expertise for your financial success. Partner with a firm 
            that combines experience with innovation for exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Schedule Your Consultation
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              View Our Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}