import {Injectable} from '@angular/core';
import {DestinyTravel} from './destiny-travel.model';
import {Store} from '@ngrx/store';
import {AppState} from '../app.module';
import {NewDestinyAction, SelectedFavoriteAction} from './destinations-travel-state.model';

@Injectable()
export class DestinationsApiClient {
  destinations: DestinyTravel[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(state => state.destinations)
      .subscribe(d => {
        this.destinations = d.items;
      });
  }

  add(d: DestinyTravel) {
    this.store.dispatch(new NewDestinyAction((d)));
  }

  getAll(): DestinyTravel[] {
    return this.destinations;
  }

  select(d: DestinyTravel) {
    this.store.dispatch(new SelectedFavoriteAction((d)));
  }
}
