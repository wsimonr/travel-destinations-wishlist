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

  constructor(private destinationsAPIClient: DestinationsApiClient) {

    this.onItemAdded = new EventEmitter();
  }

  ngOnInit() {
  }

  added(d: DestinyTravel) {
    this.destinationsAPIClient.add(d);
    this.onItemAdded.emit(d);
  }

  selected(e: DestinyTravel) {
    this.destinationsAPIClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }

}
