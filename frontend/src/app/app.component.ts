import { Component, OnInit } from '@angular/core';
import { CognitoService } from './cognito.service';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = null;
  bakers = [];

  constructor(public cognito: CognitoService) {}
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
    this.getAll();
  }

  async getAll() {
    const results = (await this.cognito.getAll()) as any;
    console.log('asll res', results.results);
    results.results.forEach(element => {
      console.log('el', element);
      const baker = element.baker;
      const average = element.average;
      console.log(baker);
      const found = this.bakers.find(dude => {
        return dude.name === baker;
      });
      const index = this.bakers.indexOf(found);
      if (index >= 0) {
        this.bakers[index].rating = average;
      }
    });
  }
}
