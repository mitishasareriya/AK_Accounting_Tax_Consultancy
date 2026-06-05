import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';
import { servicesData } from '../data/servicesData';

export const Services = () => {
  useAnime();

  return (
    <div>
      {/* start page title */}
      <PageHeader
        title="Accounting Services"
        subtitle="Professional accounting and financial solutions for your business"
        bgImage="/images/demo-it-business-title-bg_1.png"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
        colClass="col-12 col-xl-6 col-lg-8 col-md-10"
      />
      {/* end page title */}

      {/* start section */}
      <section className="pt-3 bg-very-light-gray sm-pt-50px position-relative pb-24">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-8" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {servicesData.map((service, index) => (
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
        </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
      {/* end section */}
    </div>
  );
};

export default Services;
