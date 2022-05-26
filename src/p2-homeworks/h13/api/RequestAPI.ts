import axios from 'axios'

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {}
    yourQuery: {}
}

export const requestsAPI = {
    createPost: (success: boolean) => {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}