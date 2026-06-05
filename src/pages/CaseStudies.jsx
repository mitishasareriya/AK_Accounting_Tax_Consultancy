import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { projectsData } from '../data/projectsData';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

export const CaseStudies = () => {
  useAnime();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);

  const projectsList = projectsData;

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projectsList);
    } else {
      const filtered = projectsList.filter((proj) => 
        proj.category.toLowerCase().split(' ').includes(activeCategory.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  return (
    <div>
      {/* start page title */}
            <PageHeader 
        title="Case studies"
        subtitle="Our selected projects"
        bgImage="/AK_Accounting_Tax_Consultancy/images/demo-it-business-about-title-bg_1.png"
        iconClass="bi bi-patch-check text-white icon-small me-10px"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
      />
      {/* end page title */}

      {/* start section */}
      <section className="position-relative pt-0 bg-gradient-top-very-light-gray sm-pt-50px pb-24 bg-white"> 
        <div className="container">
          <div className="row align-items-center mb-4"> 
            <div className="col-12 tab-style-04 text-center">
              {/* filter navigation */}
              <ul className="portfolio-filter nav nav-tabs justify-content-center border-0 fw-500">
                {['all', 'selected', 'digital', 'branding', 'web'].map((cat) => (
                  <li key={cat} className={`nav ${activeCategory === cat ? 'active' : ''}`}>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setActiveCategory(cat); }}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
              {/* end filter navigation */} 
            </div>
          </div> 
          
          <div className="row mb-8 sm-mb-0" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col-12 filter-content p-md-0">
              <ul className="portfolio-modern portfolio-wrapper d-flex flex-wrap grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                {filteredProjects.map((project) => (
                  <li key={project.id} className="grid-item transition-inner-all">
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
                ))}
              </ul>
            </div>
          </div> 
        </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
      {/* end section */}  

      {/* Lightbox Modal */}
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
export default CaseStudies;
