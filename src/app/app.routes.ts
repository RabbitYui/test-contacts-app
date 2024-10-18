import { Routes } from '@angular/router';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactListComponent } from './contact-list/contact-list.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: '/contact-list',
    pathMatch: 'full'
  },
  {
    path: 'contact-profile/:id',
    component: ContactProfileComponent
  },
  {
    path: 'contact-profile',
    component: ContactProfileComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
];
