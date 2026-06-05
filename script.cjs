const fs = require('fs');
const lines = fs.readFileSync('src/pages/Home.jsx', 'utf8').split('\n');
const newLines = [
  ...lines.slice(0, 260),
  '            {industriesList.map((item, index) => (',
  '              <div key={index} className="col icon-with-text-style-04 transition-inner-all">',
  '                <div className={`feature-box hover-box h-100 transition dark-hover pt-25 pb-25 xs-p-12 last-paragraph-no-margin overflow-hidden ${item.borderClass} border-color-transparent-white-light border-color-transparent-on-hover`}>',
  '                  <div className="feature-box-icon">',
  '                    <i className={`${item.icon} icon-extra-large text-white mb-15px`}></i>',
  '                  </div>',
  '                  <div className="feature-box-content">',
  '                    <span className="d-inline-block text-white fw-600 fs-14 text-uppercase">{item.title}</span>',
  '                  </div>',
  '                  <div className="feature-box-overlay bg-base-color"></div>',
  '                </div>',
  '              </div>',
  '            ))}',
  ...lines.slice(404, 550)
];
fs.writeFileSync('src/pages/Home.jsx', newLines.join('\n'));
