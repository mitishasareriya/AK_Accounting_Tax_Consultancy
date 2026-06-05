// src/data/servicesData.js

const defaultProcess = [
  { title: 'Document Collection', icon: 'bi bi-file-earmark-text', description: 'Gathering all necessary KYC, PAN, and business proofs required for filing.' },
  { title: 'Application Filing', icon: 'bi bi-pencil-square', description: 'Drafting and submitting the forms precisely without errors.' },
  { title: 'Department Follow-up', icon: 'bi bi-clock-history', description: 'Monitoring status and responding to any tax officer clarifications.' },
  { title: 'Final Delivery', icon: 'bi bi-patch-check', description: 'Delivering your documents or certificate promptly so you can focus on business.' }
];

const defaultStats = [
  { value: '4.98', suffix: '', label: '2,488 ratings', highlight: 'fa-star' },
  { value: '98', suffix: '%', label: 'Genuine client\'s positive feedback.' },
  { value: '200', suffix: '+', label: 'Daily expert business advice.' }
];

const defaultBenefits = [
  'Legal recognition and compliance.',
  'Proper accounting of taxes and finances.',
  'Legally authorized to operate securely.',
  'Eligible to avail various other benefits under government laws.'
];

const defaultFaq = [
  { title: 'Who needs this service?', content: 'Any business seeking to remain compliant with current Indian financial regulations.' },
  { title: 'What documents are needed?', content: 'Generally, you need a PAN card, Aadhaar card, business registration proof, and bank statements.' },
  { title: 'How long does the process take?', content: 'Once all documents are submitted, the timeframe is typically 3 to 7 working days depending on government processing.' }
];

