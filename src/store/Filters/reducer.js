import { initialFilter } from './initial';
import { FILTER_CONTACTS } from './types';

export const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
