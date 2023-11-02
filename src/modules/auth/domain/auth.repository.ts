import { IUser } from "@modules/user/domain/user.interface";

export interface AuthRepository {
    Logout() : Promise<void>
    getData() : Promise<IUser>
}