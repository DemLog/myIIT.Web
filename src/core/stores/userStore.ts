import {IServiceLink} from "@models/service/IServiceLink";
import {makeAutoObservable} from "mobx";
import {dataServiceLinks, INavigationStore} from "@stores/navigationStore";
import {IUserLogin} from "@models/user/IUserLogin";
import {IUserProfile} from "@models/user/IUserProfile";

export interface IUserStore {
    session: IUserLogin | null;
    user: IUserProfile | null;
}

export class UserStore implements IUserStore {

    session: IUserLogin | null;
    user: IUserProfile | null;

    constructor() {
        this.session = null;
        this.user = null;
        makeAutoObservable(this);
    }

    getSession = () => {
        return this.session;
    };

    setSession = (session: IUserLogin) => {
        this.session = session;
    };

    getUser = () => {
        return this.user;
    };

    setUser = (user: IUserProfile) => {
        this.user = user;
    };
}