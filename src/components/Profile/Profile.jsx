import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.postData}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}