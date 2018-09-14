import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session, Speaker } from '../../../shared/models/session';
@Injectable({
  providedIn: 'root'
})
export class MockSpeakersService {
  private speakers: Array<Speaker> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.speakers.push({
        Id: i,
        DisplayName: 'This is the speakers name'
      });
    }
  }

  getSessions(): Observable<any> {
    return of(this.speakers);
  }

  getSession(): Observable<any> {
    return of(this.speakers[0]);
  }
}
