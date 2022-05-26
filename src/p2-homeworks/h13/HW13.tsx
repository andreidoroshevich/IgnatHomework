import React from 'react';
import s from "./style.module.scss"
import {Request} from "./Request";

export function HW13() {
    return (
        <>
            <h1 className={s.container}>
                Homework 13
            </h1>

            <Request/>
        </>
    )
}