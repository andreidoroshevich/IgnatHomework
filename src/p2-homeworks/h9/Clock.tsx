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

    let hours
    let minutes
    let seconds

    if (date.getHours() + 1 < 10) {
        hours = "0" + date.getHours() + 1
    } else {
        hours = date.getHours() + 1
    }

    if (date.getMinutes() < 10) {
        minutes = "0" + date.getMinutes()
    } else {
        minutes = date.getMinutes()
    }

    if (date.getSeconds() < 10) {
        seconds = "0" + date.getSeconds()
    } else {
        seconds = date.getSeconds()
    }

    const stringTime = hours + ":" + minutes + ":" + seconds


    let day
    let month
    let year = date.getFullYear()

    if (date.getDate() < 10) {
        day = "0" + date.getDate()
    } else {
        day = date.getDate()
    }

    if (date.getMonth() + 1 < 10) {
        month = "0" + date.getMonth()+1
    } else {
        month = date.getMonth()+1
    }

      const  stringDate = day + "." + month + "." + year


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
