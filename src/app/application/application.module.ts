import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './state/core/reducers';
import { DomainStateModule } from './state/domain-state/domain-state.module';
import { AppStateModule } from './state/app-state/app-state.module';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './state/core/effects/main.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DomainStateModule,
    AppStateModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
      }
  }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MainEffects])
  ]
})
export class ApplicationModule { }
