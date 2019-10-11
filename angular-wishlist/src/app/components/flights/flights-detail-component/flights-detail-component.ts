import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-flights-detail-component',
  templateUrl: './flights-detail-component.html',
  styleUrls: ['./flights-detail-component.css']
})
export class FlightsDetailComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params.id; });
  }

  ngOnInit() {
  }

}
