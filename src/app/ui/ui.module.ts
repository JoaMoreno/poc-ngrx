import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { ApplicationModule } from '../application/application.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [UiComponent]
})
export class AppModule { }
