import { Component, OnInit } from '@angular/core';
import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = null;
  bakers = [];

  constructor(private cognito: CognitoService) {}
  ngOnInit() {
    this.bakers = [
      {
        name: 'Edd Kimber',
        rating: '?'
      },
      {
        name: 'Joanne Wheatley',
        rating: '?'
      },
      {
        name: 'John Whaite',
        rating: '?'
      },
      {
        name: 'Frances Quinn',
        rating: '?'
      }
    ];
  }

  login(user, pass) {
    this.user = this.cognito.authenticate(user, pass);
    console.log(this.user);
    this.getAll();
  }

  register(email, pass) {
    this.cognito.register(email, pass);
  }

  vote(bakerName, rating) {
    console.log(this.cognito.user);
    this.cognito.vote(bakerName, rating);
  }

  async getAll() {
    const results = await this.cognito.getAll();
    console.log('asll res', results);
  }
}
