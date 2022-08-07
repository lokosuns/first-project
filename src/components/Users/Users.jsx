import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.svg";
import React from "react";


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
                      <img src={user.photos.small != null ? user.photos.small : userPhoto}
                           className={styles.userPhoto}/>
                  </div>
                  <div>
                      {user.followed ?
                          <button onClick={() => {
                              props.unfollow(user.id)
                          }}>Unfollow</button> :
                          <button onClick={() => {
                              props.follow(user.id)
                          }}>Follow</button>}

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

export default Users