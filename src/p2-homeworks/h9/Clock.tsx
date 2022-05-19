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

    const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

    const hours = get2DigitsString(date.getHours())
    const minutes = get2DigitsString(date.getMinutes())
    const seconds = get2DigitsString(date.getSeconds())
    const stringTime = hours + ":" + minutes + ":" + seconds


    const day = get2DigitsString(date.getDate())
    const month = get2DigitsString(date.getMonth()+1)
    const year = date.getFullYear()
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
            <div className={s.buttonContainer}>
                <SuperButton className={`${s.button} ${s.start}`} onClick={start}>start</SuperButton>
                <SuperButton className={`${s.button} ${s.stop}`} onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
