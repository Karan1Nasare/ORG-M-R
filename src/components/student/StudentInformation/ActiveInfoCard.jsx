import React from 'react';

function ActiveInfoCard({
  tital,
  CircleColor,
  bageColor,
  bageColorLight,
  count,
}) {
  return (
    <div className='flex items-center h-full'>
      <div className={`bg-${CircleColor} w-14 h-14 rounded-full`} />
    </div>
  );
}

export default ActiveInfoCard;
