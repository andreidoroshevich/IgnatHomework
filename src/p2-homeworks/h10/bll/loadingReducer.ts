export type StateType = {
    isLoading: boolean
}

const initState = {
isLoading: false
}

type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state:StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean) => {
    return {
        type: 'LOADING',
        isLoading,
    } as const
}