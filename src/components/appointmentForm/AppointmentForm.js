import React from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
          placeholder='Appointment Title'
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name='contact'
          value={contact}
          contacts={contacts}
          onChange={({ target }) => setContact(target.value)}
          placeholder='Appointment With'
        />
      </label>
      <br />
      <label>
        <input
          type='date'
          name='date'
          min={getTodayString()}
          value={date}
          onChange={({ target }) => setDate(target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type='time'
          name='time'
          value={time}
          onChange={({ target }) => setTime(target.value)}
          required
        />
      </label>
      <br />
      <input type='submit' value='Add Appointment' />
    </form>
  );
};
