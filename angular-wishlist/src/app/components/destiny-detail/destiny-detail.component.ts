import { Component, OnInit } from '@angular/core';
import {DestinationsApiClient} from '../../models/destinations-api-client.model';

@Component({
  selector: 'app-destiny-detail',
  templateUrl: './destiny-detail.component.html',
  styleUrls: ['./destiny-detail.component.css'],
  providers: [DestinationsApiClient]
})
export class DestinyDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
