import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'Welcome to the Learning Management System!';
  
  greet() {
    alert('Hello and welcome!');
  }
}
