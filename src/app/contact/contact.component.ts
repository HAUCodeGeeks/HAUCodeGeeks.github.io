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
  readonly APIUrl = "https://backend-tn8d.onrender.com"; // Update with your backend URL

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    this.http.post<any>(this.APIUrl, this.formData).subscribe(
      response => {
        console.log('Form submitted successfully:', response);
        // Display submission message
        this.submissionMessage = 'Your message has been sent successfully!';
        // Reset form after successful submission
        this.resetForm();
      },
      error => {
        console.error('Failed to submit form:', error);
        // Display error message to the user
        this.submissionMessage = 'An error occurred while sending your message. Please try again later.';
      }
    );

    return false; // Ensure further default behavior is prevented
  }

  resetForm() {
    // Reset form fields
    this.formData = {
      fullname: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
