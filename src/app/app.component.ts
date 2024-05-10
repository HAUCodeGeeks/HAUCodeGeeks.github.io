import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'haucodegeeks';
  isNavbarCollapsed = true;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }
}
