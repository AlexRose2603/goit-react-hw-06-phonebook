import { ADD_CONTACT, DELETE_CONTACT } from './types';
import { nanoid } from 'nanoid';

export const onAdd = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});

export const onDelete = id => ({
  type: DELETE_CONTACT,
  payload: nanoid(),
});
