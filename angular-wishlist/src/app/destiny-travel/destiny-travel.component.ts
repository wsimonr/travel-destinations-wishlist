import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinyTravel } from '../models/destiny-travel.model';

@Component({
  selector: 'app-destiny-travel',
  templateUrl: './destiny-travel.component.html',
  styleUrls: ['./destiny-travel.component.css']
})
export class DestinyTravelComponent implements OnInit {
  @Input() destiny: DestinyTravel;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass = "col-md-4";
  @Output() onClicked: EventEmitter<DestinyTravel>;

  constructor() {
    this.onClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  go() {
    this.onClicked.emit(this.destiny);
    return false;
  }

}
