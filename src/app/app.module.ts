import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppComponent } from './app.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CustomValidators } from './utils/custom-validators';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { contactsReducer } from './storage/contacts.reducer';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ContactListComponent,
    FormlyModule.forRoot({
      validators: [
        { name: 'required', validation: Validators.required },
        { name: 'email', validation: Validators.email },
        { name: 'phone', validation: CustomValidators.phoneValidator }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: 'Please enter a valid email address' },
        { name: 'phone', message: 'Please enter a valid phone number' },
      ]
    }),
    StoreModule.forRoot({contacts: contactsReducer}),
    ReactiveFormsModule,
    FormlyMaterialModule,
    ContactProfileComponent
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
