import {
  Container,
  List,
  Contact,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'store/Contacts/selectors';
import { onDelete } from 'store/Contacts/slice';
import { selectorFilter } from 'store/Filters/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn onClick={() => dispatch(onDelete(id))} type="button">
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </List>
    </Container>
  );
};
