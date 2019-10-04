import { Component, OnInit } from '@angular/core';
import {DestinyTravel} from './../models/destiny-travel.model';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {

  destinations: DestinyTravel[];
  
  constructor() {
    this.destinations = [];
  }

  ngOnInit() {
  }

  save(name: string, url: string): boolean {
    this.destinations.push(new DestinyTravel(name, url));
    return false;
  }

  selected(d: DestinyTravel){
    this.destinations.forEach(function(x){x.setSelected(false);});
    d.setSelected(true);
  }

}
