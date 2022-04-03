import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                < img src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} width={'1000px'}/>
            </div>
            <div className={classes.descriptionBlock}>
                < img src={'https://www.xnview.com/img/app-xnsoft-360.png'} width={'100px'}/>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo