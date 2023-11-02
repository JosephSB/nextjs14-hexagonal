import { AuthRepository } from "../domain/auth.repository";

export const AuthGetData = async (repository: AuthRepository) => {
    try {
        const resp = await repository.getData();

        if(!resp) throw new Error("User dont exist")

        return resp
    } catch (error) {
        return null
    }
}