import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['some', 'grey', 'red', 'yellow', 'lightBlue'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemeType) => dispatch(changeThemeC(theme))

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>

            <div className={s.radio}>
                <SuperRadio value={theme} options={themes} onChangeOption={onChangeCallback}/>
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
