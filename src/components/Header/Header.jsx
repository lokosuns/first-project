import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return (
        <header className={classes.header}>
            <img  alt={''}
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'}/>
        </header>
    )
}