import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import Background from '../../../assets/images/background.jpg'
import UserPhoto from '../../../assets/images/users.svg'
import {Box, Grid, Typography} from "@mui/material";

const ProfileInfo = (props) => {
    const {profile} = props
    console.log(profile)
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt={''} src={Background} width={'1000px'}/>
            </div>
            <Box>
                <Typography variant={'h2'}>
                    {profile.fullName}
                </Typography>
            </Box>
            <Grid container>

                <Box className={classes.descriptionBlock}>
                    {(profile.photos.large) ? <img alt={''} src={profile.photos.large}/> :
                        <img alt={''} src={UserPhoto} width={'200px'}/>}
                </Box>
                <Grid>
                    <Box>
                        Обо мне:
                        <span>
                         {profile.aboutMe}
                        </span>
                    </Box>
                    <Box>
                        Facebook:
                        {profile.contacts.facebook}
                    </Box>
                    <Box>
                        Github:
                        {profile.contacts.github}
                    </Box>
                    <Box>
                        Instagram:
                        {profile.contacts.instagram}
                    </Box>
                    <Box>
                        MainLink:
                        {profile.contacts.mainLink}
                    </Box>
                    <Box>
                        Twitter:
                        {profile.contacts.twitter}
                    </Box>
                    <Box>
                        Vk:
                        {profile.contacts.vk}
                    </Box>
                    <Box>
                        Website:
                        {profile.contacts.website}
                    </Box>
                    <Box>
                        Youtube:
                        {profile.contacts.youtube}
                    </Box>
                    {profile.lookingForAJob ? <Box>{profile.lookingForAJobDescription}</Box> : ''}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileInfo