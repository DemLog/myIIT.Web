export enum NotificationElementLevel {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
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