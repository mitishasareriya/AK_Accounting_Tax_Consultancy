import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import Swiper from 'swiper';
import { Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

// --- DATA ARRAYS ---

const pageTitleData = {
  title: 'About AK Accounting & Tax Consultancy',
  subtitle: 'Helping Businesses Grow with Smart Financial Solutions',
  bgImage: '/images/demo-it-business-about-title-bg_1.png'
};

const featuresGrid = [
  { 
    icon: 'fa-file-invoice-dollar', 
    title1: 'GST & Tax', 
    title2: 'Compliance', 
    borderClass: 'border-bottom border-end xs-border-end-0 border-color-extra-medium-gray' 
  },
  { 
    icon: 'fa-building', 
    title1: 'Business', 
    title2: 'Registration', 
    borderClass: 'border-bottom border-color-extra-medium-gray' 
  },
  { 
    icon: 'fa-chart-line', 
    title1: 'Financial', 
    title2: 'Growth', 
    borderClass: 'border-end xs-border-end-0 xs-border-bottom border-color-extra-medium-gray' 
  },
  { 
    icon: 'fa-handshake', 
    title1: 'Trusted', 
    title2: 'Advisory', 
    borderClass: '' 
  }
];

const checkListItems = [
  { 
    title: 'Accurate Financial Reporting.', 
    desc: 'We ensure your books and reports are always compliant and error-free.' 
  },
  { 
    title: 'Maximize Tax Savings.', 
    desc: 'Strategic tax planning to reduce liabilities and improve profitability.' 
  }
];

const swiperImages = [1, 2, 3, 4, 5, 6, 1, 2];

const statsList = [
  { 
    title: 'Years of Experience.', 
    desc: 'Delivering reliable accounting and taxation services across India.', 
    count: '10+', 
    marginClass: 'md-mb-50px' 
  },
  { 
    title: 'Satisfied Clients.', 
    desc: 'Helping startups, SMEs and enterprises manage finances efficiently.', 
    count: '1200+', 
    marginClass: 'md-mb-50px' 
  },
  { 
    title: 'Industries Served.', 
    desc: 'Supporting businesses across multiple sectors and domains.', 
    count: '25+', 
    marginClass: 'sm-mb-50px' 
  },
  { 
    title: 'Successful Filings.', 
    desc: 'GST returns, income tax and compliance filings completed.', 
    count: '5000+', 
    marginClass: '' 
  }
];

const processSteps = [
  { 
    num: '01', 
    title: 'Understanding Client Requirements', 
    desc: 'We analyze your business structure, financial needs and compliance scope.', 
    hasSeparator: true, 
    mbClass: 'mb-40px' 
  },
  { 
    num: '02', 
    title: 'Strategic Planning & Execution', 
    desc: 'We design accounting, tax and compliance strategies tailored to your business.', 
    hasSeparator: true, 
    mbClass: 'mb-40px' 
  },
  { 
    num: '03', 
    title: 'Compliance & Reporting Delivery', 
    desc: 'We ensure timely filings, accurate reports and complete regulatory compliance.', 
    hasSeparator: false, 
    mbClass: 'mb-30px' 
  }
];

const clientLogos = [
  { src: '/images/logo-walmart-dark-blue.svg', mbClass: 'md-mb-40px' },
  { src: '/images/logo-netflix-dark-blue.svg', mbClass: 'md-mb-40px' },
  { src: '/images/logo-invision-dark-blue.svg', mbClass: 'md-mb-40px' },
  { src: '/images/logo-yahoo-dark-blue.svg', mbClass: 'sm-mb-40px' },
  { src: '/images/logo-amazon-dark-blue.svg', mbClass: '' }
];

// --- REUSABLE COMPONENTS ---

const SectionHeader = ({ subtitle, title, titleClass = 'fs-3xl' }) => (
  <>
    <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex align-items-center">
      <i className="bi bi-award fs-16 me-5px"></i>{subtitle}
    </span>
    <h3 className={`text-dark-gray fw-700 ls-minus-1px md-w-80 sm-w-100 ${titleClass}`}>{title}</h3>
  </>
);

const FeatureBox = ({ item }) => (
  <div className={`col p-10 lg-p-8 text-center bg-white last-paragraph-no-margin ${item.borderClass}`}>
    <i className={`fa-solid ${item.icon} icon-extra-large text-base-color mb-15px d-block fs-2xl`}></i>
    <span className="fs-14 fw-700 text-dark-gray text-uppercase lh-20 d-inline-block">{item.title1}<br />{item.title2}</span>
  </div>
);

const CheckItem = ({ item, isLast }) => (
  <div className={`icon-with-text-style-08 ${!isLast ? 'mb-25px' : ''}`}>
    <div className="feature-box feature-box-left-icon-middle overflow-hidden">
      <div className="feature-box-icon feature-box-icon-rounded w-50px h-50px rounded-circle bg-very-light-gray me-20px text-center flex items-center justify-center">
        <i className="fa-solid fa-check fs-16 text-base-color"></i>
      </div>
      <div className="feature-box-content last-paragraph-no-margin">
        <span className="fs-17 fw-600 text-dark-gray">{item.title}</span>
        <p className="fs-14 text-medium-gray">{item.desc}</p>
      </div>
    </div>
  </div>
);

const StatBox = ({ item }) => (
  <div className={`col last-paragraph-no-margin text-center text-md-start ${item.marginClass}`}>
    <span className="fs-18 fw-600 d-block mb-5px text-dark-gray">{item.title}</span>
    <p className="w-90 lg-w-100 sm-ps-15 sm-pe-15">{item.desc}</p>
    <div className="separator-line-1px bg-dark-gray w-90 mt-25px mb-25px opacity-2 sm-w-100"></div>
    <h3 className="vertical-counter d-inline-flex alt-font text-dark-gray fw-800 ls-minus-2px mb-0 fs-3xl">{item.count}</h3>
  </div>
);

const ProcessStep = ({ step }) => (
  <div className="col-12 process-step-style-05 position-relative hover-box">
    <div className="process-step-item d-flex">
      <div className="process-step-icon-wrap position-relative">
        <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-white position-relative box-shadow-bottom">
          <span className="number position-relative z-index-1 text-dark-gray fw-600">{step.num}</span>
        </div>
        {step.hasSeparator && <span className="progress-step-separator bg-dark-gray opacity-1"></span>}
      </div>
      <div className={`process-content ps-35px sm-ps-25px last-paragraph-no-margin ${step.mbClass}`}>
        <span className="d-block fw-600 text-dark-gray fs-17 mb-5px">{step.title}</span>
        <p className="w-90 sm-w-100 fs-14 text-medium-gray">{step.desc}</p>
      </div>
    </div>
  </div>
);

const ClientLogo = ({ logo }) => (
  <div className={`col client-box text-center ${logo.mbClass}`}>
    <a href="#"><img src={logo.src} className="h-45px mx-auto" alt="" /></a>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export const About = () => {
  useAnime();
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;
    const timer = setTimeout(() => {
      if (swiperRef.current) {
        try {
          const options = JSON.parse(swiperRef.current.getAttribute('data-slider-options') || '{}');
          options.modules = [Autoplay, Keyboard];
          swiperInstance = new Swiper(swiperRef.current, options);
        } catch (e) {
          console.error('Failed to initialize Swiper', e);
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (swiperInstance && typeof swiperInstance.destroy === 'function') {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  const slideUpAnime = '{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }';

  return (
    <div>
      {/* start page title */}
      <PageHeader 
        title={pageTitleData.title}
        subtitle={pageTitleData.subtitle}
        bgImage={pageTitleData.bgImage}
        animeProps={slideUpAnime}
      />
      {/* end page title */}

      {/* start section */}
      <section className="position-relative pt-3 sm-pt-50px overlap-height background-no-repeat background-position-left-top bg-white" style={{ backgroundImage: `url('/images/demo-it-business-about-bg.jpg')` }}>
        <div className="container overlap-gap-section">
          <div className="row align-items-center mb-6" data-anime={slideUpAnime}>
            <div className="col-lg-6 md-mb-50px">
              <div className="d-flex flex-column box-shadow-quadruple-large border-radius-8px overflow-hidden">
                <div className="row row-cols-1 row-cols-sm-2 justify-content-center m-0">
                  {featuresGrid.map((item, idx) => <FeatureBox key={idx} item={item} />)}
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeader subtitle="Creative approach" title="Provide advanced business solutions." />
              <div className="mb-40px sm-mb-30px">
                {/* features check list */}
                {checkListItems.map((item, idx) => <CheckItem key={idx} item={item} isLast={idx === checkListItems.length - 1} />)}
              </div>

              <Link to="/services" className="btn btn-extra-large btn-gradient-purple-pink btn-hover-animation-switch btn-rounded btn-box-shadow btn-icon-left me-30px inline-flex">
                <span>
                  <span className="btn-text">Explore services</span>
                  <span className="btn-icon"><i className="feather icon-feather-briefcase"></i></span>
                </span>
              </Link>
              <Link to="/contact" className="btn btn-link btn-hover-animation-switch btn-extra-large text-dark-gray btn-icon-left align-middle fw-600 p-0 xs-mt-20px xs-mb-20px inline-flex">
                <span>
                  <span className="btn-text">Quick contact</span>
                  <span className="btn-icon"><i className="feather icon-feather-mail"></i></span>
                </span>
              </Link>
            </div>
          </div>
          <div className="row mt-8">
            <div className="col-12 text-center">
              <i className="bi bi-envelope text-dark-gray d-inline-block align-middle icon-extra-medium me-10px md-m-5px"></i>
              <div className="fs-18 text-dark-gray d-inline-block align-middle fw-500">
                Save your precious time and effort spent for finding a solution.{' '}
                <Link to="/contact" className="text-dark-gray text-decoration-line-bottom fw-700">Contact us now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - Swiper Carousel representations */}
      <section className="bg-very-light-gray">
        <div className="container-fluid overlap-section">
          <div className="row overflow-hidden">
            <div className="col-12 col-md-12">
              <div className="outside-box-right-15 outside-box-left-15 sm-outside-box-left-40 sm-outside-box-right-40">
                <div 
                  ref={swiperRef}
                  className="swiper view-cursor magic-cursor" 
                  data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "autoplay": { "delay": 2000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 6 }, "768": { "slidesPerView": 3 }, "320": { "slidesPerView": 3 } }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper align-items-center">
                    {swiperImages.map((num, i) => (
                      <div key={i} className="swiper-slide">
                        <img src={`/images/demo-it-business-about-0${num}.jpg`} className="border-radius-6px" alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - counters */}
      <section className="pt-0 bg-very-light-gray">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 counter-style-04" data-anime={slideUpAnime}>
            {statsList.map((item, idx) => <StatBox key={idx} item={item} />)}
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - creative process */}
      <section className="bg-very-light-gray pt-0 background-no-repeat background-position-left-top position-relative" style={{ backgroundImage: `url('/images/demo-it-business-about-bg2.jpg')` }}>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7" data-anime={slideUpAnime}>
            <div className="col-xl-5 col-lg-6 mb-30px">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-light-gray-transparent d-inline-flex align-items-center">
                <i className="bi bi-box-seam fs-16 me-5px"></i> Our working approach
              </span>
              <h3 className="text-dark-gray fw-700 ls-minus-2px mb-50px fs-3xl">A structured accounting process designed for accuracy and compliance.</h3>
              <div className="row row-cols-1">
                {processSteps.map((step, idx) => <ProcessStep key={idx} step={step} />)}
              </div>
            </div>
            <div className="col-lg-6 text-center md-mb-20px offset-xl-1">
              <figure className="position-relative mb-0 overflow-hidden">
                <img src="/images/demo-it-business-about-07_1.png" className="w-100 border-radius-6px" alt="" />
                <figcaption className="position-absolute border-radius-4px text-center right-30px bottom-30px pt-35px pb-35px ps-5px pe-5px bg-white-transparent glass-effect">
                  <span className="fs-80 lh-75 text-dark-gray ls-minus-4px position-relative fw-800 mb-5px d-block alt-font text-5xl">6<sub className="fs-40 lh-40 text-dark-gray position-relative top-minus-40px text-xl">+</sub></span>
                  <span className="d-block mx-auto fs-14 fw-700 lh-20 w-200px text-center text-dark-gray text-uppercase">Years working experience</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center mt-16 align-items-center opacity-6" data-anime='{ "el": "childs", "scale": [0.8,1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'></div>
          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center mb-8 sm-mb-0" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {clientLogos.map((logo, idx) => <ClientLogo key={idx} logo={logo} />)}
          </div>
        </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
    </div>
  );
};
export default About;
