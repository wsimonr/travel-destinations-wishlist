import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WishList of Travel Destinations';
  time = new Observable(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(private translate: TranslateService) {
    console.log('***************** get translation');
    translate.getTranslation('es').subscribe(x => console.log('x: ' + JSON.stringify(x)));
    translate.setDefaultLang('en');
  }
}


