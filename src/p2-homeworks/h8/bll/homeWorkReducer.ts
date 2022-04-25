import {UserType} from "../HW8";

export type ActionType = {
    type: string,
    payload: number | string
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => b.name.toUpperCase() <= a.name.toUpperCase() ? -1 : 1)]
            }
            return state
        }
        case 'check': {
            return [...state.filter(a => a.age > action.payload)]
        }
        default:
            return state
    }
}






