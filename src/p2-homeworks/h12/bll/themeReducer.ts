export type ThemeType = 'some' | 'grey' | 'red' | 'yellow' | 'lightBlue'

type InitStateType = {
    theme: ThemeType
}

const initState: InitStateType = {
    theme: 'some'
}

export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state, theme: action.theme
            }
        }
        default:
            return state
    }
}

type ActionsType = ChangeThemeCType

type ChangeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme: ThemeType) => {
    return {
        type: 'CHANGE_THEME',
        theme
    } as const
};