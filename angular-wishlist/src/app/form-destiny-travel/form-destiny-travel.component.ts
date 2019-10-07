import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinyTravel } from '../models/destiny-travel.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-destiny-travel',
  templateUrl: './form-destiny-travel.component.html',
  styleUrls: ['./form-destiny-travel.component.css']
})
export class FormDestinyTravelComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinyTravel>;
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      name: ['', Validators.required],
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

}
