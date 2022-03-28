import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import './pages/HW5.css';


function Header() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <span className={'slideMenu'} onClick={()=>{setMenuActive(!menuActive)}}>Navbar</span>
            <div className={menuActive ? 'navBar active' :'navBar'}>
                <div className={'navBarItem'}> <NavLink to={'/PreJunior'}>PreJunior</NavLink></div>
                <div className={'navBarItem'}><NavLink to={'/Junior'}>Junior</NavLink></div>
                <div className={'navBarItem'}><NavLink to={'/JuniorPlus'}>JuniorPlus</NavLink></div>
            </div>

        </>
    )
}

export default Header
