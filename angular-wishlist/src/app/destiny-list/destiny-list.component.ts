import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinyTravel} from '../models/destiny-travel.model';
import {DestinationsApiClient} from '../models/destinations-api-client.model';
import {Store} from '@ngrx/store';
import {AppState} from '../app.module';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinyTravel>;
  updates: string[];

  constructor(private destinationsAPIClient: DestinationsApiClient, private store: Store<AppState>) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinations.favorite)
      .subscribe(d => {
        if (d != null) {
          this.updates.push(d.name + ' has been chosen.');
        }
      });
  }

  ngOnInit() {
  }

  added(d: DestinyTravel) {
    this.destinationsAPIClient.add(d);
    this.onItemAdded.emit(d);
  }

  selected(e: DestinyTravel) {
    this.destinationsAPIClient.select(e);
  }

}
