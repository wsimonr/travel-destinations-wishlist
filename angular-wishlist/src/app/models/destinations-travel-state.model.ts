import {Action} from '@ngrx/store';
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










