export class DestinyTravel {
  public services: string[];
  private selected: boolean;

  constructor(public name: string, public u: string) {
    this.services = ['pool', 'breakfast'];
  }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(s: boolean) {
    this.selected = s;
  }
}
