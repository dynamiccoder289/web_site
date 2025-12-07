// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: '',
//       });
//     }, 3000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <MapPin size={24} />,
//       title: 'Visit Us',
//       details: ['123, Business Tower, MG Road', 'Bangalore - 560001', 'Karnataka, India'],
//     },
//     {
//       icon: <Phone size={24} />,
//       title: 'Call Us',
//       details: ['+91 98765 43210', '+91 80 1234 5678'],
//     },
//     {
//       icon: <Mail size={24} />,
//       title: 'Email Us',
//       details: ['info@cafirm.com', 'support@cafirm.com'],
//     },
//     {
//       icon: <Clock size={24} />,
//       title: 'Working Hours',
//       details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* HERO */}
//       <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
//           <p className="text-xl text-blue-100">
//             We're here to help with all your accounting and taxation needs
//           </p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="section-padding bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          
//           {/* CONTACT INFO */}
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//             <p className="text-gray-600 mb-8">
//               Reach out to us for a consultation or any inquiries. Our team is ready to assist you.
//             </p>

//             <div className="space-y-6">
//               {contactInfo.map((info, idx) => (
//                 <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
//                   <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">{info.icon}</div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
//                     {info.details.map((d, i) => (
//                       <p key={i} className="text-gray-600">{d}</p>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CONTACT FORM */}
//           <div className="bg-white p-8 rounded-xl shadow-lg">
//             <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

//             {isSubmitted ? (
//               <div className="text-center py-12">
//                 <div className="inline-block p-4 bg-green-50 rounded-full mb-4">
//                   <CheckCircle size={48} className="text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
//                 <p className="text-gray-600">
//                   Your message has been sent successfully. We'll get back to you soon.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
                
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     required
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     required
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     required
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Service Required *</label>
//                   <select
//                     name="service"
//                     required
//                     value={formData.service}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="income-tax">Income Tax Filing & Planning</option>
//                     <option value="gst">GST Registration & Returns</option>
//                     <option value="audit">Statutory & Internal Audit</option>
//                     <option value="accounting">Accounting & Bookkeeping</option>
//                     <option value="tds">TDS Compliance</option>
//                     <option value="incorporation">Company / LLP Incorporation</option>
//                     <option value="advisory">Financial Advisory</option>
//                     <option value="roc">ROC Filing & Compliance</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
//                     placeholder="Tell us about your requirements..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
//                 >
//                   Send Message <Send size={20} />
//                 </button>

//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* MAP */}
//       <section className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-8">Our Location</h2>

//           <div className="rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8479932036995!2d77.60352931482137!3d12.97502299087464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635773900000!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               loading="lazy"
//               allowFullScreen
//               title="Office Location"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, Globe, User } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: '',
//       });
//     }, 3000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <MapPin size={24} />,
//       title: 'Branch Address',
//       details: [
//         '10-14, AKULA VARI STREET,',
//         'KOMARAGIRIPATNAM, AMALAPURAM,',
//         'ANDHRA PRADESH, INDIA - 533210'
//       ],
//       color: 'from-blue-500 to-blue-700'
//     },
//     {
//       icon: <Phone size={24} />,
//       title: 'Contact Numbers',
//       details: ['+91 95336 80345', 'Support: +91 80 1234 5678'],
//       color: 'from-emerald-500 to-green-600'
//     },
//     {
//       icon: <Mail size={24} />,
//       title: 'Email Address',
//       details: ['naiduakula09@gmail.com', 'info@excelassociates.in'],
//       color: 'from-amber-500 to-orange-600'
//     },
//     {
//       icon: <Clock size={24} />,
//       title: 'Business Hours',
//       details: [
//         'Mon - Fri: 9:00 AM - 6:00 PM',
//         'Sat: 10:00 AM - 4:00 PM',
//         'Sun: Closed'
//       ],
//       color: 'from-rose-500 to-pink-600'
//     },
//   ];

//   const services = [
//     'Income Tax Filing & Planning',
//     'GST Registration & Returns',
//     'Statutory & Internal Audit',
//     'Accounting & Bookkeeping',
//     'TDS Compliance',
//     'Company / LLP Incorporation',
//     'Financial Advisory',
//     'ROC Filing & Compliance',
//     'Business Registration',
//     'Other Services'
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Connect with our team of expert Chartered Accountants for professional financial solutions
//           </p>
//         </div>
//       </section>

