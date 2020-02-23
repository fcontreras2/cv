import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth/auth.reducer';

export interface State {

  [fromAuth.authsFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromAuth.authsFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
