import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';
import { blogData } from '../data/blogData';
import { handleShare } from '../utils/share';

export const Blog = () => {
  useAnime();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const currentPosts = blogData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      {/* start page title */}
            <PageHeader 
        title="Latest blog"
        subtitle="Grow your business with us"
        bgImage="/AK_Accounting_Tax_Consultancy/images/demo-it-business-blog-title-bg.jpg"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
      />
      {/* end page title */}

      {/* start section */}
      <section className="pt-12 position-relative bg-gradient-top-very-light-gray sm-pt-50px pb-24 bg-white"> 
        <div className="container">  
          <div className="row g-0"> 
            <div className="col-12">
              <ul className="blog-grid blog-wrapper d-flex flex-wrap grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                {currentPosts.map((post) => (
                  <li key={post.id} className="grid-item">
                    <div className="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover">
                      <div className="blog-image">
                        <Link to={`/blog/${post.slug}`} className="d-block">
                          <img src={post.cardImage} alt="" />
                        </Link>
                        <div className="blog-categories">
                          <Link to={`/blog/${post.slug}`} className="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700">{post.category}</Link>
                        </div>
                      </div>
                      <div className="card-body p-13 md-p-11">
                        <Link to={`/blog/${post.slug}`} className="card-title mb-15px fw-600 fs-18 lh-28 text-dark-gray d-inline-block w-90 md-w-100">
                          {post.title}
                        </Link>
                        <p>{post.shortDescription}</p>
                        <div className="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                          <div className="me-auto">
                            <span className="blog-date d-inline-block fw-600 text-dark-gray">{post.publishDate}</span>
                            <div className="d-inline-block author-name fw-600 text-dark-gray">By <Link to="#" className="text-dark-gray text-decoration-line-bottom">{post.author}</Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* start pagination */}
            <div className="col-12 mt-5 mb-5 d-flex justify-content-center" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              <ul className="pagination pagination-style-01 fs-13 fw-500 mb-0">
                <li className="page-item"><a className="page-link" href="#" onClick={e => { e.preventDefault(); if(currentPage > 1) setCurrentPage(currentPage - 1); }}><i className="bi bi-arrow-left fs-18 d-xs-none"></i></a></li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={e => { e.preventDefault(); setCurrentPage(index + 1); }}>{String(index + 1).padStart(2, '0')}</a>
                  </li>
                ))}
                <li className="page-item"><a className="page-link" href="#" onClick={e => { e.preventDefault(); if(currentPage < totalPages) setCurrentPage(currentPage + 1); }}><i className="bi bi-arrow-right fs-18 d-xs-none"></i></a></li>
              </ul>
            </div> 
          </div>
        </div>
        <ShapeWaveBottom className="bottom-minus-40px xl-bottom-0px" />
      </section>
      {/* end section */}  
    </div>
  );
};
export default Blog;
