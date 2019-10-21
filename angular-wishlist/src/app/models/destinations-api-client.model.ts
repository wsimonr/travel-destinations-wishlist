import {forwardRef, Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {DestinyTravel} from './destiny-travel.model';
import {Store} from '@ngrx/store';
import {APP_CONFIG, AppConfig, AppState, db} from '../app.module';
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
      {headers});
    this.http.request(req).subscribe((data: HttpResponse<{}>) => {
      if (data.status === 200) {
        this.store.dispatch(new NewDestinyAction(d));
        const myDb = db;
        myDb.destinations.add(d);
        console.log('all db destinations!');
        myDb.destinations.toArray().then(destinations => console.log(destinations));
      }
    });
  }

  // tslint:disable-next-line:ban-types
  getById(id: String): DestinyTravel {
    return this.destinations.filter(d => d.id.toString() === id)[0];
  }

  getAll(): DestinyTravel[] {
    return this.destinations;
  }

  select(d: DestinyTravel) {
    this.store.dispatch(new SelectedFavoriteAction((d)));
  }
}
