import React, {ChangeEvent, useState} from 'react';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsAPI} from "./api/RequestAPI";
import s from "./style.module.scss"

export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [requestData, setRequestData] = useState<string>('')

    const makeRequest = () => {
        requestsAPI.createPost(checked)
            .then(res => {
                setRequestData(res.data.info)
            })
            .catch(err => {
                console.warn(JSON.stringify(err))
                setRequestData(err.response.data.errorText)
            })
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div className={s.container}>
            <button className={s.button} onClick={makeRequest}>Make Request</button>
            <div className={s.requestBlock}><SuperCheckbox className={s.checkBox} checked={checked}
                                                           onChange={onChangeHandler}/>
                <div className={s.inputText}>Checked for success request</div>
            </div>
            <h1 className={s.requestData}>{requestData}</h1>
        </div>
    )
}