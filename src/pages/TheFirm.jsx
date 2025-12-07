import { Building2, Award, Globe, TrendingUp, Users, Target } from 'lucide-react';

export default function TheFirm() {
  const milestones = [
    { year: '2008', event: 'Excel Associates Founded' },
    { year: '2012', event: 'Expanded to Multiple Cities' },
    { year: '2016', event: 'Reached 300+ Clients Milestone' },
    { year: '2020', event: 'Digital Transformation Initiatives' },
    { year: '2024', event: 'Serving 500+ Clients Nationwide' },
  ];

  const capabilities = [
    {
      icon: <Building2 size={40} />,
      title: 'Full-Service Firm',
      description: 'Comprehensive accounting, taxation, and advisory services under one roof',
    },
    {
      icon: <Users size={40} />,
      title: 'Expert Team',
      description: 'Qualified chartered accountants with specialized industry knowledge',
    },
    {
      icon: <Globe size={40} />,
      title: 'Pan-India Presence',
      description: 'Serving clients across multiple cities and industries nationwide',
    },
    {
      icon: <Award size={40} />,
      title: 'Quality Standards',
      description: 'Adherence to highest professional standards and best practices',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Firm</h1>
            <p className="text-xl text-blue-100">
              Building trust and delivering excellence since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Excel Associates is a leading chartered accountancy firm established in 2008 with a commitment to
                  providing exceptional financial, taxation, and business advisory services. Over the years, we have
                  grown into a trusted partner for businesses of all sizes, from startups to established corporations.
                </p>
                <p>
                  Our firm is built on a foundation of integrity, expertise, and client-centric service. We combine
                  technical excellence with practical business insights to deliver solutions that truly make a difference
                  to our clients' success.
                </p>
                <p>
                  With a team of highly qualified chartered accountants and industry specialists, we serve over 500 clients
                  across diverse sectors including manufacturing, IT, retail, real estate, healthcare, and financial services.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Office"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions backed by expertise and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center card-hover">
                <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Target size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            We are committed to delivering exceptional service, maintaining the highest standards of professional
            ethics, and being a trusted advisor to our clients. Your success is our success, and we work tirelessly
            to help you achieve your financial and business goals.
          </p>
        </div>
      </section>
    </div>
  );
}
