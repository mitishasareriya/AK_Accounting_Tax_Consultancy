import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="cover-background full-screen ipad-top-space-margin md-h-550px" style={{ backgroundImage: "url('/AK_Accounting_Tax_Consultancy/images/404-bg.jpg')" }}>
          <div className="container h-100">
              <div className="row align-items-center justify-content-center h-100">
                  <div className="col-12 col-xl-6 col-lg-7 col-md-9 text-center">
                      <h6 className="text-dark-gray fw-600 mb-5px text-uppercase">Ooops!</h6>
                      <h1 className="fs-150 sm-fs-120 text-dark-gray fw-700 ls-minus-8px mb-20px"><i className="bi bi-exclamation-triangle"></i></h1>
                      <h4 className="text-dark-gray fw-600 sm-fs-22 mb-10px ls-minus-1px">Something went wrong!</h4>
                      <p className="mb-30px lh-28 sm-mb-30px w-55 md-w-80 sm-w-95 mx-auto">An unexpected error has occurred in the application. Please try refreshing the page or navigating back home.</p>
                      <button 
                        onClick={() => window.location.href = '/AK_Accounting_Tax_Consultancy/'} 
                        className="btn btn-large left-icon btn-rounded btn-dark-gray btn-box-shadow text-transform-none"
                      >
                        <i className="fa-solid fa-rotate-right"></i>Reload Page
                      </button>
                  </div>
              </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
