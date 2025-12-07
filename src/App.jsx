import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TheFirm from './pages/TheFirm';
import OurValues from './pages/OurValues';
import Leadership from './pages/Leadership';
import AuditAssurance from './pages/AuditAssurance';
import TaxRegulatory from './pages/TaxRegulatory';
import BusinessAdvisory from './pages/BusinessAdvisory';
import Partners from './pages/Partners';
import OurTeam from './pages/OurTeam';
import Experience from './pages/Experience';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title =
      currentPage === 'home'
        ? 'Excel Associates - Chartered Accountants'
        : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} | Excel Associates`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'the-firm':
        return <TheFirm />;
      case 'our-values':
        return <OurValues />;
      case 'leadership':
        return <Leadership />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'audit-assurance':
        return <AuditAssurance />;
      case 'tax-regulatory':
        return <TaxRegulatory />;
      case 'business-advisory':
        return <BusinessAdvisory />;
      case 'partners':
        return <Partners />;
      case 'our-team':
        return <OurTeam />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
   <div className="min-h-screen overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      {/* <Footer onNavigate={setCurrentPage} /> */}
    </div>
  );
}
