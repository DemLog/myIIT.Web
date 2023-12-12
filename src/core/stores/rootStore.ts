import {NavigationStore} from "@stores/navigationStore";
import {UserStore} from "@stores/userStore";

export class RootStore {
    navigationStore: NavigationStore;
    userStore: UserStore;

    constructor() {
        this.navigationStore = new NavigationStore();
        this.userStore = new UserStore();
    }
}