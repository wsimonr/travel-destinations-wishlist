import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, Injectable, InjectionToken, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders, HttpRequest} from '@angular/common/http';
import {ActionReducerMap, Store, StoreModule as NgRxStoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './app.component';
import {DestinyTravelComponent} from './components/destiny-travel/destiny-travel.component';
import {DestinyListComponent} from './components/destiny-list/destiny-list.component';
import {DestinyDetailComponent} from './components/destiny-detail/destiny-detail.component';
import {FormDestinyTravelComponent} from './components/form-destiny-travel/form-destiny-travel.component';
import {
  DestinationsTravelEffects,
  DestinationsTravelState,
  initializeDestinationsTravelState, InitMyDataAction,
  reducerDestinationsTravel
} from './models/destinations-travel-state.model';
import {LoginComponent} from './components/login/login/login.component';
import {ProtectedComponent} from './components/protected/protected/protected.component';
import {UserLoggedInGuard} from './guards/user-logged-in/user-logged-in.guard';
import {AuthService} from './services/auth.service';
import {FlightsComponent} from './components/flights/flights-component/flights-component';
import {FlightsMainComponent} from './components/flights/flights-main-component/flights-main-component';
import {FlightsMoreInfoComponent} from './components/flights/flights-more-info-component/flights-more-info-component';
import {FlightsDetailComponent} from './components/flights/flights-detail-component/flights-detail-component';
import { ReservationsModule } from './reservations/reservations.module';

// init routing
export const childrenRoutesFlights: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: FlightsMainComponent},
  {path: 'mas-info', component: FlightsMoreInfoComponent},
  {path: ':id', component: FlightsDetailComponent},
];

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DestinyListComponent},
  {path: 'destiny/:id', component: DestinyDetailComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [UserLoggedInGuard]
  },
  {
    path: 'flights',
    component: FlightsComponent,
    canActivate: [UserLoggedInGuard],
    children: childrenRoutesFlights
  }
];
// end init routing

// app config
export interface AppConfig {
  apiEndpoint: string;
}
const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'http://localhost:3000'
};
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
// fin app config

// app init
export function init_app(appLoadService: AppLoadService): () => Promise<any>  {
  return () => appLoadService.intializeDestinosViajesState();
}

@Injectable()
class AppLoadService {
  constructor(private store: Store<AppState>, private http: HttpClient) { }
  async intializeDestinosViajesState(): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({'X-API-TOKEN': 'token-security'});
    const req = new HttpRequest('GET', APP_CONFIG_VALUE.apiEndpoint + '/my', { headers: headers });
    const response: any = await this.http.request(req).toPromise();
    this.store.dispatch(new InitMyDataAction(response.body));
  }
}
// fin app init

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
    LoginComponent,
    ProtectedComponent,
    FlightsComponent,
    FlightsMainComponent,
    FlightsMoreInfoComponent,
    FlightsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    EffectsModule.forRoot([DestinationsTravelEffects]),
    StoreDevtoolsModule.instrument(),
    ReservationsModule
  ],
  providers: [
    AuthService,
    UserLoggedInGuard,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
