import React, { useState } from 'react';
import English from '../../../assets/BG_Images_For_Exam/English.jpg';
import Gujarati from '../../../assets/BG_Images_For_Exam/Gujarati.jpg';
import Hindi from '../../../assets/BG_Images_For_Exam/Hindi.jpg';
import Mathematics from '../../../assets/BG_Images_For_Exam/Mathematics.jpg';
import Science from '../../../assets/BG_Images_For_Exam/Science.jpg';
import SocialStudies from '../../../assets/BG_Images_For_Exam/SocialScience.jpg';
import Sanskrit from '../../../assets/BG_Images_For_Exam/Sanskrit.jpg';

const images = [
  { id: 'english', src: English },
  { id: 'gujarati', src: Gujarati },
  { id: 'hindi', src: Hindi },
  { id: 'mathematics', src: Mathematics },
  { id: 'science', src: Science },
  { id: 'socialStudies', src: SocialStudies },
  { id: 'sanskrit', src: Sanskrit },
];

const itemsPerPage = 8; // Number of images to display per page

const BackgroundSelect = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return images.slice(startIndex, endIndex);
  };

  return (
    <div className='bg-[rgba(11,23,57,1)] border border-gray-700 text-white p-8 rounded-lg w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
        {getCurrentPageImages().map(image => (
          <div
            key={image.id}
            className='w-[115%] h-[192px] flex items-center justify-center bg-[rgba(11,23,57,1)] rounded]'
          >
            <div
              className='w-[237px] h-[144px] bg-cover bg-center rounded'
              style={{ backgroundImage: `url(${image.src})` }}
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
