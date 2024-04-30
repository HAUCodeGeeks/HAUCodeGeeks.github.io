import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
