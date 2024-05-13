import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  sendContactData(data: any) {
    return this.http.post<any>('https://backend-tn8d.onrender.com/contact', data);
  }
}
