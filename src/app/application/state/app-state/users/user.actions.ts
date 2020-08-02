import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from './user.model';

export const loadUsers = createAction(
  '[UserApp/API] Load Users', 
  props<{ users: User[] }>()
);

export const addUser = createAction(
  '[UserApp/API] Add User',
  props<{ user: User }>()
);

export const upsertUser = createAction(
  '[UserApp/API] Upsert User',
  props<{ user: User }>()
);

export const addUsers = createAction(
  '[UserApp/API] Add Users',
  props<{ users: User[] }>()
);

export const upsertUsers = createAction(
  '[UserApp/API] Upsert Users',
  props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[UserApp/API] Update User',
  props<{ user: Update<User> }>()
);

export const updateUsers = createAction(
  '[UserApp/API] Update Users',
  props<{ users: Update<User>[] }>()
);

export const deleteUser = createAction(
  '[UserApp/API] Delete User',
  props<{ id: string }>()
);

export const deleteUsers = createAction(
  '[UserApp/API] Delete Users',
  props<{ ids: string[] }>()
);

export const clearUsers = createAction(
  '[UserApp/API] Clear Users'
);
