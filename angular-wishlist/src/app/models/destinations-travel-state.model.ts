import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DestinyTravel} from './destiny-travel.model';

// STATE
export interface DestinationsTravelState {
  items: DestinyTravel[];
  loading: boolean;
  favorite: DestinyTravel;
}

export const initializeDestinationsTravelState = () => ({
  items: [],
  loading: false,
  favorite: null
});

// ACTIONS
export enum DestinationsTravelActionTypes {
  NEW_DESTINY = '[Destinations Travel] New',
  FAVORITE_SELECTED = '[Destinations Travel] Favorite',
}

export class NewDestinyAction implements Action {
  type = DestinationsTravelActionTypes.NEW_DESTINY;

  constructor(public destiny: DestinyTravel) {
  }
}

export class SelectedFavoriteAction implements Action {
  type = DestinationsTravelActionTypes.FAVORITE_SELECTED;

  constructor(public destiny: DestinyTravel) {
  }
}

export type DestinationsTravelActions = NewDestinyAction | SelectedFavoriteAction;

// REDUCERS
export function reducerDestinationsTravel(
  state: DestinationsTravelState,
  action: DestinationsTravelActions
): DestinationsTravelState {
  switch (action.type) {
    case DestinationsTravelActionTypes.NEW_DESTINY: {
      return {
        ...state,
        items: [...state.items, (action as NewDestinyAction).destiny]
      };
    }
    case DestinationsTravelActionTypes.FAVORITE_SELECTED: {
      state.items.forEach(x => x.setSelected(false));
      const fav: DestinyTravel = (action as SelectedFavoriteAction).destiny;
      fav.setSelected(true);
      return {
        ...state,
        favorite: fav
      };
    }
  }
  return state;
}

// EFFECTS
@Injectable()
export class DestinationsTravelEffects {
  @Effect()
  newAdded$: Observable<Action> = this.actions$.pipe(
    ofType(DestinationsTravelActionTypes.NEW_DESTINY),
    map((action: NewDestinyAction) => new SelectedFavoriteAction(action.destiny))
  );

  constructor(private actions$: Actions) {
  }
}










