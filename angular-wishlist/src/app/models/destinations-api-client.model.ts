import { Injectable } from '@angular/core';
import { DestinyTravel } from './destiny-travel.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class DestinationsApiClient {

  destinations: DestinyTravel[] = [];
  currrent: Subject<DestinyTravel> = new BehaviorSubject<DestinyTravel>(null);

  constructor() {
    this.destinations = [];
  }

  add(d: DestinyTravel) {
    this.destinations.push(d);
  }

  getAll(): DestinyTravel[] {
    return this.destinations;
  }

  select(d: DestinyTravel) {
    this.destinations.forEach(x => x.setSelected(false));
    d.setSelected(true);
    this.currrent.next(d);
  }

  suscribeOnChange(fn) {
    this.currrent.subscribe(fn);
  }

}