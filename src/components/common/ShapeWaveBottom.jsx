import React from 'react';

export const ShapeWaveBottom = ({ 
  fillColor = '#ffffff', 
  className = 'bottom-0 absolute' 
}) => {
  return (
    <div className={`shape-image-animation p-0 w-100 d-none d-md-block ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="3000" 
        height="400" 
        viewBox="0 180 2500 200" 
        fill={fillColor}
      >
        <path className="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
          <animate 
            attributeName="d" 
            dur="5s" 
            values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                    M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                    M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" 
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default ShapeWaveBottom;
