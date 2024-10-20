import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { contactsLength, selectOneContact } from '../storage/contacts.selectors';
import { Contact } from '../shared/models/contact';
import { ContactsActions } from '../storage/contacts.actions';

@Component({
  selector: 'app-contact-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule,
    MatButton,
    CommonModule
  ],
  templateUrl: './contact-profile.component.html',
  styleUrl: './contact-profile.component.scss'
})
export class ContactProfileComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  formModel = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    contactEmail: '',
  }
  contactFormFields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        label: 'First Name',
        placeholder: 'First Name',
        required: true
      },
      validators: { validation: ['required'] }
    },
    {
      key: 'lastName',
      type: 'input',
      props: {
        label: 'Last Name',
        placeholder: 'Last Name'
      }
    },
    {
      key: 'phoneNumber',
      type: 'input',
      props: {
        label: 'Phone Number',
        placeholder: '+380000000000',
        required: true
      },
      validators: { validation: ['required', 'phone'] }
    },
    {
      key: 'contactEmail',
      type: 'input',
      props: {
        label: 'Email',
        placeholder: 'Email',
        required: true
      },
      validators: { validation: ['email'] },
    }
  ];
  contactId: number = 0;
  contactsLength: number  = 0;

  constructor(activatedRoute: ActivatedRoute,
              private store: Store,
              private router: Router) {
    activatedRoute.params.pipe(take(1))
      .subscribe(p => {
        if (p['id']) {
          this.contactId = Number(p['id']);
          this.loadContact();
        }
      });
  }

  ngOnInit() {
    this.loadContactsLength();
  }

  onSubmit(model: any): void {
    if (!this.contactId) {
      this.contactId = this.contactsLength + 1;
      this.createContact(model);
    } else {
      this.editContact(model);
    }

    this.router.navigate(['contact-list']);
  }

  private loadContact() {
    this.store.select(selectOneContact(this.contactId)).subscribe((res: any) => {
      this.formModel = {...res};
    })
  }

  private loadContactsLength() {
    this.store.select(contactsLength).pipe(take(1)).subscribe(res => this.contactsLength = res);
  }

  private editContact(contact: Contact) {
    this.store.dispatch(ContactsActions.editContact({ contact }));
  }

  private createContact(contact: Contact) {
    const newContact: Contact = {
      ...contact,
      id: this.contactId,
    }
    this.store.dispatch(ContactsActions.addContact({contact: newContact}));
  }
}
