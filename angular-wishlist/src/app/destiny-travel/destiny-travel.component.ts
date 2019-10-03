import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destiny-travel',
  templateUrl: './destiny-travel.component.html',
  styleUrls: ['./destiny-travel.component.css']
})
export class DestinyTravelComponent implements OnInit {

  @Input() name: string; 
  constructor() {}

  ngOnInit() {
  }

}
