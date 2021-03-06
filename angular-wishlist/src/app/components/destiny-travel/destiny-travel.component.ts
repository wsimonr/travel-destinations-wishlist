import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {DestinyTravel} from '../../models/destiny-travel.model';
import {AppState} from '../../app.module';
import {Store} from '@ngrx/store';
import {VoteDownAction, VoteUpAction} from '../../models/destinations-travel-state.model';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-destiny-travel',
  templateUrl: './destiny-travel.component.html',
  styleUrls: ['./destiny-travel.component.css'],
  animations: [
    trigger('isFavorite', [
      state('favoriteState', style({
        background: 'PaleTurquoise'
      })),
      state('noFavoriteState', style({
        backgroundColor: 'WhiteSmoke'
      })),
      transition('noFavoriteState => favoriteState', [
        animate('3s')
      ]),
      transition('favoriteState => noFavoriteState', [
        animate('1s')
      ]),
    ])
  ]
})
export class DestinyTravelComponent implements OnInit {
  @Input() destiny: DestinyTravel;
  // tslint:disable-next-line:no-input-rename
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClicked: EventEmitter<DestinyTravel>;

  constructor(private store: Store<AppState>) {
    this.onClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  go() {
    this.onClicked.emit(this.destiny);
    return false;
  }

  voteUp() {
    this.store.dispatch(new VoteUpAction(this.destiny));
    return false;
  }

  voteDown() {
    this.store.dispatch(new VoteDownAction(this.destiny));
    return false;
  }

}
