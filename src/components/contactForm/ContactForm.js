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
      <input
        type='text'
        placeholder='Name'
        value={name}
        autoComplete='off'
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type='tel'
        placeholder='Phone Number'
        value={phone}
        autoComplete='off'
        onChange={({ target }) => setPhone(target.value)}
        pattern='^[2-9]\d{2}-\d{3}-\d{4}$'
      />
      <input
        type='email'
        placeholder='E-Mail'
        value={email}
        autoComplete='off'
        onChange={({ target }) => setEmail(target.value)}
      />
      <input type='submit' value='Add Contact' />
    </form>
  );
};
