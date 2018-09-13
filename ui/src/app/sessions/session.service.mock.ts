import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from './session';
@Injectable({
  providedIn: 'root'
})
export class MockSessionService {
  private sessions: Array<Session> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.sessions.push({
        Speaker: { Id: i, DisplayName: 'Speaker ' + i.toString() },
        Title: 'This is item #' + i,
        Id: i,
        Abstract: ' This is the very long abstract which contains more info.',
        Tags: []
      });
    }
  }

  getSessions(): Observable<any> {
    return of(this.sessions);
  }
}
