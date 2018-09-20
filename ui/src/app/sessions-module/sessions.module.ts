import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SessionService } from './services/sessions.service';
import { SessionsComponent, SessionComponent } from './components';
import { ToastController } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

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
  providers: [SessionService, ToastController],
  bootstrap: []
})
export class SessionsPageModule {}
