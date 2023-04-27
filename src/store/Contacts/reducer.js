import initialContacts from '../components/Data/contacts.json';

export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'addContact':
      return {
        ...state,
        contacts: [state.contacts, action.payload],
      };
    case 'deleteContact': {
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
