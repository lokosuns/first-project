import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

export const MyPosts = (props) => {

    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>

    )
}
export default MyPosts
