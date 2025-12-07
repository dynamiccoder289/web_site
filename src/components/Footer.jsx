import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleNavigate = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CA
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-white">Excel Associates</h3>
                <p className="text-xs">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for comprehensive financial and taxation services. We help businesses grow with expert guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('home')} className="hover:text-blue-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-blue-400 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="hover:text-blue-400 transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-blue-400 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition cursor-pointer">Income Tax Filing</li>
              <li className="hover:text-blue-400 transition cursor-pointer">GST Returns</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Statutory Audit</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Company Registration</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Financial Advisory</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123, Business Tower, MG Road, Bangalore - 560001, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@cafirm.com" className="hover:text-blue-400 transition">info@cafirm.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024 Excel Associates. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Disclaimer</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Disclaimer: The information provided on this website is for general informational purposes only and does not constitute professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
