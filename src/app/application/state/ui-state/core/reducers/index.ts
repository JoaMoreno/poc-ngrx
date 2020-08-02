import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromUiReady from '../../ui-ready/ui-ready.reducer';

export const uiStateFeatureKey = 'uiState';

export interface State {
    [fromUiReady.uiReadyFeatureKey] : fromUiReady.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromUiReady.uiReadyFeatureKey] : fromUiReady.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
