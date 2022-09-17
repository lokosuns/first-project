import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.svg";
import React from "react";
import {NavLink} from "react-router-dom";


const User = (props) => {
    const {user: {id, photos, followed, name, status}, followingInProgress, follow, unfollow} = props

    return <>
            <span>
                  <div>
                      <NavLink to={`/profile/${id}`}>
                          {photos.small ? <img alt={''} src={photos.small} className={styles.userPhoto}/> :
                              <img alt={''} src={userPhoto} className={styles.userPhoto}/>}
                      </NavLink>
                  </div>
                  <div>
                      {followed ?
                          <button disabled={
                              followingInProgress
                                  .some(new_id => new_id === id)}
                                  onClick={() => {
                                      unfollow(id)
                                  }}>
                              Unfollow</button> :
                          <button disabled={
                              followingInProgress.some(new_id => new_id === id)}
                                  onClick={() => {
                                      follow(id)
                                  }}>
                              Follow</button>}
                  </div>
            </span>
        <span>
                  <span>
                      <div>{name}</div>
                      <div>{status}</div>
                  </span>
            {/*<span>*/}
            {/*    <div>{user.location.country}</div>*/}
            {/*    <div>{user.location.city}</div>*/}
            {/*</span>*/}
            </span>
    </>
}

export default User;
