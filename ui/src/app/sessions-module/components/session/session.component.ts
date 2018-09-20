import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Session } from '../../../../shared/models';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SessionService } from '../../services';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  session$: Observable<Session>;
  rating: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionServices: SessionService,
    private toastController: ToastController
  ) {}

  async onRatingClick(rating) {
    this.rating = rating;
    const toast = await this.toastController.create({
      duration: 3000,
      message: 'Thank you for voting!',
      position: 'bottom'
    });
    toast.present();
  }

  navigateToSpeaker(id) {
    this.router.navigateByUrl('/speakers/' + id.toString());
  }

  ngOnInit() {
    this.session$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.sessionServices.getSession(params.get('id'))
      )
    );
  }
}
