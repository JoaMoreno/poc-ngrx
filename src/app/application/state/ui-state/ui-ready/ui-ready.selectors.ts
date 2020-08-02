import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUIState from '../core/reducers/index';

export const selectUiReadyState = createFeatureSelector<fromUIState.State>(fromUIState.uiStateFeatureKey);
export const selectIsUiReady = createSelector(selectUiReadyState, state => state.uiReady.uiReady);