//       {/* Contact Information & Form */}
//       <section className="py-16 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12">
            
//             {/* Contact Information */}
//             <div>
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Contact Details</h2>
//                 <p className="text-gray-600">
//                   Reach out to us for comprehensive accounting, taxation, and financial advisory services. 
//                   Our team is ready to assist you with expert guidance.
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-6">
//                 {contactInfo.map((info, idx) => (
//                   <div 
//                     key={idx} 
//                     className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
//                   >
//                     <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4`}>
//                       {info.icon}
//                     </div>
//                     <h3 className="text-lg font-bold mb-3 text-gray-900">{info.title}</h3>
//                     <div className="space-y-1">
//                       {info.details.map((detail, i) => (
//                         <p key={i} className="text-gray-600 text-sm">{detail}</p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>

//             {/* Contact Form */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-4 text-gray-900">Send Your Query</h2>
//                 <p className="text-gray-600">
//                   Fill out the form below and our team will get back to you within 24 hours.
//                 </p>
//               </div>

//               {isSubmitted ? (
//                 <div className="text-center py-12">
//                   <div className="inline-flex p-4 bg-green-50 rounded-full mb-4">
//                     <CheckCircle size={48} className="text-green-600" />
//                   </div>
//                   <h3 className="text-2xl font-semibold mb-2 text-gray-900">Message Sent Successfully!</h3>
//                   <p className="text-gray-600">
//                     Thank you for contacting Excel Associates. Our team will respond to your query shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
                  
//                   <div className="grid sm:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         required
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         required
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
//                         placeholder="+91 98765 43210"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       required
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
//                       placeholder="you@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Service Required *</label>
//                     <select
//                       name="service"
//                       required
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors bg-white"
//                     >
//                       <option value="">Select a service you need</option>
//                       {services.map((service, index) => (
//                         <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Your Message *</label>
//                     <textarea
//                       name="message"
//                       rows="4"
//                       value={formData.message}
//                       required
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors resize-none"
//                       placeholder="Please describe your requirements in detail..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 text-lg"
//                   >
//                     Send Message <Send size={20} />
//                   </button>

//                   <p className="text-sm text-gray-500 text-center">
//                     By submitting, you agree to our Privacy Policy. We respect your data.
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Location Map */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Branch Location</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Visit our Andhra Pradesh branch for personalized financial consultation and services
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.450046871175!2d82.3481314944735!3d16.56847871796771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3a31426c1f96f7%3A0xb76aab969780c633!2sAmalapuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               loading="lazy"
//               allowFullScreen
//               title="Excel Associates - Amalapuram Branch Location"
//               className="border-0"
//             ></iframe>
//           </div>

//           {/* Address Card */}
//           <div className="mt-8 grid md:grid-cols-3 gap-6">
//             <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent p-6 rounded-xl">
//               <h3 className="font-bold text-lg mb-2 text-gray-900">Branch Address</h3>
//               <p className="text-gray-600 text-sm">
//                 10-14, AKULA VARI STREET,<br />
//                 KOMARAGIRIPATNAM,<br />
//                 AMALAPURAM,<br />
//                 ANDHRA PRADESH - 533210
//               </p>
//             </div>
//             <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent p-6 rounded-xl">
//               <h3 className="font-bold text-lg mb-2 text-gray-900">Quick Contact</h3>
//               <p className="text-gray-600 text-sm">
//                 <strong>Phone:</strong> +91 95336 80345<br />
//                 <strong>Email:</strong> naiduakula09@gmail.com<br />
//                 <strong>Incharge:</strong> CA Naidu Akula
//               </p>
//             </div>
//             <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent p-6 rounded-xl">
//               <h3 className="font-bold text-lg mb-2 text-gray-900">Business Hours</h3>
//               <p className="text-gray-600 text-sm">
//                 <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
//                 <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
//                 <strong>Sunday:</strong> Closed
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Management?</h2>
//           <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
//             Contact us today for a free initial consultation and discover how Excel Associates can help your business grow.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="tel:+919533680345" className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
//               Call Now: +91 95336 80345
//             </a>
//             <a href="mailto:naiduakula09@gmail.com" className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
//               Email Us Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, Globe, User } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Branch Address',
      details: [
        '10-14, AKULA VARI STREET,',
        'KOMARAGIRIPATNAM, AMALAPURAM,',
        'ANDHRA PRADESH, INDIA - 533210'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Phone size={24} />,
      title: 'Contact Numbers',
      details: ['+91 95336 80345', 'Support: +91 80 1234 5678'],
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: ['naiduakula09@gmail.com', 'info@excelassociates.in'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Sat: 10:00 AM - 4:00 PM',
        'Sun: Closed'
      ],
      color: 'from-rose-500 to-pink-600'
    },
  ];

  const services = [
    'Income Tax Filing & Planning',
    'GST Registration & Returns',
    'Statutory & Internal Audit',
    'Accounting & Bookkeeping',
    'TDS Compliance',
    'Company / LLP Incorporation',
    'Financial Advisory',
    'ROC Filing & Compliance',
    'Business Registration',
    'Other Services'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connect with our team of expert Chartered Accountants for professional financial solutions
          </p>
        </div>
      </section> */}

      {/* Contact Hero with Background Image */}
