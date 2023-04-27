import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title, Section, Total } from './App.styled';
import initialContacts from './Data/contacts.json';
import { useLocalStorage } from 'LocalStarage/useLocalStarage';

export const App = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    dispatch({
      type: 'addContact',
      payload: { id: nanoid(), name, number },
    });
    const check = checkName(name);
    if (check.length <= 0) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts([newContact, ...contacts]);
      return;
    }
    alert('This name is already in the list!');
  };

  const deleteContact = contactId => {
    dispatch({ type: 'deleteContact', payload: contact.id });
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const checkName = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const onFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const listedContacts = filteredContacts(filter, contacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onFilter={onFilter} />
      <Section>Contacts</Section>
      <ContactList onDeleteContact={deleteContact} contacts={listedContacts} />
      <Total>Total number of contacts: {contacts.length}</Total>
    </Container>
  );
};
