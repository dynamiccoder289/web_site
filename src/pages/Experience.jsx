import {
  Award,
  Building2,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  Star,
  Clock,
  Target,
  Briefcase,
  ChevronRight,
  Trophy,
} from "lucide-react";
import {
  EXPERIENCE_STATS,
  INDUSTRIES,
  MILESTONES,
  TESTIMONIALS,
  RECOGNITIONS,
  EXPERIENCE_HERO_STATS,
} from "../constants/experienceConstants";

const STAT_ICONS = [
  <Award size={40} />,
  <Users size={40} />,
  <TrendingUp size={40} />,
  <Briefcase size={40} />,
];

export default function Experience() {
  const stats = EXPERIENCE_STATS.map((s, i) => ({ ...s, icon: STAT_ICONS[i] }));
  const industries = INDUSTRIES;
  const milestones = MILESTONES;
  const testimonials = TESTIMONIALS;
  const recognitions = RECOGNITIONS;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Design */}

      <section
        className="relative overflow-hidden text-white py-10 md:py-14 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        {/* ✅ Dark Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-900)]/90 to-[var(--color-primary-dark)]/30"></div>

        {/* ✅ Decorative Glow Effects (slightly reduced size for compact look) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 left-8 w-72 h-72 bg-[var(--color-primary)] rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute bottom-12 right-8 w-64 h-64 bg-[var(--color-secondary)] rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* ✅ Badge (reduced spacing) */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5">
              <Award className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-xs font-medium tracking-wide">
                Trusted Since 2025
              </span>
            </div>

            {/* ✅ Headings (reduced bottom margins) */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Our
              <span className="block text-[var(--color-primary)] mt-1">
                Experience
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              Delivering reliable accounting, taxation, and business advisory
              services with precision, integrity, and client-focused excellence
            </p>

            {/* ✅ Stats (reduced padding & spacing) */}
            <div className="flex flex-wrap justify-center gap-3">
              {EXPERIENCE_HERO_STATS.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[120px]"
                >
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Background Pattern */}
      <section className="relative section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center card-hover border border-gray-100"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-gradient-to-br from-gray-50 to-gray-100 w-20 h-20 -top-10 -right-10"></div>
                </div>

                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience Section with Gradient Background */}
      <section className="section-padding bg-gradient-to-br from-white via-[var(--color-primary)]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Diverse Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Industry{" "}
              <span className="text-[var(--color-primary)]">Experience</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Serving businesses across diverse sectors with specialized
              financial solutions and industry-specific expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 card-hover border border-gray-100"
              >
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute transform rotate-45 bg-gradient-to-br ${industry.color} w-24 h-24 -top-12 -right-12 opacity-10`}
                  ></div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${industry.color} text-white`}
                  >
                    <Globe size={20} />
                  </div>
                  {/* <span className="text-lg font-bold text-gray-900">
                    {industry.clients}
                  </span> */}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium">
                  <span>Learn More</span>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline with Background */}
      {/* <section className="relative section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_25%,rgba(68,68,68,.1)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.1)_75%,rgba(68,68,68,.1))] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Our Growth Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Milestones of <span className="text-[var(--color-primary)]">Excellence</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tracing our journey of growth, innovation, and continuous improvement
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`inline-block p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                      milestone.highlight 
                        ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white'
                        : 'bg-white'
                    }`}>
                      <div className={`text-2xl font-bold mb-2 ${
                        milestone.highlight ? 'text-white' : 'text-[var(--color-primary)]'
                      }`}>
                        {milestone.year}
                      </div>
                      <p className={`${
                        milestone.highlight ? 'text-white/90' : 'text-gray-700'
                      }`}>
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                    milestone.highlight 
                      ? 'bg-[var(--color-primary)] animate-pulse' 
                      : 'bg-[var(--color-secondary)]'
                  }`}></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials with Gradient Background */}
      {/* <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/5 via-white to-[var(--color-secondary)]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-semibold mb-4">
              Client Voices
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Trusted <span className="text-[var(--color-primary)]">Partnerships</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from businesses who have experienced our commitment to excellence firsthand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8">

                <div className="absolute top-6 right-6 text-6xl text-gray-100 opacity-50">"</div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.text}"</p>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold">
                      {testimonial.client.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.client}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{testimonial.industry}</span>
                    <span className="text-[var(--color-primary)] font-medium">{testimonial.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Recognition Section */}
      {/* <section className="relative section-padding bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-gray-800)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <Trophy className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">Recognition & Credentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Excellence <span className="text-[var(--color-primary)]">Recognized</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Our commitment to quality and professionalism has been acknowledged through various accolades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{recognition.title}</h3>
                    <p className="text-gray-300 text-sm">{recognition.organization}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[var(--color-primary)] font-semibold">{recognition.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Award size={64} className="mx-auto mb-8 text-white/90" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience That{" "}
            <span className="text-white/90">Delivers Results</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Leverage our 1+ years of expertise for your financial success.
            Partner with a firm that combines experience with innovation for
            exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Schedule Your Consultation
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              View Our Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
