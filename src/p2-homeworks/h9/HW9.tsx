import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";
import styles from "./styles.module.css"


function HW9() {
    return (
        <div className={styles.hw9}>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <div><AlternativeClock/></div>
            <hr/>
        </div>
    )
}

export default HW9
