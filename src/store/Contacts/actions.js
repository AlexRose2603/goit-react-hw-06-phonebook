import { ADDCONTACT, DELETECONTACT } from './types';
import { nanoid } from 'nanoid';

export const onAdd = newContact => ({
  type: ADDCONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const onDelete = contactId => ({
  type: DELETECONTACT,
  payload: contactId,
});
