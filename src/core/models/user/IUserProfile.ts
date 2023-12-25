import {IUserRole} from "@models/user/IUserRole";
import { ProfileType } from "./ProfileType";
import { ResponseProfileInfoDto } from "./response-profile-info.dto";

export interface IUserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
    patronymic: string;
    avatar: string;
    profileType: ProfileType;
    profileInfo: ResponseProfileInfoDto;
    roles: IUserRole[];
}