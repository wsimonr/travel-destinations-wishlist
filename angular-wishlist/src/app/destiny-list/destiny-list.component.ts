import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinyTravel } from './../models/destiny-travel.model';
import { DestinationsApiClient } from '../models/destinations-api-client.model';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinyTravel>;
  updates: string[];

  constructor(private destinationsAPIClient: DestinationsApiClient) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinationsAPIClient.suscribeOnChange((d: DestinyTravel) => {
      if (d != null) {
        this.updates.push(d.name + ' has been chosen.' )
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
