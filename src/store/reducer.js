import { combineReducers } from 'redux';
import { contactsReducer } from './Contacts/reducer';
import { filterReducer } from './Filters/reducer';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
