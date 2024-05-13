import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: any = {};

  constructor(private contactService: ContactService) { }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior
    this.contactService.sendContactData(this.formData).subscribe(
      response => {
        console.log('Data sent successfully:', response);
        // Reset form after successful submission if needed
        this.formData = {};
      },
      error => {
        console.error('Error while sending data:', error);
      }
    );
  }
}