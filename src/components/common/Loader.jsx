import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8 w-full h-screen">
      {/* Logo */}
      <img 
        src="/AK_Accounting_Tax_Consultancy/images/logo_vertical_3.svg" 
        alt="AK Accounting Logo" 
        className="h-12 md:h-16 mb-4" 
      />
      
    </div>
  );
};

export default Loader;
