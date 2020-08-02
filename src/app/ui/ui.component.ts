import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// ACTIONS
import * as fromUsersActions from 'src/app/application/state/domain-state/users/user.actions'
// SELECTOR
import * as UiReadySelectors from 'src/app/application/state/ui-state/ui-ready/ui-ready.selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  title = 'poc-ngrx';
  isLoading$: boolean

  constructor(private store$: Store) { }

  ngOnInit() {
    this.loadUsers()
    this.store$.select(UiReadySelectors.selectIsUiReady).subscribe(
      (data) => this.isLoading$ = data
    )
  }

  loadUsers() {
    this.store$.dispatch(fromUsersActions.loadUsers())
  }
}
