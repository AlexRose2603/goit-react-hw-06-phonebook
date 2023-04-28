import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title, Section, Total } from './App.styled';
import { onAdd, onDelete } from 'store/Contacts/actions';

// import { useLocalStorage } from 'LocalStarage/useLocalStarage';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [filter, setFilter] = useState('');

  const addContact = newContact => {
    dispatch(onAdd(newContact));
    // dispatch({
    //   type: ADDCONTACT,
    //   payload: newContact,
    // });
    // const check = checkName(newContact.name);
    // if (check.length <= 0) {
    //   alert('This name is already in the list!');
    // }
    // return newContact;
    // setContacts([newContact, ...contacts]);
  };

  const deleteContact = contact => {
    dispatch(onDelete(contact.id));
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
