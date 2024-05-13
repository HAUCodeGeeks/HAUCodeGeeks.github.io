import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  readonly APIUrl = "https://backend-tn8d.onrender.com/contact"; // Update with your backend URL
  isFormComplete: boolean = false;
  isEmailValid: boolean = true;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if all required fields are filled out and email is valid
    if (this.isFormComplete && this.isEmailValid) {
      this.http.post<any>(this.APIUrl, this.formData).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          // Display pop-up notification for successful submission
          this.showNotification('Your message has been sent successfully!');
          // Reset form after successful submission
          this.resetForm();
        },
        error => {
          console.error('Failed to submit form:', error);
          // Display error message to the user
          this.showNotification('An error occurred while sending your message. Please try again later.');
        }
      );
    } else {
      // Display error message if form is not complete or email is invalid
      let errorMessage = this.isEmailValid ? 'Please fill out all required fields.' : 'Please provide a valid email address.';
      this.showNotification(errorMessage);
    }

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

  showNotification(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration of the notification in milliseconds
    });
  }

  checkFormCompletion() {
    // Check if all required fields are filled out
    this.isFormComplete = Object.values(this.formData).every(value => !!value);
  }

  checkEmailValidity() {
    // Check if email contains "@" symbol
    this.isEmailValid = this.formData.email.includes('@');
  }
}
