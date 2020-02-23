import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Auth } from './auth.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

export const authsFeatureKey = 'auths';

export interface State extends EntityState<Auth> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Auth> = createEntityAdapter<Auth>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: AuthActions
): State {
  switch (action.type) {
    case AuthActionTypes.AddAuth: {
      return adapter.addOne(action.payload.auth, state);
    }

    case AuthActionTypes.UpsertAuth: {
      return adapter.upsertOne(action.payload.auth, state);
    }

    case AuthActionTypes.AddAuths: {
      return adapter.addMany(action.payload.auths, state);
    }

    case AuthActionTypes.UpsertAuths: {
      return adapter.upsertMany(action.payload.auths, state);
    }

    case AuthActionTypes.UpdateAuth: {
      return adapter.updateOne(action.payload.auth, state);
    }

    case AuthActionTypes.UpdateAuths: {
      return adapter.updateMany(action.payload.auths, state);
    }

    case AuthActionTypes.DeleteAuth: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AuthActionTypes.DeleteAuths: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AuthActionTypes.LoadAuths: {
      return adapter.addAll(action.payload.auths, state);
    }

    case AuthActionTypes.ClearAuths: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
