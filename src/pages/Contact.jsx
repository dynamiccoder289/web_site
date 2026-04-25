import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import {
  CONTACT_INFO,
  CONTACT_SERVICES,
  BRANCH_DETAILS,
} from "../constants/contactConstants";

const CONTACT_ICONS = [
  <MapPin size={20} />,
  <Phone size={20} />,
  <Mail size={20} />,
  <Clock size={20} />,
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = CONTACT_INFO.map((info, i) => ({
    ...info,
    icon: CONTACT_ICONS[i],
  }));
  const services = CONTACT_SERVICES;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 md:py-16 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch With Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Connect with our Chartered Accountants for professional financial
            solutions
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-7 border border-gray-100">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                  Our Contact Details
                </h2>
                <p className="text-gray-600 text-sm">
                  Reach out for comprehensive accounting, taxation, and
                  financial advisory services
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow transition-shadow duration-200"
                  >
                    <div
                      className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${info.color} text-white mb-3`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-gray-900">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-xs md:text-sm break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-7 border border-gray-100">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                  Send Your Query
                </h2>
                <p className="text-gray-600 text-sm">
                  Fill the form below and our team will respond within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col justify-center items-center py-8">
                  <div className="inline-flex p-3 bg-green-50 rounded-full mb-3">
                    <CheckCircle size={36} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    Thank you for contacting Somasekhara & Associates. We'll respond
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option
                          key={index}
                          value={service.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      required
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                      placeholder="Describe your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    Send Message <Send size={16} />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              Our Office Locations
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Visit our offices in Andhra Pradesh and Hyderabad for personalized financial consultation
            </p>
          </div>

          {/* Head Office */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{BRANCH_DETAILS.headOffice.name}</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={BRANCH_DETAILS.headOffice.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Somasekhara & Associates - Head Office Amalapuram"
                className="border-0"
              ></iframe>
            </div>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Head Office Address</h4>
                <p className="text-gray-600 text-xs">
                  {BRANCH_DETAILS.headOffice.address.line1}
                  <br />
                  {BRANCH_DETAILS.headOffice.address.line2}
                  <br />
                  {BRANCH_DETAILS.headOffice.address.line3}
                  <br />
                  {BRANCH_DETAILS.headOffice.address.line4}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Quick Contact</h4>
                <p className="text-gray-600 text-xs break-words">
                  <strong>Phone:</strong> {BRANCH_DETAILS.phone}
                  <br />
                  <strong>Email:</strong> {BRANCH_DETAILS.email}
                  <br />
                  <strong>Alt Email:</strong> {BRANCH_DETAILS.emailAlt}
                  <br />
                  <strong>LinkedIn:</strong>{" "}
                  <a 
                    href={BRANCH_DETAILS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline break-all"
                  >
                    View Profile
                  </a>
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Business Hours</h4>
                <p className="text-gray-600 text-xs">
                  <strong>Mon-Fri:</strong> {BRANCH_DETAILS.hours.weekdays}
                  <br />
                  <strong>Saturday:</strong> {BRANCH_DETAILS.hours.saturday}
                  <br />
                  <strong>Sunday:</strong> {BRANCH_DETAILS.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{BRANCH_DETAILS.branch.name}</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={BRANCH_DETAILS.branch.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Somasekhara & Associates - Branch Office Hyderabad"
                className="border-0"
              ></iframe>
            </div>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Branch Office Address</h4>
                <p className="text-gray-600 text-xs">
                  {BRANCH_DETAILS.branch.address.line1}
                  <br />
                  {BRANCH_DETAILS.branch.address.line2}
                  <br />
                  {BRANCH_DETAILS.branch.address.line3}
                  <br />
                  {BRANCH_DETAILS.branch.address.line4}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Quick Contact</h4>
                <p className="text-gray-600 text-xs break-words">
                  <strong>Phone:</strong> {BRANCH_DETAILS.phone}
                  <br />
                  <strong>Email:</strong> {BRANCH_DETAILS.email}
                  <br />
                  <strong>Alt Email:</strong> {BRANCH_DETAILS.emailAlt}
                  <br />
                  <strong>LinkedIn:</strong>{" "}
                  <a 
                    href={BRANCH_DETAILS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline break-all"
                  >
                    View Profile
                  </a>
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-2">Business Hours</h4>
                <p className="text-gray-600 text-xs">
                  <strong>Mon-Fri:</strong> {BRANCH_DETAILS.hours.weekdays}
                  <br />
                  <strong>Saturday:</strong> {BRANCH_DETAILS.hours.saturday}
                  <br />
                  <strong>Sunday:</strong> {BRANCH_DETAILS.hours.sunday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto text-sm">
            Contact us today for a free consultation and discover how Somasekhara
            & Associates can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${BRANCH_DETAILS.phone.replace(/\s/g, "")}`}
              className="bg-white text-[var(--color-primary)] font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Call: {BRANCH_DETAILS.phone}
            </a>
            <a
              href={`mailto:${BRANCH_DETAILS.email}`}
              className="border border-white/30 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Email Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
