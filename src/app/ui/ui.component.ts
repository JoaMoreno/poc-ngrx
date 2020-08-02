import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// ACTIONS
import * as usersDomainActions from 'src/app/application/state/domain-state/users/user.actions'
import * as usersAppActions from 'src/app/application/state/app-state/users/user.actions'
// SELECTOR
import * as fromUiReady from 'src/app/application/state/ui-state/ui-ready/ui-ready.selectors'
import * as fromUserApp from 'src/app/application/state/app-state/users/user.selector'
// MODELS
import { User } from '../application/state/app-state/users/user.model';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-root',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  title = 'poc-ngrx';
  isLoading$: boolean
  usersApp$: Observable<User[]>

  constructor(private store$: Store) { }

  ngOnInit() {
    this.loadUsers()
    this.store$.select(fromUiReady.selectIsUiReady).subscribe(
      (data) => this.isLoading$ = data
    )
    this.usersApp$ = this.store$.select(fromUserApp.gettAll)
  }

  loadUsers() {
    this.store$.dispatch(usersDomainActions.loadUsers())
  }

  selectUser(user){
    const update: Update<User> = {
      id: user.id,
      changes: {isSelected: !user.isSelected}
    }
    this.store$.dispatch(usersAppActions.updateUser({user: update}))
  }
}
