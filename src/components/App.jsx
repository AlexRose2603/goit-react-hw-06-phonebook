import { useSelector } from 'react-redux';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title, Section, Total } from './App.styled';
import { selectorContacts } from 'store/Contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectorContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <Section>Contacts</Section>
      <ContactList />
      <Total>Total number of contacts: {contacts.length}</Total>
    </Container>
  );
};
