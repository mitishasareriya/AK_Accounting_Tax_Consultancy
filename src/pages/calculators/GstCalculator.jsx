import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../../hooks/useAnime';
import { ShapeWaveBottom } from '../../components/common/ShapeWaveBottom';
import { PageHeader } from '../../components/common/PageHeader';
import { calculateGST, formatCurrency } from '../../utils/calculatorUtils';

// Import local CSS
import '../../styles/calculators.css';

export const GstCalculator = () => {
  useAnime();

  // State
  const [mode, setMode] = useState('add'); // 'add' or 'remove'
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(18);
  const [results, setResults] = useState({
    baseAmount: 0,
    gstAmount: 0,
    totalAmount: 0,
    cgstAmount: 0,
    sgstAmount: 0
  });
  const [copySuccess, setCopySuccess] = useState(false);

  // Constants
  const RATES = [5, 12, 18, 28];
  const MAX_AMOUNT = 1000000;

  // Real-time calculation effect
  useEffect(() => {
    const res = calculateGST(amount, rate, mode);
    setResults(res);
  }, [amount, rate, mode]);

  // Handlers
  const handleAmountChange = (e) => {
    const val = Number(e.target.value.replace(/[^0-9]/g, ''));
    if (val <= MAX_AMOUNT) {
      setAmount(val);
    } else {
      setAmount(MAX_AMOUNT);
    }
  };

  const handleCopy = () => {
    const text = `
GST Calculation Results:
------------------------
Mode: ${mode === 'add' ? 'GST Added' : 'GST Removed'} @ ${rate}%
Base Amount: ₹${formatCurrency(results.baseAmount)}
GST Amount: ₹${formatCurrency(results.gstAmount)}
CGST (${rate / 2}%): ₹${formatCurrency(results.cgstAmount)}
SGST (${rate / 2}%): ₹${formatCurrency(results.sgstAmount)}
Grand Total: ₹${formatCurrency(results.totalAmount)}
    `.trim();
    
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const slideAnime = '{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }';

  return (
    <div>
      {/* start page title */}
      <PageHeader
        title="GST Calculator"
        subtitle="Calculate Goods and Services Tax instantly"
        bgImage="/images/demo-it-business-title-bg_1.png"
        animeProps='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" '
        colClass="col-12 col-xl-8 col-lg-10 col-md-10 text-center text-md-start"
      />
      {/* end page title */}

      {/* Main Calculator Section */}
      <section className="pt-5 pb-5 bg-very-light-gray position-relative">
        <div className="container">
          
          {/* Header Bar */}
          <div className="row mb-4 align-items-center">
            <div className="col-auto">
              <Link to="/financial-calculators" className="text-dark-gray fw-600 d-inline-flex align-items-center text-decoration-none text-nowrap">
                <i className="bi bi-arrow-left me-2 fs-5"></i>
                <span>Back to Calculators</span>
              </Link>
            </div>
          </div>

          <div className="row align-items-start gap-y-4">
            
            {/* Left Col: Controls */}
            <div className="col-lg-6" data-anime={slideAnime}>
              <div className="calculator-card h-100">
                
                {/* Mode Toggle */}
                <div className="mb-4">
                  <div className="calc-tab-toggle">
                    <button 
                      className={`calc-tab-btn ${mode === 'add' ? 'active' : ''}`}
                      onClick={() => setMode('add')}
                    >
                      <i className="bi bi-plus-circle me-2"></i>Add GST
                    </button>
                    <button 
                      className={`calc-tab-btn ${mode === 'remove' ? 'active' : ''}`}
                      onClick={() => setMode('remove')}
                    >
                      <i className="bi bi-dash-circle me-2"></i>Remove GST
                    </button>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className="fw-600 text-dark-gray mb-2">Net Amount</label>
                  <div className="amount-input-group">
                    <span className="prefix">₹</span>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={amount === 0 ? '' : formatCurrency(amount).replace(/,/g, '')}
                      onChange={handleAmountChange}
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Range Slider */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fs-13 text-medium-gray">₹0</span>
                    <span className="fs-13 text-medium-gray">₹10L</span>
                  </div>
                  <input 
                    type="range" 
                    className="calc-range-slider"
                    min="0"
                    max={MAX_AMOUNT}
                    step="1000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>

                {/* Rate Selector */}
                <div className="mb-2">
                  <label className="fw-600 text-dark-gray mb-3 d-block">GST Rate (%)</label>
                  <div className="d-flex flex-wrap gap-3">
                    {RATES.map((r) => (
                      <button 
                        key={r}
                        className={`calc-pill-btn ${rate === r ? 'active' : ''}`}
                        onClick={() => setRate(r)}
                      >
                        {r}%
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Col: Results */}
            <div className="col-lg-6" data-anime={slideAnime}>
              <div className="calculator-card h-100 d-flex flex-column">
                
                {/* Grand Total */}
                <div className="text-center mb-4">
                  <span className="fs-14 fw-600 text-uppercase text-base-color mb-1 d-block">
                    Total Amount (Incl. GST)
                  </span>
                  <h2 className="fs-50 fw-700 text-dark-gray mb-2 ls-minus-2px">
                    ₹{formatCurrency(results.totalAmount)}
                  </h2>
                  <span className="fs-14 text-medium-gray bg-very-light-gray ps-3 pe-3 pt-1 pb-1 border-radius-30px">
                    <i className="bi bi-info-circle me-1"></i> 
                    GST {mode === 'add' ? 'Added' : 'Removed'} @ {rate}%
                  </span>
                </div>

                {/* Detail Grid */}
                <div className="row g-3 mb-4 flex-grow-1">
                  <div className="col-sm-6">
                    <div className="result-card blue text-center">
                      <span className="fs-13 fw-600 text-dark-gray text-uppercase d-block mb-1">Base Amount</span>
                      <span className="fs-22 fw-700 text-dark-gray d-block">₹{formatCurrency(results.baseAmount)}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="result-card orange text-center">
                      <span className="fs-13 fw-600 text-dark-gray text-uppercase d-block mb-1">Total GST</span>
                      <span className="fs-22 fw-700 text-dark-gray d-block">₹{formatCurrency(results.gstAmount)}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="result-card green text-center">
                      <span className="fs-13 fw-600 text-dark-gray text-uppercase d-block mb-1">CGST & SGST Split ({rate/2}% + {rate/2}%)</span>
                      <div className="d-flex justify-content-center gap-4 mt-2">
                        <div>
                          <span className="fs-12 text-medium-gray d-block">CGST</span>
                          <span className="fs-20 fw-700 text-dark-gray">₹{formatCurrency(results.cgstAmount)}</span>
                        </div>
                        <div className="border-end border-color-extra-medium-gray"></div>
                        <div>
                          <span className="fs-12 text-medium-gray d-block">SGST</span>
                          <span className="fs-20 fw-700 text-dark-gray">₹{formatCurrency(results.sgstAmount)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary Notice */}
                <div className="mb-4 text-center">
                  <p className="fs-14 text-medium-gray mb-0 lh-22">
                    For {rate}% GST, the total tax of ₹{formatCurrency(results.gstAmount)} is split equally into CGST (₹{formatCurrency(results.cgstAmount)}) and SGST (₹{formatCurrency(results.sgstAmount)}), each contributing {rate/2}%.
                  </p>
                </div>

                {/* Copy Button */}
                <button 
                  className={`btn btn-large w-100 btn-rounded ${copySuccess ? 'btn-success text-white' : 'btn-dark-gray'} fw-600 transition-all`}
                  onClick={handleCopy}
                >
                  <i className={`bi ${copySuccess ? 'bi-check-circle' : 'bi-clipboard'} me-2`}></i>
                  {copySuccess ? 'Copied to Clipboard!' : 'Copy Results'}
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="pt-10 pb-10 bg-white">
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 text-center" data-anime={slideAnime}>
              <h3 className="text-dark-gray fw-700 ls-minus-1px">Understanding GST in India</h3>
              <p className="w-80 mx-auto">Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services in India. It replaced multiple cascading taxes levied by the central and state governments.</p>
            </div>
          </div>
          
          <div className="row align-items-start gap-y-4">
            
            {/* Left: How it works & Slabs */}
            <div className="col-lg-6" data-anime={slideAnime}>
              <div className="bg-very-light-gray p-5 border-radius-8px h-100">
                <h5 className="text-dark-gray fw-700 mb-4">GST Slabs</h5>
                <div className="table-responsive mb-5">
                  <table className="table table-bordered border-color-extra-medium-gray bg-white">
                    <thead className="bg-dark-gray text-white">
                      <tr>
                        <th className="py-3">Tax Slab</th>
                        <th className="py-3">Common Goods/Services</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-600 text-dark-gray">5%</td>
                        <td>Household necessities, life-saving drugs, economy flights.</td>
                      </tr>
                      <tr>
                        <td className="fw-600 text-dark-gray">12%</td>
                        <td>Computers, processed food, business class flights.</td>
                      </tr>
                      <tr>
                        <td className="fw-600 text-dark-gray">18%</td>
                        <td>Hair oil, toothpaste, capital goods, IT services.</td>
                      </tr>
                      <tr>
                        <td className="fw-600 text-dark-gray">28%</td>
                        <td>Luxury items, automobiles, aerated drinks.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 className="text-dark-gray fw-700 mb-3">Formulas Used</h5>
                <ul className="list-style-01 ps-0">
                  <li className="mb-2"><i className="bi bi-check-circle text-base-color me-2"></i><strong>Add GST:</strong> <code>Total = Base + (Base × Rate / 100)</code></li>
                  <li><i className="bi bi-check-circle text-base-color me-2"></i><strong>Remove GST:</strong> <code>Base = Total / (1 + Rate / 100)</code></li>
                </ul>
              </div>
            </div>

            {/* Right: FAQ */}
            <div className="col-lg-6" data-anime={slideAnime}>
              <div className="accordion accordion-style-02">
                
                <div className="accordion-item active-accordion border-bottom border-color-transparent-dark-very-light">
                  <div className="accordion-header py-4">
                    <a href="#" className="pointer-events-none">
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px fw-600 fs-18">
                        What is CGST and SGST?
                      </div>
                    </a>
                  </div>
                  <div className="accordion-body pb-4">
                    <p className="fs-15 text-medium-gray mb-0">For intra-state transactions, GST is split equally into Central GST (CGST) collected by the Central Government, and State GST (SGST) collected by the State Government.</p>
                  </div>
                </div>

                <div className="accordion-item border-bottom border-color-transparent-dark-very-light">
                  <div className="accordion-header py-4">
                    <a href="#" className="pointer-events-none">
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px fw-600 fs-18">
                        What is IGST?
                      </div>
                    </a>
                  </div>
                  <div className="accordion-body pb-4 d-block">
                    <p className="fs-15 text-medium-gray mb-0">Integrated GST (IGST) is applicable on inter-state transactions and imports. It is collected entirely by the Central Government and is equal to the full GST rate (e.g., instead of 9% CGST + 9% SGST, it is 18% IGST).</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Bottom */}
      <div className="position-relative">
        <ShapeWaveBottom className="bottom-0px absolute" />
      </div>

    </div>
  );
};

export default GstCalculator;
