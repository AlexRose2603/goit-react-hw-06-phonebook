import { initialContacts } from './inicial';
import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
