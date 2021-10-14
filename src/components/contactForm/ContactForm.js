import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder='Name'
        />
      </label>
      <label>
        <input
          type='tel'
          name='phone'
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          // pattern='^[2-9]\d{2}-\d{3}-\d{4}$'
          placeholder='Phone Number'
        />
      </label>
      <label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder='E-Mail'
        />
      </label>
      <input type='submit' value='Add Contact' />
    </form>
  );
};
