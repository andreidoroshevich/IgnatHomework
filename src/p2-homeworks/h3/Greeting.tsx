import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error:"" // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}
                   onKeyPress={(e) =>{
                       if (e.key === 'Enter') {
                           addUser()
                       }
                   }}/>
            <button onClick={addUser}>add</button>
            <span className={'counter'}>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
