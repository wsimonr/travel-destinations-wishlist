import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DestinyTravelComponent } from './destiny-travel/destiny-travel.component';
import { DestinyListComponent } from './destiny-list/destiny-list.component';
import { DestinyDetailComponent } from './destiny-detail/destiny-detail.component';
import { FormDestinyTravelComponent } from './form-destiny-travel/form-destiny-travel.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: DestinyListComponent},
  {path:'destiny', component: DestinyDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DestinyTravelComponent,
    DestinyListComponent,
    DestinyDetailComponent,
    FormDestinyTravelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
