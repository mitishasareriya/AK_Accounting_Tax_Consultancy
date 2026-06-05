import { useState, useEffect } from 'react';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

// --- DATA ARRAYS ---

const locations = [
  {
    city: 'Rajkot (Head Office)',
    address: 'Heera Panna Complex, Jagnath Plot, Rajkot, Gujarat - 360001',
    phone: '+91 9714343087',
    email: 'ak.taxconsultancy86@gmail.com',
    img: '/AK_Accounting_Tax_Consultancy/images/contact_3.png',
    mapUrl: 'https://maps.google.com/?q=Heera+Panna+Complex+Rajkot',
    wrapperClass: 'mb-30px'
  },
  {
    city: 'Gondal Branch Office',
    address: 'Nilkanth Arcade, 2nd Floor, Office No. 3, Opp. M.B. College, Mahadev Vadi, Gondal - 360311',
    phone: '+91 9714343087',
    email: 'ak.taxconsultancy86@gmail.com',
    img: '/AK_Accounting_Tax_Consultancy/images/contact_2.png',
    wrapperClass: 'mb-30px'
  },
  {
    city: 'Online Support',
    address: 'Available for GST, Income Tax & Accounting services across India',
    phone: '+91 9714343087',
    email: 'ak.taxconsultancy86@gmail.com',
    img: '/AK_Accounting_Tax_Consultancy/images/demo-yoga-and-meditation-contact-03.jpg',
    wrapperClass: 'md-mb-30px'
  }
];

const contactMethods = [
  {
    title: 'Call us for GST & Tax help',
    value: '+91 9714343087',
    type: 'phone',
    href: 'tel:+919714343087',
    mbClass: 'mb-25px'
  },

  {
    title: 'Email for support & queries',
    value: 'ak.taxconsultancy86@gmail.com',
    type: 'email',
    href: 'mailto:ak.taxconsultancy86@gmail.com',
    mbClass: 'mb-25px'
  },

  {
    title: 'Business registration help?',
    value: 'Company, LLP & Startup Setup',
    type: 'text',
    href: '',
    mbClass: 'mb-25px'
  },

  {
    title: 'Visit our office',
    value: 'View on Google Maps',
    type: 'link',
    href: 'https://www.google.com/maps',
    mbClass: ''
  }
];

const formConfig = [
  { name: 'name', label: 'Enter your name*', placeholder: "What's your good name", type: 'text', icon: 'bi-emoji-smile', required: true },
  { name: 'email', label: 'Email address*', placeholder: 'Enter your email address', type: 'email', icon: 'bi-envelope', required: true },
  { name: 'comment', label: 'Your message', placeholder: 'Describe about your project', type: 'textarea', icon: 'bi-chat-square-dots', required: false }
];

// --- REUSABLE COMPONENTS ---

const LocationCard = ({ location }) => (
  <div className={`col services-box-style-02 ${location.wrapperClass}`}>
    <div className="row g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
      <div className="col-lg-6 col-sm-6">
        <div className="h-100 cover-background xs-h-300px" style={{ backgroundImage: `url('${location.img}')` }}></div>
      </div>
      <div className="col-lg-6 col-sm-6 bg-white box-shadow-extra-large p-40px xl-p-30px">
        <div className="services-box-content last-paragraph-no-margin">
          <span className="d-block text-dark-gray primary-font fw-700 fs-19 mb-10px">{location.city}</span>
          <p>{location.address}</p>
          {location.mapUrl && (
            <a href={location.mapUrl} target="_blank" rel="noreferrer" className="fs-16 lh-20 primary-font fw-500 text-dark-gray text-decoration-line-bottom d-inline-block mb-25px">View on map</a>
          )}
          <div className="text-dark-gray fw-600">
            <i className="bi bi-telephone icon-small me-10px text-dark-gray"></i>
            <a href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}>{location.phone}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactInfoItem = ({ method }) => (
  <div className={`col last-paragraph-no-margin ${method.mbClass}`}>
    <p>{method.title}</p>
    {method.href ? (
      <a href={method.href} className="text-dark-gray fw-600">{method.value}</a>
    ) : (
      <span className="text-dark-gray fw-600">{method.value}</span>
    )}
  </div>
);

const FormField = ({ field, value, touched, error, onChange, onBlur }) => {
  const isInvalid = touched && error;
  const isValid = touched && !error;

  return (
    <>
      <label htmlFor={field.name} className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0">{field.label}</label>
      <div className={`position-relative form-group ${field.type === 'textarea' ? 'form-textarea mb-0' : 'mb-30px'}`}>
        {(!touched || error || field.type === 'textarea') && (
          <span className="form-icon">
            <i className={`bi ${field.icon} text-dark-gray`}></i>
          </span>
        )}

        {field.type === 'textarea' ? (
          <textarea
            id={field.name}
            className={`fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control ${isValid ? 'input-valid' : ''}`}
            name={field.name}
            placeholder={field.placeholder}
            rows="3"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          ></textarea>
        ) : (
          <input
            id={field.name}
            className={`fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control ${field.required ? 'required' : ''} ${isInvalid ? 'input-invalid' : ''} ${isValid ? 'input-valid' : ''}`}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={field.required}
          />
        )}

        {isValid && <i className="bi bi-check-circle-fill valid-indicator"></i>}
        {isInvalid && field.type !== 'textarea' && <div className="validation-message error">{error}</div>}
      </div>
    </>
  );
};

