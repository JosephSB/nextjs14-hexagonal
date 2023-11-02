import { AuthRepository } from "../domain/auth.repository";

export const AuthLogout = async (repository: AuthRepository) => {
    try {
        const resp = await repository.Logout();
        return true
    } catch (error) {
        return false
    }
}