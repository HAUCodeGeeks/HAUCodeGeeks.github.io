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
  submissionMessage: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('https://backend-tn8d.onrender.com/contract', this.formData).subscribe(
      response => {
        console.log('Form submitted successfully:', response);
        // Display submission message
        this.submissionMessage = 'Your message has been sent successfully!';
        // Reset form after successful submission
        this.formData = {
          fullname: '',
          email: '',
          subject: '',
          message: ''
        };
      },
      error => {
        console.error('Failed to submit form:', error);
        // Display error message to the user
        this.submissionMessage = 'An error occurred while sending your message. Please try again later.';
      }
    );
  }
}
