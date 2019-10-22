import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSpyme]'
})
export class SpymeDirective implements OnInit, OnDestroy {

  static nextId = 0;
  log = (msg: string) => console.log(`Event #${++SpymeDirective.nextId} ${msg}`);
  ngOnInit() { this.log(`########******** onInit`); }
  ngOnDestroy() { this.log(`########******** onDestroy`); }

}
