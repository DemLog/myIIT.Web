import { makeAutoObservable } from "mobx";
import { IUserLogin } from "@models/user/IUserLogin";
import { IUserProfile } from "@models/user/IUserProfile";

import Cookies from "js-cookie";

export interface IUserStore {
    session: IUserLogin | null;
    user: IUserProfile | null;
}

export class UserStore implements IUserStore {

    session: IUserLogin | null;
    user: IUserProfile | null;

    constructor() {
        const userIdString = Cookies.get("userId");
        const token = Cookies.get("token") as string | undefined;
        const moodleConsentString = Cookies.get("moodleConsent");

        const userId = userIdString ? Number(userIdString) : undefined;
        const moodleConsent = moodleConsentString === "true";

        if (userId !== undefined && token !== undefined && moodleConsent !== undefined) {
            const _session: IUserLogin = {
                userId,
                token,
                moodleConsent,
            };

            this.session = _session;
        } else {
            this.session = null;
        }

        this.user = null;
        makeAutoObservable(this);
    }

    getSession = () => {
        return this.session;
    };

    setSession = (session: IUserLogin) => {
        this.session = session;
        Cookies.set("token", session.token, { expires: 365 });
        Cookies.set("userId", session.userId.toString(), { expires: 365 });
        Cookies.set("moodleConsent", session.moodleConsent.toString(), { expires: 365 });
    };

    deleteSession = () => {
        Cookies.remove("token");
        Cookies.remove("userId");
        Cookies.remove("moodleConsent");
    };

    getUser = () => {
        return this.user;
    };

    setUser = (user: IUserProfile) => {
        this.user = user;
    };
}