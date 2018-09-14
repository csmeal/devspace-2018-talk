import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Session } from '../../../../shared/models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SessionService } from '../../services';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  session$: Observable<Session>;

  constructor(
    private route: ActivatedRoute,
    private sessionServices: SessionService
  ) {}

  ngOnInit() {
    this.session$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.sessionServices.getSession(params.get('id'))
      )
    );
  }
}
