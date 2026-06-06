import React from 'react';
import { ShapeWaveBottom } from './ShapeWaveBottom';

export const PageHeader = ({
  title,
  subtitle,
  bgImage,
  iconClass = "bi bi-megaphone text-white icon-small me-10px",
  animeProps = '{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }',
  titleClass = "text-4xl sm:text-5xl",
  colClass = "col-12 col-lg-6 col-md-10",
  children
}) => {
  return (
    <section 
      className="pt-0 cover-background sm-pb-0 bg-cover bg-center relative" 
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <ShapeWaveBottom className="bottom-0 absolute" />
      <div className="container">
        <div className="row align-items-center justify-content-center h-500px sm-h-300px">
          <div 
            className={`${colClass} position-relative text-center page-title-extra-large d-flex flex-wrap flex-column align-items-center justify-content-center`} 
            data-anime={animeProps}
          >
            {subtitle && (
              <span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex align-items-center">
                <i className={iconClass}></i>
                {subtitle}
              </span>
            )}
            <h1 className={`mb-20px text-white fw-600 ls-minus-1px ${titleClass}`}>
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
