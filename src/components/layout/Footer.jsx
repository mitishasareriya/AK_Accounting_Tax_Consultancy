import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

export const Footer = () => {
  return (
    <footer className="p-0 footer-light position-relative">
      <div className="container position-relative">
        <div className="row justify-content-center pt-5 sm-pt-40px">
          {/* start footer column */}
          <div className="col-6 col-xl-3 col-lg-12 col-sm-6 last-paragraph-no-margin text-xl-start text-lg-center order-sm-1 lg-mb-180px sm-mb-30px">
            <Link to="/" className="footer-logo mb-15px d-inline-block">
              <img src="/AK_Accounting_Tax_Consultancy/images/logo_horizontal.svg" data-at2x="/AK_Accounting_Tax_Consultancy/images/demo-it-business-logo-black@2x.png" alt="" />
            </Link>
            <p className="lh-28 w-90 xl-w-100 mx-lg-auto mx-xl-0">
              Helping businesses grow with trusted accounting, taxation, GST compliance,
              payroll, and financial advisory services tailored for long-term success.
            </p>
            <div className="elements-social social-icon-style-02 mt-15px">
              <ul className="medium-icon dark">
                <li className="my-0"><a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li className="my-0"><a className="dribbble" href="http://www.dribbble.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-dribbble"></i></a></li>
                <li className="my-0"><a className="twitter" href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                <li className="my-0"><a className="instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          {/* end footer column */}

          {/* start footer column */}
          <div className="col-6 col-xl-2 col-lg-3 col-sm-4 xs-mb-30px order-sm-3 order-lg-2">
            <span className="fw-600 d-block text-dark-gray mb-5px">Company</span>
            <ul>
              <li><Link to="/about">Who we are</Link></li>
              <li><Link to="/services">Our services</Link><div className="bg-dark-gray fw-600 text-white lh-22 text-uppercase border-radius-30px ps-10px pe-10px fs-10 ms-10px d-inline-block align-middle">Hot</div></li>
              <li><Link to="/case-studies">Our clients</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          {/* end footer column */}

          {/* start footer column */}
          <div className="col-6 col-xl-2 col-lg-3 col-md-5 col-sm-4 xs-mb-30px order-sm-4 order-lg-3">
            <span className="fw-600 d-block text-dark-gray mb-5px">Services</span>
            <ul>
              {servicesData.slice(0, 5).map((service, index) => (
                <li key={index}><Link to={`/services/${service.slug}`}>{service.title}</Link></li>
              ))}
            </ul>
          </div>
          {/* end footer column */}

          {/* start footer column */}
          <div className="col-6 col-xl-2 col-lg-3 col-md-3 col-sm-4 xs-mb-30px order-sm-5 order-lg-4">
            <span className="fw-600 d-block text-dark-gray mb-5px">Need help?</span>
            <span>Call us directly?</span>
            <span className="d-block mb-10px"><a className="text-dark-gray fw-600" href="tel:9714343087">+91 9714343087</a></span>
            <span>Need support?</span>
            <a href="mailto:ak.taxconsultancy86@gmail.com" className="text-dark-gray fw-600">ak.taxconsultancy86@gmail.com</a>
          </div>
          {/* end footer column */}

          {/* start footer column */}
          <div className="col-xl-3 col-lg-3 col-sm-6 md-mb-50px sm-mb-30px xs-mb-0 order-sm-2 order-lg-5">
            <span className="fw-600 d-block text-dark-gray mb-5px">Free consultation & support</span>
            <p className="lh-28 w-95 mb-15px xs-mb-15px">Expert accounting, tax compliance, and business registration assistance within 24 hours.</p>
            <div className="d-flex flex-column gap-3">
              <a href="tel:+919714343087" className="btn btn-very-small btn-rounded btn-gradient-purple-pink btn-box-shadow w-100 d-flex align-items-center justify-content-center">
                <i className="bi bi-telephone-outbound me-2"></i> Call us directly
              </a>
              <a href="https://wa.me/919714343087" target="_blank" rel="noreferrer" className="btn btn-very-small btn-rounded btn-transparent-dark-gray border-1 border-color-dark-gray text-dark-gray w-100 d-flex align-items-center justify-content-center">
                <i className="bi bi-whatsapp text-success me-2 fs-15"></i> WhatsApp Support
              </a>
            </div>
          </div>
          {/* end footer column */}
        </div>
        <div className="row justify-content-center align-items-center pt-3">
          {/* start divider */}
          <div className="col-12">
            <div className="divider-style-03 divider-style-03-01 border-color-extra-medium-gray"></div>
          </div>
          {/* end divider */}

          {/* start copyright */}
          <div className="col-lg-5 pt-20px pb-20px md-pt-0 order-2 order-lg-1 text-center text-lg-start last-paragraph-no-margin fs-14">
            <p>&copy; {new Date().getFullYear()} AK Accounting & Tax Consultancy. All rights reserved.</p>
          </div>
          {/* end copyright */}

          {/* start footer menu */}
          <div className="col-lg-7 pt-20px pb-20px md-pt-25px md-pb-5px order-1 order-lg-2 text-center text-lg-end fs-14">
            <ul className="footer-navbar sm-lh-normal">
              <li><Link to="/privacy" className="nav-link">Privacy policy</Link></li>
              <li><Link to="/terms" className="nav-link">Terms and conditions</Link></li>
              <li><Link to="/copyright" className="nav-link">Copyright</Link></li>
            </ul>
          </div>
          {/* end footer menu */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
