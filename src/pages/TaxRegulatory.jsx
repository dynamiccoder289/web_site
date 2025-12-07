import { FileText, Calculator, Shield, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';

export default function TaxRegulatory() {
  const services = [
    {
      icon: <FileText size={48} />,
      title: 'Income Tax Services',
      description: 'Comprehensive tax planning, filing, and compliance for individuals and businesses',
      offerings: [
        'Individual ITR filing (all forms)',
        'Corporate tax return preparation',
        'Tax planning and optimization',
        'Advance tax calculation',
        'TDS compliance and filing',
        'Tax assessment support',
        'Appeals and litigation support',
      ],
    },
    {
      icon: <Calculator size={48} />,
      title: 'GST Services',
      description: 'End-to-end GST registration, compliance, and advisory',
      offerings: [
        'GST registration and cancellation',
        'Monthly/Quarterly GST returns',
        'GST input credit optimization',
        'GST audit and reconciliation',
        'E-way bill management',
        'GST refund processing',
        'GST advisory and consultation',
      ],
    },
    {
      icon: <Shield size={48} />,
      title: 'Regulatory Compliance',
      description: 'Ensuring adherence to all statutory and regulatory requirements',
      offerings: [
        'ROC annual filings',
        'Board meetings and resolutions',
        'Statutory registers maintenance',
        'Share transfer formalities',
        'Director KYC compliance',
        'Annual return filing',
        'Secretarial compliance',
      ],
    },
    {
      icon: <Briefcase size={48} />,
      title: 'Business Structuring',
      description: 'Optimal tax-efficient structures for your business',
      offerings: [
        'Entity selection advisory',
        'Tax-efficient structuring',
        'International taxation',
        'Transfer pricing compliance',
        'Holding company structures',
        'Group reorganization',
      ],
    },
  ];

  const taxSavingStrategies = [
    'Strategic investment planning under Section 80C',
    'Health insurance and medical expenses',
    'Home loan interest and principal repayment',
    'National Pension Scheme (NPS) benefits',
    'Charitable donations and deductions',
    'Capital gains tax optimization',
  ];

  const complianceCalendar = [
    { month: 'April-June', tasks: 'Q1 TDS returns, GST returns, Advance tax' },
    { month: 'July', tasks: 'Income tax return filing deadline' },
    { month: 'July-Sept', tasks: 'Q2 TDS returns, GST returns, Advance tax' },
    { month: 'October-Dec', tasks: 'Q3 TDS returns, GST returns, Advance tax' },
    { month: 'January-March', tasks: 'Q4 TDS returns, GST returns, Advance tax, Year-end planning' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Calculator size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Taxation & Regulatory Services</h1>
            <p className="text-xl text-blue-100">
              Navigate complex tax laws and regulatory requirements with confidence
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tax & Regulatory Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to keep you compliant and optimize your tax position
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tax Planning"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tax Saving Strategies</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Maximize your tax savings with strategic planning and expert guidance. Our chartered accountants
                help you leverage all available deductions and exemptions legally.
              </p>

              <div className="space-y-3">
                {taxSavingStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
                    <TrendingUp size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Annual Compliance Calendar</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay ahead of deadlines with our comprehensive compliance calendar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCalendar.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{item.month}</h3>
                <p className="text-gray-700">{item.tasks}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Never miss a deadline. We manage your entire compliance calendar.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Tax Planning Matters</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Effective tax planning is not just about saving money; it's about making informed financial decisions
                that align with your long-term goals. Our proactive approach ensures you:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Minimize tax liability within legal frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Avoid penalties and interest for non-compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Optimize cash flow and working capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Make tax-efficient investment decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Stay updated with changing tax laws and regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Tax & Compliance Support</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experienced team handle your tax and regulatory requirements while you focus on growing your business
          </p>
          <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            Schedule Tax Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
