// src/EventModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const EventModal = ({
  isOpen,
  onRequestClose,
  event,
  handleEventInput,
  addNewEvent,
}) => {
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
              name='color'
              value='success'
              checked={event.color === 'success'}
              onChange={handleEventInput}
              className='form-radio text-success'
            />
            <span className='ml-2 text-white'>Success</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='color'
              value='danger'
              checked={event.color === 'danger'}
              onChange={handleEventInput}
              className='form-radio text-danger'
            />
            <span className='ml-2 text-white'>Danger</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='color'
              value='primary'
              checked={event.color === 'primary'}
              onChange={handleEventInput}
              className='form-radio text-primary'
            />
            <span className='ml-2 text-white'>Primary</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='color'
              value='warning'
              checked={event.color === 'warning'}
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
            name='start'
            value={event.start}
            onChange={handleEventInput}
            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-white'>
            Enter End Date
          </label>
          <input
            type='datetime-local'
            name='end'
            value={event.end}
            onChange={handleEventInput}
            className='mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white'
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
