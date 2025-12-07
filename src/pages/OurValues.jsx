import { Shield, Heart, Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

export default function OurValues() {
  const values = [
    {
      icon: <Shield size={64} />,
      title: 'Integrity',
      description: 'We uphold the highest standards of professional ethics and maintain complete transparency in all our dealings. Trust is the foundation of our client relationships.',
      color: 'blue',
    },
    {
      icon: <Target size={64} />,
      title: 'Excellence',
      description: 'We are committed to delivering superior quality in every engagement. Our pursuit of excellence drives continuous improvement and professional development.',
      color: 'green',
    },
    {
      icon: <Heart size={64} />,
      title: 'Client Focus',
      description: 'Your success is our priority. We listen, understand, and tailor our services to meet your unique needs with personalized attention and care.',
      color: 'red',
    },
    {
      icon: <Lightbulb size={64} />,
      title: 'Innovation',
      description: 'We embrace technology and modern methodologies to provide efficient, effective solutions that keep you ahead in a dynamic business environment.',
      color: 'yellow',
    },
    {
      icon: <Users size={64} />,
      title: 'Collaboration',
      description: 'We believe in working together as partners. Our collaborative approach ensures alignment with your goals and seamless execution.',
      color: 'purple',
    },
    {
      icon: <TrendingUp size={64} />,
      title: 'Accountability',
      description: 'We take ownership of our commitments and deliver results. Our reputation is built on reliability, consistency, and meeting deadlines.',
      color: 'orange',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      red: 'bg-red-50 text-red-600',
      yellow: 'bg-amber-50 text-amber-600',
      purple: 'bg-violet-50 text-violet-600',
      orange: 'bg-orange-50 text-orange-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h1>
            <p className="text-xl text-blue-100">
              The principles that guide everything we do
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our values are more than words on a page. They shape our culture, guide our decisions, and define
              how we serve our clients every single day. These principles have been the cornerstone of our success
              for over 15 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover">
                <div className={`inline-block p-4 rounded-full mb-6 ${getColorClasses(value.color)}`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Living Our Values</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At Excel Associates, our values are not just aspirational statements. They are lived and demonstrated
                in every client interaction, every decision we make, and every service we deliver.
              </p>
              <p>
                We hold ourselves accountable to these principles and continuously evaluate our performance against
                them. Our team members are selected, trained, and rewarded based on their alignment with these core values.
              </p>
              <p>
                This commitment to our values has earned us the trust and loyalty of our clients, many of whom have been
                with us since our inception. It's what sets us apart in a competitive industry and what will continue to
                drive our success in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Values in Action</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference that value-driven service makes. Partner with a firm that puts principles into practice.
          </p>
          <button className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
            Work With Us
          </button>
        </div>
      </section>
    </div>
  );
}
