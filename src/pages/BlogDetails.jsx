import { Link, useParams, Navigate } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { blogData } from '../data/blogData';
import { handleShare } from '../utils/share';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const BlogDetails = () => {
  useAnime();
  const { slug } = useParams();

  // Find the blog post
  const blog = blogData.find(b => b.slug === slug);

  // If blog is not found, redirect back
  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Find related posts
  const relatedPosts = blog.relatedBlogs
    .map(relSlug => blogData.find(b => b.slug === relSlug))
    .filter(Boolean);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="full-screen sm-h-600px bg-dark-gray" 
        data-parallax-background-ratio="0.5" 
        style={{ backgroundImage: `url('${blog.heroImage}')` }}
      >
        <div className="opacity-light bg-dark-gray"></div>
        <div className="container-fluid z-index-1 position-relative h-100">
          <div className="row h-100 align-items-center">
            <div className="col-xxl-9 col-xl-10 col-lg-11 d-flex flex-column justify-content-center">
              <div className="ps-15 pe-15 md-ps-10 md-pe-10 sm-px-0" data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <span className="alt-font fs-20 text-white mb-3 d-inline-block fw-300">
                  Posted by <Link to="#" className="text-white text-white-hover fw-700 text-decoration-line-bottom">{blog.author}</Link>
                </span>
                <h1 className="alt-font text-white fw-600 mb-5 ls-minus-2px">{blog.title}</h1>
                <Link to="/blog" className="btn btn-large btn-white btn-hover-animation-switch btn-box-shadow btn-rounded fw-600">{blog.category}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              
              {/* Dropcap block for the very first paragraph if marked */}
              {blog.content[0]?.type === "paragraph" && blog.content[0]?.dropcap && (
                <div className="dropcap-style-04 mb-5">
                  <p>
                    <span className="alt-font first-letter first-letter-block border first-letter-round border-2 border-color-light-medium-gray text-base-color">
                      {blog.content[0].text.charAt(0)}
                    </span>
                    {blog.content[0].text.slice(1)}
                  </p>
                </div>
              )}

              {/* Quote Block */}
              {blog.quote && (
                <div className="text-center mt-6 mb-5">
                  <h5 className="alt-font fw-600 text-dark-gray w-90 sm-w-100 mx-auto mb-15px">"{blog.quote.text}"</h5>
                  <span className="text-uppercase fs-15 ls-2px fw-600 alt-font">- {blog.quote.author} -</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Break */}
      {blog.bannerImage && (
        <section 
          className="one-fourth-screen border-radius-6px lg-border-radius-0px border border-color-transparent" 
          data-parallax-background-ratio="0.5" 
          style={{ backgroundImage: `url('${blog.bannerImage}')` }}
        >
        </section>
      )}

      {/* Rest of the Content */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 last-paragraph-no-margin" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              {blog.content.slice(1).map((block, index) => {
                if (block.type === "heading") {
                  return <h5 key={index} className="alt-font fw-600 text-dark-gray mb-15px mt-6">{block.text}</h5>;
                }
                return <p key={index} className="mb-4">{block.text}</p>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Image Gallery / Carousel */}
      {blog.gallery && blog.gallery.length > 0 && (
        <section className="py-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                {blog.gallery.length === 1 ? (
                  // Static Single Image
                  <img src={blog.gallery[0]} className="w-100 mb-7 border-radius-5px" alt="Blog Visual" />
                ) : (
                  // Auto-playing Swiper Carousel
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="mb-7 border-radius-5px overflow-hidden"
                  >
                    {blog.gallery.map((imgSrc, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={imgSrc} className="w-100" alt={`Gallery ${idx + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tags and Social Share */}
      <section className="half-section pt-5"> 
        <div className="container">
          <div className="row justify-content-center" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
            <div className="col-lg-8">
              <div className="row mb-30px">
                <div className="tag-cloud col-md-9 text-center text-md-start sm-mb-15px">
                  {blog.tags.map((tag, idx) => (
                    <Link to="/blog" key={idx}>{tag}</Link> 
                  ))}
                </div> 
              </div>
              
              <div className="row justify-content-center">
                <div className="col-12 text-center elements-social social-icon-style-04">
                  <ul className="medium-icon dark">
                    <li><a className="share-btn" href="#" onClick={(e) => handleShare(e, blog.title)}><i className="fa-solid fa-share-nodes text-red"></i><span>Share</span></a></li>
                    <li><a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i><span></span></a></li>
                    <li><a className="twitter" href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i><span></span></a></li>
                    <li><a className="linkedin" href="http://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i><span></span></a></li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-very-light-gray position-relative"> 
          <div className="container">
            <div className="row justify-content-center mb-1">
              <div className="col-lg-7 text-center" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-light-gray-transparent d-inline-flex">Knowledge Base</span>
                <h4 className="text-dark-gray fw-700">Related Insights</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-0">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center gap-y-5">
                  {relatedPosts.map((relPost) => (
                    <div className="col" key={relPost.id}>
                      <div className="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover">
                        <div className="blog-image position-relative">
                          <Link to={`/blog/${relPost.slug}`} className="d-block"><img src={relPost.cardImage} alt="" /></Link>
                          <Link to={`/blog/${relPost.slug}`} className="btn btn-very-small btn-rounded bg-white text-dark-gray box-shadow-medium ps-15px pe-15px pt-5px pb-5px lh-16 position-absolute right-30px top-30px text-uppercase fw-700">{relPost.category}</Link>
                        </div>
                        <div className="card-body p-12 lg-p-10">
                          <Link to={`/blog/${relPost.slug}`} className="card-title mb-15px fw-700 fs-19 lh-30 text-dark-gray d-inline-block w-90 md-w-100">{relPost.title}</Link>
                          <p>{relPost.shortDescription}</p>
                          <div className="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                            <div className="me-auto">
                              <span className="blog-date d-inline-block fw-700 text-dark-gray">{relPost.publishDate}</span>
                              <div className="d-inline-block author-name fw-700 text-dark-gray">By <Link to="#" className="text-dark-gray text-decoration-line-bottom">{relPost.author}</Link></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px absolute" />
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
