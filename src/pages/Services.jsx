import React from 'react';
import {
  FileText,
  Calculator,
  Building2,
  TrendingUp,
  Shield,
  BarChart3,
  FileCheck,
  Briefcase,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { SERVICES_LIST, SERVICE_APPROACH_STEPS } from '../constants/servicesConstants';

const SERVICE_ICONS = [
  <FileText size={48} />,
  <Calculator size={48} />,
  <Shield size={48} />,
  <BarChart3 size={48} />,
  <FileCheck size={48} />,
  <Building2 size={48} />,
  <TrendingUp size={48} />,
  <Briefcase size={48} />,
];

export default function Services({ onNavigate }) {
  const services = SERVICES_LIST.map((s, i) => ({ ...s, icon: SERVICE_ICONS[i] }));

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive chartered accountancy services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end financial, taxation, and compliance solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover">
                <div className="flex items-start gap-4 mb-6">
                <div className="text-[var(--color-primary)] p-3 bg-[var(--color-primary)]/10 rounded-lg flex-shrink-0">
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-6 text-[var(--color-primary)] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Get Started <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTION CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific requirements.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary bg-white text-[var(--color-primary)] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE APPROACH */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic and client-focused methodology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {SERVICE_APPROACH_STEPS.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)] font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.label}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
