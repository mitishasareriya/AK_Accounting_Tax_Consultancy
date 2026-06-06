import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';
import ErrorBoundary from './components/common/ErrorBoundary';
import Loader from './components/common/Loader';
import './utils/animations'; // Imports global animation trigger bindings

// Lazy load Pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const ServicesDetails = lazy(() => import('./pages/ServicesDetails').then(module => ({ default: module.ServicesDetails })));
const FinancialCalculators = lazy(() => import('./pages/FinancialCalculators').then(module => ({ default: module.FinancialCalculators })));
const GstCalculator = lazy(() => import('./pages/calculators/GstCalculator').then(module => ({ default: module.GstCalculator })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then(module => ({ default: module.CaseStudies })));
const SingleProject = lazy(() => import('./pages/SingleProject').then(module => ({ default: module.SingleProject })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const BlogDetails = lazy(() => import('./pages/BlogDetails').then(module => ({ default: module.BlogDetails })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then(module => ({ default: module.TermsConditions })));
const Copyright = lazy(() => import('./pages/Copyright').then(module => ({ default: module.Copyright })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

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
      <ErrorBoundary>
        <Router basename="/AK_Accounting_Tax_Consultancy/">
          <ScrollToTop />
          {/* Custom magic cursor — renders at root level above all content */}
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<Loader />}>
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
              {/* 404 Fallback */}
              <Route path="*"               element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