<section
  className="relative py-16 md:py-20 bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')",
  }}
>
  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-900)]/90 to-[var(--color-primary-dark)]/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
      Get In Touch With Us
    </h1>
    <p className="text-xl text-white/90 max-w-3xl mx-auto">
      Connect with our team of Chartered Accountants for professional,
      reliable, and practical financial solutions
    </p>
  </div>
</section>


      {/* Contact Information & Form - FIXED HEIGHT */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Contact Information - Same height as form */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Contact Details</h2>
                  <p className="text-gray-600">
                    Reach out to us for comprehensive accounting, taxation, and financial advisory services. 
                    Our team is ready to assist you with expert guidance.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8 flex-grow">
                  {contactInfo.map((info, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full"
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4`}>
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Contact Form - Same height as contact info */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Send Your Query</h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col justify-center items-center py-12 h-full">
                    <div className="inline-flex p-4 bg-green-50 rounded-full mb-4">
                      <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">Message Sent Successfully!</h3>
                    <p className="text-gray-600 text-center">
                      Thank you for contacting Excel Associates. Our team will respond to your query shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                    <div className="space-y-6 flex-grow">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Service Required *</label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors bg-white"
                        >
                          <option value="">Select a service you need</option>
                          {services.map((service, index) => (
                            <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex-grow">
                        <label className="block text-gray-700 font-medium mb-2">Your Message *</label>
                        <textarea
                          name="message"
                          rows="5"
                          value={formData.message}
                          required
                          onChange={handleChange}
                          className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors resize-none"
                          placeholder="Please describe your requirements in detail..."
                        ></textarea>
                      </div>
                    <div className="mt-auto space-y-4">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 text-lg"
                      >
                        Send Message <Send size={20} />
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting, you agree to our Privacy Policy. We respect your data.
                      </p>
                    </div>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Branch Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our Andhra Pradesh branch for personalized financial consultation and services
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.450046871175!2d82.3481314944735!3d16.56847871796771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3a31426c1f96f7%3A0xb76aab969780c633!2sAmalapuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Excel Associates - Amalapuram Branch Location"
              className="border-0"
            ></iframe>
          </div>

          {/* Address Card */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Branch Address</h3>
              <p className="text-gray-600 text-sm">
                10-14, AKULA VARI STREET,<br />
                KOMARAGIRIPATNAM,<br />
                AMALAPURAM,<br />
                ANDHRA PRADESH - 533210
              </p>
            </div>
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Quick Contact</h3>
              <p className="text-gray-600 text-sm">
                <strong>Phone:</strong> +91 95336 80345<br />
                <strong>Email:</strong> naiduakula09@gmail.com<br />
                <strong>Incharge:</strong> CA Naidu Akula
              </p>
            </div>
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Management?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free initial consultation and discover how Excel Associates can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919533680345" className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Call Now: +91 95336 80345
            </a>
            <a href="mailto:naiduakula09@gmail.com" className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Email Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}