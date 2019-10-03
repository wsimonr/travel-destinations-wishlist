import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinyTravel } from '../models/destiny-travel.model';

@Component({
  selector: 'app-destiny-travel',
  templateUrl: './destiny-travel.component.html',
  styleUrls: ['./destiny-travel.component.css']
})
export class DestinyTravelComponent implements OnInit {

  @Input() destiny: DestinyTravel;
  @HostBinding('attr.class') cssClass = "col-md-4";

  constructor() {}
  
  ngOnInit() {
  }

}
