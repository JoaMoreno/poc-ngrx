import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';
import * as fromApp from '../core/reducers/index';
import * as fromUserApp from './user.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(fromApp.appStateFeatureKey);

export const selectState = createSelector(
    selectAppState, state => state.users
);

export const selectIds = createSelector(
    selectState,
    fromUserApp.selectIds // shorthand for userState => fromUserApp.selectIds(publicacionState)
);
export const selectEntities = createSelector(
    selectState,
    fromUserApp.selectEntities
);
export const selectAll = createSelector(
    selectState,
    fromUserApp.selectAll
);
export const selectTotal = createSelector(
    selectState,
    fromUserApp.selectTotal
);

export const gettAll = createSelector(
    selectAll,
    (users) => {
        const allUsers = Object.values(users);
        return allUsers;
    }
);
