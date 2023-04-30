import { combineReducers } from 'redux';
import { contactsReducer } from './Contacts/slice';
import { filterReducer } from './Filters/slice';
export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
