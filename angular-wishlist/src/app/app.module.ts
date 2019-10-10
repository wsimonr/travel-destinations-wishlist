import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActionReducerMap, StoreModule as NgRxStoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './app.component';
import {DestinyTravelComponent} from './destiny-travel/destiny-travel.component';
import {DestinyListComponent} from './destiny-list/destiny-list.component';
import {DestinyDetailComponent} from './destiny-detail/destiny-detail.component';
import {DestinationsApiClient} from './models/destinations-api-client.model';
import {FormDestinyTravelComponent} from './form-destiny-travel/form-destiny-travel.component';
import {
  DestinationsTravelEffects,
  DestinationsTravelState,
  initializeDestinationsTravelState,
  reducerDestinationsTravel
} from './models/destinations-travel-state.model';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DestinyListComponent},
  {path: 'destiny', component: DestinyDetailComponent}
];

// redux init
export interface AppState {
  destinations: DestinationsTravelState;
}

const reducers: ActionReducerMap<AppState> = {
  destinations: reducerDestinationsTravel
};

const reducersInitialState = {
  destinations: initializeDestinationsTravelState()
};

// redux fin init

@NgModule({
  declarations: [
    AppComponent,
    DestinyTravelComponent,
    DestinyListComponent,
    DestinyDetailComponent,
    FormDestinyTravelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    EffectsModule.forRoot([DestinationsTravelEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    DestinationsApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
