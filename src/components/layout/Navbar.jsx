import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [stickyActive, setStickyActive] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  // Lock body scroll and activate full-screen mobile overlay when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('navbar-collapse-show');
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('navbar-collapse-show');
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('navbar-collapse-show');
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Sticky header scroll handler — mimics Crafto main.js behaviour
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setSticky(pos >= 50);
      setStickyActive(pos > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  }, []);

  const isActiveRoute = useCallback((path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  return (
    <>
      <header className={`${sticky ? 'sticky' : ''} ${stickyActive ? 'sticky-active' : ''}`}>
        {/* start navigation */}
        <nav
          className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse glass-effect"
          data-header-hover="light"
        >
          <div className="container-fluid">
            {/* Logo */}
            <div className="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
              <Link className="navbar-brand" to="/">
                <img src="/AK_Accounting_Tax_Consultancy/images/logo_400_120.svg" data-at2x="/AK_Accounting_Tax_Consultancy/images/demo-it-business-logo-white@2x.png" alt="Crafto" className="default-logo" />
                <img src="/AK_Accounting_Tax_Consultancy/images/logo_vertical.svg" data-at2x="/AK_Accounting_Tax_Consultancy/images/demo-it-business-logo-black@2x.png" alt="Crafto" className="alt-logo" />
                <img src="/AK_Accounting_Tax_Consultancy/images/logo_vertical_3.svg" data-at2x="/AK_Accounting_Tax_Consultancy/images/demo-it-business-logo-black@2x.png" alt="Crafto" className="mobile-logo" style={{ maxHeight: '250px' }} />
              </Link>
            </div>

            {/* Desktop nav + hamburger toggle */}
            <div className="col-auto col-xxl-6 col-lg-8 menu-order position-static">
              {/* Hamburger button — visible on mobile only (< lg) */}
              <button
                className={`navbar-toggler float-start${isOpen ? '' : ' collapsed'}`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbarNav"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
              </button>

              {/* Desktop collapse: always show on >= lg */}
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink>
                  </li>
                  <li className={`nav-item dropdown dropdown-with-icon-style02${dropdownOpen ? ' show' : ''}`}>
                    <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Services</NavLink>
                    <i
                      className="fa-solid fa-angle-down dropdown-toggle"
                      role="button"
                      onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}
                      aria-expanded={dropdownOpen}
                    ></i>
                    <ul className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>
                      {servicesData.map((service, index) => {
                        const icons = ['bi bi-briefcase', 'bi bi-clipboard-data', 'bi bi-building', 'bi bi-journal-text', 'bi bi-shield-check', 'bi bi-people'];
                        return (
                          <li key={service.slug}>
                            <Link to={`/services/${service.slug}`}>
                              <i className={icons[index % icons.length]}></i>{service.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/case-studies" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Case studies</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/financial-calculators" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Calculators</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Blog</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA button — desktop only */}
            <div className="col-auto col-xxl-3 col-lg-2 text-end d-none d-sm-flex">
              <div className="header-icon">
                <div className="header-button">
                  <Link to="/contact" className="btn btn-large btn-transparent-white-light btn-rounded text-transform-none border-1">
                    Get free consultation<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* end navigation */}
      </header>

      {/* ============================================================
          Full-screen mobile menu overlay
          ============================================================ */}
      <div
        className="navbar-full-screen-menu-inner"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {/* Close (X) button inside overlay */}
        <button
          className="navbar-toggler navbar-toggler-clone"
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation"
        >
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </button>

        {/* Cloned collapse container */}
        <div className="navbar-collapse collapse navbar-collapse-clone show" id="navbarNav-clone">
          <div className="mCustomScrollBox">
            <div className="mCSB_container">
              {/* Logo inside overlay */}
              <div className="text-center mb-5">
                <Link className="navbar-brand d-inline-block text-center" to="/" onClick={closeMenu}>
                  <img src="/AK_Accounting_Tax_Consultancy/images/logo_400_120.svg" alt="Crafto" style={{ maxHeight: '50px' }} />
                </Link>
              </div>

              {/* Mobile nav links */}
              <ul className="navbar-nav">
                <li className={`nav-item${isActiveRoute('/') ? ' active' : ''}`}>
                  <NavLink to="/" onClick={closeMenu} className="nav-link">Home</NavLink>
                </li>
                <li className={`nav-item${isActiveRoute('/about') ? ' active' : ''}`}>
                  <NavLink to="/about" onClick={closeMenu} className="nav-link">About</NavLink>
                </li>
                <li className={`nav-item dropdown dropdown-with-icon-style02${isActiveRoute('/services') ? ' active' : ''}${mobileDropdownOpen ? ' show' : ''}`}>
                  <NavLink to="/services" onClick={closeMenu} className="nav-link">Services</NavLink>
                  <i
                    className={`fa-solid fa-angle-down dropdown-toggle${mobileDropdownOpen ? ' show' : ''}`}
                    role="button"
                    onClick={(e) => { e.stopPropagation(); setMobileDropdownOpen(!mobileDropdownOpen); }}
                  ></i>
                  <ul className={`dropdown-menu${mobileDropdownOpen ? ' show' : ''}`}>
                    {servicesData.map((service, index) => {
                      const icons = ['bi bi-briefcase', 'bi bi-clipboard-data', 'bi bi-building', 'bi bi-journal-text', 'bi bi-shield-check', 'bi bi-people'];
                      return (
                        <li key={service.slug}>
                          <Link to={`/services/${service.slug}`} onClick={closeMenu}>
                            <i className={`${icons[index % icons.length]} me-2`}></i>{service.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className={`nav-item${isActiveRoute('/case-studies') ? ' active' : ''}`}>
                  <NavLink to="/case-studies" onClick={closeMenu} className="nav-link">Case studies</NavLink>
                </li>
                <li className={`nav-item${isActiveRoute('/financial-calculators') ? ' active' : ''}`}>
                  <NavLink to="/financial-calculators" onClick={closeMenu} className="nav-link">Calculators</NavLink>
                </li>
                <li className={`nav-item${isActiveRoute('/blog') ? ' active' : ''}`}>
                  <NavLink to="/blog" onClick={closeMenu} className="nav-link">Blog</NavLink>
                </li>
                <li className={`nav-item${isActiveRoute('/contact') ? ' active' : ''}`}>
                  <NavLink to="/contact" onClick={closeMenu} className="nav-link">Contact</NavLink>
                </li>
              </ul>

              {/* Get free consultation button inside overlay */}
              <div className="text-center mt-5">
                <Link to="/contact" onClick={closeMenu} className="btn btn-large btn-transparent-white-light btn-rounded text-transform-none border-1">
                  Get free consultation<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
