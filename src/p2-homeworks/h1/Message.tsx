import React from 'react'
import classes from './Message.module.css'

export type MessageTypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypeProps) {
    return (
        <div className={classes.message}>
            <div className={classes.photo}>
            <img src={props.avatar}/>
            </div>
            <div className={classes.content}>
                <div className={classes.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>

        </div>
    );

}

export default Message
