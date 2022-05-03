import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import style from "./hw10.module.css"

function HW10() {
    const isLoading = useSelector<AppStoreType>(state=>state.isLoading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        window.setInterval(() => {
            dispatch(loadingAC(false))
        }, 4000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={style.preloader}>
                    <img className={style.img} src={'http://www.vintage-hostel.com/wp-content/uploads/2017/01/loading5.gif'}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton className={style.button} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
