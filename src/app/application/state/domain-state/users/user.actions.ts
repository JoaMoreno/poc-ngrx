import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from './user.model';

export const loadUsers = createAction(
  '[UserDomain/API] Load Users'
);
export const loadUsersSuccess = createAction('[UserDomain/API] Load Users Success', props<{ users: User[] }>());
export const addUser = createAction(
  '[UserDomain/API] Add User',
  props<{ user: User }>()
);

export const upsertUser = createAction(
  '[UserDomain/API] Upsert User',
  props<{ user: User }>()
);

export const addUsers = createAction(
  '[UserDomain/API] Add Users',
  props<{ users: User[] }>()
);

export const upsertUsers = createAction(
  '[UserDomain/API] Upsert Users',
  props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[UserDomain/API] Update User',
  props<{ user: Update<User> }>()
);

export const updateUsers = createAction(
  '[UserDomain/API] Update Users',
  props<{ users: Update<User>[] }>()
);

export const deleteUser = createAction(
  '[UserDomain/API] Delete User',
  props<{ id: string }>()
);

export const deleteUsers = createAction(
  '[UserDomain/API] Delete Users',
  props<{ ids: string[] }>()
);

export const clearUsers = createAction(
  '[UserDomain/API] Clear Users'
);
