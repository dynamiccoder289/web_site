// import { Shield, FileCheck, Search, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

// export default function AuditAssurance() {
//   const services = [
//     {
//       icon: <Shield size={48} />,
//       title: 'Statutory Audit',
//       description: 'Comprehensive audit services as per Companies Act and regulatory requirements',
//       features: [
//         'Financial statement audit',
//         'Compliance verification',
//         'Internal control assessment',
//         'Audit report preparation',
//       ],
//     },
//     {
//       icon: <FileCheck size={48} />,
//       title: 'Internal Audit',
//       description: 'Independent evaluation of operations, risk management, and controls',
//       features: [
//         'Operational audit',
//         'Process evaluation',
//         'Risk assessment',
//         'Recommendations for improvement',
//       ],
//     },
//     {
//       icon: <Search size={48} />,
//       title: 'Tax Audit',
//       description: 'Audit under Income Tax Act for businesses exceeding specified limits',
//       features: [
//         'Form 3CA/3CB preparation',
//         'Form 3CD certification',
//         'Tax compliance review',
//         'Documentation verification',
//       ],
//     },
//     {
//       icon: <TrendingUp size={48} />,
//       title: 'Management Audit',
//       description: 'Evaluation of management effectiveness and strategic decision-making',
//       features: [
//         'Performance assessment',
//         'Strategic review',
//         'Efficiency analysis',
//         'Best practice recommendations',
//       ],
//     },
//   ];

//   const approach = [
//     {
//       step: '1',
//       title: 'Planning',
//       description: 'Understanding business, identifying risks, and developing audit strategy',
//     },
//     {
//       step: '2',
//       title: 'Fieldwork',
//       description: 'Gathering evidence, testing controls, and substantive procedures',
//     },
//     {
//       step: '3',
//       title: 'Analysis',
//       description: 'Evaluating findings, assessing compliance, and forming conclusions',
//     },
//     {
//       step: '4',
//       title: 'Reporting',
//       description: 'Delivering comprehensive audit report with recommendations',
//     },
//   ];

//   const benefits = [
//     'Enhanced credibility and stakeholder confidence',
//     'Identification of operational inefficiencies',
//     'Improved internal controls and governance',
//     'Regulatory compliance assurance',
//     'Risk mitigation and fraud detection',
//     'Strategic insights for better decision-making',
//   ];

//   return (
//     <div className="min-h-screen">
//       <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <Shield size={64} className="mx-auto mb-6" />
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Audit & Assurance Services</h1>
//             <p className="text-xl text-blue-100">
//               Building trust through independent, thorough, and professional audit services
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Audit Services</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Comprehensive audit and assurance solutions tailored to your business needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
//                 <div className="text-blue-600 mb-4">{service.icon}</div>
//                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>

//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-2">
//                       <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Audit Approach</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               A systematic and risk-based methodology ensuring comprehensive coverage
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {approach.map((item, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
//                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Audit Services?</h2>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Our audit services go beyond compliance. We provide valuable insights that help you strengthen
//                 internal controls, improve operational efficiency, and make informed business decisions.
//               </p>

//               <div className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 text-lg">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <img
//                 src="https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Audit Services"
//                 className="rounded-xl shadow-2xl w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-blue-50">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
//             <div className="flex items-start gap-4">
//               <AlertTriangle size={32} className="text-blue-600 flex-shrink-0" />
//               <div>
//                 <h3 className="text-2xl font-bold mb-3">Industry Expertise</h3>
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   Our audit team has extensive experience across diverse industries including manufacturing, IT services,
//                   retail, real estate, healthcare, financial services, and NGOs. We understand industry-specific risks,
//                   compliance requirements, and best practices.
//                 </p>
//                 <p className="text-gray-700 leading-relaxed">
//                   This specialized knowledge enables us to conduct more effective audits and provide relevant,
//                   actionable recommendations.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-padding bg-blue-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Ensure compliance, strengthen controls, and gain valuable insights with our professional audit services
//           </p>
//           <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
//             Request Audit Consultation
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Shield, FileCheck, Search, TrendingUp, CheckCircle, AlertTriangle, Users, Clock, Target, Zap } from 'lucide-react';

export default function AuditAssurance() {
  const services = [
    {
      icon: <Shield size={40} />,
      title: 'Statutory Audit',
      description: 'Compliance with Companies Act requirements',
      features: [
        'Financial statement verification',
        'Regulatory compliance check',
        'Internal control review',
        'Detailed audit reporting'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FileCheck size={40} />,
      title: 'Internal Audit',
      description: 'Operational efficiency & risk management',
      features: [
        'Process optimization review',
        'Risk assessment',
        'Control effectiveness',
        'Improvement recommendations'
      ],
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Search size={40} />,
      title: 'Tax Audit',
      description: 'Income Tax Act compliance verification',
      features: [
        'Tax filing accuracy check',
        'Form 3CA/3CB preparation',
        'Documentation verification',
        'Compliance certification'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Management Review',
      description: 'Strategic performance assessment',
      features: [
        'Performance analysis',
        'Strategic alignment check',
        'Efficiency evaluation',
        'Growth recommendations'
      ],
      color: 'from-purple-500 to-violet-600'
    },
  ];

  const keyBenefits = [
    {
      icon: <Users size={24} />,
      title: 'Credibility Boost',
      description: 'Enhanced stakeholder trust through independent verification'
    },
    {
      icon: <Clock size={24} />,
      title: 'Compliance Assurance',
      description: 'Timely adherence to all regulatory requirements'
    },
    {
      icon: <Target size={24} />,
      title: 'Risk Management',
      description: 'Identification and mitigation of financial risks'
    },
    {
      icon: <Zap size={24} />,
      title: 'Operational Efficiency',
      description: 'Process improvements for better performance'
    }
  ];

  const whyChooseUs = [
    'Modern audit technology & approaches',
    'Personalized attention to each client',
    'Clear, actionable audit reports',
    'Focus on value-added insights',
    'Digital-first documentation system',
    'Transparent communication & pricing'
  ];

  const importantPoints = [
    'Audits build investor confidence and business credibility',
    'Regular audits prevent financial mismanagement and fraud',
    'Professional audit reports are essential for funding & loans',
    'Audit findings help improve business processes',
    'Compliance avoids legal penalties and fines',
    'Audits provide objective business performance insights'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Shield size={48} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Audit & Assurance Services</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Professional audit services for compliance, transparency, and business improvement
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Compliance Focused</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Modern Approach</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Value Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Audit Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit solutions designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Key Benefits of Audit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why professional audit services are essential for your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional Audit Team Working"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Important Points About Audit Services
              </h2>
              
              <div className="space-y-4 mb-8">
                {importantPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Why Choose Us?</h3>
                    <div className="space-y-2">
                      {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple Audit Process</h2>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Initial Consultation</h3>
                <p className="text-sm text-gray-600">Understanding your requirements</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Planning</h3>
                <p className="text-sm text-gray-600">Strategy & scope definition</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Execution</h3>
                <p className="text-sm text-gray-600">Detailed examination & testing</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold mb-2">Reporting</h3>
                <p className="text-sm text-gray-600">Clear findings & recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Professional Audit Services</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ensure compliance, build credibility, and improve your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Start Your Audit
            </button>
            <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Download Audit Checklist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}