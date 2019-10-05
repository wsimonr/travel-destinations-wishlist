export class DestinyTravel {
    private selected: boolean;
    public services: string[];

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
