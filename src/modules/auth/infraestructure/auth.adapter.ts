import { IUser, UserRoles } from "@modules/user/domain/user.interface"
import { ImageAdapter } from "@utils/adapters.utils"


export interface IRespDataUser {
    birth_date: string
    //categories: string[]
    country: string
    document_number: string
    document_type: string
    email: string
    full_name: string
    gender: string
    image: string
    last_name: string
    name: string
    phone: string
    roles: UserRoles[]
    slug: string
    status: string
    terms_and_conditions: string
}

export const AuthAdapter = (data: IRespDataUser) : IUser => {
    return {
        id: 0, // falta el id que mande la api
        birthDate: data.birth_date,
        //categories: string[]
        country: data.country,
        documentNumber: data.document_number,
        documentType: data.document_type,
        email: data.email,
        fullName: data.full_name,
        gender: data.gender,
        profileImage: ImageAdapter(data.image),
        lastName: data.last_name,
        name: data.name,
        phone: data.phone,
        roles: data.roles,
        slug: data.slug,
        status: data.status,
    }
}