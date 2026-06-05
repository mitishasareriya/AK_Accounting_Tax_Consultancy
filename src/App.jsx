import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';
import './utils/animations'; // Imports global animation trigger bindings

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServicesDetails } from './pages/ServicesDetails';
import { FinancialCalculators } from './pages/FinancialCalculators';
import { GstCalculator } from './pages/calculators/GstCalculator';
import { CaseStudies } from './pages/CaseStudies';
import { SingleProject } from './pages/SingleProject';
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { Copyright } from './pages/Copyright';

// Scroll to top + re-init scroll animations on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Allow React to finish DOM updates before attaching animation observers
    const timer = setTimeout(() => {
      if (typeof window.initScrollAnimations === 'function') {
        window.initScrollAnimations();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        {/* Custom magic cursor — renders at root level above all content */}
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/services"       element={<Services />} />
          <Route path="/services/:slug" element={<ServicesDetails />} />
          <Route path="/financial-calculators" element={<FinancialCalculators />} />
          <Route path="/financial-calculators/gst" element={<GstCalculator />} />
          <Route path="/case-studies"   element={<CaseStudies />} />
          <Route path="/portfolio/details" element={<SingleProject />} />
          <Route path="/blog"           element={<Blog />} />
          <Route path="/blog/details"   element={<BlogDetails />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/privacy"        element={<PrivacyPolicy />} />
          <Route path="/terms"          element={<TermsConditions />} />
          <Route path="/copyright"      element={<Copyright />} />
          {/* Fallback */}
          <Route path="*"              element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
