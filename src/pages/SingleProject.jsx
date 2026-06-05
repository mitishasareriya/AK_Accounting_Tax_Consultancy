import { useState } from 'react';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

export const SingleProject = () => {
  useAnime();

  // Simple state to simulate Swiper slider transitions
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderImages = [
    '/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-02.jpg',
    '/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-03.jpg',
    '/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-04.jpg'
  ];

  const handleNext = () => {
    setSliderIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setSliderIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div>
      {/* start page title banner */}
            <PageHeader 
        title=""
        bgImage="/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-01-a.jpg"
        colClass="col-12 col-md-6"
        titleClass=""
      />
      {/* end page title banner */}

      {/* start section */}
      <section className="overlap-height overflow-visible py-24 bg-white">
        <div className="container">
          <div className="row overlap-gap-section" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col-lg-4 col-md-6 sm-mb-30px text-center text-md-start">
              <span className="alt-font text-dark-gray fs-24 fw-500 d-inline-block mb-15px ls-minus-05px font-bold">Project description</span>
              <ul className="list-style-01 ps-0 pe-50px mb-0 sm-pe-0">
                <li className="border-color-extra-medium-gray pt-15px pb-15px border-b flex justify-between"><span className="text-dark-gray w-35 sm-w-auto sm-me-20px d-inline-block fw-500 alt-font fs-16 font-semibold">Published</span><span>20 Jan 2021</span></li>
                <li className="border-color-extra-medium-gray pt-15px pb-15px border-b flex justify-between"><span className="text-dark-gray w-35 sm-w-auto sm-me-20px d-inline-block fw-500 alt-font fs-16 font-semibold">Services</span><span>Branding</span></li>
                <li className="pt-15px pb-15px fs-16 flex justify-between"><span className="text-dark-gray w-35 sm-w-auto sm-me-20px d-inline-block fw-500 alt-font font-semibold">Industry</span><span>Restaurant</span></li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-6 text-center text-md-start">
              <h6 className="alt-font fw-500 text-dark-gray mb-20px text-2xl font-bold">Cottura - Your timeless identity</h6>
              <p className="fs-15 text-medium-gray mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip commodo consequat.</p>
              <a href="#" className="btn btn-medium btn-transparent-light-gray border px-4 py-2 rounded text-dark-gray hover:bg-dark-gray hover:text-white transition">Yourdomain.com</a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="py-24 bg-very-light-gray" style={{ backgroundImage: `url('/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-07.jpg')`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 overlap-section">
              <div className="overlap-section-inner box-shadow-large border-10 border-solid border-color-white relative bg-white p-2"> 
                <div className="swiper-wrapper relative overflow-hidden h-500px flex items-center justify-center">
                  <img src={sliderImages[sliderIndex]} className="w-full h-full object-cover transition-all duration-500" alt="" />
                  
                  {/* Custom navigation hooks */}
                  <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-gray h-10 w-10 rounded-full flex items-center justify-center shadow"><i className="fa-solid fa-angle-left"></i></button>
                  <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-gray h-10 w-10 rounded-full flex items-center justify-center shadow"><i className="fa-solid fa-angle-right"></i></button>
                </div>
              </div>
            </div>
            <div className="col-12 mt-8 text-center flex justify-content-center"> 
              <img src="/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-06.png" alt="" className="mx-auto max-w-full" /> 
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 align-items-center" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col sm-mb-30px text-center text-md-start">
              <h5 className="alt-font mb-0 text-dark-gray fw-500 w-90 md-w-100 ls-minus-1px text-xl font-bold">Food is as much about the moment as it is about the taste.</h5>
            </div>
            <div className="col last-paragraph-no-margin text-center text-md-start">
              <p className="fs-15 text-medium-gray">Lorem ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled.</p>
            </div>
          </div>
        </div>
      </section>
      {/* end section */} 

      {/* start section */}
      <section className="py-24 bg-white" style={{ backgroundImage: `url('/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-11.jpg')`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row">
            <div className="col px-0 sm-ps-15px sm-pe-15px">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* start gallery item */}
                <li className="md:col-span-2 transition-inner-all">
                  <div className="gallery-box overflow-hidden rounded shadow-sm">
                    <div className="position-relative gallery-image bg-dark-gray overflow-hidden">
                      <img src="/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-08.jpg" alt="" className="w-full object-cover" />
                    </div>
                  </div>
                </li>
                {/* end gallery item */}
                {/* start gallery item */}
                <li className="transition-inner-all">
                  <div className="gallery-box overflow-hidden rounded shadow-sm">
                    <div className="position-relative gallery-image bg-dark-gray overflow-hidden">
                      <img src="/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-09.jpg" alt="" className="w-full object-cover" />
                    </div>
                  </div>
                </li>
                {/* end gallery item */}
                {/* start gallery item */}
                <li className="transition-inner-all">
                  <div className="gallery-box overflow-hidden rounded shadow-sm">
                    <div className="position-relative gallery-image bg-dark-gray overflow-hidden">
                      <img src="/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-10.jpg" alt="" className="w-full object-cover" />
                    </div>
                  </div>
                </li>
                {/* end gallery item */}
                {/* start gallery item */}
                <li className="md:col-span-2 transition-inner-all">
                  <div className="gallery-box overflow-hidden rounded shadow-sm">
                    <div className="position-relative gallery-image bg-dark-gray overflow-hidden">
                      <img src="/AK_Accounting_Tax_Consultancy/images/portfolio-single-gallery-02.jpg" alt="" className="w-full object-cover" />
                    </div>
                  </div>
                </li>
                {/* end gallery item */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="half-section bg-gradient-top-very-light-gray pb-16 pt-8 sm-pb-5 position-relative bg-very-light-gray">
        <div className="container">
          <div className="row align-items-center justify-content-center mb-15px gap-y-4">
            <div className="col-12 col-lg-4 col-md-5 alt-font text-dark-gray text-center text-md-end fw-500 text-uppercase font-bold">Share this project</div>
            <div className="col-12 col-lg-2 col-md-2"><div className="w-100 h-1px bg-extra-medium-gray sm:hidden"></div></div>
            <div className="col-12 col-lg-4 col-md-5 text-center text-md-start elements-social social-icon-style-02">
              <ul className="medium-icon dark mb-0 flex justify-center md:justify-start gap-4">
                <li><a className="facebook text-dark-gray hover:text-blue-600 fs-18" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a className="twitter text-dark-gray hover:text-sky-500 fs-18" href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li> 
                <li><a className="linkedin text-dark-gray hover:text-blue-700 fs-18" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li> 
                <li><a className="pinterest text-dark-gray hover:text-red-600 fs-18" href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-pinterest-p"></i></a></li>
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
export default SingleProject;
