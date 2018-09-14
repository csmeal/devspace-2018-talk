import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SpeakersService } from './services/speakers.service';
import { SpeakerDetailComponent, SpeakersListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpeakersListComponent
      },
      {
        path: ':id',
        component: SpeakerDetailComponent
      }
    ])
  ],
  declarations: [SpeakersListComponent, SpeakerDetailComponent],
  providers: [SpeakersService]
})
export class SpeakersPageModule {}
