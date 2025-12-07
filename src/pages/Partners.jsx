import { Handshake, Award, Globe, TrendingUp } from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      icon: <Globe size={48} />,
      title: 'Technology Partners',
      description: 'Leading software and technology providers',
      partners: [
        { name: 'Tally Solutions', type: 'Accounting Software' },
        { name: 'QuickBooks', type: 'Cloud Accounting' },
        { name: 'Zoho', type: 'Business Suite' },
        { name: 'Microsoft', type: 'Technology Solutions' },
      ],
    },
    {
      icon: <Handshake size={48} />,
      title: 'Professional Networks',
      description: 'Associations and professional bodies',
      partners: [
        { name: 'ICAI', type: 'Institute of Chartered Accountants of India' },
        { name: 'CII', type: 'Confederation of Indian Industry' },
        { name: 'ASSOCHAM', type: 'Associated Chambers of Commerce' },
        { name: 'FICCI', type: 'Federation of Indian Chambers' },
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Financial Institutions',
      description: 'Banking and financial services partners',
      partners: [
        { name: 'HDFC Bank', type: 'Banking Services' },
        { name: 'ICICI Bank', type: 'Corporate Banking' },
        { name: 'Axis Bank', type: 'Business Banking' },
        { name: 'Kotak Mahindra', type: 'Financial Services' },
      ],
    },
    {
      icon: <Award size={48} />,
      title: 'Legal & Advisory',
      description: 'Legal firms and specialist consultants',
      partners: [
        { name: 'Legal Associates', type: 'Corporate Law' },
        { name: 'IP Advisory', type: 'Intellectual Property' },
        { name: 'HR Consultants', type: 'Human Resources' },
        { name: 'Tech Advisors', type: 'IT Consulting' },
      ],
    },
  ];

  const benefits = [
    {
      title: 'Comprehensive Solutions',
      description: 'Access to a wide range of complementary services through our partner network',
    },
    {
      title: 'Best-in-Class Tools',
      description: 'Leverage cutting-edge technology and software for efficient service delivery',
    },
    {
      title: 'Industry Expertise',
      description: 'Benefit from specialized knowledge across various domains and sectors',
    },
    {
      title: 'Seamless Integration',
      description: 'Coordinated services with our partners for a hassle-free experience',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Handshake size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl text-blue-100">
              Collaborating with industry leaders to deliver exceptional value
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Partnerships</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations to provide comprehensive, integrated solutions to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-blue-600 p-3 bg-blue-50 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.partners.map((partner, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-800">{partner.name}</span>
                      <span className="text-sm text-gray-600">{partner.type}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Partner Network</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              How our partnerships add value to your experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-xl text-blue-100 mb-8">
              Interested in partnering with Excel Associates? We are always open to collaborating with
              organizations that share our commitment to excellence and client service.
            </p>
            <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We carefully select partners who align with our values of integrity, excellence, and client-centricity.
            Every partnership is built on mutual respect, shared goals, and a commitment to delivering outstanding
            results. Together with our partners, we create an ecosystem that empowers our clients to succeed.
          </p>
        </div>
      </section>
    </div>
  );
}
