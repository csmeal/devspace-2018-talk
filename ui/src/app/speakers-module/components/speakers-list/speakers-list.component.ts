import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../../../shared/models';
import { SpeakersService } from '../../services/speakers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit {
  public speakers$: Observable<Speaker[]>;

  constructor(private speakerService: SpeakersService) {}

  ngOnInit() {
    this.speakers$ = this.speakerService.getSpeakers();
  }
}
