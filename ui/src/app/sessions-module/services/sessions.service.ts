import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  apiRoute = 'https://s3.amazonaws.com/devspace-2018-data/session.json';
  constructor(private http: HttpClient) {}

  getSessions(): Observable<Session[]> {
    return this.http.get(this.apiRoute) as Observable<Session[]>;
  }

  getSession(id: number | string): Observable<any> {
    return this.http
      .get(this.apiRoute)
      .pipe(
        map((sessions: Session[]) =>
          sessions.find(session => session.Id.toString() === id.toString())
        )
      );
  }
}
