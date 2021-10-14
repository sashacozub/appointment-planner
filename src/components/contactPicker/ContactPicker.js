import React from 'react';

export const ContactPicker = ({ onChange, contacts }) => {
  return (
    <select name='contact' onChange={onChange}>
      <option value={''} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
