import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    fullname: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:3000/submit', this.formData).subscribe(
      response => {
        console.log('Form submitted successfully:', response);
        // Reset form after submission
        this.formData = {
          fullname: '',
          email: '',
          subject: '',
          message: ''
        };
      },
      error => {
        console.error('Failed to submit form:', error);
      }
    );
  }
}