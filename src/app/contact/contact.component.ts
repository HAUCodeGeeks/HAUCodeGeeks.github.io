import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const url = 'https://docs.google.com/forms/u/5/d/e/1FAIpQLSdRjGgfNVyb-xQSGUyy0DcTY1FXWyrHyVhLdzJJqhRDgUpHjA/formResponse';
    
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    body.append('entry.2005620554', this.formData.fullname);
    body.append('entry.1045781291', this.formData.email);
    body.append('entry.300625256', this.formData.subject);
    body.append('entry.1219774711', this.formData.message);

    this.http.post(url, body.toString(), { headers }).subscribe(
      () => {
        console.log('Your message has been sent successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error submitting form:', error);
        console.log('Error submitting form. Please try again later.');
      }
    );
  }

  resetForm() {
    this.formData = {
      fullname: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
