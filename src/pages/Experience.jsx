import { Award, Building2, TrendingUp, Users, Globe, CheckCircle, Star } from 'lucide-react';

export default function Experience() {
  const stats = [
    { number: '15+', label: 'Years in Business', icon: <Award size={40} /> },
    { number: '500+', label: 'Clients Served', icon: <Users size={40} /> },
    { number: '5000+', label: 'Tax Returns Filed', icon: <TrendingUp size={40} /> },
    { number: '200+', label: 'Companies Audited', icon: <Building2 size={40} /> },
  ];

  const industries = [
    {
      name: 'Manufacturing & Engineering',
      clients: '80+',
      description: 'From small-scale units to large manufacturing enterprises',
    },
    {
      name: 'Information Technology',
      clients: '60+',
      description: 'Startups, SaaS companies, and IT service providers',
    },
    {
      name: 'Retail & E-commerce',
      clients: '50+',
      description: 'Traditional retail and online marketplace sellers',
    },
    {
      name: 'Real Estate & Construction',
      clients: '45+',
      description: 'Developers, contractors, and property consultants',
    },
    {
      name: 'Healthcare & Pharmaceuticals',
      clients: '40+',
      description: 'Hospitals, clinics, diagnostic centers, and pharma distributors',
    },
    {
      name: 'Financial Services',
      clients: '35+',
      description: 'NBFCs, insurance agents, and financial advisors',
    },
    {
      name: 'Hospitality & Tourism',
      clients: '30+',
      description: 'Hotels, restaurants, travel agencies, and event companies',
    },
    {
      name: 'Professional Services',
      clients: '160+',
      description: 'Consultants, law firms, agencies, and other service providers',
    },
  ];

  const milestones = [
    { year: '2008', event: 'Excel Associates founded by CA Rajesh Mehta' },
    { year: '2010', event: 'Crossed 100 client milestone' },
    { year: '2012', event: 'CA Priya Verma joins as Partner' },
    { year: '2015', event: 'Launched dedicated GST practice' },
    { year: '2018', event: 'Expanded to business advisory services' },
    { year: '2020', event: 'CA Amit Singh elevated to Partner' },
    { year: '2022', event: 'Achieved 500+ client milestone' },
    { year: '2024', event: 'Celebrating 15+ years of excellence' },
  ];

  const testimonials = [
    {
      text: 'Excel Associates has been our trusted accounting partner for 8 years. Their expertise in tax planning has saved us lakhs in taxes while ensuring full compliance.',
      client: 'Rajesh Kumar',
      company: 'Tech Innovations Pvt Ltd',
      industry: 'IT Services',
      rating: 5,
    },
    {
      text: 'Professional, responsive, and extremely knowledgeable. They helped us navigate GST implementation smoothly and continue to provide excellent ongoing support.',
      client: 'Priya Sharma',
      company: 'Fashion Boutique',
      industry: 'Retail',
      rating: 5,
    },
    {
      text: 'Their audit services are thorough and insightful. Beyond compliance, they provided valuable recommendations that improved our internal controls and processes.',
      client: 'Amit Patel',
      company: 'Manufacturing Solutions',
      industry: 'Manufacturing',
      rating: 5,
    },
  ];

  const recognitions = [
    'Top CA Firm - Bangalore 2023',
    'Excellence in Client Service Award',
    'Member - ICAI',
    'ISO 9001:2015 Certified',
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Award size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Experience</h1>
            <p className="text-xl text-blue-100">
              15+ years of excellence in accounting, taxation, and business advisory
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg text-center card-hover">
                <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Experience</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We have served clients across diverse industries, bringing specialized knowledge and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="flex items-start justify-between mb-3">
                  <Globe size={24} className="text-blue-600" />
                  <span className="text-blue-600 font-bold text-lg">{industry.clients}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Key milestones in our 15+ year journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 relative z-10">
                      {milestone.year}
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex-grow">
                      <p className="text-gray-700 font-medium">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.client}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-blue-600 mt-1">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition & Memberships</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {recognitions.map((recognition, index) => (
              <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle size={24} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{recognition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience That Matters</h2>
          <p className="text-xl text-blue-100 mb-8">
            15+ years of serving businesses with integrity, expertise, and dedication. Let us put our experience
            to work for you.
          </p>
          <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
}
