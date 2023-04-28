import { initialContacts } from 'store/Contacts/inicial';
export const filterReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'checkName': {
          return {
          contacts.filter(contact => contact.name.includes(name))
      };
      }
    //   case "onFilter": {
    //       return {
    //          event.currentTarget.value
    //       }
    //   }
      case "filteredContacts": {
          return {
             ...state,
          }
          }
    default:
      return state;
  }
};
