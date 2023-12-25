import { makeAutoObservable } from "mobx";
import { IUserLogin } from "@models/user/IUserLogin";
import { IUserProfile } from "@models/user/IUserProfile";

import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Socket } from 'socket.io-client';

import Cookies from "js-cookie";
import { apiServiceWs } from "@core/services/apiService";
import { IResponseNotification } from "@models/notification/IResponseNotification";
import { toast } from "react-toastify";

export interface IUserStore {
    session: IUserLogin | null;
    user: IUserProfile | null;
    ws: Socket<DefaultEventsMap, DefaultEventsMap> | null;
    notificationCount: number;
}

export class UserStore implements IUserStore {

    session: IUserLogin | null;
    user: IUserProfile | null;
    ws: Socket<DefaultEventsMap, DefaultEventsMap>;
    notificationCount: number;

    constructor() {
        const userIdString = Cookies.get("userId");
        const token = Cookies.get("token") as string | undefined;
        const moodleConsentString = Cookies.get("moodleConsent");
        this.notificationCount = 0;

        const userId = userIdString ? Number(userIdString) : undefined;
        const moodleConsent = moodleConsentString === "true";

        if (userId !== undefined && token !== undefined && moodleConsent !== undefined) {
            const _session: IUserLogin = {
                userId,
                token,
                moodleConsent,
            };

            this.session = _session;
            this.ws = apiServiceWs({ token: _session.token });
            this.ws.emit("notification.subscribe", '');
            this.ws.on('notifications', (notification: IResponseNotification) => this.handleNotification(notification));
        } else {
            this.session = null;
            this.ws = null;
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
        this.ws = apiServiceWs({ token: session.token });
        this.ws.emit("notification.subscribe", '');
        this.ws.on('notifications', (notification: IResponseNotification) => this.handleNotification(notification));
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

    handleNotification = (notification: IResponseNotification) => {
        this.notificationCount += 1;
        console.log(notification);
        toast.info(notification.title);
    };
}