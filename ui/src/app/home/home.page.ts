import { Component } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import { GooglePlus } from '@ionic-native/google-plus';

export class HomePage {
  constructor(private googlePlus: GooglePlus) {}
  public user: any;

  loginWithGoogle() {
    this.googlePlus
      .login({})
      .then(res => {
        this.user.loginAwsGoogle(res.idToken, res.displayName);
      })
      .catch(err => console.error(err));
  }

  loginAwsGoogle(idToken, username) {
    //this.cognito.makeGoogleCredentials(idToken, username);
  }
}
