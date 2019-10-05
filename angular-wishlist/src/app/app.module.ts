import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DestinyTravelComponent } from './destiny-travel/destiny-travel.component';
import { DestinyListComponent } from './destiny-list/destiny-list.component';
import { DestinyDetailComponent } from './destiny-detail/destiny-detail.component';

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
    DestinyDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
