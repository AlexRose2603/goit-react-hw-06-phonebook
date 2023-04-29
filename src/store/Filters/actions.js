import { createAction } from '@reduxjs/toolkit';
import { FILTER_CONTACTS } from './types';

export const filterContacts = filter => ({
  type: FILTER_CONTACTS,
  payload: filter,
});

// --------------TOOLKIT-----------------//
// export const filterContacts = createAction('FILTER_CONTACTS')
