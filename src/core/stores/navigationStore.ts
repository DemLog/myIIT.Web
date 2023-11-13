import {observable, action, makeAutoObservable} from 'mobx';

import {IServiceLink} from "@models/service/IServiceLink";

import dashboardIcon from "@assets/images/icons/dashboard_fill.png";
import newsIcon from "@assets/images/icons/news_fill.png";
import scheduleIcon from "@assets/images/icons/schedule_fill.png";
import eventNoteIcon from "@assets/images/icons/event_note_fill.png";
import mailIcon from "@assets/images/icons/mail_fill.png";

import test1Icon from "@assets/images/icons/test/accessible_FILL0_wght400_GRAD0_opsz48 1.png";
import test2Icon from "@assets/images/icons/test/account_circle_FILL0_wght400_GRAD0_opsz48 1.png";
import test3Icon from "@assets/images/icons/test/group_FILL0_wght400_GRAD0_opsz48 1.png";
import test4Icon from "@assets/images/icons/test/joystick_FILL0_wght400_GRAD0_opsz48 1.png";
import test5Icon from "@assets/images/icons/test/library_music_FILL1_wght400_GRAD0_opsz48 1.png";
import test6Icon from "@assets/images/icons/test/school_FILL0_wght400_GRAD0_opsz48 1.png";
import test7Icon from "@assets/images/icons/test/settings_FILL0_wght400_GRAD0_opsz48 1.png";
import test8Icon from "@assets/images/icons/test/sports_soccer_FILL0_wght400_GRAD0_opsz48 1.png";

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
        icon: newsIcon
    },
    {
        label: "Расписание",
        url: "timetable",
        icon: scheduleIcon
    },
    {
        label: "Ивенты",
        url: "events",
        icon: eventNoteIcon
    },
    {
        label: "Сообщения",
        url: "messages",
        icon: mailIcon
    },
    {
        label: "test",
        url: "test",
        icon: test1Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.5823665893271461) 0%, rgba(0,255,26,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test2Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(255,0,0,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test3Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(255,0,199,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test4Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(0,255,194,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test5Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(255,214,0,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test6Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(5,0,255,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test7Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(0,194,255,0.58) 100%)"
    },
    {
        label: "test",
        url: "test",
        icon: test8Icon,
        bgColor: "linear-gradient(180deg, rgba(90,132,241,0.58) 0%, rgba(255,0,122,0.58) 100%)"
    },

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