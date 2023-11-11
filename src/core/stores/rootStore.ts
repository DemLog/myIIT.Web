import {NavigationStore} from "@stores/navigationStore";

export class RootStore {
    navigationStore: NavigationStore;

    constructor() {
        this.navigationStore = new NavigationStore();
    }
}