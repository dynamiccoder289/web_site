import {
  TrendingUp,
  Lightbulb,
  DollarSign,
  Target,
  BarChart3,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Rocket,
  LineChart,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import {
  ADVISORY_SERVICES,
  ADVISORY_INDUSTRIES,
  ADVISORY_APPROACH,
  ADVISORY_KEY_BENEFITS,
  SUCCESS_STORIES,
  ADVISORY_WHY_CHOOSE_US,
  ADVISORY_IMAGE,
} from "../constants/businessAdvisoryConstants";

const SERVICE_ICONS = [
  <Target size={40} />,
  <DollarSign size={40} />,
  <BarChart3 size={40} />,
  <TrendingUp size={40} />,
  <Lightbulb size={40} />,
  <Users size={40} />,
];

const APPROACH_ICONS = [Users, BarChart3, Target, Rocket];
const BENEFIT_ICONS = [LineChart, Shield, Clock, Briefcase];

export default function BusinessAdvisory() {
  const services = ADVISORY_SERVICES.map((s, i) => ({ ...s, icon: SERVICE_ICONS[i] }));
  const industries = ADVISORY_INDUSTRIES;
  const approach = ADVISORY_APPROACH.map((a, i) => ({ ...a, icon: APPROACH_ICONS[i] }));
  const keyBenefits = ADVISORY_KEY_BENEFITS.map((b, i) => ({ ...b, icon: BENEFIT_ICONS[i] }));
  const successStories = SUCCESS_STORIES;
  const whyChooseUs = ADVISORY_WHY_CHOOSE_US;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <TrendingUp size={48} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Advisory Services</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Strategic insights and financial expertise to drive your business forward
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Strategic Planning</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Financial Excellence</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Growth Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Advisory Services We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From startups to established enterprises, we provide strategic guidance at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Business Advisory?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Strategic partnership that delivers measurable results</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Advisory Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A structured methodology that delivers results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  <step.icon size={28} />
                </div>
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={ADVISORY_IMAGE} alt="Business Advisory" className="rounded-xl shadow-lg w-full h-auto" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industry Expertise</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our advisory team has deep experience across diverse industries. We understand sector-specific
                challenges, market dynamics, and regulatory landscapes, enabling us to provide relevant and
                actionable advice.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white border border-gray-200 p-3 rounded-lg">
                    <CheckCircle size={16} className="text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real results from businesses we've helped transform</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <div className="space-y-8">
              {successStories.map((story, index) => (
                <div key={index} className="border-l-4 border-[var(--color-primary)] pl-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{story.title}</h3>
                  <p className="text-gray-600 mb-2">{story.description}</p>
                  <p className="text-sm font-medium text-[var(--color-primary)]">Result: {story.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Us?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb size={32} className="text-[var(--color-primary)] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Ready to Transform Your Business?</h3>
                    <p className="text-gray-600 mb-4">
                      Let's discuss how our advisory services can help you achieve your business goals.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all">
                      Schedule a Consultation <ArrowRight size={16} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with advisors who understand your challenges and are committed to your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Schedule Advisory Consultation
            </button>
            <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Download Advisory Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
