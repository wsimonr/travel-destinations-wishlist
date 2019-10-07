import { Injectable } from '@angular/core';
import { DestinyTravel } from './destiny-travel.model';

@Injectable()
export class DestinationsApiClient {

  destinations: DestinyTravel[] = [];

  constructor() { }

  add(d: DestinyTravel) {
    this.destinations.push(d);
  }

  getAll(): DestinyTravel[] {
    return this.destinations;
  }
}