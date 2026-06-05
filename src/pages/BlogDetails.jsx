import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';

export const BlogDetails = () => {
  useAnime();

  return (
    <div>
      {/* start top header hero section */}
      <section className="full-screen ipad-top-space-margin sm-h-600px bg-cover bg-center relative" style={{ backgroundImage: `url('/AK_Accounting_Tax_Consultancy/images/demo-corporate-main-slider-02.jpg')` }}>
        <div className="opacity-light bg-dark-gray absolute inset-0 bg-black/40"></div>
        <div className="container-fluid z-index-1 position-relative">
          <div className="row align-items-center justify-content-center h-500px sm-h-300px">
            <div className="col-xxl-9 col-xl-10 col-lg-11 d-flex flex-column justify-content-center text-center md:text-left" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <div className="ps-15 pe-15 md-ps-10 md-pe-10 sm-px-0">
                <span className="alt-font fs-20 text-white mb-3 d-inline-block fw-300">Posted by <Link to="/blog" className="text-white fw-700 text-decoration-line-bottom">Shane smith</Link></span>
                <h1 className="alt-font text-white fw-600 mb-5 ls-minus-2px text-3xl sm:text-5xl font-bold leading-tight">Better to see something once than hear about it a thousand times.</h1>
                <Link to="/blog" className="btn btn-large btn-white btn-hover-animation-switch btn-box-shadow btn-rounded fw-600 bg-white text-dark-gray px-4 py-2 rounded-full inline-block">Corporate</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <div className="dropcap-style-04 text-left">
                <p className="fs-16 text-medium-gray leading-relaxed mb-6"><span className="alt-font first-letter first-letter-block border first-letter-round border-2 border-color-light-medium-gray text-dark-gray font-bold text-4xl float-left mr-3 px-2 py-1 rounded">N</span>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
              </div>
              <div className="text-center mt-12 bg-very-light-gray p-6 rounded border-l-4 border-base-color">
                <h5 className="alt-font fw-600 text-dark-gray w-90 sm-w-100 mx-auto mb-15px text-xl font-bold">"Architecture tends to consume everything else it has become one's entire life."</h5>
                <span className="text-uppercase fs-15 ls-2px fw-600 alt-font text-base-color">- Shoko mugikura -</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - visual mid-banner */}
      <section className="py-32 bg-cover bg-center" style={{ backgroundImage: `url('/AK_Accounting_Tax_Consultancy/images/demo-business-blog-single-creative-bg.jpg')` }}></section>
      {/* end section */}

      {/* start section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 last-paragraph-no-margin text-left">
              <h5 className="alt-font fw-600 text-dark-gray text-2xl font-bold mb-4">Tomorrow is the most important thing in life comes into us at midnight very clean</h5>
              <p className="fs-15 text-medium-gray leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper ex nunc, in fringilla orci fringilla sed. Nam semper odio eu urna viverra, eu luctus mauris sollicitudin. Morbi ultricies est et odio vehicula, vel lacinia ipsum ullamcorper. Mauris mattis placerat quam, aliquam vestibulum dui bibendum eu. Curabitur eu euismod ex, et hendrerit purus. Donec condimentum vel neque id iaculis. Etiam dui id dolor lobortis cursus ac maximus nisl. In sodales lacus nec cursus varius.</p>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - extra images */}
      <section className="py-0 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 space-y-6">
              <img src="/AK_Accounting_Tax_Consultancy/images/demo-business-blog-single-creative-01.jpg" className="w-100 border-radius-5px rounded shadow-sm" alt="" />
              <img src="/AK_Accounting_Tax_Consultancy/images/demo-business-blog-single-creative-02.jpg" className="w-100 border-radius-5px rounded shadow-sm" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 last-paragraph-no-margin text-left">
              <h5 className="alt-font fw-600 text-dark-gray mb-15px text-2xl font-bold mb-4">Architecture is inhabited sculpture</h5>
              <p className="fs-15 text-medium-gray leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper ex nunc, in fringilla orci fringilla sed. Nam semper odio eu urna viverra, eu luctus mauris sollicitudin. Morbi ultricies est et odio vehicula, vel lacinia ipsum ullamcorper. Mauris mattis placerat quam, aliquam vestibulum dui bibendum eu. Curabitur eu euismod ex, et hendrerit purus. Donec condimentum vel neque id iaculis. Etiam dui id dolor lobortis cursus ac maximus nisl. In sodales lacus nec cursus varius.</p>
              <h5 className="alt-font fw-600 text-dark-gray mb-15px mt-12 text-2xl font-bold mb-4">A room is not a room without natural light</h5>
              <p className="fs-15 text-medium-gray leading-relaxed">Morbi ultricies est et odio vehicula, vel lacinia ipsum ullamcorper. Mauris mattis placerat quam, aliquam vestibulum dui bibendum eu. Curabitur eu euismod ex, et hendrerit purus. Donec condimentum vel neque id iaculis. Etiam dui id dolor lobortis cursus ac maximus nisl. In sodales lacus nec cursus varius.</p>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start tags and author section */}
      <section className="half-section pt-0 bg-white"> 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row mb-30px border-b pb-4 flex justify-between items-center flex-wrap gap-4">
                <div className="tag-cloud col-md-9 text-center text-md-start sm-mb-15px space-x-2">
                  {['Architecture', 'Interior', 'Landscape', 'Residential'].map((tag) => (
                    <Link key={tag} to="/blog" className="px-3 py-1 border rounded-full text-dark-gray fs-13 hover:bg-dark-gray hover:text-white transition">{tag}</Link>
                  ))}
                </div> 
                <div className="tag-cloud col-md-3 text-uppercase text-center text-md-end">
                  <a className="likes-count fw-500 mx-0 flex items-center justify-center md:justify-end gap-2 text-flamingo" href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa-regular fa-heart text-red"></i>
                    <span className="text-dark-gray text-dark-gray-hover font-bold fs-13">05 Likes</span>
                  </a>
                </div>
              </div>
              
              <div className="row mt-12">
                <div className="col-12 mb-6 sm-mb-10">
                  <div className="bg-very-light-gray d-block d-md-flex w-100 box-shadow-extra-large align-items-center border-radius-4px p-8 rounded shadow-sm">
                    <div className="w-140px text-center me-50px sm-mx-auto flex-shrink-0">
                      <img src="/AK_Accounting_Tax_Consultancy/images/avtar-07.jpg" className="rounded-circle w-120px mx-auto" alt="" />
                      <Link to="/blog" className="text-dark-gray fw-500 mt-20px d-inline-block lh-20 font-bold">Colene Landin</Link>
                      <span className="fs-15 lh-20 d-block sm-mb-15px text-medium-gray text-xs">Co-founder</span>
                    </div>
                    <div className="w-75 sm-w-100 text-center text-md-start last-paragraph-no-margin mt-4 md:mt-0">
                      <p className="fs-14 text-medium-gray leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type.</p>
                      <Link to="/blog" className="btn btn-link btn-large text-dark-gray mt-15px inline-block font-semibold border-b border-dark-gray">All author posts</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row justify-content-center mt-8">
                <div className="col-12 text-center elements-social social-icon-style-04">
                  <ul className="medium-icon dark flex justify-center gap-4">
                    <li><a className="facebook text-dark-gray hover:text-blue-600 fs-18" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a className="twitter text-dark-gray hover:text-sky-500 fs-18" href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a className="instagram text-dark-gray hover:text-pink-600 fs-18" href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a className="linkedin text-dark-gray hover:text-blue-700 fs-18" href="http://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li> 
                    <li><a className="behance text-dark-gray hover:text-blue-500 fs-18" href="http://www.behance.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end tags section */}

      {/* start section - related posts */}
      <section className="bg-very-light-gray py-24"> 
        <div className="container">
          <div className="row justify-content-center mb-12">
            <div className="col-lg-7 text-center">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-light-gray-transparent d-inline-flex align-items-center">
                You may also like
              </span>
              <h4 className="text-dark-gray fw-700 fs-3xl font-bold mt-2">Related posts</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 px-0">
              <ul className="blog-grid blog-wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Build up healthy habits and strong peaceful life', cat: 'Agency', img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-01.jpg', author: 'Den viliamson', date: '30 August 2021', likes: 25 },
                  { title: 'How to bring the season into your great marketing', cat: 'Luxurious', img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-02.jpg', author: 'Hugh macleod', date: '28 August 2021', likes: 58 },
                  { title: 'Be the strong willed one the public relationship', cat: 'Business', img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-03.jpg', author: 'Walton smith', date: '26 August 2021', likes: 75 }
                ].map((post, idx) => (
                  <li key={idx} className="grid-item">
                    <div className="card border-0 border-radius-5px box-shadow-quadruple-large overflow-hidden bg-white shadow-md">
                      <div className="blog-image relative">
                        <Link to="/blog/details" className="d-block"><img src={post.img} alt="" className="w-full object-cover" /></Link>
                        <div className="blog-categories absolute bottom-3 left-3 bg-white px-3 py-1 rounded">
                          <Link to="/blog" className="categories-btn text-dark-gray text-uppercase fw-700 fs-10 font-bold">{post.cat}</Link>
                        </div>
                      </div>
                      <div className="card-body p-6">
                        <Link to="/blog/details" className="card-title mb-15px fw-700 fs-19 lh-30 text-dark-gray d-inline-block font-bold hover:text-base-color transition">{post.title}</Link>
                        <p className="fs-14 text-medium-gray mb-4">Lorem ipsum dolor consectetur adipiscing eiusmod tempor</p>
                        <div className="author border-t pt-4 d-flex justify-content-between align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                          <div className="text-left">
                            <span className="blog-date d-inline-block fw-700 text-dark-gray me-3 fs-11">{post.date}</span>
                            <div className="d-inline-block author-name fw-700 text-dark-gray fs-11">By <Link to="/blog" className="text-dark-gray text-decoration-line-bottom">{post.author}</Link></div>
                          </div>
                          <div className="like-count">
                            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1"><i className="fa-regular fa-heart text-flamingo"></i><span className="text-dark-gray align-middle fw-700 fs-12">{post.likes}</span></a>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - Comments */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-8">
            <div className="col-lg-9 text-center border-b pb-4"> 
              <h6 className="alt-font text-dark-gray fw-700 text-2xl font-bold">4 Comments</h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <ul className="blog-comment space-y-6 text-left">
                <li className="border-b pb-6">
                  <div className="d-block d-md-flex w-100 align-items-md-start">
                    <div className="w-90px sm-w-65px sm-mb-10px flex-shrink-0">
                      <img src="/AK_Accounting_Tax_Consultancy/images/avtar-18.jpg" className="rounded-circle" alt="" />
                    </div>
                    <div className="w-100 ps-30px last-paragraph-no-margin sm-ps-0 mt-4 md:mt-0">
                      <div className="flex justify-between items-center">
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-dark-gray fw-600 font-bold">Herman Miller</a>
                        <a href="#comments" className="btn-reply text-uppercase section-link text-xs font-bold text-base-color hover:underline">Reply</a>
                      </div>
                      <div className="fs-13 text-medium-gray mb-2">17 July 2020, 6:05 PM</div>
                      <p className="w-85 sm-w-100 fs-14 text-medium-gray leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the make book.</p>
                    </div>
                  </div>
                  
                  {/* child comments */}
                  <ul className="child-comment pl-12 mt-6 space-y-6">
                    <li className="border-t pt-6">
                      <div className="d-block d-md-flex w-100 align-items-md-start">
                        <div className="w-90px sm-w-65px sm-mb-10px flex-shrink-0">
                          <img src="/AK_Accounting_Tax_Consultancy/images/avtar-19.jpg" className="rounded-circle" alt="" />
                        </div>
                        <div className="w-100 ps-30px last-paragraph-no-margin sm-ps-0 mt-4 md:mt-0">
                          <div className="flex justify-between items-center">
                            <a href="#" onClick={(e) => e.preventDefault()} className="text-dark-gray fw-600 font-bold">Wilbur Haddock</a>
                            <a href="#comments" className="btn-reply text-uppercase section-link text-xs font-bold text-base-color hover:underline">Reply</a>
                          </div>
                          <div className="fs-13 text-medium-gray mb-2">18 July 2020, 10:19 PM</div>
                          <p className="w-85 sm-w-100 fs-14 text-medium-gray leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                      </div>
                    </li>
                    <li className="bg-very-light-gray p-6 rounded shadow-sm">
                      <div className="d-block d-md-flex w-100 align-items-md-start">
                        <div className="w-90px sm-w-65px sm-mb-10px flex-shrink-0">
                          <img src="/AK_Accounting_Tax_Consultancy/images/avtar-17.jpg" className="rounded-circle" alt="" />
                        </div>
                        <div className="w-100 ps-30px last-paragraph-no-margin sm-ps-0 mt-4 md:mt-0">
                          <div className="flex justify-between items-center">
                            <a href="#" onClick={(e) => e.preventDefault()} className="text-dark-gray fw-600 font-bold">Colene Landin</a>
                            <a href="#comments" className="btn-reply text-uppercase section-link text-xs font-bold text-base-color hover:underline">Reply</a>
                          </div>
                          <div className="fs-13 text-medium-gray mb-2">18 July 2020, 12:39 PM</div>
                          <p className="w-85 sm-w-100 fs-14 text-medium-gray leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                
                <li className="pb-6">
                  <div className="d-block d-md-flex w-100 align-items-md-start">
                    <div className="w-90px sm-w-65px sm-mb-10px flex-shrink-0">
                      <img src="/AK_Accounting_Tax_Consultancy/images/avtar-18.jpg" className="rounded-circle" alt="" />
                    </div>
                    <div className="w-100 ps-30px last-paragraph-no-margin sm-ps-0 mt-4 md:mt-0">
                      <div className="flex justify-between items-center">
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-dark-gray fw-600 font-bold">Jennifer Freeman</a>
                        <a href="#comments" className="btn-reply text-uppercase section-link text-xs font-bold text-base-color hover:underline">Reply</a>
                      </div>
                      <div className="fs-13 text-medium-gray mb-2">19 July 2020, 8:25 PM</div>
                      <p className="w-85 sm-w-100 fs-14 text-medium-gray leading-relaxed">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the make a type specimen book.</p>
                    </div>
                  </div>
                </li>
              </ul> 
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section - Post Comment Form */}
      <section id="comments" className="py-24 bg-very-light-gray relative">
        <div className="container">
          <div className="row justify-content-center text-left">
            <div className="col-lg-9 mb-6">
              <h6 className="alt-font text-dark-gray fw-700 mb-5px text-2xl font-bold">Write a comment</h6>
              <div className="text-medium-gray fs-14">Your email address will not be published. Required fields are marked *</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <form onSubmit={(e) => e.preventDefault()} className="row contact-form-style-02 gap-y-4">
                <div className="col-md-6 text-left">
                  <input className="input-name border-radius-4px border-color-charcoal-grey bg-white border p-3 w-full rounded form-control required" type="text" name="name" placeholder="Enter your name*" required />
                </div> 
                <div className="col-md-6 text-left">
                  <input className="border-radius-4px border-color-charcoal-grey bg-white border p-3 w-full rounded form-control required" type="email" name="email" placeholder="Enter your email address*" required />
                </div> 
                <div className="col-md-12 text-left">
                  <textarea className="border-radius-4px border-color-charcoal-grey bg-white border p-3 w-full rounded form-control" cols="40" rows="6" name="comment" placeholder="Your message"></textarea>
                </div> 
                <div className="col-12 text-left mt-2">
                  <button className="btn btn-dark-gray btn-small btn-round-edge bg-dark-gray text-white px-6 py-3 rounded hover:bg-base-color transition font-bold" type="submit">Post Comment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
      </section>
      {/* end section */}
    </div>
  );
};
export default BlogDetails;
