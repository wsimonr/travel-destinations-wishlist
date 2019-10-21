import {v4 as uuid} from 'uuid';

export class DestinyTravel {
  services: string[];
  selected: boolean;
  id = uuid();
  public votes = 0;
  constructor(public name: string, public imagenUrl: string) {
    this.services = ['pool', 'breakfast'];
  }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(s: boolean) {
    this.selected = s;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }
}
