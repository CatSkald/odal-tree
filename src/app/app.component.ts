import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Odal Tree!';

  constructor(private router: Router) { }

  openNewTree(): void {
    this.router.navigate(['/tree']);
  }
}
