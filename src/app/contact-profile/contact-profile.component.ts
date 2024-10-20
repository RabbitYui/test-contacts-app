import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
export class ContactProfileComponent {
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
      validators: { validation: ['required', 'email'] }
    }
  ];
  contactId: number | null = null;
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.pipe(take(1))
      .subscribe(p => {this.contactId = p['id']})
  }

  onSubmit(model: any): void {
    console.log(model);
  }
}
