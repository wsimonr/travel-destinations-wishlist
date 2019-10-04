export class DestinyTravel {
    private selected: boolean;
    constructor(public name: string, public u: string) { }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
}
