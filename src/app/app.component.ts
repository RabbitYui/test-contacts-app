import { Component, OnInit } from '@angular/core';
import { ContactsApiActions } from './storage/contacts.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'test-contacts-app';
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.loadContactList();
  }

  private loadContactList() {
    const hardcodedContacts = [
      {
        id: 1,
        firstName: 'Yui',
        lastName: 'Yasashi',
        phoneNumber: '+380954531151',
        contactEmail: 'testTest@gmail.com',
      },
      {
        id: 2,
        firstName: 'My',
        lastName: 'Cat',
        phoneNumber: '+380634594181',
        contactEmail: 'meow@gmail.com',
      }
    ];
    this.store.dispatch(ContactsApiActions.setContactList({ contacts: hardcodedContacts }));
  }}
