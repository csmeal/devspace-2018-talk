import { Inject, Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as AWS from 'aws-sdk/global';

@Injectable()
export class CognitoService {
  constructor(private http: HttpClient) {}
  jwt = '';

  user = null;

  getUserPool() {
    const poolData = {
      UserPoolId: environment.userPoolId,
      ClientId: environment.clientId
    };

    return new CognitoUserPool(poolData);
  }

  vote(bakerName, rating) {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.jwt);
    console.log(headers);
    this.http
      .post(
        environment.endpoint + '/vote',
        {
          userName: this.user,
          bakerName: bakerName,
          rating: rating
        },
        { headers: headers }
      )
      .toPromise()
      .then(s => console.log(s))
      .catch(e => console.log(e));
  }

  getAll() {
    return this.http.get(environment.endpoint + '/rating').toPromise();
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
        this.user = (result as any).idToken.payload;
        this.jwt = result.getIdToken().getJwtToken();
      },
      onFailure: err => alert(err)
    });
  }

  register(user, pass): void {
    console.log('UserRegistrationService: user is ' + user);

    this.getUserPool().signUp(user, pass, [], null, function(err, result) {
      if (err) {
        alert(err.message);
      } else {
        console.log('UserRegistrationService: registered user is ' + result);
        return result.user.getUsername();
      }
    });
  }
}
