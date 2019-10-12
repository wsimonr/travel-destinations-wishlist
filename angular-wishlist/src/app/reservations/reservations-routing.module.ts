import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationsListComponent} from './reservations-list/reservations-list.component';
import {ReservationsDetailComponent} from './reservations-detail/reservations-detail.component';

const routes: Routes = [
  { path: 'reservations',  component: ReservationsListComponent },
  { path: 'reservations/:id',  component: ReservationsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
