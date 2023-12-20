import { NotificationElementLevel } from "./INotificationElement";

export enum RecipientType {
    USER = 'user',
    GROUP = 'group',
    ALL = 'all'
}

export interface IResponseNotification {
    id: number;
    level: NotificationElementLevel;
    title: string;
    description: string;
    time: Date;
    service: string;
    recipientType: RecipientType;
    recipientId: number;
}