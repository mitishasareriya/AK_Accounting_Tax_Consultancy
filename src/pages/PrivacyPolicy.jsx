import React from 'react';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

export const PrivacyPolicy = () => {
  useAnime();

  return (
    <div>
            <PageHeader 
        title="Privacy Policy"
        bgImage="/AK_Accounting_Tax_Consultancy/images/demo-it-business-contact-title-bg.jpg"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
        colClass="col-12 col-md-6"
      />

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center text-lg-start">
              <h3 className="fw-700 text-dark-gray mb-3">Privacy Commitment</h3>

              <p className="fs-16 mb-4">
                At AK Accounting & Tax Consultancy, we are committed to protecting your personal and business information. Your privacy is important to us, and we ensure that all data shared with us is handled securely and responsibly.
              </p>

              <p className="fs-16 mb-4">
                When you visit our website or use our services such as GST filing, accounting, taxation, or compliance support, we may collect basic information required to provide better assistance and professional services.
              </p>

              <p className="fs-16 mb-4">
                We use your information only for service delivery, compliance purposes, communication, and improving our consultancy services. We do not sell, trade, or misuse your personal data in any manner.
              </p>

              <p className="fs-16 mb-4">
                All data is stored securely and accessed only by authorized personnel. By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
