import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import SEO from '../seo/SEO';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '../seo/schemas';

// --- DATA ARRAYS ---
const featuresList = [
  {
    icon: '/AK_Accounting_Tax_Consultancy/images/demo-it-business-icon-01.gif',
    title: 'GST & Tax Filing',
    desc: 'Professional GST registration, return filing and taxation solutions for businesses across India.'
  },
  {
    icon: '/AK_Accounting_Tax_Consultancy/images/demo-it-business-icon-02.gif',
    title: 'Business Compliance',
    desc: 'Stay compliant with ROC filing, company registration and statutory regulations easily.'
  },
  {
    icon: '/AK_Accounting_Tax_Consultancy/images/demo-it-business-icon-03.gif',
    title: 'Financial Growth',
    desc: 'Expert accounting, auditing and financial planning services to help your business grow.'
  }
];

const progressBars = [
  {
    title: 'client satisfaction',
    percent: 98,
    colorClass: 'bg-gradient-flamingo-red-transparent',
    textClass: 'text-flamingo'
  },
  {
    title: 'tax & compliance success',
    percent: 92,
    colorClass: 'bg-gradient-base-color-transparent',
    textClass: 'text-base-color'
  }
];


const brandLogos = [
  '/AK_Accounting_Tax_Consultancy/images/logo-walmart-dark-blue.svg',
  '/AK_Accounting_Tax_Consultancy/images/logo-netflix-dark-blue.svg',
  '/AK_Accounting_Tax_Consultancy/images/logo-invision-dark-blue.svg',
  '/AK_Accounting_Tax_Consultancy/images/logo-yahoo-dark-blue.svg',
  '/AK_Accounting_Tax_Consultancy/images/logo-amazon-dark-blue.svg'
];

const servicesList = servicesData;

const industriesList = [
  { icon: 'fa-solid fa-shirt', title: 'Textile', borderClass: 'border-bottom border-end border-1' },
  { icon: 'fa-solid fa-coins', title: 'Finance', borderClass: 'border-bottom border-end border-1 sm-border-end-0' },
  { icon: 'fa-solid fa-building', title: 'Real Estate', borderClass: 'border-bottom border-end border-1' },
  { icon: 'fa-solid fa-user-tie', title: 'Consultancy', borderClass: 'border-bottom border-end border-1 md-border-end-0' },
  { icon: 'fa-solid fa-utensils', title: 'Restaurants', borderClass: 'border-bottom border-end border-1' },
  { icon: 'fa-solid fa-truck', title: 'Logistics', borderClass: 'border-bottom border-1 md-border-end sm-border-end-0' },
  { icon: 'fa-solid fa-cow', title: 'Dairy', borderClass: 'border-end border-1 md-border-bottom' },
  { icon: 'fa-solid fa-gem', title: 'Jewellery', borderClass: 'border-end border-1 md-border-end-0 md-border-bottom' },
  { icon: 'fa-solid fa-laptop-code', title: 'IT Services', borderClass: 'border-end border-1 sm-border-bottom' },
  { icon: 'fa-solid fa-leaf', title: 'Agriculture', borderClass: 'border-end border-1 sm-border-end-0 sm-border-bottom' },
  { icon: 'fa-solid fa-industry', title: 'Manufacturing', borderClass: 'border-end border-1' },
  { icon: 'fa-solid fa-store', title: 'Retail', borderClass: 'border-end border-1 sm-border-end-0 sm-border-bottom' }
];

const portfolioCategories = ['All', 'Selected', 'Digital', 'Branding', 'Web'];

const projectsList = Array.from(
  ['selected', 'digital', 'branding', 'web'].reduce((acc, cat) => {
    projectsData
      .filter((project) => project.category.toLowerCase().split(' ').includes(cat))
      .slice(0, 3)
      .forEach((project) => acc.add(project));
    return acc;
  }, new Set())
);


