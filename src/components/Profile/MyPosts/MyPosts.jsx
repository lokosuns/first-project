import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi!', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
    ]

    let postElements = postData.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts