import React from 'react';

import {
  Container,
  List,
  Contact,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import { onDelete } from 'store/Contacts/actions';
import { useDispatch, useSelector } from 'react-redux';
export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const showContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <List>
        {showContacts.map(({ id, name, number }) => (
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
