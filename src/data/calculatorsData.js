// src/data/calculatorsData.js

export const calculatorsData = [
  {
    id: 'gst',
    slug: 'gst',
    title: 'GST Calculator',
    badge: 'Tax',
    icon: 'bi bi-receipt', // Using Bootstrap icons to match the project style
    description: 'Quickly calculate Goods and Services Tax (GST) inclusive or exclusive prices.',
    link: '/financial-calculators/gst'
  },
  {
    id: 'sip',
    slug: 'sip',
    title: 'SIP Calculator',
    badge: 'Investment',
    icon: 'bi bi-graph-up-arrow',
    description: 'Estimate the future value of your Systematic Investment Plan (SIP) investments.',
    link: '/financial-calculators/sip'
  },
  {
    id: 'emi',
    slug: 'emi',
    title: 'EMI Calculator',
    badge: 'Loan',
    icon: 'bi bi-calculator',
    description: 'Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans.',
    link: '/financial-calculators/emi'
  },
  {
    id: 'fd',
    slug: 'fd',
    title: 'FD Calculator',
    badge: 'Savings',
    icon: 'bi bi-piggy-bank',
    description: 'Determine the maturity amount and interest earned on your Fixed Deposits.',
    link: '/financial-calculators/fd'
  },
  {
    id: 'rd',
    slug: 'rd',
    title: 'RD Calculator',
    badge: 'Savings',
    icon: 'bi bi-wallet2',
    description: 'Calculate the return on your Recurring Deposit (RD) over a specific tenure.',
    link: '/financial-calculators/rd'
  },
  {
    id: 'loan',
    slug: 'loan',
    title: 'Loan Calculator',
    badge: 'Finance',
    icon: 'bi bi-bank',
    description: 'Plan your borrowing by calculating interest rates, principal, and total repayment.',
    link: '/financial-calculators/loan'
  },
  {
    id: 'cagr',
    slug: 'cagr',
    title: 'CAGR Calculator',
    badge: 'Growth',
    icon: 'bi bi-bar-chart-line',
    description: 'Compute the Compound Annual Growth Rate (CAGR) of your investments over time.',
    link: '/financial-calculators/cagr'
  },
  {
    id: 'lumpsum',
    slug: 'lumpsum',
    title: 'Lumpsum Calculator',
    badge: 'Investment',
    icon: 'bi bi-cash-stack',
    description: 'Forecast the future value of a one-time lumpsum investment.',
    link: '/financial-calculators/lumpsum'
  },
  {
    id: 'retirement',
    slug: 'retirement',
    title: 'Retirement Calculator',
    badge: 'Planning',
    icon: 'bi bi-calendar-check',
    description: 'Plan your golden years by calculating the corpus needed for retirement.',
    link: '/financial-calculators/retirement'
  }
];

export default calculatorsData;
