import {
  Handshake,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Users,
  Target,
  CheckCircle,
  Building,
  Briefcase,
  Star,
  ArrowRight,
} from "lucide-react";
import {
  PARTNER_CATEGORIES,
  PARTNER_BENEFITS,
  PARTNER_CORE_VALUES,
  WHY_PARTNER_WITH_US,
} from "../constants/partnersConstants";

const CATEGORY_ICONS = [
  <Globe size={40} />,
  <Handshake size={40} />,
  <TrendingUp size={40} />,
  <Award size={40} />,
];

const BENEFIT_ICONS = [Shield, Star, Users, Target];

export default function Partners() {
  const partnerCategories = PARTNER_CATEGORIES.map((c, i) => ({ ...c, icon: CATEGORY_ICONS[i] }));
  const benefits = PARTNER_BENEFITS.map((b, i) => ({ ...b, icon: BENEFIT_ICONS[i] }));
  const coreValues = PARTNER_CORE_VALUES;
  const whyPartnerWithUs = WHY_PARTNER_WITH_US;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Handshake size={48} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Collaborating with industry leaders to deliver exceptional value
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Technology Partners</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Professional Networks</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Financial Institutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Strategic Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to provide comprehensive, integrated solutions to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.partners.map((partner, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <Building size={16} className="text-[var(--color-primary)]" />
                        <span className="font-semibold text-gray-800">{partner.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{partner.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Benefits of Our Partner Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">How our partnerships add value to your experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Partnership Handshake"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Commitment</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We carefully select partners who align with our values of integrity, excellence, and
                client-centricity. Every partnership is built on mutual respect, shared goals, and a
                commitment to delivering outstanding results.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <CheckCircle size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 text-xs">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Partner With Us?</h2>
              <div className="space-y-4">
                {whyPartnerWithUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <Briefcase size={32} className="text-[var(--color-primary)] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Ready to Collaborate?</h3>
                    <p className="text-gray-600 mb-4">
                      Join our growing network of trusted partners and create mutual value for our clients.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all">
                      Explore Partnership <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Interested in partnering with Somasekhara & Associates? We are always open to collaborating with
            organizations that share our commitment to excellence and client service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Explore Partnership Opportunities
            </button>
            <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Download Partnership Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
