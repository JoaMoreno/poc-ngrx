import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromUsers from '../../users/user.reducer'

export const domainStateFeatureKey = 'appState';

export interface State {
[fromUsers.usersFeatureKey]:fromUsers.State
}

export const reducers: ActionReducerMap<State> = {
    [fromUsers.usersFeatureKey]:fromUsers.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
