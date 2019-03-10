import { Component } from '@angular/core';

declare const require: any

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Odal Tree!';
}
