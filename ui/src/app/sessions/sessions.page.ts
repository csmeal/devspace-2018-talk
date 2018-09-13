import { Component, OnInit } from '@angular/core';
import { Session } from './session';
import { SessionService } from './session.service';

@Component({
  selector: 'app-list',
  templateUrl: 'sessions.page.html',
  styleUrls: ['sessions.page.scss']
})
export class SessionsPage implements OnInit {
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
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.getSessions().subscribe((data: Array<Session>) => {
      this.sessions = data;
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
