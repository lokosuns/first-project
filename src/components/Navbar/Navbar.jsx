import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";

const SelectedLink = () => {
    return (
        navData => navData.isActive ? classes.active : classes.item
    );
}

const SidebarFriend = (props) => {
    return (
        <div>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'}
                alt={''} width={40}/>
            <p>{props.name}</p>
        </div>
    )
}

const MySidebarFriend = (props) => {
    let elementSidebarFriend = props.friendsData.map(el => <SidebarFriend name={el.name} key={el.id}/>)
    return (
        <div>
            {elementSidebarFriend}
        </div>
    )
}

export const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to={'/profile/25432'} className={SelectedLink()}>Profile</NavLink>
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
            <div>
                <NavLink to={'/users'} className={SelectedLink()}>Users</NavLink>
            </div>

            <Box mt={2} backgroundColor={'white'} flexWrap={"nowrap"}>
                <div>
                    <p>Friends</p>
                    <MySidebarFriend friendsData={props.friendsData}/>
                </div>
            </Box>
        </nav>
    )
}

