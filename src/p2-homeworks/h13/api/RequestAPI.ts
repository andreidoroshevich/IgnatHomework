import axios from 'axios'

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {}
    yourQuery: {}
}

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/",
})

export const requestsAPI = {
    createPost: (success: boolean) => {
        return instance.post<ResponseType>('auth/test', {success})
    }
}