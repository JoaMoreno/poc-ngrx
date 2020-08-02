import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
//MODULOS
import { UsersModule } from './users/users.module';
// NGRX
import * as fromDomainState from './core/reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    StoreModule.forFeature(fromDomainState.domainStateFeatureKey, fromDomainState.reducers, {
      metaReducers: fromDomainState.metaReducers
  })
  ]
})
export class DomainStateModule { }
