import { initialContacts } from 'store/Contacts/inicial';
import { FILTER_CONTACTS } from './types';

export const filterReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;

    default:
      return state;
  }
};