export const servicesData = [
  {
    slug: 'gst-registration',
    title: 'GST Registration & Filing',
    badge: 'GST',
    image: '/images/demo-it-business-03.jpg',
    shortDescription: 'Complete GST solutions including registration, return filing and compliance support.',
    header: {
      title: 'GST Registration & Filing',
      subtitle: 'Comprehensive Tax Solutions',
      bgImage: '/images/demo-it-business-about-title-bg.jpg',
    },
    overview: {
      badge: 'GST Compliance',
      title: 'Professional and dedicated GST services.',
      description: 'We ensure your business is fully compliant with GST regulations. With over 15 years of experience in tax consultancy, we guarantee smooth and timely registration for your enterprise.',
      highlight: 'We are excited to help your business stay compliant and grow seamlessly.',
      yearsExperience: '15',
      featureBoxText: '10k+ businesses registered and compliant.',
      mainImage: '/images/demo-it-business-services-details-01.jpg',
    },
    process: defaultProcess,
    stats: defaultStats,
    benefits: {
      title: 'Benefits of GST Registration.',
      list: [
        'Legal recognition as a valid supplier of goods or services.',
        'Proper accounting of taxes paid on the input goods or services.',
        'Legally authorized to collect tax from purchasers.',
        'Eligible to avail various other benefits and privileges under GST laws.'
      ],
      videoImage: '/images/demo-it-business-services-details-02.jpg',
      videoUrl: 'https://www.youtube.com/'
    },
    faq: [
      { title: 'Who is required to register for GST?', content: 'Any business whose turnover exceeds the threshold limit (usually ₹40 lakhs for goods and ₹20 lakhs for services) must register for GST.' },
      { title: 'What documents are needed for GST?', content: 'You generally need a PAN card, Aadhaar card, business registration proof, identity and address proofs of promoters, bank account statements, and digital signature.' },
      { title: 'How long does the registration process take?', content: 'Once the complete application is filed with the correct documents, it typically takes 3 to 7 working days to receive the GSTIN.' }
    ]
  },
  {
    slug: 'income-tax',
    title: 'Income Tax Consultancy',
    badge: 'Tax',
    image: '/images/demo-it-business-04.jpg',
    shortDescription: 'Expert income tax planning and return filing services for individuals and businesses.',
    header: {
      title: 'Income Tax Consultancy',
      subtitle: 'Expert Tax Planning',
      bgImage: '/images/demo-it-business-about-title-bg.jpg',
    },
    overview: {
      badge: 'Taxation',
      title: 'Reliable Income Tax Services.',
      description: 'Optimize your tax liability legally with our expert income tax planning. We handle ITR filing for individuals, HUFs, and corporations ensuring maximum returns.',
      highlight: 'Maximizing your tax savings securely and efficiently.',
      yearsExperience: '15',
      featureBoxText: 'Thousands of happy tax filers.',
      mainImage: '/images/demo-it-business-services-details-01.jpg',
    },
    process: defaultProcess,
    stats: defaultStats,
    benefits: {
      title: 'Benefits of timely ITR filing.',
      list: defaultBenefits,
      videoImage: '/images/demo-it-business-services-details-02.jpg',
      videoUrl: 'https://www.youtube.com/'
    },
    faq: defaultFaq
  },
  {
    slug: 'company-registration',
    title: 'Company Registration',
    badge: 'ROC',
    image: '/images/demo-it-business-05.jpg',
    shortDescription: 'Private limited, LLP and startup registration services with full legal guidance.',
    header: {
      title: 'Company Registration',
      subtitle: 'Start your business right',
      bgImage: '/images/demo-it-business-about-title-bg.jpg',
    },
    overview: {
      badge: 'ROC Compliance',
      title: 'Fast and reliable company incorporation.',
      description: 'Whether it is a Private Limited Company, LLP, or Partnership, we manage all the legal formalities to help you start your business without friction.',
      highlight: 'Your entrepreneurial journey starts here.',
      yearsExperience: '15',
      featureBoxText: 'Hundreds of startups successfully registered.',
      mainImage: '/images/demo-it-business-services-details-01.jpg',
    },
    process: defaultProcess,
    stats: defaultStats,
    benefits: {
      title: 'Benefits of incorporating a company.',
      list: defaultBenefits,
      videoImage: '/images/demo-it-business-services-details-02.jpg',
      videoUrl: 'https://www.youtube.com/'
    },
    faq: defaultFaq
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    badge: 'Accounts',
    image: '/images/demo-it-business-06.jpg',
    shortDescription: 'Professional bookkeeping and accounting services for SMEs and enterprises.',
    header: {
      title: 'Accounting & Bookkeeping',
      subtitle: 'Precision in Financials',
      bgImage: '/images/demo-it-business-about-title-bg.jpg',
    },
    overview: {
      badge: 'Accounting',
      title: 'Maintain accurate financial records.',
      description: 'We handle your daily bookkeeping, ledger management, and financial reporting so you can focus on growing your business.',
      highlight: 'Clean books, clear financial insights.',
      yearsExperience: '15',
      featureBoxText: 'Managing books for 500+ businesses.',
      mainImage: '/images/demo-it-business-services-details-01.jpg',
    },
    process: defaultProcess,
    stats: defaultStats,
    benefits: {
      title: 'Benefits of outsourced bookkeeping.',
      list: defaultBenefits,
      videoImage: '/images/demo-it-business-services-details-02.jpg',
      videoUrl: 'https://www.youtube.com/'
    },
    faq: defaultFaq
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    badge: 'Audit',
    image: '/images/demo-it-business-05.jpg',
    shortDescription: 'Internal audit, statutory audit and financial reporting solutions.',
    header: {
      title: 'Audit & Assurance',
      subtitle: 'Transparent and compliant',
      bgImage: '/images/demo-it-business-about-title-bg.jpg',
    },
    overview: {
      badge: 'Auditing',
      title: 'Thorough and objective auditing.',
      description: 'We conduct statutory, internal, and tax audits to ensure your business operations comply with prevailing financial regulations and standards.',
      highlight: 'Mitigating risks with thorough financial scrutiny.',
      yearsExperience: '15',
      featureBoxText: 'Ensuring compliance and transparency.',
      mainImage: '/images/demo-it-business-services-details-01.jpg',
    },
    process: defaultProcess,
    stats: defaultStats,
    benefits: {
      title: 'Benefits of regular auditing.',
      list: defaultBenefits,
      videoImage: '/images/demo-it-business-services-details-02.jpg',
      videoUrl: 'https://www.youtube.com/'
    },
    faq: defaultFaq
  },
  {
    slug: 'payroll-management',
    title: 'Payroll Management',
    badge: 'Payroll',
    image: '/images/demo-it-business-06.jpg',
    shortDescription: 'Simplified employee payroll, PF, ESIC and salary compliance management services.',
    header: {
      title: 'Payroll Management',
      subtitle: 'Effortless Employee Management',
      bgImage: '/images/demo-it-business-about-title-bg.jpg',
    },
    overview: {
      badge: 'HR Compliance',
      title: 'Streamlined Payroll Processing.',
      description: 'We manage end-to-end payroll processing including salary structuring, PF/ESIC deductions, and timely tax filings to keep your workforce happy.',
      highlight: 'Timely salaries, complete compliance.',
      yearsExperience: '15',
      featureBoxText: 'Handling payroll for over 5000 employees.',
      mainImage: '/images/demo-it-business-services-details-01.jpg',
    },
    process: defaultProcess,
    stats: defaultStats,
    benefits: {
      title: 'Benefits of outsourced payroll.',
      list: defaultBenefits,
      videoImage: '/images/demo-it-business-services-details-02.jpg',
      videoUrl: 'https://www.youtube.com/'
    },
    faq: defaultFaq
  }
];

export default servicesData;
