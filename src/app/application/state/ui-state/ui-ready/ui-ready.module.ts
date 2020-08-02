import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUiReady from './ui-ready.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUiReady.uiReadyFeatureKey, fromUiReady.reducer)
  ]
})
export class UiReadyModule { }
