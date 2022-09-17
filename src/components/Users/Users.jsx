import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {
    const {users, followingInProgress, follow, unfollow, ...rest} = props

    return <>
        <Paginator {...rest}/>
        <div>
            {
                users.map((user) => <User
                    key={user.id}
                    user={user}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
                />)
            }
        </div>
    </>
}

export default Users;
