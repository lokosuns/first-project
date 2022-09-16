import React, {memo} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import ReduxForm from "redux-form/lib/reduxForm";
import Field from "redux-form/lib/Field";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

export const MyPosts = memo(props => {

    let postElements = props.postData.map(post =>
        <Post
            message={post.message}
            likesCount={post.likesCount}
            key={post.id}
        />);

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>)
});

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Enter new text'}
                    name={'newPostText'}
                    component={TextArea}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = ReduxForm({
    form: 'postsAddPostForm'
})(AddPostForm)