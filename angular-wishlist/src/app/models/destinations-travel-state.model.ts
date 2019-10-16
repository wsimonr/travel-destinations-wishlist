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
  VOTE_DOWN = '[Destinations Travel] Vote Down',
  INIT_MY_DATA = '[Destinations Travel] Init My Data'
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

export class InitMyDataAction implements Action {
  type = DestinationsTravelActionTypes.INIT_MY_DATA;
  constructor(public destiny: string[]) {}
}

export type DestinationsTravelActions = NewDestinyAction | SelectedFavoriteAction | VoteUpAction | VoteDownAction |
  InitMyDataAction;

// REDUCERS
export function reducerDestinationsTravel(
  state: DestinationsTravelState,
  action: DestinationsTravelActions
): DestinationsTravelState {
  switch (action.type) {
    case DestinationsTravelActionTypes.INIT_MY_DATA: {
      return {
        ...state,
        items: (action as InitMyDataAction).destiny.map((d) => new DestinyTravel(d, ''))
      };
    }
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










