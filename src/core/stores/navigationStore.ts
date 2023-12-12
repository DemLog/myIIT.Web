import { makeAutoObservable } from 'mobx';

import { IServiceLink } from "@models/service/IServiceLink";

import dashboardIcon from "@assets/images/icons/w400/dashboard_fill.svg";
import newspaperIcon from "@assets/images/icons/w400/newspaper_fill.svg";
import scheduleIcon from "@assets/images/icons/w400/schedule_fill.svg";
import calendarIcon from "@assets/images/icons/w400/calendar_clock_fill.svg";
import mailIcon from "@assets/images/icons/w400/mail_fill.svg";
import { useNavigate } from 'react-router-dom';

export interface INavigationStore {
    services: IServiceLink[];
    active: number;
    namePage: string;
}

export const dataServiceLinks: IServiceLink[] = [
    {
        label: "Дашборд",
        url: "dashboard",
        icon: dashboardIcon
    },
    {
        label: "Новости",
        url: "news",
        icon: newspaperIcon
    },
    {
        label: "Расписание",
        url: "timetable",
        icon: scheduleIcon
    },
    {
        label: "Ивенты",
        url: "events",
        icon: calendarIcon
    },
    {
        label: "Сообщения",
        url: "messages",
        icon: mailIcon
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