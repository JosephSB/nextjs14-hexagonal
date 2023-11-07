import { IUserLittle } from "@modules/user/domain/user.interface";

export interface UserRepository {
    getRecomendedUsers() : Promise<IUserLittle[]>
}