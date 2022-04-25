import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h9/styles.module.css'


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let stringTime
    if (date.getHours() < 10 && date.getMinutes() < 10 && date.getSeconds()) {
        stringTime = "0" + date.getHours() + ":0" + date.getMinutes() + ":0" + date.getSeconds()
    } else if (date.getHours() < 10) {
        stringTime = "0" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    } else if (date.getMinutes() < 10) {
        stringTime = date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds()
    } else if (date.getSeconds() < 10) {
        stringTime = date.getHours() + ":" + date.getMinutes() + ":0" + date.getSeconds()
    } else {
        stringTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }


    let stringDate
    if (date.getMonth() < 10) {
        stringDate = date.getDate() + ".0" + date.getMonth() + "." + date.getFullYear()
    } else if (date.getDate() < 10) {
        stringDate = "0" + date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
    } else {
        stringDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
    }


    return (
        <div>
            <div className={s.timer}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}
            <div className={s.buttoncontainer}>
                <SuperButton className={`${s.button} ${s.start}`} onClick={start}>start</SuperButton>
                <SuperButton className={`${s.button} ${s.stop}`} onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
