import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayjs from 'dayjs';

import EventModal from './EventModal';
import './MyCalendar.css';
import useEvent from '../hooks/useEvent';

const MyCalendar = () => {
  const { event: apiEvents, onAddEvent } = useEvent();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start_date: '',
    end_date: '',
    type: 'success',
  });
  const [events, setEvents] = useState([]);

  const colorMap = {
    success: '#36C76C',
    danger: '#FF6692',
    primary: '#3D33FF',
    warning: '#FFD648',
  };

  useEffect(() => {
    if (apiEvents && apiEvents.length > 0) {
      const formattedEvents = apiEvents.map(event => ({
        title: event.title,
        start: dayjs(event.start_date).format('YYYY-MM-DD'),
        end: dayjs(event.end_date).add(1, 'day').format('YYYY-MM-DD'), // Add one day to make the end date inclusive
        backgroundColor: colorMap[event.type] || '#343B4F',
        textColor: '#FFFFFF',
      }));
      setEvents(formattedEvents);
    }
  }, [apiEvents]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleEventInput = e => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addNewEvent = () => {
    const formattedNewEvent = {
      title: newEvent.title,
      start_date: dayjs(newEvent.start_date).valueOf(), // Convert to Unix timestamp
      end_date: dayjs(newEvent.end_date).valueOf(), // Convert to Unix timestamp
      type: newEvent.type,
    };

    setEvents([
      ...events,
      {
        title: newEvent.title,
        start: dayjs(newEvent.start_date).format('YYYY-MM-DD'),
        end: dayjs(newEvent.end_date).add(1, 'day').format('YYYY-MM-DD'), // Add one day to make the end date inclusive
        backgroundColor: colorMap[newEvent.type] || '#343B4F',
        textColor: '#FFFFFF',
      },
    ]);

    onAddEvent(formattedNewEvent);

    setNewEvent({ title: '', start_date: '', end_date: '', type: 'success' });
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
