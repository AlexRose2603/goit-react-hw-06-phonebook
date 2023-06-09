import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    onAdd: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
      // {state.items = [...state.items, action.payload]}
    }),
    onDelete: (state, action) => ({
      ...state,
      items: state.items.filter(item => item.id !== action.payload),
      // {state.items = [state.items.filter(item => item.id !== action.payload)]}
    }),
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { onAdd, onDelete } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
