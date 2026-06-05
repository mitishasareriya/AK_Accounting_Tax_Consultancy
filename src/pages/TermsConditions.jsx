import React from 'react';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

export const TermsConditions = () => {
  useAnime();

  return (
    <div>
            <PageHeader 
        title="Terms and Conditions"
        bgImage="/images/demo-it-business-contact-title-bg.jpg"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
        colClass="col-12 col-md-6"
      />

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center text-lg-start">
              <h3 className="fw-700 text-dark-gray mb-3">Terms of Service</h3>

              <p className="fs-16 mb-4">
                These Terms and Conditions govern your use of the services provided by AK Accounting & Tax Consultancy.
              </p>

              <p className="fs-16 mb-4">
                By accessing our website or engaging our services, you agree to comply with all applicable laws, including GST Act, Income Tax Act, Companies Act, and other relevant regulations in India.
              </p>

              <p className="fs-16 mb-4">
                All services such as accounting, taxation, audit, GST filing, and company registration are provided based on information shared by the client. We are not responsible for any incorrect data provided by the client.
              </p>

              <p className="fs-16 mb-4">
                Fees once paid for professional services are generally non-refundable unless explicitly agreed in writing. Service timelines may vary depending on government processing and compliance requirements.
              </p>

              <p className="fs-16 mb-4">
                We reserve the right to update or modify these terms at any time without prior notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TermsConditions;
