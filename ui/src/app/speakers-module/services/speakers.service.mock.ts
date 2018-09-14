import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session, Speaker } from '../../../shared/models/';
@Injectable({
  providedIn: 'root'
})
export class MockSpeakersService {
  private speakers: Array<Speaker> = [];
  private sessions: Array<Session> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.speakers.push({
        Id: i,
        DisplayName: 'This is the speakers name',
        Twitter: 'someTwitter',
        Website: 'wahtever',
        Sessions: [{ Id: i, Title: 'tsets' }],
        Bio: 'This is really long, but lwkefjsdlkfjsdlkfj'
      });
    }
  }

  getSessions(): Observable<any> {
    return of(this.speakers);
  }

  getSessionsBySpeaker(id: number | string): Observable<any> {
    return of(this.speakers[0]);
  }
}
