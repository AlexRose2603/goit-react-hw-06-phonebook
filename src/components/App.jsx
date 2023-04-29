import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title, Section, Total } from './App.styled';
import { onAdd, onDelete } from 'store/Contacts/actions';
import { filterContacts } from 'store/Filters/actions';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(onAdd(newContact));

    const check = checkName(newContact.name);
    if (check.length <= 0) {
      alert('This name is already in the list!');
    }
    // return newContact;
    // setContacts([newContact, ...contacts]);
  };

  const deleteContact = id => {
    dispatch(onDelete(id));
  };

  const checkName = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const onFilter = filter => {
    dispatch(filterContacts(filter));
  };

  const filteredContacts = (filter, contacts) => {
    dispatch(filterContacts(filter));
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
