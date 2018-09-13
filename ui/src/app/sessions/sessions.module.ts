import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SessionService } from './session.service';
import { SessionsPage } from './sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SessionsPage
      }
    ])
  ],
  declarations: [SessionsPage],
  providers: [SessionService]
})
export class SessionsPageModule {}
