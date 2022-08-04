import React from "react";
import styles from "./users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://ava.info/wp-content/uploads/2016/12/AVA-Safety-Big-Data.png',
                    followed: false,
                    fullname: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://ava.info/wp-content/uploads/2016/12/AVA-Safety-Big-Data.png',
                    followed: true,
                    fullname: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://ava.info/wp-content/uploads/2016/12/AVA-Safety-Big-Data.png',
                    followed: true,
                    fullname: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(user => <div key={user.id}>
              <span>
                  <div>
                      <img src={user.photoUrl} className={styles.userPhoto}/>
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
                      <div>{user.fullname}</div>
                      <div>{user.status}</div>
                  </span>
                  <span>
                      <div>{user.location.country}</div>
                      <div>{user.location.city}</div>
                  </span>
              </span>
                </div>
            )
        }
    </div>
}

export default Users