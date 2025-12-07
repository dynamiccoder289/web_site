import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dropdownRefs = useRef({});

  // ✅ Fully reset state on navigation
  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Handle hover with delay to prevent accidental closing
  const handleMouseEnter = (itemId) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = (itemId) => {
    const timeout = setTimeout(() => {
      setOpenDropdown((prev) => (prev === itemId ? null : prev));
    }, 150); // Small delay to allow moving to submenu
    setHoverTimeout(timeout);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  const navItems = [
    { name: "Home", id: "home" },
    {
      name: "About Us",
      id: "about",
      children: [
        { name: "The Firm", id: "the-firm" },
        { name: "Our Values", id: "our-values" },
        { name: "Leadership", id: "leadership" },
      ],
    },
    {
      name: "Services",
      id: "services",
      children: [
        { name: "Audit & Assurance", id: "audit-assurance" },
        { name: "Taxation & Regulatory", id: "tax-regulatory" },
        { name: "Business Advisory", id: "business-advisory" },
      ],
    },
    {
      name: "Resources",
      id: "resources",
      children: [
        { name: "Partners", id: "partners" },
        { name: "Our Team", id: "our-team" },
      ],
    },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>

      {/* ✅ Main Navbar */}
      <nav className="bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-[var(--color-gray-100)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* ✅ Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigate("home")}
            >
              <div className="ml-3 leading-tight">
                <h1 className="text-lg md:text-xl font-semibold text-[var(--color-gray-900)]">
                 SOMASEKHARA & ASSOCIATES
                </h1>
                <p className="text-[0.7rem] md:text-xs text-[var(--color-gray-600)] uppercase tracking-wide">
                  Chartered Accountants
                </p>
              </div>
            </div>

            {/* ✅ Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive =
                  currentPage === item.id ||
                  item.children?.some((child) => child.id === currentPage);

                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <button
                      onClick={() => !item.children && handleNavigate(item.id)}
                      className={[
                        "font-medium text-sm px-1 pb-1 flex items-center gap-1 border-b-2 transition-all",
                        isActive
                          ? "text-[var(--color-primary)] border-[var(--color-primary)]"
                          : "text-[var(--color-gray-700)] border-transparent hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]",
                      ].join(" ")}
                    >
                      {item.name}
                      {item.children && (
                        <FaCaretDown
                          size={14}
                          className={`transition-transform ${
                            openDropdown === item.id ? "rotate-180" : ""
                          } ${
                            isActive || openDropdown === item.id
                              ? "text-[var(--color-primary)]"
                              : "text-[var(--color-gray-500)]"
                          }`}
                        />
                      )}
                    </button>

                    {/* ✅ DESKTOP SUBMENU - FIXED WITH NO GAP */}
                    {item.children && openDropdown === item.id && (
                      <div
                        className="absolute left-0 top-full pt-2" // pt-2 creates a bridge
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                      >
                        <div className="bg-white rounded-xl shadow-lg py-2 w-56 border border-[var(--color-gray-100)]">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleNavigate(child.id)}
                              className={[
                                "w-full text-left px-4 py-2.5 text-sm transition-all hover:pl-5",
                                currentPage === child.id
                                  ? "bg-[var(--color-primary)/5] text-[var(--color-primary)] font-medium"
                                  : "text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-primary)]",
                              ].join(" ")}
                            >
                              {child.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ✅ CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavigate("contact")}
                className="btn-primary text-sm tracking-wide hover:scale-[1.02] transition-transform"
              >
                Book Consultation
              </button>
            </div>

            {/* ✅ Mobile Menu Button */}
            <button
              className="md:hidden text-[var(--color-gray-800)] p-2 rounded-lg hover:bg-[var(--color-gray-50)] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-[var(--color-gray-100)] animate-in slide-in-from-top duration-200">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive =
                  currentPage === item.id ||
                  item.children?.some((child) => child.id === currentPage);

                return (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        item.children
                          ? setOpenDropdown(
                              openDropdown === item.id ? null : item.id
                            )
                          : handleNavigate(item.id)
                      }
                      className={[
                        "flex w-full items-center justify-between px-4 py-3 rounded-lg font-medium transition-all",
                        isActive
                          ? "bg-[var(--color-primary)/5] text-[var(--color-primary)]"
                          : "text-[var(--color-gray-800)] hover:bg-[var(--color-gray-50)]",
                      ].join(" ")}
                    >
                      {item.name}
                      {item.children && (
                        <FaCaretDown
                          size={14}
                          className={`transition-transform ${
                            openDropdown === item.id ? "rotate-180" : ""
                          } ${
                            openDropdown === item.id
                              ? "text-[var(--color-primary)]"
                              : "text-[var(--color-gray-500)]"
                          }`}
                        />
                      )}
                    </button>

                    {/* ✅ Mobile Submenu */}
                    {item.children && openDropdown === item.id && (
                      <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-[var(--color-primary)/20] pl-4 animate-in slide-in-from-left duration-200">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavigate(child.id)}
                            className={[
                              "block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all",
                              currentPage === child.id
                                ? "bg-[var(--color-primary)/5] text-[var(--color-primary)] font-medium"
                                : "text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-primary)] hover:pl-2",
                            ].join(" ")}
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <button
                onClick={() => handleNavigate("contact")}
                className="btn-primary w-full mt-4 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
              >
                Book Consultation
              </button>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-[var(--color-gray-100)]">
                <div className="flex flex-col space-y-3 text-sm text-[var(--color-gray-600)]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>+91-98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>info@excelassociates.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}