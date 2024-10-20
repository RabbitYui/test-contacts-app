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

  get iconColor(): string {
      return `rgb(${this.generateInt(0, 255)}, ${this.generateInt(0, 255)}, ${this.generateInt(0, 255)})`;
  }

  generateInt(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
