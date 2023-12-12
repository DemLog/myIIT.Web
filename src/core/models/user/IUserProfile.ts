import {IUserRole} from "@models/user/IUserRole";

export interface IUserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
    status: string;
    studyGroup: string;
    studyDirection: string;
    profile: string;
    patronymic: string;
    avatar: string;
    roles: IUserRole[];
}