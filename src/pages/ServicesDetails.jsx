import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';
import { servicesData } from '../data/servicesData';

export const ServicesDetails = () => {
  useAnime();
  const { slug } = useParams();
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Find the selected service based on URL slug
  const service = servicesData.find(s => s.slug === slug);

  // If service not found, redirect back to services list
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Dynamically compute related services (excluding the current one)
  const relatedServices = servicesData.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* start page title */}
      <PageHeader 
        title={service.header.title}
        subtitle={service.header.subtitle}
        bgImage={service.header.bgImage}
        titleClass="mb-0 text-white fw-600 ls-minus-1px text-4xl sm:text-5xl"
        colClass="col-12 col-lg-8 col-md-10"
      />
      {/* end page title */}

      {/* start overview section */}
      <section className="pt-3 sm-pt-50px bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 md-mb-50px">
              <figure className="position-relative m-0">
                <img src={service.overview.mainImage} alt="" className="w-100 border-radius-5px" />
                <figcaption className="w-190px sm-w-180px xs-w-140px bg-white p-30px xs-p-15px border-radius-6px position-absolute bottom-30px left-30px xs-bottom-20px xs-left-15px overflow-hidden box-shadow-medium text-center"> 
                  <span className="fs-90 xs-fs-80 fw-700 text-white d-block position-relative z-index-1">{service.overview.yearsExperience}</span>
                  <div className="fw-500 fs-20 xs-fs-18 d-block text-dark-gray lh-24 xs-lh-22 ls-minus-05px xs-mb-5px">Years of experience</div>
                  <div className="h-160px w-160px border-radius-100 bg-base-color position-absolute left-minus-5px xs-left-minus-25px top-minus-60px sm-top-minus-80px xs-top-minus-100px z-index-0"></div>
                </figcaption>
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 text-center text-md-start">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex justify-content-center justify-content-md-start align-items-center">
                <i className="bi bi-award fs-16 me-5px"></i>{service.overview.badge}
              </span>
              <h3 className="text-dark-gray fw-700 ls-minus-1px fs-3xl">{service.overview.title}</h3>
              <p className="w-95 md-w-100 fs-15">{service.overview.description}</p>
              <div className="pt-20px pb-20px ps-30px pe-30px xs-p-15px border border-color-extra-medium-gray border-radius-6px mb-15px icon-with-text-style-08 w-90 lg-w-100 mx-auto md-mx-0">
                <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                  <div className="feature-box-icon me-15px">
                    <i className="bi bi-people icon-very-medium text-base-color fs-xl"></i>
                  </div>
                  <div className="feature-box-content text-left">
                    <span className="fs-17 alt-font fw-600 text-dark-gray d-block lh-26">{service.overview.featureBoxText}</span>
                  </div>
                </div>
              </div>
              <p className="fs-13 mb-0">{service.overview.highlight}</p>
            </div>
          </div>
        </div>
      </section>
      {/* end overview section */}

      {/* start process section */}
      <section className="bg-very-light-gray py-24">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-xl-8 col-lg-9 col-md-10 text-center">
              <h3 className="text-dark-gray fw-700 ls-minus-1px fs-3xl">How It Works / Process</h3>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center gap-y-4" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {service.process.map((step, idx) => (
              <div key={idx} className="col icon-with-text-style-04 transition-inner-all">
                <div className="feature-box hover-box transition dark-hover bg-white border-radius-6px pt-17 pb-17 ps-15 pe-15 lg-ps-8 lg-pe-8 last-paragraph-no-margin box-shadow-quadruple-large box-shadow-hover overflow-hidden text-center h-100">
                  <div className="feature-box-icon">
                    <i className={`${step.icon} text-base-color icon-extra-large text-light-opacity mb-25px fs-2xl`}></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="d-inline-block text-dark-gray fw-600 fs-17 mb-5px">{step.title}</span>
                    <p className="text-light-opacity fs-14">{step.description}</p>
                  </div>
                  <div className="feature-box-overlay bg-base-color"></div>
                </div>  
              </div>
            ))}
          </div>

          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 align-items-center justify-content-center mt-12 gap-y-4">
            {service.stats.map((stat, idx) => (
              <div key={idx} className={`col ${idx !== service.stats.length - 1 ? 'border-end xs-border-end-0 border-color-transparent-dark-very-light' : ''}`}>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-shrink-0 me-25px sm-me-15px">
                    <h2 className="mb-0 text-dark-gray fw-700 ls-minus-2px fs-4xl">{stat.value}{stat.suffix && <sub className="fs-20">{stat.suffix}</sub>}</h2>
                  </div>
                  <div className="text-dark-gray">
                    {stat.highlight === 'fa-star' && (
                      <div className="fs-16 lh-28 text-flamingo">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                      </div>
                    )}
                    <span className="fs-17 lh-26 d-block fw-500" dangerouslySetInnerHTML={{__html: stat.label}}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end process section */}

      {/* start benefits & FAQ section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-center mb-16 gap-y-8">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex align-items-center">
                <i className="bi bi-patch-check fs-16 me-5px"></i>Key Benefits
              </span>
              <h3 className="fw-700 text-dark-gray ls-minus-1px fs-3xl">{service.benefits.title}</h3>
              
              <div className="space-y-3 mt-8">
                {service.benefits.list.map((txt, index) => (
                  <div key={index} className="icon-with-text-style-08">
                    <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                      <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px bg-very-light-gray rounded-circle me-15px flex items-center justify-center">
                        <i className="fa-solid fa-check fs-12 text-base-color"></i> 
                      </div>
                      <div className="feature-box-content text-left"> 
                        <span className="text-dark-gray fw-500 fs-14">{txt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6 offset-xl-1 position-relative z-index-1">
              <div className="relative overflow-hidden border-radius-6px shadow-sm">
                <img src={service.benefits.videoImage} alt="" className="w-100" />
                <div className="absolute inset-0 flex items-center justify-content-center">
                  <a href={service.benefits.videoUrl} target="_blank" rel="noreferrer" className="btn btn-extra-large btn-white left-icon btn-box-shadow fw-600 btn-rounded popup-youtube ls-minus-05px inline-flex align-items-center">
                    <i className="fa-brands fa-youtube icon-small me-2 text-red-600"></i>How it works
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center ps-3 pe-3 xs-mt-40px" data-anime='{ "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col client-box text-center md-mb-40px"><a href="#"><img src="/images/logo-walmart-dark-blue.svg" alt="" /></a></div>
            <div className="col client-box text-center md-mb-40px"><a href="#"><img src="/images/logo-netflix-dark-blue.svg" alt="" /></a></div>
            <div className="col client-box text-center md-mb-40px"><a href="#"><img src="/images/logo-invision-dark-blue.svg" alt="" /></a></div>
            <div className="col client-box text-center sm-mb-40px"><a href="#"><img src="/images/logo-yahoo-dark-blue.svg" alt="" /></a></div>
            <div className="col client-box text-center"><a href="#"><img src="/images/logo-amazon-dark-blue.svg" alt="" /></a></div>
          </div> 

          {/* Frequently Asked Questions */}
          <div className="row align-items-center mt-12">
            <div className="col-12">
              <div className="bg-very-light-gray p-9 md-p-6 xs-p-9 border-radius-6px overflow-hidden position-relative">
                <div className="position-absolute right-70px lg-right-20px top-minus-20px w-250px sm-w-180px xs-w-150px opacity-1"><img src="/images/demo-business-services-details-faq-icon.png" alt="" /></div>
                <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-light-gray-transparent d-inline-flex align-items-center">
                  <i className="bi bi-patch-check fs-16 me-5px"></i>Basic information
                </span>
                <h3 className="fw-700 text-dark-gray ls-minus-1px fs-3xl">Frequently asked questions.</h3> 
                
                <div className="accordion accordion-style-02 mt-6">
                  {service.faq.map((faq, index) => (
                    <div key={index} className={`accordion-item ${activeAccordion === index ? 'active-accordion' : ''} border-bottom border-color-transparent-dark-very-light`}>
                      <div className="accordion-header py-3">
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setActiveAccordion(activeAccordion === index ? -1 : index); }}
                          aria-expanded={activeAccordion === index}
                        >
                          <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px font-medium d-flex justify-content-between align-items-center">
                            <span className="fs-17 fw-500">{faq.title}</span>
                            <i className={`${activeAccordion === index ? 'bi bi-dash' : 'bi bi-plus'} fs-20`}></i>
                          </div>
                        </a>
                      </div>
                      {activeAccordion === index && (
                        <div className="accordion-body pb-3">
                          <p className="w-90 sm-w-95 xs-w-100 fs-14 text-medium-gray">{faq.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div> 
          </div>

          {/* Unified Consultation CTA */}
          <div className="row align-items-center text-center text-md-start mt-12 gap-y-4">
            <div className="col sm-mb-20px">
              <h4 className="text-dark-gray fw-700 ls-minus-1px m-0 fs-2xl">Need Professional Assistance?</h4>
              <p className="fs-16 mt-2 mb-0">Get expert guidance from our accounting professionals.</p>
            </div>
            <div className="col-12 col-md-auto">
              <Link to="/contact" className="btn btn-extra-large btn-switch-text btn-dark-gray btn-rounded btn-box-shadow ls-0px inline-flex">
                <span>
                  <span className="btn-double-text" data-text="Contact Us">Contact Us</span>
                  <span><i className="bi bi-envelope"></i></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* end benefits & FAQ section */}

      {/* start section - Related Services */}
      <section className="bg-very-light-gray py-24 position-relative">
        <div className="container">
          <div className="row justify-content-center mb-12">
            <div className="col-xl-7 col-lg-9 col-md-10 text-center">
              <h3 className="text-dark-gray fw-700 ls-minus-2px fs-3xl">Related Services</h3>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center gap-y-6">
            {relatedServices.map((relService, index) => (
              <div key={index} className="col"> 
                <div className="services-box-style-03 box-shadow-extra-large last-paragraph-no-margin border-radius-6px overflow-hidden">
                  <div className="position-relative">
                    <Link to={`/services/${relService.slug}`}><img src={relService.image} alt="" className="w-full object-cover" /></Link>
                    <a href="#" className="btn btn-very-small btn-rounded btn-dark-gray text-white btn-box-shadow ps-15px pe-15px pt-5px pb-5px lh-16 position-absolute right-30px top-30px text-uppercase">{relService.badge}</a>
                  </div>
                  <div className="bg-white p-6">
                    <div className="text-center mb-4">
                      <Link to={`/services/${relService.slug}`} className="d-inline-block fs-18 fw-700 text-dark-gray mb-5px">{relService.title}</Link>
                      <p className="fs-14 text-medium-gray">{relService.shortDescription}</p> 
                    </div> 
                    <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-4 position-relative text-center">
                      <Link to={`/services/${relService.slug}`} className="btn btn-link btn-hover-animation-switch btn-medium fw-700 text-dark-gray text-uppercase">
                        <span>
                          <span className="btn-text">Explore services</span>
                          <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                        </span> 
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>  
        </div> 
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
      {/* end section */}
    </div>
  );
};

export default ServicesDetails;
