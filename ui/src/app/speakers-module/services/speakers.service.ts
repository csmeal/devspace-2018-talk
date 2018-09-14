import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session, Speaker } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  apiRoute = 'https://s3.amazonaws.com/devspace-2018-data/speakers.json';
  constructor(private http: HttpClient) {}

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get(this.apiRoute) as Observable<Speaker[]>;
  }

  getSpeaker(id: number | string): Observable<Speaker> {
    return this.http
      .get(this.apiRoute)
      .pipe(
        map((speakers: Speaker[]) =>
          speakers.find(speaker => speaker.Id.toString() === id.toString())
        )
      );
  }
}
