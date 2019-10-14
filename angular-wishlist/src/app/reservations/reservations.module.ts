import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReservationsRoutingModule} from './reservations-routing.module';
import {ReservationsListComponent} from './reservations-list/reservations-list.component';
import {ReservationsDetailComponent} from './reservations-detail/reservations-detail.component';
import {ReservationsApiClientService} from './reservations-api-client.service';


@NgModule({
  declarations: [ReservationsListComponent, ReservationsDetailComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ],
  providers: [
    ReservationsApiClientService
  ]
})
export class ReservationsModule {
}
