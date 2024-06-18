import React from 'react';
import PaperImage from '../../../../assets/images/PaperImage.svg';

const AddSelectPaper = () => {
  const questionPaper = [
    {
      img: PaperImage,
      chapter: 'Chapter - 1',
    },
    {
      img: PaperImage,
      chapter: 'Chapter - 1',
    },
    {
      img: PaperImage,
      chapter: 'Chapter - 1',
    },
    {
      img: PaperImage,
      chapter: 'Chapter - 1',
    },
  ];

  return (
    <div className='w-full max-w-screen mx-auto bg-secondary__fill p-4 sm:p-7 mt-8 rounded-xl border border-gray-700'>
      <div className='flex items-center'>
        <div className='h-1 w-7 bg-primary rotate-90 mr-2' />
        <h2 className='text-white text-base sm:text-lg'>Std 10 - Gujarati</h2>
      </div>
      <p className='text-white my-4 sm:my-7 ml-2 mr-8 text-left text-sm sm:text-base'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        obcaecati laborum consectetur quibusdam aperiam vel illo, eligendi
        dolores enim vero a placeat atque voluptatibus ipsam aliquam porro.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-2'>
        {questionPaper.map((paper, index) => (
          <div
            key={index}
            className='rounded-lg bg-secondary__fill__dark p-4 sm:p-6 flex flex-col items-center'
          >
            <img
              src={paper.img}
              alt=''
              className='w-full h-auto sm:w-[237.36px] sm:h-[336.55px] object-cover'
            />
            <h2 className='text-white text-sm sm:text-lg mt-2 sm:mt-4'>
              {paper.chapter}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSelectPaper;
