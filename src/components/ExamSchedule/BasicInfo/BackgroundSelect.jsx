import React, { useState } from 'react';

// Example image URLs, replace with actual image paths or URLs
const imageUrls = [
  'https://via.placeholder.com/300x200.png?text=Image+1',
  'https://via.placeholder.com/300x200.png?text=Image+2',
  'https://via.placeholder.com/300x200.png?text=Image+3',
  'https://via.placeholder.com/300x200.png?text=Image+4',
  'https://via.placeholder.com/300x200.png?text=Image+5',
  'https://via.placeholder.com/300x200.png?text=Image+6',
  'https://via.placeholder.com/300x200.png?text=Image+7',
  'https://via.placeholder.com/300x200.png?text=Image+8',
  'https://via.placeholder.com/300x200.png?text=Image+1',
  'https://via.placeholder.com/300x200.png?text=Image+2',
  'https://via.placeholder.com/300x200.png?text=Image+3',
  'https://via.placeholder.com/300x200.png?text=Image+4',
  'https://via.placeholder.com/300x200.png?text=Image+5',
  'https://via.placeholder.com/300x200.png?text=Image+6',
  'https://via.placeholder.com/300x200.png?text=Image+7',
  'https://via.placeholder.com/300x200.png?text=Image+8',
];

const itemsPerPage = 8; // Number of images to display per page

const BackgroundSelect = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return imageUrls.slice(startIndex, endIndex);
  };

  return (
    <div className='bg-[rgba(11,23,57,1)] text-white p-8 rounded-lg w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
        {getCurrentPageImages().map((url, index) => (
          <div
            key={index}
            className='w-[115%;] h-[192px] flex items-center justify-center bg-[rgba(11,23,57,1)] rounded]'
          >
            <div
              className='w-[237px] h-[144px] bg-cover bg-center rounded'
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <button
          className='px-3 py-1 mx-1 text-sm font-medium bg-gray-800 rounded-md'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 text-sm font-medium ${currentPage === index + 1 ? 'bg-blue-600' : 'bg-gray-800'} rounded-md`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='px-3 py-1 mx-1 text-sm font-medium bg-gray-800 rounded-md'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BackgroundSelect;
