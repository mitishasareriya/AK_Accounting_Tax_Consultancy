import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../hooks/useAnime';
import { ShapeWaveBottom } from '../components/common/ShapeWaveBottom';
import { PageHeader } from '../components/common/PageHeader';

export const Blog = () => {
  useAnime();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const blogPosts = [
    {
      id: 1,
      title: 'Build up healthy habits and strong peaceful life.',
      category: 'Agency',
      desc: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '30 August 2021',
      author: 'Den viliamson',
      likes: 25,
      img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-01.jpg'
    },
    {
      id: 2,
      title: 'How to bring the season into your great marketing.',
      category: 'Luxurious',
      desc: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '28 August 2021',
      author: 'Hugh macleod',
      likes: 58,
      img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-02.jpg'
    },
    {
      id: 3,
      title: 'Be the strong willed one the public relationship.',
      category: 'Business',
      desc: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '26 August 2021',
      author: 'Walton smith',
      likes: 75,
      img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-03.jpg'
    },
    {
      id: 4,
      title: 'Make business easy with beautiful application.',
      category: 'Lifestyle',
      desc: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '30 August 2021',
      author: 'Bill gardner',
      likes: 22,
      img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-04.jpg'
    },
    {
      id: 5,
      title: 'Self belief hard work will always earn you success.',
      category: 'Adventure',
      desc: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '18 August 2021',
      author: 'Hugh macleod',
      likes: 58,
      img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-05.jpg'
    },
    {
      id: 6,
      title: 'Through mistakes that you actually can grow.',
      category: 'Business',
      desc: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '15 August 2021',
      author: 'Den viliamson',
      likes: 46,
      img: '/AK_Accounting_Tax_Consultancy/images/demo-corporate-blog-06.jpg'
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  const currentPosts = blogPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                        <Link to="/blog/details" className="d-block">
                          <img src={post.img} alt="" />
                        </Link>
                        <div className="blog-categories">
                          <Link to="/blog" className="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700">{post.category}</Link>
                        </div>
                      </div>
                      <div className="card-body p-13 md-p-11">
                        <Link to="/blog/details" className="card-title mb-15px fw-600 fs-18 lh-28 text-dark-gray d-inline-block w-90 md-w-100">
                          {post.title}
                        </Link>
                        <p>{post.desc}</p>
                        <div className="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                          <div className="me-auto">
                            <span className="blog-date d-inline-block fw-600 text-dark-gray">{post.date}</span>
                            <div className="d-inline-block author-name fw-600 text-dark-gray">By <Link to="/blog" className="text-dark-gray text-decoration-line-bottom">{post.author}</Link></div>
                          </div>
                          <div className="like-count">
                            <a href="#" onClick={(e) => e.preventDefault()}><i className="fa-regular fa-heart text-red"></i><span className="text-dark-gray align-middle fw-600">{post.likes}</span></a>
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
