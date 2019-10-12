import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';


@NgModule({
  declarations: [ReservationsListComponent, ReservationsDetailComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
