import { Component, OnInit } from '@angular/core';
import {DestinationsApiClient} from '../../models/destinations-api-client.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-destiny-detail',
  templateUrl: './destiny-detail.component.html',
  styleUrls: ['./destiny-detail.component.css'],
  providers: [DestinationsApiClient]
})
export class DestinyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private destinationsApiClient: DestinationsApiClient) { }

  ngOnInit() {
  }

}
