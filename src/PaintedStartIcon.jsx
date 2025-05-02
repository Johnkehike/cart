import React from 'react';

function PaintedStarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FBB318', stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: '#FBB318', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M12 .587l3.668 7.425 8.332 1.209-6.001 5.852 1.416 8.293-7.415-3.893-7.415 3.893 1.416-8.293-6.001-5.852 8.332-1.209z" fill="url(#starGradient)" />
    </svg>
  );
}

export default PaintedStarIcon;