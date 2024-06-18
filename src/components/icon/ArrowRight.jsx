import React from 'react';

const ArrowRight = ({
  color = 'white',
  width = 18,
  height = 18,
  className,
}) => {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg width="${width}" height="${height}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.93755 9.82759L6.93755 10.8461C6.93755 12.1482 7.39426 13.1388 8.22026 13.6306C8.57661 13.8454 8.97295 13.9492 9.39594 13.9492C9.96007 13.9492 10.5783 13.7622 11.2028 13.3881L14.3131 11.5388C15.4077 10.8806 16.0125 9.98018 16.0125 8.99653C16.0125 8.01299 15.4077 7.11242 14.3131 6.46137L11.2028 4.61192C10.1086 3.96087 9.05409 3.87073 8.22026 4.3626C7.39426 4.85437 6.93755 5.84489 6.93755 7.14718L6.93755 8.17178M6.93755 10.2369L6.93755 8.99938M6.93755 8.99938L6.93755 7.76188M6.93755 8.99938L1.98755 8.99938" stroke="${color}" stroke-linecap="round"/>
    </svg>`}
      alt='custom icon'
      style={{ width, height }}
      className={className}
    />
  );
};

export default ArrowRight;
