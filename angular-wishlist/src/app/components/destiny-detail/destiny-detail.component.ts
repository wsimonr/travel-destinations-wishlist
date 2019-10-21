import { Component, OnInit } from '@angular/core';
import {DestinationsApiClient} from '../../models/destinations-api-client.model';
import {ActivatedRoute} from '@angular/router';
import {DestinyTravel} from '../../models/destiny-travel.model';

@Component({
  selector: 'app-destiny-detail',
  templateUrl: './destiny-detail.component.html',
  styleUrls: ['./destiny-detail.component.css'],
  providers: [DestinationsApiClient]
})
export class DestinyDetailComponent implements OnInit {
  destination = DestinyTravel;
  style = {
    sources: {
      world: {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
      }
    },
    version: 8,
    layers: [{
      id: 'countries',
      type: 'fill',
      source: 'world',
      layout: {},
      paint: {
        'fill-color': '#6F788A'
      }
    }]
  };

  constructor(private route: ActivatedRoute, private destinationsApiClient: DestinationsApiClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.destination = this.destinationsApiClient.getById(id);
  }

}
