import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinyTravel} from '../models/destiny-travel.model';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-form-destiny-travel',
  templateUrl: './form-destiny-travel.component.html',
  styleUrls: ['./form-destiny-travel.component.css']
})
export class FormDestinyTravelComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinyTravel>;
  fg: FormGroup;
  minLength = 3;
  searchResults: string[];

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: ['', Validators.compose([
        Validators.required,
        FormDestinyTravelComponent.nameValidator,
        this.nameValidatorParameterizable(this.minLength)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('change the form: ', form);
    });
  }

  static nameValidator(control: FormControl): { [s: string]: boolean } {
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5) {
      return {invalidName: true};
    }
    return null;
  }

  ngOnInit() {
    const elemName = document.getElementById('name') as HTMLInputElement;
    fromEvent(elemName, 'input')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter(text => text.length > 2),
        debounceTime(120),
        distinctUntilChanged(),
        // ToFix
        switchMap(() => ajax('/assets/data.json'))
      ).subscribe(ajaxResponse => this.searchResults = ajaxResponse.response);
  }

  save(name: string, url: string): boolean {
    const d = new DestinyTravel(name, url);
    this.onItemAdded.emit(d);
    return false;
  }

  nameValidatorParameterizable(minLength: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLength) {
        return { minNameLength: true };
      }
      return null;
    };
  }

}
