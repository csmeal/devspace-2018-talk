import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CognitoService } from './cognito.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [CognitoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