// --- MAIN PAGE COMPONENT ---

export const Contact = () => {
  useAnime();
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({ name: false, email: false, comment: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please fill out this field.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, comment: true });
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', comment: '' });
      setTouched({ name: false, email: false, comment: false });
    }
  };

  const slideUpAnime = '{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }';

  return (
    <div>
      {/* start page title */}
      <PageHeader
        title="Contact us"
        subtitle="Grow your business with us"
        bgImage="/AK_Accounting_Tax_Consultancy/images/demo-it-business-contact-title-bg.jpg"
        animeProps={slideUpAnime}
        colClass="col-12 col-md-6"
        titleClass=""
      />
      {/* end page title */}

      {/* start section */}
      <section className="pt-3 sm-pt-50px">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-10 lg-mb-50px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'>
              <div className="position-sticky top-120px lg-top-0px lg-position-relative text-center text-xl-start">
                <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex justify-content-center justify-content-xl-start align-items-center">
                  <i className="bi bi-chat-square-dots fs-16 me-5px"></i> Let’s connect with experts
                </span>
                <h3 className="text-dark-gray ls-minus-2px fw-700">Get expert accounting & tax support for your business.</h3>
                <p className="mb-35px w-90 lg-w-100 sm-mb-25px">Visit us or contact our team for GST filing, income tax planning, accounting, bookkeeping,
                  and business registration services. We ensure accurate, compliant, and stress-free financial management.</p>
                <a
                  href="tel:+919714343087"
                  className="btn btn-extra-large btn-switch-text btn-gradient-purple-pink left-icon btn-rounded me-10px ls-0px"
                >
                  <span>
                    <span><i className="bi bi-telephone"></i></span>
                    <span className="btn-double-text" data-text="Call now">Call now</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-10 offset-xl-1">
              <div className="row row-cols-1 justify-content-center" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                {locations.map((location, idx) => <LocationCard key={idx} location={location} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="bg-very-light-gray position-relative">
        <div className="container">
          <div className="row mb-8">
            <div className="col-xl-5 col-lg-6 md-mb-50px" data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              <div className="bg-white border-radius-6px box-shadow-quadruple-large p-10 ps-12 pe-12 lg-ps-8 lg-pe-8 h-100 d-flex flex-wrap flex-column justify-content-center">
                <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex align-self-start">
                  <i className="bi bi-chat-square-dots fs-16 me-5px"></i>Expert financial support
                </span>
                <h4 className="text-dark-gray ls-minus-1px fw-700 mb-15px">Let’s simplify your accounting & taxes!</h4>
                <p className="w-85 sm-w-100">Get professional help for GST filing, income tax return, bookkeeping, company registration,
                  and complete financial compliance solutions.</p>
                <div className="row row-cols-1 row-cols-sm-2">
                  {contactMethods.map((method, idx) => <ContactInfoItem key={idx} method={method} />)}
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-xl-1 md-mb-50px sm-mb-0 d-flex flex-column" data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              <h3 className="text-dark-gray ls-minus-2px fw-700">Looking for any help?</h3>
              {submitted ? (
                <div className="form-results glass-success-card fs-16 lh-24 w-100 text-center d-flex flex-column justify-content-center align-items-center flex-grow-1 mt-4 border-radius-6px">
                  <i className="bi bi-check-circle-fill success-icon-anim mb-4" style={{ fontSize: '65px', color: '#22c55e', textShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}></i>
                  <h6 className="text-dark-gray fw-600 mb-30px">Thank you! We will get back to you shortly.</h6>
                  <button onClick={() => setSubmitted(false)} className="btn btn-dark-gray btn-large btn-round-edge btn-box-shadow">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-style-03" noValidate>
                  {formConfig.map((field) => (
                    <FormField
                      key={field.name}
                      field={field}
                      value={formData[field.name]}
                      touched={touched[field.name]}
                      error={errors[field.name]}
                      onChange={handleChange}
                      onBlur={() => handleBlur(field.name)}
                    />
                  ))}
                  <div className="row mt-25px align-items-center">
                    <div className="col-xl-7 col-lg-12 col-sm-7 lg-mb-30px md-mb-0">
                      <p className="mb-0 fs-14 lh-22 text-center text-sm-start">We will never collect information about you without your explicit consent.</p>
                    </div>
                    <div className="col-xl-5 col-lg-12 col-sm-5 text-center text-sm-end text-lg-start text-xl-end xs-mt-25px">
                      <button className="btn btn-dark-gray btn-medium btn-round-edge btn-box-shadow submit" type="submit">Send message</button>
                    </div>
                    <div className="col-12 mt-20px mb-0 text-center text-md-start">
                      <div className="form-results d-none"></div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
      {/* end section */}
    </div>
  );
};
export default Contact;