const testimonials = [
  {
    name: 'Rajesh Sharma, Textile Business Owner',
    quote: 'Their accounting and GST services helped us streamline our business operations and stay fully compliant with Indian tax regulations.',
    logo: '/AK_Accounting_Tax_Consultancy/images/logo-monday-dark-blue-01.svg'
  },
  {
    name: 'Priya Mehta, Startup Founder',
    quote: 'Very professional consultancy team. They handled our company registration, taxation and ROC filings smoothly.',
    logo: '/AK_Accounting_Tax_Consultancy/images/logo-loitech-dark-blue.svg'
  },
  {
    name: 'Amit Patel, Manufacturing Company',
    quote: 'Excellent support in audit and financial planning. Their expertise helped us improve profitability and compliance.',
    logo: '/AK_Accounting_Tax_Consultancy/images/logo-invision-dark-blue.svg'
  }
];

const growthCards = [
  {
    // img: '/AK_Accounting_Tax_Consultancy/images/logo-monday-dark-gray-02.svg',
    icon: 'bi bi-shield-check',
    title: 'GST & Tax Compliance',
    growth: '98%',
    paddingClass: 'p-15px lg-ps-25px lg-pe-25px md-ps-15px md-pe-15px'
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Financial Accuracy',
    growth: '95%',
    paddingClass: 'border-1 border-color-extra-medium-gray p-15px'
  },
  {
    icon: 'bi bi-briefcase',
    title: 'Business Growth Support',
    growth: '90%',
    paddingClass: 'border-1 border-color-extra-medium-gray p-15px'
  }
];

// --- REUSABLE COMPONENTS ---

const FeatureCard = ({ icon, title, desc }) => (
  <div className="col icon-with-text-style-01 md-mb-30px">
    <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
      <div className="feature-box-icon me-20px">
        <img src={icon} alt="" />
      </div>
      <div className="feature-box-content">
        <span className="d-inline-block fs-18 text-dark-gray fw-700 mb-5px">{title}</span>
        <p className="w-80 xl-w-90 lg-w-100">{desc}</p>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ title, percent, colorClass, textClass }) => (
  <div className="progress mb-15px border-radius-50px fw-700 fs-11 lh-11 text-white bg-white">
    <div className={`progress-bar ${colorClass} m-0`} role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={{ width: `${percent}%` }}>
      <span className={`progress-bar-percent ${textClass}`}>{percent}%</span>
    </div>
    <div className="progress-bar-title text-uppercase">{title}</div>
  </div>
);

const BrandLogo = ({ src, isLast }) => (
  <div className={`col client-box text-center ${!isLast ? 'md-mb-40px sm-mb-40px' : ''}`}>
    <a href="#"><img src={src} alt="" /></a>
  </div>
);

