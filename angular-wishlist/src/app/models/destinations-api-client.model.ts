import {forwardRef, Inject, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {DestinyTravel} from './destiny-travel.model';
import {Store} from '@ngrx/store';
import {APP_CONFIG, AppConfig, AppState} from '../app.module';
import {NewDestinyAction, SelectedFavoriteAction} from './destinations-travel-state.model';

@Injectable()
export class DestinationsApiClient {
  destinations: DestinyTravel[] = [];

  constructor(
    private store: Store<AppState>,
    @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig,
    private http: HttpClient) {

  }

  add(d: DestinyTravel) {
    const headers: HttpHeaders = new HttpHeaders({'X-API-TOKEN': 'token-security'});
    const req = new HttpRequest(
      'POST',
      this.config.apiEndpoint + '/my',
      {new: d.name},
      {headers: headers});
    this.http.request(req).subscribe((data: HttpResponse<{}>) => {
      if (data.status === 200) {
        this.store.dispatch(new NewDestinyAction(d));
      }
    });
  }

  getAll(): DestinyTravel[] {
    return this.destinations;
  }

  select(d: DestinyTravel) {
    this.store.dispatch(new SelectedFavoriteAction((d)));
  }
}
