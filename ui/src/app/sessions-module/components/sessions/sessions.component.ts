import { Component, OnInit } from '@angular/core';
import { Session } from '../../../../shared/models/session';
import { SessionService } from '../../services/sessions.service';

@Component({
  selector: 'session-list',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public sessions: Array<Session> = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.getSessions().subscribe((data: Array<Session>) => {
      this.sessions = data;
    });
  }
}
