// import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT } from './types';
import { nanoid } from 'nanoid';
//------------------------REDUX------------------//
export const onAdd = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const onDelete = id => ({
  type: DELETE_CONTACT,
  payload: id,
});
//----------------------------TOOLKIT---------------//
// export const onAdd = createAction('ADD_CONTACT');
// export const onDelete = createAction('DELETE_CONTACT');
