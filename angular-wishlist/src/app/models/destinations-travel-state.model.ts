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
  VOTE_UP = '[Destinations Travel] Vote Up',
  VOTE_DOWN = '[Destinations Travel] Vote Down'
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

export class VoteUpAction implements Action {
  type = DestinationsTravelActionTypes.VOTE_UP;

  constructor(public destiny: DestinyTravel) {
  }
}

export class VoteDownAction implements Action {
  type = DestinationsTravelActionTypes.VOTE_DOWN;

  constructor(public destiny: DestinyTravel) {
  }
}

export type DestinationsTravelActions = NewDestinyAction | SelectedFavoriteAction | VoteUpAction | VoteDownAction ;

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
    case DestinationsTravelActionTypes.VOTE_UP: {
      (action as VoteUpAction).destiny.voteUp();
      return {...state};
    }
    case DestinationsTravelActionTypes.VOTE_DOWN: {
      (action as VoteDownAction).destiny.voteDown();
      return {...state};
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