const ServiceCard = ({ service }) => (
  <div className="flex-shrink-0 w-[280px]">
    <div className="services-box-style-03 last-paragraph-no-margin border-radius-6px overflow-hidden shadow-sm">
      <div className="position-relative">
        <Link to={`/services/${service.slug}`}><img src={service.image} alt="" className="w-full object-cover" /></Link>
        <a href="#" className="btn btn-very-small btn-rounded btn-dark-gray text-white btn-box-shadow ps-15px pe-15px pt-5px pb-5px lh-16 position-absolute right-30px top-30px text-uppercase">{service.badge}</a>
      </div>
      <div className="bg-white p-6 text-center">
        <Link to={`/services/${service.slug}`} className="d-inline-block fs-18 fw-700 text-dark-gray mb-5px">{service.title}</Link>
        <p className="fs-14 text-medium-gray">{service.shortDescription}</p>
        <div className="d-flex justify-content-center border-top border-color-extra-medium-gray mt-4 pt-4 position-relative text-center">
          <Link to={`/services/${service.slug}`} className="btn btn-link btn-hover-animation-switch btn-medium fw-700 text-dark-gray text-uppercase">
            <span>
              <span className="btn-text">Explore services</span>
              <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const IndustryCard = ({ item }) => (
  <div className="col icon-with-text-style-04 transition-inner-all">
    <div className={`feature-box hover-box h-100 transition dark-hover pt-25 pb-25 xs-p-12 last-paragraph-no-margin overflow-hidden ${item.borderClass} border-color-transparent-white-light border-color-transparent-on-hover`}>
      <div className="feature-box-icon">
        <i className={`${item.icon} icon-extra-large text-white mb-15px`}></i>
      </div>
      <div className="feature-box-content">
        <span className="d-inline-block text-white fw-600 fs-14 text-uppercase">{item.title}</span>
      </div>
      <div className="feature-box-overlay bg-base-color"></div>
    </div>
  </div>
);

const PortfolioCard = ({ project, setLightboxImage }) => (
  <li className={`grid-item transition-inner-all`}>
    <a href={project.img} onClick={(e) => { e.preventDefault(); setLightboxImage(project); }} title={project.title}>
      <div className="portfolio-box">
        <div className="portfolio-image border-radius-4px">
          <img src={project.img} alt="" />
        </div>
        <div className="portfolio-hover box-shadow-extra-large">
          <div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
            <div className="me-auto">
              <div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">{project.tag}</div>
              <div className="fw-700 text-dark-gray text-uppercase lh-initial">{project.title}</div>
            </div>
            <div className="ms-auto"><i className="fa-solid fa-plus icon-extra-medium text-dark-gray lh-36"></i></div>
          </div>
        </div>
      </div>
    </a>
  </li>
);

const GrowthCard = ({ card }) => (
  <div className="col sm-mb-30px">
    <div className="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover">
      <div className="pt-10 pb-10">
        {card.icon ? (
            <i className={`${card.icon} text-base-color text-5xl`}></i>
        ) : (
          <img src={card.img} className="h-40px md-h-35px sm-h-40px" alt="" />
        )}
      </div>
      <div className={`border-top fs-16 last-paragraph-no-margin ${card.paddingClass}`}>
        <p>{card.title} - <span className="fw-600 text-dark-gray">{card.growth}</span></p>
      </div>
    </div>
  </div>
);

const SectionTitle = ({ title, subtitle, icon, isWhite = false }) => (
  <>
    {subtitle && (
      <span className={`ps-25px pe-25px pt-5px pb-5px mb-25px text-uppercase fs-12 ls-1px fw-600 border-radius-100px d-inline-flex align-items-center ${isWhite ? 'text-white bg-gradient-dark-gray-transparent text-start sm-lh-20' : 'text-base-color bg-gradient-very-light-gray-transparent'}`}>
        <i className={`${icon} ${isWhite ? 'text-white d-inline-block align-middle icon-small' : 'fs-16'} me-10px`}></i> {subtitle}
      </span>
    )}
    {title && (
      <h1 className={`${isWhite ? 'text-white text-4xl sm:text-5xl' : 'text-dark-gray fs-50'} fw-600 ls-minus-2px mb-50px`}>
        {title}
      </h1>
    )}
  </>
);

// --- MAIN PAGE COMPONENT ---

export const Home = () => {
  useAnime();

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = servicesList.length;

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % (totalSlides - 2));
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + (totalSlides - 2)) % (totalSlides - 2));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % (totalSlides - 2));
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const [portfolioCategory, setPortfolioCategory] = useState('Selected');
  const [filteredProjects, setFilteredProjects] = useState(projectsList);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (portfolioCategory === 'All') {
      setFilteredProjects(projectsList);
    } else {
      const filtered = projectsList.filter((project) =>
        project.category.toLowerCase().split(' ').includes(portfolioCategory.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [portfolioCategory]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const slideAnime = '{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }';
  const fadeAnime = '{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }';

  const orgSchema = generateOrganizationSchema();
  const localBizSchema = generateLocalBusinessSchema();
  const homeSchema = [orgSchema, localBizSchema];

  return (
    <div>
      <SEO 
        title="Home" 
        description="AK Accounting provides professional accounting, taxation, audit and compliance services designed to support businesses at every stage of growth." 
        schema={homeSchema}
      />
      {/* 1. HERO SECTION */}
      <section className="cover-background full-screen py-0 md-h-750px sm-h-650px" style={{ backgroundImage: `url('/AK_Accounting_Tax_Consultancy/images/demo-it-business-banner-bg_1.png')` }}>
        <div className="opacity-very-light bg-black"></div>
        <ShapeWaveBottom />
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-xl-6 col-lg-8 col-md-10 position-relative z-index-1" data-anime='{ "el": "childs", "translateY": [0, 0], "perspective": [1200,1200], "scale": [1.05, 1], "rotateX": [30, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <span className="ps-25px pe-25px pt-5px pb-5px mb-25px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex w-70 sm-w-100 align-items-center">
                <i className="bi bi-megaphone text-white icon-small me-10px"></i> Accounting • Tax • Compliance
              </span>
              <h1 className="text-white fw-600 w-185 sm-w-95 ls-minus-2px mb-25px">Expert Financial Solutions For Modern Businesses</h1>
              <div><p className="fw-300 fs-18 w-150 sm-w-95 text-white opacity-6">We provide professional accounting, taxation, audit and compliance services designed to support businesses at every stage of growth.</p></div>

              <Link to="/services" target="_blank" rel="noreferrer" className="btn btn-extra-large btn-switch-text btn-gradient-purple-pink btn-rounded me-10px ls-0px mt-15px">
                <span>
                  <span className="btn-double-text" data-text="Explore services">Explore services</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </span>
              </Link>
              <Link to="/contact" className="btn btn-extra-large btn-switch-text btn-transparent-white-light btn-rounded border-1 ls-0px mt-15px">
                <span>
                  <span className="btn-double-text" data-text="Contact us">Contact us</span>
                  <span><i className="fa-regular fa-envelope"></i></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE FEATURE BOXES & AGENCY INTRO */}
      <section className="pt-3 sm-pt-50px pb-0 bg-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-7" data-anime={slideAnime}>
            {featuresList.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
          </div>

          <div className="row mb-10 align-items-center">
            <div className="col-lg-5 position-relative md-mb-20">
              <div className="w-70 xs-w-80">
                <img src="/AK_Accounting_Tax_Consultancy/images/demo-accounting-img-02.jpg" alt="" className="border-radius-8px w-100" />
              </div>
              <div className="w-60 overflow-hidden position-absolute right-minus-15px xs-right-15px xs-w-60 bottom-minus-50px">
                <img src="/AK_Accounting_Tax_Consultancy/images/demo-accounting-company-01.jpg" alt="" className="border-radius-8px w-100 box-shadow-quadruple-large" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-lg-1" data-anime={slideAnime}>
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex align-items-center">
                <i className="bi bi-award fs-16 me-5px"></i>Trusted accounting experts
              </span>
              <h3 className="text-dark-gray fs-50 fw-700 ls-minus-2px">Reliable accounting & tax solutions for growing businesses.</h3>
              <p className="mb-40px sm-mb-25px"> We help startups, SMEs, and enterprises streamline their finances with expert accounting, tax planning, GST compliance, payroll management, and financial advisory services. Our experienced team ensures accuracy, transparency, and long-term financial stability for your business.</p>

              <div className="progress-bar-style-02">
                {progressBars.map((bar, idx) => <ProgressBar key={idx} {...bar} />)}
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center ps-3 pe-3 xs-mt-40px mb-5" data-anime='{ "el": "childs", "scale": [0.8,1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {brandLogos.map((src, idx) => <BrandLogo key={idx} src={src} isLast={idx === brandLogos.length - 1} />)}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS SERVICES CAROUSEL */}
      <section className="overflow-hidden bg-very-light-gray position-relative">
        <div className="container">
          <div className="row align-items-center mb-5 sm-mb-30px text-center text-lg-start" data-anime={slideAnime}>
            <div className="col-lg-5 md-mb-30px">
              <h3 className="text-dark-gray fw-700 ls-minus-2px mb-0">Comprehensive accounting & compliance services.</h3>
            </div>
            <div className="col-lg-4 offset-xl-1 last-paragraph-no-margin md-mb-30px">
              <p>    We provide reliable financial, taxation, and compliance solutions designed to help businesses stay legally compliant, financially organized, and growth-ready at every stage.</p>
            </div>
            <div className="col-xl-2 col-lg-3 d-flex justify-content-center gap-2">
              <div onClick={prevSlide} className="slider-one-slide-prev-1 icon-small text-dark-gray bg-white box-shadow-large cursor-pointer h-40px w-40px rounded-full flex items-center justify-center"><i className="fa-solid fa-arrow-left"></i></div>
              <div onClick={nextSlide} className="slider-one-slide-next-1 icon-small text-dark-gray bg-white box-shadow-large cursor-pointer h-40px w-40px rounded-full flex items-center justify-center"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>
          <div className="row align-items-center" data-anime={fadeAnime}>
            <div className="col-12">
              <div className="outside-box-right-20 sm-outside-box-right-0 overflow-hidden magic-cursor view-cursor swiper">
                <div className="flex gap-4 transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 300}px)` }}>
                  {servicesList.map((service, index) => <ServiceCard key={index} service={service} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES GRID */}
      <section className="bg-dark-gray">
        <div className="container">
          <div className="row justify-content-center mb-5 sm-mb-30px">
            <div className="col-xl-6 col-lg-8 col-md-10 text-center" data-anime={slideAnime}>
              <h3 className="text-white mb-0 fw-600">Serving our clients across the diverse industries.</h3>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-0" data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
            {industriesList.map((item, index) => <IndustryCard key={index} item={item} />)}
          </div>
        </div>
      </section>

      {/* 5. QUICK CTAS */}
      <section className="p-0 bg-midnight-blue">
        <div className="container">
          <div className="row align-items-center justify-content-center g-0" data-anime={fadeAnime}>
            <div className="col-auto d-flex align-items-center">
              <img src="/AK_Accounting_Tax_Consultancy/images/demo-it-business-07.jpg" alt="" />
              <div className="fs-17 lh-26 last-paragraph-no-margin text-white pt-15px pb-15px fw-500">
                <p>Save your precious time and effort spent for finding a solution. <Link to="/contact" className="text-decoration-line-bottom text-white">Contact us now</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECENT CASE STUDIES */}
      <section className="position-relative">
        <div className="container">
          <div className="row align-items-center mb-4" data-anime={slideAnime}>
            <div className="col-xl-5 lg-mb-30px text-center text-xl-start">
              <h3 className="text-dark-gray fw-700 mb-0 ls-minus-2px">Recent case studies</h3>
            </div>
            <div className="col-xl-7 tab-style-04 text-center text-xl-end">
              <ul className="portfolio-filter nav nav-tabs justify-content-center justify-content-xl-end border-0 fw-500">
                {portfolioCategories.map((cat) => (
                  <li key={cat} className={`nav${portfolioCategory === cat ? ' active' : ''}`}>
                    <a onClick={(e) => { e.preventDefault(); setPortfolioCategory(cat); }} href="#">{cat}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row" data-anime={fadeAnime}>
            <div className="col-12 filter-content p-md-0">
              <ul className="portfolio-modern portfolio-wrapper d-flex flex-wrap grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                {filteredProjects.map((project) => <PortfolioCard key={project.id} project={project} setLightboxImage={setLightboxImage} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="pt-0">
        <div className="container background-no-repeat background-position-top" style={{ backgroundImage: `url('/AK_Accounting_Tax_Consultancy/images/demo-it-business-testimonial-bg.png')` }}>
          <div className="row justify-content-center mb-2">
            <div className="col-xxl-6 col-lg-8 col-md-9 text-center" data-anime={slideAnime}>
              <h3 className="text-dark-gray fw-700 ls-minus-2px">Trusted by the world's fastest growing companies.</h3>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-6 sm-mb-8">
            <div className="col-xl-10 position-relative">
              <div className="row align-items-center justify-content-center">
                <div className="col-8 col-md-4 col-sm-6 text-center md-mb-30px">
                  <img alt="" src={`/AK_Accounting_Tax_Consultancy/images/demo-it-business-testimonials-0${activeTestimonial + 1}.png`} />
                </div>
                <div className="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start">
                  <a href="#" className="mb-15px d-block">
                    <img src={testimonials[activeTestimonial].logo} className="h-35px" alt="" />
                  </a>
                  <span className="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray">{testimonials[activeTestimonial].quote}</span>
                  <span className="fs-15 text-uppercase fw-800 text-dark-gray ls-05px">{testimonials[activeTestimonial].name}</span>
                </div>
              </div>
              <div className="swiper-button-previous-nav swiper-button-prev md-left-0px" onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} style={{ cursor: 'pointer' }}><i className="fa-solid fa-arrow-left icon-extra-medium text-dark-gray"></i></div>
              <div className="swiper-button-next-nav swiper-button-next md-right-0px" onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} style={{ cursor: 'pointer' }}><i className="fa-solid fa-arrow-right icon-extra-medium text-dark-gray"></i></div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 justify-content-center" data-anime='{ "el": "childs", "translateY": [0, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {growthCards.map((card, idx) => <GrowthCard key={idx} card={card} />)}
          </div>
        </div>
      </section>

      {/* 8. CREATIVE SOLUTIONS BOTTOM HERO */}
      <section className="cover-background one-third-screen sm-h-500px pb-0 position-relative bg-cover bg-center" style={{ backgroundImage: "url('/AK_Accounting_Tax_Consultancy/images/demo-it-business-08.jpg')" }}>
        <div className="opacity-extra-medium bg-dark-gray"></div>
        <div className="container h-100">
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-xl-8 col-lg-10 mb-9 md-mb-15 position-relative z-index-1 text-center d-flex flex-wrap align-items-center justify-content-center" data-anime={slideAnime}>
              <SectionTitle
                isWhite={true}
                icon="bi bi-megaphone"
                subtitle="Helping your business grow with confidence."
                title="Smart accounting & taxation solutions that help you to grow!"
              />
              <p className="text-white opacity-8 fs-18 w-180 lg-w-180 sm-w-100 mb-35px">
                From GST filing and tax planning to bookkeeping and business registration,
                we provide reliable financial services that simplify compliance and support
                your long-term business success.
              </p>
              <Link to="/contact" className="btn btn-extra-large btn-switch-text btn-gradient-purple-pink btn-rounded me-10px">
                <span>
                  <span
                    className="btn-double-text"
                    data-text="Get free consultation"
                  >
                    Get free consultation
                  </span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <ShapeWaveBottom />
      </section>
      {/* Lightbox Modal with iframe */}
      {lightboxImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 99999 }}
          onClick={() => setLightboxImage(null)}
        >
          <div className="position-relative text-center p-4">
            <button 
              className="position-absolute top-0 end-0 bg-transparent border-0 text-white fs-3 hover-text-medium-gray"
              style={{ right: '0px', top: '0px' }}
              onClick={() => setLightboxImage(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img 
              src={lightboxImage.img} 
              alt={lightboxImage.title} 
              style={{ maxHeight: '85vh', maxWidth: '90vw' }} 
              className="border-radius-6px box-shadow-extra-large"
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="text-white mt-3 fs-18 fw-500">
              {lightboxImage.title} <span className="opacity-6 ms-2 fs-14 fw-400">({lightboxImage.tag})</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;