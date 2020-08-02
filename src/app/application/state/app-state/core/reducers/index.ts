import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromUsersApp from '../../users/user.reducer'

export const appStateFeatureKey = 'appState';

export interface State {
    [fromUsersApp.usersFeatureKey]: fromUsersApp.State
}

export const reducers: ActionReducerMap<State> = {
    [fromUsersApp.usersFeatureKey]: fromUsersApp.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
