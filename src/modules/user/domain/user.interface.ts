export interface IUser {
    id: number
    birthDate: string
    country: string
    documentNumber: string
    documentType: string
    email: string
    fullName: string
    gender: string // puede typarse
    profileImage: string
    lastName: string
    name: string
    phone: string
    roles: string[] // puede tiparse
    slug: string
    status: string // puede tiparse
}

export interface IUserLittle {
    id: number
    fullName: string
    occupation: string
    slug: string
    totalFolowings: number
    profileImage: string
}

export type UserRoles = 'Publicador' | 'Suscriptor' | 'Anunciante'