import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { ApplicationModule } from '../application/application.module';

@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationModule
  ],
  providers: [],
  bootstrap: [UiComponent]
})
export class AppModule { }
