import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import TheFirm from "./pages/TheFirm";
import OurValues from "./pages/OurValues";
import Leadership from "./pages/Leadership";
import AuditAssurance from "./pages/AuditAssurance";
import TaxRegulatory from "./pages/TaxRegulatory";
import BusinessAdvisory from "./pages/BusinessAdvisory";
import Partners from "./pages/Partners";
import OurTeam from "./pages/OurTeam";
import Experience from "./pages/Experience";

// Component to handle scroll to top and title updates
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update document title based on route
    const path = location.pathname.slice(1) || "home";
    const title = path === "home"
      ? "Somasekhara & Associates - Chartered Accountants"
      : `${path.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Somasekhara & Associates`;
    document.title = title;
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#363636',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/the-firm" element={<TheFirm />} />
            <Route path="/our-values" element={<OurValues />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/services" element={<Services />} />
            <Route path="/audit-assurance" element={<AuditAssurance />} />
            <Route path="/tax-regulatory" element={<TaxRegulatory />} />
            <Route path="/business-advisory" element={<BusinessAdvisory />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
