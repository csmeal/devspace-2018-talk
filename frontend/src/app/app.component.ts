import { Component } from '@angular/core';
import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private cognito: CognitoService) {}

  login() {
    this.cognito.authenticate('csmeal16@gmail.com', 'Password123!@#');
  }

  register() {
    this.cognito.register({});
  }
}
