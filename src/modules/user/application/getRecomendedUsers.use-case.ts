import { UserRepository } from "../domain/user.repository";

export const getUsersRecomended = async (repository: UserRepository) => {
    try {
        const resp = await repository.getRecomendedUsers();

        return resp
    } catch (error) {
        return []
    }
}