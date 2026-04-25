import {
  Shield,
  FileCheck,
  Search,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Users,
  Clock,
  Target,
  Zap,
} from "lucide-react";
import {
  AUDIT_SERVICES,
  AUDIT_KEY_BENEFITS,
  AUDIT_WHY_CHOOSE_US,
  AUDIT_IMPORTANT_POINTS,
  AUDIT_PROCESS_STEPS,
  AUDIT_HERO_TAGS,
  AUDIT_IMAGE,
} from "../constants/auditAssuranceConstants";
import { WHATSAPP_URLS } from "../constants/whatsappConstants";

const SERVICE_ICONS = [
  <Shield size={40} />,
  <FileCheck size={40} />,
  <Search size={40} />,
  <TrendingUp size={40} />,
];

const BENEFIT_ICONS = [
  <Users size={24} />,
  <Clock size={24} />,
  <Target size={24} />,
  <Zap size={24} />,
];

export default function AuditAssurance() {
  const services = AUDIT_SERVICES.map((s, i) => ({ ...s, icon: SERVICE_ICONS[i] }));
  const keyBenefits = AUDIT_KEY_BENEFITS.map((b, i) => ({ ...b, icon: BENEFIT_ICONS[i] }));
  const whyChooseUs = AUDIT_WHY_CHOOSE_US;
  const importantPoints = AUDIT_IMPORTANT_POINTS;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Shield size={48} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Audit & Assurance Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Professional audit services for compliance, transparency, and
              business improvement
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {AUDIT_HERO_TAGS.map((tag, i) => (
                <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Audit Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit solutions designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Key Benefits of Audit
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why professional audit services are essential for your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={AUDIT_IMAGE}
                alt="Professional Audit Team Working"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Important Points About Audit Services
              </h2>

              <div className="space-y-4 mb-8">
                {importantPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    size={24}
                    className="text-[var(--color-primary)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      Why Choose Us?
                    </h3>
                    <div className="space-y-2">
                      {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="text-green-600 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple Audit Process
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {AUDIT_PROCESS_STEPS.map((step) => (
                <div key={step.step}>
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Professional Audit Services
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ensure compliance, build credibility, and improve your business
            operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={WHATSAPP_URLS.AUDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 inline-block"
            >
              Start Your Audit
            </a>
            <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Download Audit Checklist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
