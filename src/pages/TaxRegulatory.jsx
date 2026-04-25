import {
  FileText,
  Calculator,
  Shield,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  Target,
  AlertTriangle,
  Calendar,
  Building,
} from "lucide-react";
import {
  TAX_SERVICES,
  TAX_SAVING_STRATEGIES,
  COMPLIANCE_CALENDAR,
  TAX_KEY_BENEFITS,
  TAX_WHY_CHOOSE_US,
  TAX_IMPORTANT_POINTS,
  TAX_IMAGES,
} from "../constants/taxRegulatoryConstants";
import { WHATSAPP_URLS } from "../constants/whatsappConstants";

const SERVICE_ICONS = [
  <FileText size={40} />,
  <Calculator size={40} />,
  <Shield size={40} />,
  <Briefcase size={40} />,
];

const STRATEGY_ICONS = [TrendingUp, Shield, Building, Target, Users, TrendingUp];
const BENEFIT_ICONS = [TrendingUp, Shield, Target, Users];
const CALENDAR_ICONS = [Calendar, AlertTriangle, Calendar, Calendar, Calendar];

export default function TaxRegulatory() {
  const services = TAX_SERVICES.map((s, i) => ({ ...s, icon: SERVICE_ICONS[i] }));
  const taxSavingStrategies = TAX_SAVING_STRATEGIES.map((s, i) => ({ ...s, icon: STRATEGY_ICONS[i] }));
  const complianceCalendar = COMPLIANCE_CALENDAR.map((c, i) => ({ ...c, icon: CALENDAR_ICONS[i] }));
  const keyBenefits = TAX_KEY_BENEFITS.map((b, i) => ({ ...b, icon: BENEFIT_ICONS[i] }));
  const whyChooseUs = TAX_WHY_CHOOSE_US;
  const importantPoints = TAX_IMPORTANT_POINTS;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Calculator size={48} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Taxation & Regulatory Services</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Navigate complex tax laws and regulatory requirements with confidence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Tax Compliance</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">GST Expert</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Regulatory Advisory</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Tax & Regulatory Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to keep you compliant and optimize your tax position
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Tax Planning Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic tax planning delivers significant business advantages
            </p>
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

      {/* Tax Strategies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={TAX_IMAGES.strategies} alt="Tax Planning Professional" className="rounded-xl shadow-lg w-full h-auto" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Tax Saving Strategies</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Maximize your tax savings with strategic planning and expert guidance. Our chartered
                accountants help you leverage all available deductions and exemptions legally.
              </p>

              <div className="space-y-4">
                {taxSavingStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg text-[var(--color-primary)]">
                      <strategy.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{strategy.title}</h3>
                      <p className="text-gray-600 text-sm">{strategy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Important Points About Tax & Compliance
              </h2>

              <div className="space-y-4 mb-8">
                {importantPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={24} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Why Choose Us?</h3>
                    <div className="space-y-2">
                      {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src={TAX_IMAGES.documentation} alt="Tax Documentation" className="rounded-xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Calendar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Annual Compliance Calendar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay ahead of deadlines with our comprehensive compliance calendar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCalendar.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg text-[var(--color-primary)]">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">{item.month}</h3>
                </div>
                <ul className="space-y-2">
                  {item.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic flex items-center justify-center gap-2">
              <Clock size={16} />
              Never miss a deadline. We manage your entire compliance calendar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Tax & Compliance Support</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle your tax and regulatory requirements while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={WHATSAPP_URLS.TAX}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 inline-block"
            >
              Schedule Tax Consultation
            </a>
            <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Download Tax Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
