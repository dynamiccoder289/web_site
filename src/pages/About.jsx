import { Award, Target, Eye, Users, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'CA Rajesh Mehta',
      designation: 'Senior Partner',
      qualification: 'FCA, DISA',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Corporate Tax & Audit',
    },
    {
      name: 'CA Priya Verma',
      designation: 'Partner',
      qualification: 'FCA, CFA',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Financial Advisory & GST',
    },
    {
      name: 'CA Amit Singh',
      designation: 'Partner',
      qualification: 'ACA, MBA',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Startup Consulting',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Clients Served', icon: <Users size={32} /> },
    { number: '15+', label: 'Years of Excellence', icon: <Award size={32} /> },
    { number: '5000+', label: 'Returns Filed', icon: <TrendingUp size={32} /> },
    { number: '100%', label: 'Success Rate', icon: <CheckCircle size={32} /> },
  ];

  const values = [
    {
      icon: <Shield size={40} />,
      title: 'Integrity',
      description: 'We maintain the highest standards of professional ethics and confidentiality.',
    },
    {
      icon: <Target size={40} />,
      title: 'Excellence',
      description: 'Delivering accurate, timely, and quality services in every engagement.',
    },
    {
      icon: <Clock size={40} />,
      title: 'Reliability',
      description: 'Consistent performance and commitment to meeting deadlines.',
    },
    {
      icon: <Users size={40} />,
      title: 'Client-Centric',
      description: 'Your success and satisfaction are at the heart of everything we do.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Excel Associates</h1>
            <p className="text-xl text-blue-100">
              A trusted name in accounting, taxation, and financial advisory services since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, Excel Associates has grown to become one of the most trusted chartered accountancy
                  firms in the region. What started as a small practice with a vision to provide quality financial
                  services has evolved into a full-service firm serving over 500 clients across various industries.
                </p>
                <p>
                  Our team of experienced chartered accountants brings together decades of combined expertise in
                  taxation, auditing, compliance, and financial advisory. We pride ourselves on staying ahead of
                  regulatory changes and leveraging technology to provide efficient, accurate, and timely services.
                </p>
                <p>
                  At Excel Associates, we believe in building long-term relationships with our clients. We understand
                  that every business is unique, and we tailor our services to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-blue-600 mb-3 flex justify-center">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={32} className="text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                To be the most trusted and preferred chartered accountancy firm, recognized for excellence,
                innovation, and commitment to client success.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <Target size={32} className="text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, accurate, and timely accounting, taxation, and financial advisory services
                that help our clients achieve their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
            <p className="text-blue-200">Numbers that reflect our commitment and success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4 text-blue-300">{achievement.icon}</div>
                <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.designation}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.qualification}</p>

                  <div className="flex items-center justify-between text-sm border-t pt-3">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold">{member.experience}</span>
                  </div>

                  <div className="mt-2 text-sm">
                    <span className="text-gray-600">Specialization: </span>
                    <span className="font-medium">{member.specialization}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Businesses Trust Us</h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
