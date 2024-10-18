import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppComponent } from './app.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ContactListComponent,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: 'Please enter a valid email address' },
        { name: 'phone', message: 'Please enter a valid phone number' },
      ]
    }),
    ReactiveFormsModule,
    FormlyMaterialModule,
    ContactProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
