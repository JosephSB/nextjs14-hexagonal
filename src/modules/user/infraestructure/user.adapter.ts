import { IUserLittle } from "../domain/user.interface"

export interface IRespDataRecomendedUsers {
    id: number
    name: string
    occupation: string
    slug: string
    totalFolowings: number
    urlPhoto: string
}

export const RecomendedUsersAdapter = (data: IRespDataRecomendedUsers) : IUserLittle => {
    return {
        id: data.id,
        fullName: data.name,
        occupation: data.occupation,
        slug: data.slug,
        totalFolowings: data.totalFolowings,
        profileImage: data.urlPhoto
    }
}