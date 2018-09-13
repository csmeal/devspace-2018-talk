import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  apiRoute = 'https://s3.amazonaws.com/devspace-2018-data/session.json';
  constructor(private http: HttpClient) {}

  getSessions(): Observable<any> {
    return this.http.get(this.apiRoute);
  }
}
