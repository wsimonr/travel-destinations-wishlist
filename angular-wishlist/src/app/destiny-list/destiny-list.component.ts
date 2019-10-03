import { Component, OnInit } from '@angular/core';

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

}
