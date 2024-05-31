export interface IUser {
    id: number
    fullname: string
    email: string
    phone: string
    profile: IProfile

}



export interface IProfile {
    avatar?: string
    user: IUser
}