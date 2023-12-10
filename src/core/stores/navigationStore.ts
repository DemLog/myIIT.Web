import {observable, action, makeAutoObservable} from 'mobx';

import {IServiceLink} from "@models/service/IServiceLink";

export interface INavigationStore {
    services: IServiceLink[];
    active: number;
    namePage: string;
}

export const dataServiceLinks: IServiceLink[] = [
    {
        label: "Дашборд",
        url: "dashboard",
    },
    {
        label: "Новости",
        url: "news",
    },
    {
        label: "Расписание",
        url: "timetable",
    },
    {
        label: "Ивенты",
        url: "events",
    },
    {
        label: "Сообщения",
        url: "messages",
    },
    {
        label: "Профиль",
        url: "profile",
    }

];

export class NavigationStore implements INavigationStore {

    services: IServiceLink[];
    active: number;
    namePage: string;

    constructor() {
        this.active = 0;
        this.services = dataServiceLinks;
        this.namePage = "Главный экран";
        makeAutoObservable(this);
    }

    getActive = (): number => (
        this.active
    );

    getLinksMenu = (): IServiceLink[] => (
        this.services
    );

    setActive = (index: number) => {
        this.active = index;
    };

    getLinkFromIndex = (index: number) => (
        this.services.find((value, idx) => idx === index)
    );

    handleClickLink = (index: number, handleNavigation: () => void): void => {
        this.active = index;
        handleNavigation();
    };

    getNamePage = (): string => (
        this.namePage
    );

    setNamePage = (name: string) => {
        this.namePage = name;
    };
}