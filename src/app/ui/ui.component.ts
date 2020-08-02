import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// ACTIONS
import * as fromUsersActions from 'src/app/application/state/domain-state/users/user.actions'

@Component({
  selector: 'app-root',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {
  title = 'poc-ngrx';

  constructor(private store$:Store){}

  loadUsers(){
    this.store$.dispatch(fromUsersActions.loadUsers())
  }
}
