import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, concat } from 'rxjs';
import { map, mergeMap, catchError, concatMap, switchMap, delay } from 'rxjs/operators';
import { UsersService } from 'src/app/infrastructure/services/users.service';
import * as actions from './user.actions'
import * as UiReadyActions from '../../ui-state/ui-ready/ui-ready.actions'
import { Store } from '@ngrx/store';



@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store$: Store
  ) { }

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadUsers),
      /**
       * mergeMap 
       * concatMap
       * switchMap
       */
      switchMap(
        () => {
          this.store$.dispatch(UiReadyActions.addPendingProcess())
          return this.usersService.getUsers().pipe(
            delay(2000),
            map((users) => {
              this.store$.dispatch(UiReadyActions.removePendingProcess());
              return actions.loadUsersSuccess({users:users})
            })
          )
        }
      )
    )
  }
  );

}