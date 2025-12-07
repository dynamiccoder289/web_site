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

export default function Services({ onNavigate }) {
  const services = [
    {
      icon: <FileText size={48} />,
      title: 'Income Tax Filing & Planning',
      description: 'Comprehensive tax services for individuals and businesses',
      features: [
        'Individual Income Tax Return (ITR) Filing',
        'Corporate Tax Planning & Compliance',
        'Tax Saving Investment Advisory',
        'Tax Assessment & Appeal Support',
        'Advance Tax & TDS Compliance',
        'Capital Gains Tax Consultation',
      ],
    },
    {
      icon: <Calculator size={48} />,
      title: 'GST Registration & Returns',
      description: 'Complete GST compliance and advisory services',
      features: [
        'GST Registration for New Businesses',
        'Monthly/Quarterly GST Return Filing',
        'GST Input Credit Optimization',
        'GST Audit & Reconciliation',
        'GST Refund Processing',
        'GST Advisory & Consultation',
      ],
    },
    {
      icon: <Shield size={48} />,
      title: 'Statutory Audit & Internal Audit',
      description: 'Professional audit services ensuring compliance',
      features: [
        'Statutory Audit as per Companies Act',
        'Internal Audit & Control Review',
        'Tax Audit under Income Tax Act',
        'Bank Audit & Financial Review',
        'Stock & Inventory Audit',
        'Concurrent & Management Audit',
      ],
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Accounting & Bookkeeping',
      description: 'Accurate financial record management',
      features: [
        'Daily Bookkeeping & Ledger Maintenance',
        'Financial Statement Preparation',
        'MIS Reporting & Analysis',
        'Payroll Processing & Management',
        'Accounts Receivable/Payable Management',
        'Cloud Accounting Solutions',
      ],
    },
    {
      icon: <FileCheck size={48} />,
      title: 'TDS Compliance',
      description: 'Complete TDS filing and return services',
      features: [
        'TDS Return Filing (Quarterly)',
        'TDS Calculation & Deduction',
        'TDS Certificate Issuance (Form 16/16A)',
        'TDS Reconciliation Services',
        'Lower TDS Deduction Assistance',
        'TDS Default & Penalty Resolution',
      ],
    },
    {
      icon: <Building2 size={48} />,
      title: 'Company / LLP Incorporation',
      description: 'Business registration and startup services',
      features: [
        'Private Limited Company Registration',
        'LLP Registration & Compliance',
        'Partnership Firm Registration',
        'Sole Proprietorship Setup',
        'Director Identification Number (DIN)',
        'Digital Signature Certificate (DSC)',
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and guidance',
      features: [
        'Business Financial Planning',
        'Working Capital Management',
        'Investment Advisory Services',
        'Budgeting & Cash Flow Analysis',
        'Merger & Acquisition Advisory',
        'Business Valuation Services',
      ],
    },
    {
      icon: <Briefcase size={48} />,
      title: 'ROC Filing & Compliance',
      description: 'Complete corporate compliance management',
      features: [
        'Annual ROC Filing & Returns',
        'Board Meeting & AGM Compliance',
        'Share Transfer & Capital Changes',
        'Director Appointment/Resignation',
        'Registered Office Address Change',
        'Company Closure & Strike Off',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
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
                  <div className="text-blue-600 p-3 bg-blue-50 rounded-lg flex-shrink-0">
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
                      <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-6 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
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
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific requirements.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4"
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
            {[ 'Consultation', 'Planning', 'Execution', 'Support' ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 && 'Understanding your needs and requirements'}
                  {index === 1 && 'Developing customized solutions and strategy'}
                  {index === 2 && 'Implementing services with precision'}
                  {index === 3 && 'Ongoing assistance and guidance'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
