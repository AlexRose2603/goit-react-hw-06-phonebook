import { createStore } from 'redux';
import { App } from 'components/App';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { combineReducers } from "redux";

import { contactsReducer } from './Contacts/reducer';
const filterReducer = (state = initialContacts, action) => {
  switch (action.type) {
   
    case 'checkName': {
          return {
          contacts.filter(contact => contact.name.includes(name))
      };
      }
      case "onFilter": {
          return {
             event.currentTarget.value 
          }
      }
      case "filteredContacts": {
          return {
             ...state, 
          }
          }
    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();

export const store = createStore(reducer, { contacts: [], filter: ""}, enhancer);

store.dispatch({
  type: 'addContact',
  payload: { id: nanoid(), name, number },
});

store.dispatch({
  type: 'deleteContact',
  payload: contact.id,
});
store.dispatch({
    type: "checkName",
    payload: name
})
store.dispatch({ type: "onFilter", payload: event })


export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});