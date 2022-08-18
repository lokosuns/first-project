import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.svg";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.usersPageCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i === 20) break;
    }

    return <>
        <div>
            {pages.map(page => <span
                className={props.currentPage === page && styles.selectedPage}
                onClick={(e) => {
                    props.onPageChanged(page)
                }}>{page}</span>
            )}
        </div>
        {
            props.users.map(user => <div key={user.id}>
              <span>
                  <div>
                      <NavLink to={`/profile/${user.id}`}>
                          {user.photos.small ? <img alt={''} src={user.photos.small} className={styles.userPhoto}/> :
                              <img alt={''} src={userPhoto} className={styles.userPhoto}/>}
                      </NavLink>
                  </div>
                  <div>
                      {user.followed ?
                          <button disabled={
                              props.followingInProgress
                                  .some(id => id === user.id)}
                                  onClick={() => {
                                      props.unfollow(user.id)
                                  }}>
                              Unfollow</button> :
                          <button disabled={
                              props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.follow(user.id)
                                  }}>
                              Follow</button>}
                  </div>
              </span>
                    <span>
                  <span>
                      <div>{user.name}</div>
                      <div>{user.status}</div>
                  </span>
                        {/*<span>*/}
                        {/*    <div>{user.location.country}</div>*/}
                        {/*    <div>{user.location.city}</div>*/}
                        {/*</span>*/}
              </span>
                </div>
            )
        }
    </>
}

export default Users;
