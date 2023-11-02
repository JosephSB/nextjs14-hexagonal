import { AuthRepository } from "../domain/auth.repository"
import axios from "axios";
import { config } from "@config/index";
import { CreateHeader } from "@utils/http.utils";
import { AuthAdapter } from "./auth.adapter";
import { CustomError } from "@modules/error/custom.error";

export const Logout = async () => {
    try {
        const header = CreateHeader();
        const resp = await axios.post(`${config.API_URL}/api/auth/logout`,{}, header);
        console.log(resp)
    } catch (error) {
        if(error instanceof CustomError) throw error
        throw CustomError.internalServer();
    }
}

export const getData = async () => {
    try {
        const header = CreateHeader();

        const resp = await axios.post(`${config.API_URL}/api/auth/me`,{},header);
        if (resp.status !== 200) throw CustomError.custom("Error getting user data")

        return AuthAdapter(resp.data.data)
    } catch (error) {
        if(error instanceof CustomError) throw error
        throw CustomError.internalServer();
    }
}

export function AuthRepositoryImpl(): AuthRepository {
    return {
        getData, Logout
    }
}