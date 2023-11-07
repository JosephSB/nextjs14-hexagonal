import { CreateHeader } from "@utils/http.utils";
import { UserRepository } from "../domain/user.repository";
import axios from "axios";
import { config } from "@config/index";
import { CustomError } from "@modules/error/custom.error";
import { RecomendedUsersAdapter } from "./user.adapter";

export const getRecomendedUsers = async () => {
    try {
        const header = CreateHeader();

        const resp = await axios.get(`${config.API_URL}/api/portal/recommendedFeaturedUsers`, {headers: header.headers, params: {size: 5}});
        if (resp.status !== 200) throw CustomError.custom("Error getting recomended users")

        return resp.data.data.map( (item: any) => RecomendedUsersAdapter(item) )
    } catch (error) {
        if(error instanceof CustomError) throw error
        throw CustomError.internalServer();
    }
}

export function UserRepositoryImpl(): UserRepository {
    return {
        getRecomendedUsers
    }
}