export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AK Accounting & Tax Consultancy",
    "url": "https://mitishasareriya.github.io/AK_Accounting_Tax_Consultancy/",
    "logo": "https://mitishasareriya.github.io/AK_Accounting_Tax_Consultancy/images/logo_favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1234",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/akaccounting",
      "https://www.twitter.com/akaccounting",
      "https://www.linkedin.com/company/akaccounting"
    ]
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "AK Accounting & Tax Consultancy",
    "image": "https://mitishasareriya.github.io/AK_Accounting_Tax_Consultancy/images/office.jpg",
    "@id": "https://mitishasareriya.github.io/AK_Accounting_Tax_Consultancy/",
    "url": "https://mitishasareriya.github.io/AK_Accounting_Tax_Consultancy/",
    "telephone": "+1-800-555-1234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Rd",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
