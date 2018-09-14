import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Speaker, Session } from '../../../../shared/models';
import { SpeakersService } from '../../services/speakers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {
  public speaker$: Observable<Speaker>;
  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakersService
  ) {}

  ngOnInit() {
    this.speaker$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.speakerService.getSpeaker(params.get('id'))
      )
    );
  }
}
