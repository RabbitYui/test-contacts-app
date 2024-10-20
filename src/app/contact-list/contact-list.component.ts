import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContactsActions } from '../storage/contacts.actions';
import { selectContactsCollection } from '../storage/contacts.selectors';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  contacts$ = this.store.select(selectContactsCollection);

  constructor(private router: Router, private store: Store) {
  }

  onContactDelete(id: number) {
    this.store.dispatch(ContactsActions.removeContact({ contactId: id }));
  }

  onContactEdit(id: number) {
    this.router.navigate(['contact-profile/' + id]);
  }
}
