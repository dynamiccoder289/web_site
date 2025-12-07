import { useState } from 'react';
import { Menu, X, Phone, Mail} from 'lucide-react';
import { FaCaretDown } from "react-icons/fa";
export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    {
      name: 'About Us',
      id: 'about',
      children: [
        { name: 'The Firm', id: 'the-firm' },
        { name: 'Our Values', id: 'our-values' },
        { name: 'Leadership', id: 'leadership' }
      ]
    },
    {
      name: 'Services',
      id: 'services',
      children: [
        { name: 'Audit & Assurance', id: 'audit-assurance' },
        { name: 'Taxation & Regulatory', id: 'tax-regulatory' },
        { name: 'Business Advisory', id: 'business-advisory' }
      ]
    },
    {
      name: 'Resources',
      id: 'resources',
      children: [
        { name: 'Partners', id: 'partners' },
        { name: 'Our Team', id: 'our-team' }
      ]
    },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      {/* <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@cafirm.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={14} />
              <span>info@cafirm.com</span>
            </a>
          </div>
          <div className="text-xs">Mon - Sat: 9:00 AM - 6:00 PM</div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigate('home')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CA
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Excel Associates</h1>
                <p className="text-xs text-gray-600">Chartered Accountants</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => !item.children && handleNavigate(item.id)}
                    className={`font-medium transition-colors text-sm pb-1 flex items-center gap-1 ${
                      currentPage === item.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    {item.children &&<FaCaretDown size={18} className="text-gray-600" />
}
                  </button>

                  {item.children && (
                    <div className="hidden group-hover:block absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg py-2 w-48 z-50">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNavigate(child.id)}
                          className="w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition text-sm"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavigate('contact')}
                className="btn-primary"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      item.children
                        ? setOpenDropdown(openDropdown === item.id ? null : item.id)
                        : handleNavigate(item.id)
                    }
                    className="block w-full text-left px-4 py-2 rounded-lg font-medium transition text-gray-700 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>

                  {/* Mobile submenu */}
                  {item.children && openDropdown === item.id && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNavigate(child.id)}
                          className="block w-full text-left px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => handleNavigate('contact')}
                className="btn-primary w-full text-center mt-3"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
