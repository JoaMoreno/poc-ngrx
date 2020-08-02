import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, concat } from 'rxjs';
import { map, mergeMap, catchError, concatMap, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/infrastructure/services/users.service';
import * as actions from './user.actions'
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
          return this.usersService.getUsers().pipe(
            map((users) => {
              return actions.loadUsersSuccess({users:users})
            })
          )
        }
      )
    )
  }
  );

}