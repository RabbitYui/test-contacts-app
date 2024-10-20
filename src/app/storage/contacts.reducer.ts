import { Contact } from '../shared/models/contact';
import { createReducer, on } from '@ngrx/store';
import { ContactsActions, ContactsApiActions } from './contacts.actions';

export const initialState: ReadonlyArray<Contact> = [];

export const contactsReducer = createReducer(
  initialState,
  on(ContactsApiActions.setContactList, (state, { contacts } ) => contacts),
  on(ContactsActions.removeContact, (state, {contactId}) =>
    state.filter(contact => contact.id !== contactId)
  ),
  on(ContactsActions.addContact, (state, {contact}) => {
    if (state.indexOf(contact) > -1) return state;
    return [...state, contact];
  }),
  on(ContactsActions.editContact, (state, { contact }) => {
    return state.map(item => {
      if (item.id !== contact.id) {
        return item;
      }

      return { ...item, ...contact };
    })
  })
)
