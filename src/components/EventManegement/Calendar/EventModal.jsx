import React from 'react';
import Modal from 'react-modal';
import dayjs from 'dayjs';

Modal.setAppElement('#root');

const EventModal = ({
  isOpen,
  onRequestClose,
  event,
  handleEventInput,
  addNewEvent,
}) => {
  const currentDate = new Date().toISOString().slice(0, 16);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Add Event'
      className='ReactModal__Content'
      overlayClassName='ReactModal__Overlay'
    >
      <h2 className='text-2xl mb-4 text-white'>Add / Edit Event</h2>
      <form className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-white'>
            Event Title
          </label>
          <input
            type='text'
            name='title'
            value={event.title}
            onChange={handleEventInput}
            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white'
          />
        </div>
        <div className='flex space-x-4'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='type'
              value='success'
              checked={event.type === 'success'}
              onChange={handleEventInput}
              className='form-radio text-success'
            />
            <span className='ml-2 text-white'>Success</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='type'
              value='danger'
              checked={event.type === 'danger'}
              onChange={handleEventInput}
              className='form-radio text-danger'
            />
            <span className='ml-2 text-white'>Danger</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='type'
              value='primary'
              checked={event.type === 'primary'}
              onChange={handleEventInput}
              className='form-radio text-primary'
            />
            <span className='ml-2 text-white'>Primary</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='type'
              value='warning'
              checked={event.type === 'warning'}
              onChange={handleEventInput}
              className='form-radio text-warning'
            />
            <span className='ml-2 text-white'>Warning</span>
          </label>
        </div>
        <div>
          <label className='block text-sm font-medium text-white'>
            Enter Start Date
          </label>
          <input
            type='datetime-local'
            name='start_date'
            value={event.start_date}
            onChange={handleEventInput}
            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white'
            min={currentDate} // Restrict to current date and beyond
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-white'>
            Enter End Date
          </label>
          <input
            type='datetime-local'
            name='end_date'
            value={event.end_date}
            onChange={handleEventInput}
            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white'
            min={currentDate} // Restrict to current date and beyond
          />
        </div>
        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            onClick={onRequestClose}
            className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'
          >
            Close
          </button>
          <button
            type='button'
            onClick={addNewEvent}
            className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
          >
            Add Event
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EventModal;
