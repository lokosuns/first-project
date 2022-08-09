import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt={''} src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} width={'1000px'}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img alt={''} src={props.profile.photos.large} />
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo