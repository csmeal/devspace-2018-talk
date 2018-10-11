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

  getUserPool() {
    const poolData = {
      UserPoolId: environment.userPoolId,
      ClientId: environment.clientId
    };

    return new CognitoUserPool(poolData);
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
