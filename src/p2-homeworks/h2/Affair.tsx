import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair:  AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix

    return (
        <div className={classes.main}>
            <div className={classes.name}>{props.affair.name}</div>
            <div className={classes.priority}>{props.affair.priority}</div>
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
