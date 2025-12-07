import { Shield, FileCheck, Search, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

export default function AuditAssurance() {
  const services = [
    {
      icon: <Shield size={48} />,
      title: 'Statutory Audit',
      description: 'Comprehensive audit services as per Companies Act and regulatory requirements',
      features: [
        'Financial statement audit',
        'Compliance verification',
        'Internal control assessment',
        'Audit report preparation',
      ],
    },
    {
      icon: <FileCheck size={48} />,
      title: 'Internal Audit',
      description: 'Independent evaluation of operations, risk management, and controls',
      features: [
        'Operational audit',
        'Process evaluation',
        'Risk assessment',
        'Recommendations for improvement',
      ],
    },
    {
      icon: <Search size={48} />,
      title: 'Tax Audit',
      description: 'Audit under Income Tax Act for businesses exceeding specified limits',
      features: [
        'Form 3CA/3CB preparation',
        'Form 3CD certification',
        'Tax compliance review',
        'Documentation verification',
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Management Audit',
      description: 'Evaluation of management effectiveness and strategic decision-making',
      features: [
        'Performance assessment',
        'Strategic review',
        'Efficiency analysis',
        'Best practice recommendations',
      ],
    },
  ];

  const approach = [
    {
      step: '1',
      title: 'Planning',
      description: 'Understanding business, identifying risks, and developing audit strategy',
    },
    {
      step: '2',
      title: 'Fieldwork',
      description: 'Gathering evidence, testing controls, and substantive procedures',
    },
    {
      step: '3',
      title: 'Analysis',
      description: 'Evaluating findings, assessing compliance, and forming conclusions',
    },
    {
      step: '4',
      title: 'Reporting',
      description: 'Delivering comprehensive audit report with recommendations',
    },
  ];

  const benefits = [
    'Enhanced credibility and stakeholder confidence',
    'Identification of operational inefficiencies',
    'Improved internal controls and governance',
    'Regulatory compliance assurance',
    'Risk mitigation and fraud detection',
    'Strategic insights for better decision-making',
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Shield size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Audit & Assurance Services</h1>
            <p className="text-xl text-blue-100">
              Building trust through independent, thorough, and professional audit services
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Audit Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive audit and assurance solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Audit Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic and risk-based methodology ensuring comprehensive coverage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Audit Services?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our audit services go beyond compliance. We provide valuable insights that help you strengthen
                internal controls, improve operational efficiency, and make informed business decisions.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Audit Services"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <AlertTriangle size={32} className="text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Industry Expertise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our audit team has extensive experience across diverse industries including manufacturing, IT services,
                  retail, real estate, healthcare, financial services, and NGOs. We understand industry-specific risks,
                  compliance requirements, and best practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This specialized knowledge enables us to conduct more effective audits and provide relevant,
                  actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ensure compliance, strengthen controls, and gain valuable insights with our professional audit services
          </p>
          <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            Request Audit Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
