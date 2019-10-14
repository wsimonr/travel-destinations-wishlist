import { Component, OnInit } from '@angular/core';
import {ReservationsApiClientService} from '../reservations-api-client.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  constructor(private  api: ReservationsApiClientService) { }

  ngOnInit() {
  }

}
