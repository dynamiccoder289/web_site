import { Award, Mail, Linkedin } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: 'CA Rajesh Mehta',
      position: 'Senior Partner & Founder',
      qualification: 'FCA, DISA',
      experience: '20+ Years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: 'Corporate Tax, Statutory Audit, Business Strategy',
      bio: 'CA Rajesh Mehta founded Excel Associates in 2008 with a vision to provide world-class accounting and financial services. With over two decades of experience, he has advised numerous corporations on tax planning, mergers & acquisitions, and financial restructuring. His leadership has been instrumental in building the firm\'s reputation for excellence.',
      education: ['B.Com, University of Mumbai', 'Chartered Accountancy, ICAI', 'DISA (Information Systems Audit)'],
      achievements: [
        'Advised 100+ companies on tax optimization',
        'Led successful audits for Fortune 500 companies',
        'Speaker at national CA conferences',
      ],
    },
    {
      name: 'CA Priya Verma',
      position: 'Partner',
      qualification: 'FCA, CFA',
      experience: '15+ Years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: 'Financial Advisory, GST Compliance, Investment Planning',
      bio: 'CA Priya Verma joined Excel Associates in 2012 and was elevated to Partner in 2018. She heads the Financial Advisory and GST practice. Known for her analytical acumen and client-centric approach, she has helped numerous businesses navigate complex regulatory landscapes and achieve sustainable growth.',
      education: ['B.Com (Hons), Delhi University', 'Chartered Accountancy, ICAI', 'CFA (Chartered Financial Analyst)'],
      achievements: [
        'Led GST implementation for 200+ clients',
        'Expert in financial modeling and valuation',
        'Published articles on GST and taxation',
      ],
    },
    {
      name: 'CA Amit Singh',
      position: 'Partner',
      qualification: 'ACA, MBA (Finance)',
      experience: '12+ Years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: 'Startup Consulting, Fundraising, Compliance',
      bio: 'CA Amit Singh specializes in working with startups and high-growth companies. He joined the firm in 2015 and was made Partner in 2020. His expertise in fundraising, venture capital advisory, and startup compliance has made him a trusted advisor to entrepreneurs and investors alike.',
      education: ['B.Com, Bangalore University', 'Chartered Accountancy, ICAI', 'MBA (Finance), IIM Bangalore'],
      achievements: [
        'Advised 50+ startups on fundraising',
        'Facilitated investments worth $100M+',
        'Mentor at leading startup incubators',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h1>
            <p className="text-xl text-blue-100">
              Meet the experienced professionals guiding Excel Associates
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leaders</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A team of seasoned chartered accountants with diverse expertise and a shared commitment to client success
            </p>
          </div>

          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-96 object-cover rounded-xl shadow-2xl"
                  />

                  <div className="mt-6 bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <Award size={24} className="text-blue-600" />
                      <h4 className="font-semibold text-lg">Key Achievements</h4>
                    </div>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{leader.position}</p>
                    <p className="text-gray-600 mb-4">{leader.qualification}</p>

                    <div className="flex gap-3">
                      <a
                        href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@excelassociates.com`}
                        className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition"
                      >
                        <Mail size={20} />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-blue-100 rounded-lg text-blue-600 hover:bg-blue-200 transition"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Experience</h4>
                      <p className="text-gray-700">{leader.experience} in {leader.specialization}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">About</h4>
                      <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Education</h4>
                      <ul className="space-y-1">
                        {leader.education.map((edu, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Areas of Expertise</h4>
                      <p className="text-gray-700">{leader.specialization}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Philosophy</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our leadership team believes in leading by example, fostering a culture of continuous learning, and
            empowering every team member to deliver excellence. We are committed to staying ahead of regulatory
            changes, embracing innovation, and maintaining the highest standards of professional integrity.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Together, we work towards our shared vision of being the most trusted and client-centric chartered
            accountancy firm in the region.
          </p>
        </div>
      </section>
    </div>
  );
}
