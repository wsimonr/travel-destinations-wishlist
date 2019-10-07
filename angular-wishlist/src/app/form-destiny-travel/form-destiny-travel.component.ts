import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinyTravel } from '../models/destiny-travel.model';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form-destiny-travel',
  templateUrl: './form-destiny-travel.component.html',
  styleUrls: ['./form-destiny-travel.component.css']
})
export class FormDestinyTravelComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinyTravel>;
  fg: FormGroup;
  minLength = 3;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: ['', Validators.compose([
        Validators.required,
        this.nameValidator,
        this.nameValidatorParameterizable(this.minLength)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('change the form: ', form);
    });
  }

  ngOnInit() {
  }

  save(name: string, url: string): boolean {
    const d = new DestinyTravel(name, url);
    this.onItemAdded.emit(d);
    return false;
  }

  //ToDo: Use the ng LengthValidator (This is only an expample of personal validator)
  nameValidator(control: FormControl): { [s: string]: boolean } {
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5) {
      return { invalidName: true };
    }
    return null;
  }

  nameValidatorParameterizable(minLength: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLength) {
        return { minNameLength: true };
      }
      return null;
    }
  }

}
