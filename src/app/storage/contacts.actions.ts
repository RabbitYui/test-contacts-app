import { createActionGroup, props } from '@ngrx/store';
import { Contact } from '../shared/models/contact';

export const ContactsActions = createActionGroup({
  source: 'Contacts',
  events: {
    'Add Contact': props<{ contact: Contact }>(),
    'Remove Contact': props<{ contactId: number }>(),
    'Edit Contact': props<{ contact: Contact }>()
  },
});

export const ContactsApiActions = createActionGroup({
  source: 'Contacts List',
  events: {
    'Set Contact List': props<{ contacts: ReadonlyArray<Contact> }>(),
  },
});
