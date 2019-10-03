import { Component, OnInit } from '@angular/core';
import {DestinyTravel} from './../models/destiny-travel.model';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {

  destinations: string[];
  
  constructor() {
    this.destinations = ['Barranquilla', 'Lima', 'Buenos Aires', 'Barcelona'];
  }

  ngOnInit() {
  }

  save(name: string, url: string): boolean {
    console.log(new DestinyTravel(name, url));
    return false;
  }

}
