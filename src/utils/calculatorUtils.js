/**
 * Formats a number to Indian currency format (e.g., 10,00,000)
 * @param {number} number 
 * @returns {string} Formatted string
 */
export const formatCurrency = (number) => {
  if (isNaN(number) || number === null) return '0';
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  }).format(number);
};

/**
 * Calculates GST based on mode (add/remove), amount, and rate.
 * 
 * @param {number} amount - The input amount
 * @param {number} rate - The GST rate percentage (e.g., 18)
 * @param {string} mode - 'add' or 'remove'
 * @returns {Object} { baseAmount, gstAmount, totalAmount, cgstAmount, sgstAmount }
 */
export const calculateGST = (amount, rate, mode = 'add') => {
  const numAmount = Number(amount) || 0;
  const numRate = Number(rate) || 0;

  let baseAmount = 0;
  let totalAmount = 0;
  let gstAmount = 0;

  if (mode === 'add') {
    // Add GST logic
    baseAmount = numAmount;
    gstAmount = baseAmount * (numRate / 100);
    totalAmount = baseAmount + gstAmount;
  } else if (mode === 'remove') {
    // Remove GST logic
    totalAmount = numAmount;
    baseAmount = totalAmount / (1 + (numRate / 100));
    gstAmount = totalAmount - baseAmount;
  }

  const cgstAmount = gstAmount / 2;
  const sgstAmount = gstAmount / 2;

  // Round to 2 decimal places for return values
  return {
    baseAmount: Math.round(baseAmount * 100) / 100,
    gstAmount: Math.round(gstAmount * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100,
    cgstAmount: Math.round(cgstAmount * 100) / 100,
    sgstAmount: Math.round(sgstAmount * 100) / 100
  };
};
