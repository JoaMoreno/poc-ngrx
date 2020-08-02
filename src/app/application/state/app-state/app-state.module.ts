import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//MODULOS
import { UsersModule } from './users/users.module';
// NGRX
import * as fromAppState from './core/reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    StoreModule.forFeature(fromAppState.appStateFeatureKey, fromAppState.reducers, {
      metaReducers: fromAppState.metaReducers
  })
  ]
})
export class AppStateModule { }
