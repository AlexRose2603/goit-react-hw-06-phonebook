import React from 'react';
import {
  Form,
  Name,
  Number,
  NameField,
  NameInput,
  NumberField,
  NumberInput,
  Button,
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { onAdd } from 'store/Contacts/slice';
import { selectorContacts } from 'store/Contacts/selectors';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const ContactForm = () => {
  const contacts = useSelector(selectorContacts);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = form.elements;

    const existingName = contacts.some(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );
    if (existingName) {
      Report.info('Info', 'This name is already in the contact list');
      return;
    }
    const existingNumber = contacts.some(
      contact => contact.number === number.value
    );
    if (existingNumber) {
      Report.info('Info', 'This number is already in the contact list');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    dispatch(onAdd(newContact));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Name>
        <NameField>Name</NameField>
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Name>
      <Number>
        <NumberField>Number</NumberField>
        <NumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Number>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
