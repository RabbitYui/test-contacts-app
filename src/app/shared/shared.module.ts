import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';


@NgModule({
  declarations: [ContactCardComponent],
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatIcon,
    MatDivider,
    MatIconButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatCardTitle
  ],
  exports: [
    ContactCardComponent,
    CommonModule
  ]
})
export class SharedModule {
}
