import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input() contact: Contact | undefined;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();

  get name() {
    const lastName = this.contact?.lastName ? ` ${this.contact?.lastName}` : '';
    return this.contact?.firstName + lastName;
  }
}
