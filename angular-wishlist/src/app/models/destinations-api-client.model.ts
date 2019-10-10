import {Injectable} from '@angular/core';
import {DestinyTravel} from './destiny-travel.model';
import {Store} from '@ngrx/store';
import {AppState} from '../app.module';
import {NewDestinyAction, SelectedFavoriteAction} from './destinations-travel-state.model';

@Injectable()
export class DestinationsApiClient {

  constructor(private store: Store<AppState>) {
    this.store.select(state => state.destinations);
  }

  add(d: DestinyTravel) {
    this.store.dispatch(new NewDestinyAction((d)));
  }

  select(d: DestinyTravel) {
    this.store.dispatch(new SelectedFavoriteAction((d)));
  }
}
