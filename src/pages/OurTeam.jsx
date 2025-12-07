import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'CA Anita Deshmukh',
      role: 'Senior Manager - Audit',
      qualification: 'ACA',
      experience: '8 Years',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Statutory Audit, Internal Controls',
    },
    {
      name: 'CA Karan Joshi',
      role: 'Manager - Taxation',
      qualification: 'ACA',
      experience: '7 Years',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Income Tax, GST Compliance',
    },
    {
      name: 'CA Neha Reddy',
      role: 'Manager - Business Advisory',
      qualification: 'ACA, MBA',
      experience: '6 Years',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Financial Planning, Startups',
    },
    {
      name: 'Rohit Sharma',
      role: 'Senior Associate - Audit',
      qualification: 'CA Finalist',
      experience: '4 Years',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Tax Audit, Compliance',
    },
    {
      name: 'Priyanka Nair',
      role: 'Senior Associate - GST',
      qualification: 'CA Finalist',
      experience: '4 Years',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'GST Returns, Advisory',
    },
    {
      name: 'Vikram Malhotra',
      role: 'Associate - Accounting',
      qualification: 'B.Com, CA Inter',
      experience: '3 Years',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Bookkeeping, MIS Reports',
    },
    {
      name: 'Sneha Kapoor',
      role: 'Associate - Compliance',
      qualification: 'B.Com, CA Inter',
      experience: '2 Years',
      image: 'https://images.pexels.com/photos/3812011/pexels-photo-3812011.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'ROC Filing, TDS',
    },
    {
      name: 'Aditya Patel',
      role: 'Junior Associate',
      qualification: 'B.Com, CA Foundation',
      experience: '1 Year',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Data Entry, Documentation',
    },
  ];

  const departments = [
    {
      icon: <Briefcase size={32} />,
      name: 'Audit & Assurance',
      count: '12 Members',
    },
    {
      icon: <Award size={32} />,
      name: 'Taxation & Compliance',
      count: '10 Members',
    },
    {
      icon: <Users size={32} />,
      name: 'Business Advisory',
      count: '8 Members',
    },
    {
      icon: <GraduationCap size={32} />,
      name: 'Support & Operations',
      count: '6 Members',
    },
  ];

  const culture = [
    {
      title: 'Continuous Learning',
      description: 'We invest in training and development to keep our team updated with latest regulations and best practices',
    },
    {
      title: 'Collaborative Environment',
      description: 'A culture that encourages knowledge sharing, teamwork, and mutual support',
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy balance for sustained performance and well-being',
    },
    {
      title: 'Merit-Based Growth',
      description: 'Clear career progression paths based on performance, skills, and contributions',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Users size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-blue-100">
              Talented professionals committed to your success
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Professionals</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A diverse team of qualified chartered accountants, finance experts, and support staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600 mb-3">{member.qualification}</p>

                  <div className="flex items-center justify-between text-sm border-t pt-3 mb-2">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold">{member.experience}</span>
                  </div>

                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Specialization:</span> {member.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Departments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Specialized teams dedicated to different service areas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center card-hover">
                <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-600 mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Culture"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Excel Associates, we believe our people are our greatest asset. We foster a culture that
                values excellence, integrity, collaboration, and continuous learning.
              </p>

              <div className="space-y-4">
                {culture.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            We are always looking for talented, driven professionals to join our growing team. If you are
            passionate about accounting, finance, and client service, we would love to hear from you.
          </p>
          <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
