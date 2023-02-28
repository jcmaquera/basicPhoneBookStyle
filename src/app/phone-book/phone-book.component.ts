import { Component } from '@angular/core';
import { PhoneBook } from '../interfaces/phoneBook';
import { PHONEBOOKS } from '../mock-data/mock-phone-book';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent {
  phonebooks = PHONEBOOKS;
  newContactName = '';
  newContactNumber = '';
  updateContactDetails?: PhoneBook;

  addPhoneBook() {
    this.phonebooks.push({
      name: this.newContactName,
      number: this.newContactNumber
    })
  }

  deletePhoneBook(id: number) {
      this.phonebooks.splice(id, 1);
  }

  updatePhoneBook(phone: PhoneBook){
    this.updateContactDetails = phone;
  }
}
