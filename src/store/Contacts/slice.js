import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from './inicial';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    onAdd: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    onDelete: (state, action) => ({}),
  },
});
export const { onAdd, onDelete } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
