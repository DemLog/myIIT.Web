export enum NotificationElementLevel {
    INFO,
    WARNING,
    ERROR,
    PRIMARY,
    SECONDARY
}

export interface INotificationElement {
    title: string;
    description?: string;
    time: Date;
    avatar?: string;
    level: NotificationElementLevel;
    actionName?: string;
    service?: string;
}