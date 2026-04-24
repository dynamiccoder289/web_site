import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { BRANCH_DETAILS } from '../constants/contactConstants';

export default function Footer({ onNavigate }) {
  const handleNavigate = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-gray-900)] text-[var(--color-gray-300)]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CA
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-white">Somasekhara & Associates</h3>
                <p className="text-xs">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for comprehensive financial and taxation services. We help businesses grow with expert guidance.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-[var(--color-gray-800)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigate(link.id)}
                    className="hover:text-[var(--color-primary-light)] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Income Tax Filing',
                'GST Returns',
                'Statutory Audit',
                'Company Registration',
                'Financial Advisory',
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-[var(--color-primary-light)] transition-colors duration-200 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  {BRANCH_DETAILS.address.line1} {BRANCH_DETAILS.address.line2}{' '}
                  {BRANCH_DETAILS.address.line3} {BRANCH_DETAILS.address.line4}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href={`tel:${BRANCH_DETAILS.phone.replace(/\s/g, '')}`}
                  className="hover:text-[var(--color-primary-light)] transition-colors duration-200"
                >
                  {BRANCH_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href={`mailto:${BRANCH_DETAILS.email}`}
                  className="hover:text-[var(--color-primary-light)] transition-colors duration-200"
                >
                  {BRANCH_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[var(--color-gray-800)] mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Somasekhara & Associates. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[var(--color-primary-light)] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-[var(--color-gray-500)] mt-4 text-center md:text-left">
            Disclaimer: The information provided on this website is for general informational purposes only and does not constitute professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
