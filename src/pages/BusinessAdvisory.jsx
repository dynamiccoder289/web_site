import { TrendingUp, Lightbulb, DollarSign, Target, BarChart3, Users, CheckCircle } from 'lucide-react';

export default function BusinessAdvisory() {
  const services = [
    {
      icon: <Target size={48} />,
      title: 'Strategic Planning',
      description: 'Define clear goals and actionable roadmaps for sustainable growth',
      details: [
        'Business plan development',
        'Market analysis and positioning',
        'Growth strategy formulation',
        'Competitive analysis',
      ],
    },
    {
      icon: <DollarSign size={48} />,
      title: 'Financial Management',
      description: 'Optimize financial health and operational efficiency',
      details: [
        'Cash flow management',
        'Working capital optimization',
        'Budgeting and forecasting',
        'Cost reduction strategies',
      ],
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Business Valuation',
      description: 'Professional valuation services for various purposes',
      details: [
        'Company valuation',
        'Asset valuation',
        'Share valuation',
        'M&A valuations',
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Fundraising Support',
      description: 'Expert guidance for raising capital from various sources',
      details: [
        'Investor pitch preparation',
        'Financial modeling',
        'Due diligence support',
        'Negotiation assistance',
      ],
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Startup Consulting',
      description: 'End-to-end support for entrepreneurs and new ventures',
      details: [
        'Business model validation',
        'Incorporation and setup',
        'Compliance roadmap',
        'Funding strategy',
      ],
    },
    {
      icon: <Users size={48} />,
      title: 'Merger & Acquisition',
      description: 'Advisory for mergers, acquisitions, and restructuring',
      details: [
        'Target identification',
        'Financial due diligence',
        'Deal structuring',
        'Post-merger integration',
      ],
    },
  ];

  const industries = [
    'Manufacturing & Engineering',
    'Information Technology',
    'Retail & E-commerce',
    'Real Estate & Construction',
    'Healthcare & Pharmaceuticals',
    'Financial Services',
    'Hospitality & Tourism',
    'Education & Training',
  ];

  const approach = [
    {
      title: 'Understand',
      description: 'Deep dive into your business, challenges, and objectives',
    },
    {
      title: 'Analyze',
      description: 'Data-driven analysis of financials, operations, and market dynamics',
    },
    {
      title: 'Strategize',
      description: 'Develop customized solutions aligned with your goals',
    },
    {
      title: 'Implement',
      description: 'Support execution with actionable plans and ongoing guidance',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <TrendingUp size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Advisory Services</h1>
            <p className="text-xl text-blue-100">
              Strategic insights and financial expertise to drive your business forward
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Services We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From startups to established enterprises, we provide strategic guidance at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Advisory Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A structured methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Expertise</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our advisory team has deep experience across diverse industries. We understand sector-specific
                challenges, market dynamics, and regulatory landscapes, enabling us to provide relevant and
                actionable advice.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business Advisory"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Success Stories</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-xl mb-2">Tech Startup Fundraising</h3>
                <p className="text-gray-700 mb-2">
                  Helped a SaaS startup raise $2M in seed funding through investor pitch preparation,
                  financial modeling, and negotiation support.
                </p>
                <p className="text-sm text-blue-600 font-medium">Result: Successful funding at desired valuation</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-xl mb-2">Manufacturing Business Turnaround</h3>
                <p className="text-gray-700 mb-2">
                  Restructured operations and finances for a struggling manufacturing unit, improving cash flow
                  by 40% and achieving profitability within 18 months.
                </p>
                <p className="text-sm text-blue-600 font-medium">Result: Business back to profitability</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-xl mb-2">Retail Chain Expansion</h3>
                <p className="text-gray-700 mb-2">
                  Advised on strategic expansion plan, financial projections, and operational setup for a
                  retail chain expanding from 5 to 20 stores.
                </p>
                <p className="text-sm text-blue-600 font-medium">Result: Successful expansion with ROI ahead of target</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with advisors who understand your challenges and are committed to your success
          </p>
          <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            Schedule Advisory Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
