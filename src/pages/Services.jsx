import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';
import { servicesData } from '../data/servicesData';
import { handleShare } from '../utils/share';

export const Services = () => {
  useAnime();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);
  const currentServices = servicesData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      {/* start page title */}
      <PageHeader
        title="Accounting Services"
        subtitle="Professional accounting and financial solutions for your business"
        bgImage="/AK_Accounting_Tax_Consultancy/images/demo-it-business-title-bg_1.png"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
        colClass="col-12 col-xl-6 col-lg-8 col-md-10"
      />
      {/* end page title */}

      {/* start section */}
      <section className="pt-3 bg-very-light-gray sm-pt-50px position-relative pb-12">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-8" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {currentServices.map((service, index) => (
              <div key={index} className="col mb-30px">
                <div className="services-box-style-03 box-shadow-extra-large last-paragraph-no-margin border-radius-6px overflow-hidden">
                  <div className="position-relative">
                    <Link to={`/services/${service.slug}`}><img src={service.image} alt={service.title} className="w-full object-cover" /></Link>
                    <a href="#" className="btn btn-very-small btn-rounded btn-dark-gray text-white btn-box-shadow ps-15px pe-15px pt-5px pb-5px lh-16 position-absolute right-30px top-30px text-uppercase">{service.badge}</a>
                  </div>
                  <div className="bg-white">
                    <div className="ps-65px pe-65px lg-ps-40px lg-pe-40px pt-30px pb-30px text-center progress-bar-style-01">
                      <Link to={`/services/${service.slug}`} className="d-inline-block fs-18 fw-700 text-dark-gray mb-5px">{service.title}</Link>
                      <p className="fs-14 text-medium-gray">{service.shortDescription}</p>
                    </div>
                    <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
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
            ))}
          </div>

          {/* start pagination */}
          {totalPages > 1 && (
            <div className="row">
              <div className="col-12 mt-5 mb-5 d-flex justify-content-center" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <ul className="pagination pagination-style-01 fs-13 fw-500 mb-0">
                  <li className="page-item"><a className="page-link" href="#" onClick={e => { e.preventDefault(); if(currentPage > 1) setCurrentPage(currentPage - 1); }}><i className="bi bi-arrow-left fs-18 d-xs-none"></i></a></li>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <a className="page-link" href="#" onClick={e => { e.preventDefault(); setCurrentPage(index + 1); }}>{String(index + 1).padStart(2, '0')}</a>
                    </li>
                  ))}
                  <li className="page-item"><a className="page-link" href="#" onClick={e => { e.preventDefault(); if(currentPage < totalPages) setCurrentPage(currentPage + 1); }}><i className="bi bi-arrow-right fs-18 d-xs-none"></i></a></li>
                </ul>
              </div> 
            </div>
          )}
        </div>
        <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-4 col-md-5 alt-font text-dark-gray text-center text-md-end fw-500 text-uppercase">Share this Services</div>
                    <div className="col-12 col-lg-2 col-md-2"><div className="w-100 h-1px bg-extra-medium-gray sm-mt-15px sm-mb-3px"></div></div>
                    <div className="col-12 col-lg-4 col-md-5 text-center text-md-start elements-social social-icon-style-02">
                        <ul className="medium-icon dark mb-0">
                            <li><a className="share-btn" href="#" onClick={(e) => handleShare(e, "AK Accounting Services")}><i className="fa-solid fa-share-nodes text-red"></i></a></li>
                            <li><a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a className="twitter" href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li> 
                            <li><a className="linkedin" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li> 
                            <li><a className="whatsapp" href="https://api.whatsapp.com/send?text=Check out AK Accounting Services" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
      {/* end section */}
    </div>
  );
};

export default Services;
