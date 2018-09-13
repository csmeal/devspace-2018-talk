import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SessionService } from './services/sessions.service';
import { SessionsComponent, SessionComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SessionsComponent
      },
      {
        path: ':id',
        component: SessionComponent
      }
    ])
  ],
  declarations: [SessionsComponent, SessionComponent],
  providers: [SessionService]
})
export class SessionsPageModule {}
