import React, { useState } from 'react';
import PaperImage from '../../../../assets/images/PaperImage.svg';

const AddSelectPaper = ({ filteredData, setSelectedData }) => {
  const [selectedPaperId, setSelectedPaperId] = useState(null);

  const handleSelect = paperId => {
    if (selectedPaperId === paperId) {
      // Deselect if the same item is clicked
      setSelectedPaperId(null);
      setSelectedData(prevData => ({ ...prevData, exam_paper_id: null }));
    } else {
      setSelectedPaperId(paperId);
      setSelectedData(prevData => ({ ...prevData, exam_paper_id: paperId }));
    }
  };

  return (
    <div className='w-full max-w-screen mx-auto bg-secondary__fill p-4 sm:p-7 mt-8 rounded-xl border border-gray-700'>
      <div className='flex items-center'>
        <div className='h-1 w-7 bg-primary rotate-90 mr-2' />
        {filteredData && filteredData.length > 0 && (
          <h2 className='text-white text-base sm:text-lg'>
            {filteredData[0]?.course?.name} - {filteredData[0]?.subject?.name}
          </h2>
        )}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-2 mt-4'>
        {!filteredData || filteredData.length === 0 ? (
          <p className='text-white'>No data found.</p>
        ) : (
          filteredData.map((card, index) => (
            <div
              key={index}
              className={`bg-secondary__fill border border-gray-700 h-44 p-7 rounded-xl ${selectedPaperId === card.id ? 'border-blue-500' : ''}`}
            >
              <div className='flex justify-between'>
                <div className='text-left'>
                  <h1 className='text-white text-lg'>
                    {card?.paper_name || 'Exam Paper Name'}
                  </h1>

                  <div className='flex mt-1'>
                    <h3 className='text-grey__primary__light mr-2 text-sm '>
                      Question Count:
                    </h3>
                    <h3 className='bg-success w-10 rounded-full text-sm pl-3 bg-opacity-25 text-success'>
                      {card?.questions_count || 0}
                    </h3>
                  </div>
                </div>
                <div className='flex mt-3 '>
                  <input
                    type='checkbox'
                    checked={selectedPaperId === card.id}
                    onChange={() => handleSelect(card.id)}
                  />
                </div>
              </div>
              <div className='flex pt-5 justify-between'>
                <div>
                  <h2 className='text-grey__primary__light text-sm'>
                    Standard
                  </h2>
                  <h2 className='bg-tealGreen__opacity w-12 mt-2 rounded-full text-xs text-tealGreen px-4 py-1'>
                    {card?.course?.name || 'N/A'}
                  </h2>
                </div>
                <div>
                  <h2 className='text-grey__primary__light text-sm text-right'>
                    Subject
                  </h2>
                  <h2 className='text-primary mt-2 bg-primary  text-sm rounded-full bg-opacity-20 px-4 py-1'>
                    {card?.subject?.name || 'N/A'}
                  </h2>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddSelectPaper;
