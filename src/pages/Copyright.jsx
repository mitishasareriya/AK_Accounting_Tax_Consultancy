import React from 'react';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

export const Copyright = () => {
  useAnime();

  return (
    <div>
            <PageHeader 
        title="Copyright"
        bgImage="/images/demo-it-business-contact-title-bg.jpg"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
        colClass="col-12 col-md-6"
      />

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center text-lg-start">
              <h3 className="fw-700 text-dark-gray mb-3">Copyright Notice</h3>

              <p className="fs-16 mb-4">
                Copyright © {new Date().getFullYear()} AK Accounting & Tax Consultancy. All rights reserved.
              </p>

              <p className="fs-16 mb-4">
                All content on this website including text, graphics, logos, service descriptions, design elements, and materials are the intellectual property of AK Accounting & Tax Consultancy.
              </p>

              <p className="fs-16 mb-4">
                No part of this website may be copied, reproduced, distributed, or used for commercial purposes without prior written permission from the company.
              </p>

              <p className="fs-16 mb-4">
                Unauthorized use of any content may result in legal action under applicable copyright and intellectual property laws in India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Copyright;
