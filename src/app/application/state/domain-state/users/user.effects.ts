import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, concat, from } from 'rxjs';
import { map, mergeMap, catchError, concatMap, switchMap, delay, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/infrastructure/services/users.service';
import * as userDomainActions from './user.actions'
import * as userAppActions from '../../app-state/users/user.actions'
import * as UiReadyActions from '../../ui-state/ui-ready/ui-ready.actions'
import { Store } from '@ngrx/store';



@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store$: Store
  ) { }

  // loadUsers$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(userDomainActions.loadUsers),
  //     /**
  //      * mergeMap 
  //      * concatMap
  //      * switchMap
  //      */
  //     switchMap(
  //       () => {
  //         this.store$.dispatch(UiReadyActions.addPendingProcess())
  //         return this.usersService.getUsers().pipe(
  //           delay(2000),
  //           map((users) => {
  //             this.store$.dispatch(UiReadyActions.removePendingProcess());
  //             return userDomainActions.loadUsersSuccess({users:users})
  //           })
  //         )
  //       }
  //     )
  //   )
  // }
  // );

  loadUsersIntoAppState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userDomainActions.loadUsers),
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
            tap((users)=>{
              from(users).pipe(
                tap(({id,name})=>{
                  this.store$.dispatch(userAppActions.addUser({user: {id:id,name:name,isSelected:false}}))
                })
              ).subscribe(
                ()=>console.log('New Subscription'),
                (err)=>console.log(err),
                ()=>console.log('Complete')
              )
            }),
            map((users) => {
              this.store$.dispatch(UiReadyActions.removePendingProcess());
              return userDomainActions.loadUsersSuccess({users:users})
            })
          )
        }
      )
    )
  }
  );

}