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
  @Output() clicked: EventEmitter<DestinyTravel>;

  constructor() {
    this.clicked = new EventEmitter();
  }
  
  ngOnInit() {
  }

  go(){
    this.clicked.emit(this.destiny);
    return false;
  }

}
