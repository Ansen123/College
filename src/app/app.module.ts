import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    NavbarComponent,
    SearchstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
