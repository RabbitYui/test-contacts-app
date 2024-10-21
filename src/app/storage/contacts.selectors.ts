import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Contact } from '../shared/models/contact';

export const selectContacts = createFeatureSelector<ReadonlyArray<Contact>>('contacts');

export const selectContactsCollection = createSelector(
  selectContacts,
  (contacts) => contacts
);

export const selectOneContact = (id: number | null) => createSelector(
  selectContacts,
  (contacts) => {
    return contacts.find(contact => contact.id === id)
  }
)
export const contactsIdCounter = createSelector(
  selectContacts,
  (contacts) => contacts.map(item => item.id).reduce((id1, id2) => Math.max(id1, id2), 1)
)
