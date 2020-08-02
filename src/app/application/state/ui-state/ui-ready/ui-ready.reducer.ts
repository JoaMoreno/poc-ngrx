import { Action, createReducer, on } from '@ngrx/store';
import * as uiReadyActions from './ui-ready.actions';

export const uiReadyFeatureKey = 'uiReady';

export interface State {
    uiReady: boolean;
    pendingProcessCount: number;
}

export const initialState: State = {
    uiReady: true,
    pendingProcessCount: 0
};

export const reducer = createReducer(
    initialState,
    on(uiReadyActions.addPendingProcess, state => {
        return { ...state, pendingProcessCount: state.pendingProcessCount + 1, uiReady: false };
    }),
    on(uiReadyActions.removePendingProcess, state => {
        const pendingProcessCount = state.pendingProcessCount - 1;
        return { ...state, pendingProcessCount, uiReady: pendingProcessCount === 0 };
    })
);
