import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventModal from './EventModal';
import './MyCalendar.css';

const MyCalendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    color: 'success',
  });
  const [events, setEvents] = useState([
    {
      title: 'Event Conference',
      start: '2024-03-01',
      end: '2024-03-02',
      backgroundColor: '#FF6692',
      textColor: '#0B1739',
    },
    {
      title: 'Seminar #4',
      start: '2024-03-05',
      end: '2024-03-07',
      backgroundColor: '#36C76C',
      textColor: '#FFFFFF',
    },
    {
      title: 'Meeting #5',
      start: '2024-03-08T16:00:00',
      backgroundColor: '#FFD648',
      textColor: '#0A2540',
    },
    {
      title: 'Seminar #6',
      start: '2024-03-10',
      backgroundColor: '#343B4F',
      textColor: '#FFFFFF',
    },
    {
      title: 'Meeting 3',
      start: '2024-03-11T10:30:00',
      backgroundColor: '#3D33FF',
      textColor: '#EFF4FA',
    },
    {
      title: 'Meetup',
      start: '2024-03-11T12:00:00',
      backgroundColor: '#FF6692',
      textColor: '#081028',
    },
    {
      title: 'Submission',
      start: '2024-03-11T14:30:00',
      backgroundColor: '#FFD648',
      textColor: '#0B1739',
    },
    {
      title: 'Attend event',
      start: '2024-03-12T07:00:00',
      backgroundColor: '#36C76C',
      textColor: '#FFFFFF',
    },
    {
      title: 'Submission #1',
      start: '2024-03-15T16:00:00',
      backgroundColor: '#F49B36',
      textColor: '#0A2540',
    },
    {
      title: 'Project Submission',
      start: '2024-03-27',
      backgroundColor: '#3D33FF',
      textColor: '#EFF4FA',
    },
  ]);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleEventInput = e => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };
  const addNewEvent = () => {
    const colorMap = {
      success: '#36C76C',
      danger: '#FF6692',
      primary: '#3D33FF',
      warning: '#FFD648',
    };
    setEvents([
      ...events,
      {
        ...newEvent,
        backgroundColor: colorMap[newEvent.color],
        textColor: '#FFFFFF',
      },
    ]);
    setNewEvent({ title: '', start: '', end: '', color: 'success' });
    closeModal();
  };
  const renderEventContent = eventInfo => {
    return (
      <div
        style={{
          backgroundColor: eventInfo.backgroundColor,
          color: eventInfo.event.extendedProps.textColor,
          padding: '2px 4px',
          borderRadius: '4px',
        }}
      >
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        {console.log(eventInfo)}
      </div>
    );
  };
  return (
    <div className='p-4 bg1-bg1 text-light rounded-lg'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev,next addEventButton',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        customButtons={{
          addEventButton: {
            text: 'Add Event',
            click: openModal,
          },
        }}
        events={events}
        eventContent={renderEventContent} // Custom event rendering
      />
      <EventModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        event={newEvent}
        handleEventInput={handleEventInput}
        addNewEvent={addNewEvent}
      />
    </div>
  );
};
export default MyCalendar;
