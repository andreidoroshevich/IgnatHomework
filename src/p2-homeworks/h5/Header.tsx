import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import './pages/HW5.css';


function Header() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>



            <div className={'slideMenu'} onClick={()=>{setMenuActive(!menuActive)}}>
                <div></div>
            </div>
            <div className={menuActive ? 'navBar active' :'navBar'}>
                <div><NavLink className={({isActive})=> isActive ? 'active' : 'navBarItem'} to={'/PreJunior'}>PreJunior</NavLink></div>
                <div><NavLink className={({isActive})=> isActive ? 'active' : 'navBarItem'} to={'/Junior'}>Junior</NavLink></div>
                <div><NavLink className={({isActive})=> isActive ? 'active' : 'navBarItem'} to={'/JuniorPlus'}>JuniorPlus</NavLink></div>
            </div>

        </>
    )
}

export default Header
