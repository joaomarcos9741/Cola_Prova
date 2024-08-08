import { api } from "../../api";

export interface IUser{
    nome?: string
    email?: string
    password?: string

}

export interface IResponseUser {
    name: string
    email: string
    create_at: string
    updated_at: string
    id: number

}

export interface IAuthenticated {
    user: IResponseUser
    token: {
        token: string
        expire_at: string

    }
}

class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUser) {
        return api.post<IResponseUser>('/login', data)
    }
}

export default new UserData()