import { Inject, Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js';
import { environment } from '../environments/environment';

import * as AWS from 'aws-sdk/global';

@Injectable()
export class CognitoService {
  constructor() {}
  jwt = '';
  getUserPool() {
    const poolData = {
      UserPoolId: environment.userPoolId,
      ClientId: environment.clientId
    };

    return new CognitoUserPool(poolData);
  }

  authenticate(username: string, password: string) {
    console.log('UserLoginService: starting the authentication');

    const authenticationData = {
      Username: username,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: username,
      Pool: this.getUserPool()
    };

    console.log('UserLoginService: Params set...Authenticating the user');
    const cognitoUser = new CognitoUser(userData);
    console.log('UserLoginService: config is ' + AWS.config);
    cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: (userAttributes, requiredAttributes) =>
        console.log('CHange your password'),
      onSuccess: result => {
        console.log('Success: ', result);
        this.jwt = result.getIdToken().getJwtToken();
      },
      onFailure: err => console.log(err)
    });
  }

  register(user: any): void {
    console.log('UserRegistrationService: user is ' + user);

    this.getUserPool().signUp(
      'csmeal16@gmail.com',
      'Password123!@#',
      [],
      null,
      function(err, result) {
        if (err) {
          console.log(err.message);
        } else {
          console.log('UserRegistrationService: registered user is ' + result);
        }
      }
    );
  }
}
