import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const SelectedLink = () => {
    return (
        navData => navData.isActive ? classes.active : classes.item
    );
}

const Navbar = () => {

    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to={'/profile'} className={SelectedLink()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'} className={SelectedLink()}>Message</NavLink>
            </div>
            <div>
                <NavLink to={'/news'} className={SelectedLink()}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'} className={SelectedLink()}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings'} className={SelectedLink()}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar